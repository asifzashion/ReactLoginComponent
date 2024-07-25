import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginComponent from './Components/Login/LoginComponent';
import LoginTokenAuth from './Components/Login/LoginTokenAuth';
import LoginJwt from './Components/Login/LoginJwt';
import LoginOTP from './Components/Login/LoginOTP';
import LoginMobile from './Components/Login/LoginMobile';
import MobileVerify from './Components/Login/MobileVerify';
import LoginSessionCookie from './Components/Login/LoginSessionCookie';


import { getOAuthCode } from './main.js'

import './Theme.scss';

import logo from './images/logo.png';
 const handleLogin = async (username, password) => {
 console.log(username, password);
 
};
const logoSize = {
  width: '80px', // Adjust width as needed
  height: 'auto', // Maintain aspect ratio
  marginBottom:10,
};

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

window.globalVar = globalVar; // Ensure globalVar is accessible in main.js

const App = () => (
  <div className="App">
    <LoginComponent onLogin={handleLogin} logo={logo} logoStyle={logoSize} />
    <LoginTokenAuth onLogin={handleLogin} logo={logo} logoStyle={logoSize} onOAuth={getOAuthCode} />
  </div>

);

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);