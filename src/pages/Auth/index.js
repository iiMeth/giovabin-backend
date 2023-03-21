import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Auth.css';

const LoginForm = () => {
  // Aggiungi la logica del form di login qui

  return (
    <form>
      <div className="auth-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="auth-input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula la registrazione dell'utente
    console.log(`Utente registrato: ${name}, ${email}, ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="auth-input">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="auth-input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="auth-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Registrati</button>
    </form>
  );
};

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/auth/login';

  return (
    <div className="auth">
      <div className="auth-container">
        <div className="auth-card">
          {isLogin ? (
            <>
              <h2>Login</h2>
              <LoginForm />
            </>
          ) : (
            <>
              <h2>Registrati</h2>
              <RegisterForm />
            </>
          )}
          <div className="auth-switch">
            <Link to="/auth/register">
              Non hai un account? Registrati
            </Link>
            <Link to="/auth/login">
              Hai già un account? Accedi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
