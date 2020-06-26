import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-text-container'>
          <h1>Contacts</h1>
          <p>
            30 Jackson Blvd ste 1020 Chicago <br />
            Tel: 000-0000-0000 <br />
            7 days a week from 9:00 am to 7:00pm
          </p>

          <div className="footer-btn-container">
            <button className="footer-btn">Facebook</button>
            <button className="footer-btn">twitter</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
