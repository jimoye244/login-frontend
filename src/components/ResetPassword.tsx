// src/components/ResetPassword.tsx
import React, { useState } from 'react';
import { resetPassword } from '../api/axios';
import { Redirect } from 'react-router';
import DashBoard from './components/DashBoard';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await resetPassword(email, password);
      setSuccess('Password reset successfully!');
      setError('');

    } catch (err) {
      setError('Failed to reset password, please try again!');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="newPassword"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="newPassword"
        />
        <button type="submit">Reset Password</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default ResetPassword;
