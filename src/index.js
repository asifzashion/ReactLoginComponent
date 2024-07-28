// src/index.js

import LoginComponent from './Components/Login/LoginComponent';
import LoginJwt from './Components/Login/LoginJwt';
import LoginSessionCookie from './Components/Login/LoginSessionCookie';
import LoginWebMethodsCloud from './Components/Login/LoginWebMethodsCloud';

import LoginTokenAuth from './Components/Login/LoginTokenAuth';

import { getOAuthCode, getToken, ajaxPost, setTicket } from './main.js'
export default {LoginComponent,LoginJwt,LoginSessionCookie,LoginWebMethodsCloud,LoginTokenAuth,getOAuthCode,getToken, ajaxPost, setTicket};

