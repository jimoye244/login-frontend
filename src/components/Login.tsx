// src/components/Login.tsx
import React, { useState } from 'react';
import { loginUser } from '../api/axios';
import { data, redirect } from "react-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      setSuccess('Login successful!');
      setError('');

    } catch (err) {
      setError('Login failed, please check your credentials.');
      setSuccess('');
    }
    // navigate('/register');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}

        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}

        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Login;
