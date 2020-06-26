import React from 'react';
import './Navbar.css';

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='nav-icon'>
        <h1>
          <a href='/'>instant</a>
        </h1>
      </div>

      <div className='nav-links'>
        <a href='#home' className='nav-link active'>
          Home
        </a>
        <a href='#about' className='nav-link'>
          About
        </a>
        <a href='#news' className='nav-link'>
          News
        </a>
        <a href='#gallery' className='nav-link'>
          gallery
        </a>
        <a href='#contact-us' className='nav-link'>
          contact us
        </a>
      </div>
    </nav>
  );
}
