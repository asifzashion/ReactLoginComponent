import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginComponent from './LoginComponent';
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

const App = () => (
  <div className="App">
    <LoginComponent onLogin={handleLogin} logo={logo} logoStyle={logoSize} />
  </div>
);

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);