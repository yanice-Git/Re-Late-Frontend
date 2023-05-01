import React from 'react';
import '../styles/login.css';
import Button from '../components/loginpagecomponents/Button';

export function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h1>ReLate Login</h1>
        <form>
          <label htmlFor="email">Username</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Log In</button>
        </form>
        <Button text="Register" className="register-button" />
      </div>
    </div>
  );
}

