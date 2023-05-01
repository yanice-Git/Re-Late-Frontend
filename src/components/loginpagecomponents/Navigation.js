import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
      <div className="navigation-links">
        <Link to='/login' className="navigation-link">Login</Link>
        <Link to='/register' className="navigation-link">Register</Link>
      </div>
    );
  }
  
export default Navigation;
