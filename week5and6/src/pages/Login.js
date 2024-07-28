import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className='authPage'>

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="#" onClick={() => navigate('/signup')}>Sign Up</a>
      </p>
    </div>
            </div>
  );
}

export default Login;
