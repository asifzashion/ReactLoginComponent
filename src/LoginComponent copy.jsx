import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-login'>
      <div className='card'>
    <h2 className='border-bottom m0 p-3 card-title'>Login</h2>
    <div className='card-body'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Username:</label>
        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='width100'>
      <span>
      <input type="checkbox" id="exampleCheckbox" name="example" />
      <label for="exampleCheckbox">remember me</label>
      </span>

      <div className='mb-3 pull-right'>
      <a className='fpass'> Forgot Password</a>
      </div>

      </div>
      <div className='mb-3'>
      <button type="submit" className="btn btn-secondary">Login</button>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

LoginComponent.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginComponent;
