import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import config from '../../config/config';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const { username: validUsername, password: validPassword } = config.credentials;
    if (username === validUsername && password === validPassword) {
      alert('Login Successful!');
      onLoginSuccess();
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className={styles.loginForm}>
      <input
        type="text"
        placeholder="Username"
        className={styles.inputField}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.inputField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className={styles.submitButton}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;