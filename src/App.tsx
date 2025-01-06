// src/App.tsx
import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';

const App: React.FC = () => {
  const [view, setView] = useState<'register' | 'login' | 'reset' | null>('register');

  return (
    <div>
      <h1>User Authentication</h1>
      <div>
        <button onClick={() => setView('register')}>Register</button>
        <button onClick={() => setView('login')}>Login</button>
        <button onClick={() => setView('reset')}>Reset Password</button>
      </div>
      {view === 'register' && <Register />}
      {view === 'login' && <Login />}
      {view === 'reset' && <ResetPassword />}
    </div>
  );
};

export default App;
