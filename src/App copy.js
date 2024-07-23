import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/Login/LoginComponent';
import ForgotComponent from './Components/Login/ForgotComponent';
import './styles.css';
import './Theme.scss';
import logo from './images/logo.png';

const handleLogin = async (username, password) => {
  console.log(username, password);
};

const logoSize = {
  width: '80px', // Adjust width as needed
  height: 'auto', // Maintain aspect ratio
  marginBottom: 10,
};

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/forgot-password" element={<ForgotComponent />} />
        <Route path="/" element={<LoginComponent onLogin={handleLogin} logo={logo} logoStyle={logoSize} />} />
      </Routes>
    </div>
  </Router>
);

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);