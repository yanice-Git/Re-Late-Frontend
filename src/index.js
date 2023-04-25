import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Homepage from './Homepage';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from "react-router-dom"
import { Header } from "./siteTools/header"
import { Footer } from "./siteTools/footer"
import backgroundImage from './background-image.jpg'; // Import your background image here


const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={styles}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Homepage />
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
