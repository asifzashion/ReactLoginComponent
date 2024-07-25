import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginComponents.scss';

const MobileVerify = ({ onLogin, logo,logoStyle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]{3,}$/; // Only letters, at least 3 characters long
    return usernameRegex.test(username);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleChangeUsername = (value) => {
    setUsername(value);
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username is required',
      }));
    } else if (!validateUsername(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username is not valid',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: '',
      }));
    }
  };

  const handleChangePassword = (value) => {
    setPassword(value);
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
    } else if (!validatePassword(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };

  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      try {
        await onLogin(username, password);
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  
  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (!validateUsername(username)) {
      newErrors.username = 'Username is not valid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password =
        'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    return newErrors;
  };

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-login'>
    <div>
       {logo && <img src={logo} alt="Logo" style={logoStyle}/>}
       </div>
      <div className='card'>
      
    <h2 className='border-bottom m0 p-3 card-title'>Varification Code</h2>
    <div className='card-body'>
    <div className="login-form">
      <div className="form-group">
        <label className="form-label">Please  enter the verification code sent to your mobile:</label>
        <div className='disflex'>
        <input
          type="text"
          value={username}
          onChange={(e) => handleChangeUsername(e.target.value)}
          className="form-control verfyinput"
        />
        <input
          type="text"
          value={username}
          onCh
          ange={(e) => handleChangeUsername(e.target.value)}
          className="form-control verfyinput"
        />
          <input
          type="text"
          value={username}
          onCh
          ange={(e) => handleChangeUsername(e.target.value)}
          className="form-control verfyinput"
        />
          <input
          type="text"
          value={username}
          onCh
          ange={(e) => handleChangeUsername(e.target.value)}
          className="form-control verfyinput"
        />
          <input
          type="text"
          value={username}
          onCh
          ange={(e) => handleChangeUsername(e.target.value)}
          className="form-control verfyinput"
        />
          <input
          type="text"
          value={username}
          onCh
          ange={(e) => handleChangeUsername(e.target.value)}
          className="form-control verfyinput"
        />
       
        </div>
     
      </div>

      <button type="button" onClick={handleSubmit} className="btn btn-secondary">
        Verify
      </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

MobileVerify.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default MobileVerify;