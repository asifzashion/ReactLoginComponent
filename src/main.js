import $ from 'jquery';

export function getOAuthCode() {
    const globalVar = window.globalVar; // Access the global variable

    if (!globalVar || !globalVar.OAUTH) {
        console.error('globalVar or globalVar.OAUTH is not defined');
        return;
    }

    var OAUThURL = globalVar.OAUTH.OAUTH_URL;
    OAUThURL += globalVar.OAUTH.OAUTH_authorize;
    OAUThURL += "?response_type=" + globalVar.OAUTH.response_type;
    OAUThURL += "&client_id=" + globalVar.OAUTH.client_id;
    OAUThURL += "&scope=" + globalVar.OAUTH.scope;
    OAUThURL += "&redirect_uri=" + globalVar.OAUTH.redirect_uri;

    window.location.href = OAUThURL;
}

export function getToken(authParams) {
    const globalVar = window.globalVar; // Access the global variable

    if (!globalVar || !globalVar.OAUTH) {
        console.error('globalVar or globalVar.OAUTH is not defined');
        return;
    }

    var requestHeader = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(globalVar.OAUTH.client_id + ":" + globalVar.OAUTH.client_sectret)
    }

    var requestData = {
        code: "",
        grant_type: "",
        redirect_uri: "",
        scope: ""
    }

    requestData.code = authParams.get("code");
    requestData.grant_type = authParams.get("grant_type");
    requestData.redirect_uri = authParams.get("redirect_uri");
    requestData.scope = authParams.get("scope");

    var postURL = globalVar.OAUTH.OAUTH_URL + globalVar.OAUTH.OAUTH_getToken;
    ajaxPost(postURL, requestHeader, requestData);
}

export function ajaxPost(URL, headerData, bodyData) {
    var bodyJsonData = JSON.stringify(bodyData);
    var returnObj = {
        returnMessage: "",
        returnCode: "",
        data: ""
    }

    $.ajax({
        beforeSend: function (xhr) {
            $.each(headerData, function (key, value) {
                xhr.setRequestHeader(key, value);
            });
        },
        processData: false,
        type: 'POST',
        url: URL,
        contentType: 'application/json',
        data: bodyJsonData,
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            $("#log").html(JSON.stringify(data));
            returnObj.returnCode = jqXHR.status;
            returnObj.returnMessage = textStatus;
            returnObj.data = data;
            console.log("Request successful");
            setTicket(returnObj);
        },
        error: function (jqXHR, textError, errorThrown) {
            $("#log").html(jqXHR.responseJSON);
            returnObj.returnCode = jqXHR.status;
            returnObj.returnMessage = textError;
            returnObj.data = jqXHR.responseJSON;
            setTicket(returnObj);
        }
    });
}

export function setTicket(returnData) {
    if (returnData.returnCode === 200) {
        localStorage.setItem("access_token", returnData.data.access_token);
        localStorage.setItem("refresh_token", returnData.data.refresh_token);
        localStorage.setItem("token_type", returnData.data.token_type);
        localStorage.setItem("expires_in", returnData.data.expires_in);
        console.log('Login successful');
        alert(`Login Success. Token: ${returnData.data.access_token}`);
    } else {
        alert(returnData.data.error_description);
    }
}
