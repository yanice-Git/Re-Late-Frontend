import React from 'react';
import logo from './heliotherapy.ico';

export function Header() {
  const headerStyle = {
    backgroundColor: '#1abc9c',
    color: 'white',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '0 0 10px 10px'
  };

  const headerLeftStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const headerIconStyle = {
    height: '50px',
    marginRight: '20px'
  };

  const headerTitleStyle = {
    margin: 0
  };

  const headerNavListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center'
  };

  const headerNavItemStyle = {
    marginLeft: '20px'
  };

  return (
    <header style={headerStyle}>
      <div style={headerLeftStyle}>
        <img src={logo} alt="Heliotherapy Icon" style={headerIconStyle} />
        <h1 style={headerTitleStyle}>Re-Late: </h1> <h2>For the students</h2>
      </div>
      <nav>
        <ul style={headerNavListStyle}>
          <li style={headerNavItemStyle}><a href="#about">About</a></li>
          <li style={headerNavItemStyle}><a href="#services">Services</a></li>
          <li style={headerNavItemStyle}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
