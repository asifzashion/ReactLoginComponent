// src/index.js

import LoginComponent from './Components/Login/LoginComponent';
import LoginTokenAuth from './Components/Login/LoginTokenAuth';

import { getOAuthCode, getToken, ajaxPost, setTicket } from './main.js'
export default {LoginComponent,LoginTokenAuth,getOAuthCode,getToken, ajaxPost, setTicket};

