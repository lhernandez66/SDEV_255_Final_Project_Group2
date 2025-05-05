import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role = new URLSearchParams(useLocation().search).get('role');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password || !role) return;
    onLogin(role);
    navigate(`/${role}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login as {role}</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
