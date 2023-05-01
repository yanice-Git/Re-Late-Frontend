import React, { useState } from 'react';
import styles from './Registration.css';

const Registration = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleNameChange = (e) => {
setName(e.target.value);
};

const handleEmailChange = (e) => {
setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleConfirmPasswordChange = (e) => {
setConfirmPassword(e.target.value);
};

const handleSubmit = (e) => {
e.preventDefault();
console.log("Name: ${name} Email: ${email} Password: ${password} Confirm Password: ${confirmPassword}");
};

return (
<div className={styles['registration-container']}>
<div className={styles['registration-form']}>
<h1 className={styles['registration-heading']}>ReLate Registration Page</h1>
<form onSubmit={handleSubmit}>
<div className={styles['input-group']}>
<label htmlFor="name">Name:</label>
<input
           type="text"
           id="name"
           name="name"
           value={name}
           onChange={handleNameChange}
           required
         />
</div>
<div className={styles['input-group']}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className={styles['input-group']}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      <div className={styles['input-group']}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>

      <button className={styles['registration-button']} type="submit">Register</button>
    </form>
  </div>
</div>
);
};

export default Registration;