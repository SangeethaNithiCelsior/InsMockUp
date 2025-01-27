import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Button from '../../components/Button/Button';
import config from '../../config/config'; // Import the config file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve valid credentials from config
    const { username: validUsername, password: validPassword } = config.credentials;

    if (username === validUsername && password === validPassword) {
      alert('Login Successful!');
      navigate('/desktop'); // Redirect to the Desktop page
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.pageTitle}>Login to PolicyCenter</h1>
      <div className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          label="Login"
          onClick={handleLogin}
          variant="primary"
          disabled={!username || !password}
        />
      </div>
    </div>
  );
};

export default LoginPage;
