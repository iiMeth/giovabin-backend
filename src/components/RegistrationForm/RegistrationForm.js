import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <h2>Registrazione</h2>
      <form>
        <label htmlFor="username">Nome utente:</label>
        <input type="text" id="username" name="username" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <label htmlFor="passwordConfirm">Conferma password:</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" required />
        
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
