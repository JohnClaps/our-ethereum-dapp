import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Decode JWT to get user role
      const userRole = JSON.parse(atob(token.split('.')[1])).role;

      // Redirect based on role
      if (userRole === 'admin') navigate('/admin');
      else if (userRole === 'user') navigate('/user');
      else if (userRole === 'verifier') navigate('/verifier');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
