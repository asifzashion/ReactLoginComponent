# ReactLoginComponent



//  Auth Configration Started//
const globalVar = {
  OAUTH: {
      OAUTH_URL: "https://mansagwm01.mannaicorp.com.qa:7543",
      OAUTH_authorize: "/invoke/pub.oauth/authorize",
      OAUTH_getToken: "/invoke/pub.oauth/getToken",
      response_type: "code",
      client_id: "fab4aaab4f7344c8a7f9d0be405978a0",
      client_secret: "d47bca95e02f4554990acabdd7c480a6",
      scope: "mansagwm015555",
      redirect_uri: encodeURIComponent("http://localhost:5500/getAccessToken.html")
  }
};

    //  Auth Configration Ended//

   // Normal Login Started //
  const handleLogin  = async (username, password) => {   
    try {
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('Password', password);

      const response = await axios.post('http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }

      });

      //setResponse(response.data); // Handle success response
      console.log(response.data);
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error(error); // Handle error response
    }
  };
    // Normal Login Ended //