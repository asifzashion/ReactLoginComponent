// src/index.js

import LoginComponent from "./Components/Login/LoginComponent";
import LoginTokenAuth from "./Components/Login/LoginTokenAuth";

// export { default as LoginComponent } from "./Components/Login/LoginComponent";
// export { default as LoginTokenAuth } from "./Components/Login/LoginTokenAuth";

import { getOAuthCode, getToken, ajaxPost, setTicket } from './main.js'
export default {LoginComponent,LoginTokenAuth,getOAuthCode,getToken, ajaxPost, setTicket};