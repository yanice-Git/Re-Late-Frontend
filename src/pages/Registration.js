import React, { useState } from 'react';
import styles from '../styles/Registration.css';

export function Registration() {
  return (
    <div className="registration-container">
      <div className="registration-form">
        <h1 className="registration-heading">ReLate Sign-Up</h1>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="registration-button">Sign Up</button>
        </form>
        <button className="registration-button">Login Page</button>
      </div>
    </div>
  );
}

