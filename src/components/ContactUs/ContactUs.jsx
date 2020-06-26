import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className='contact-us'>
      <div className='contact-container'>
        <h1>Contact Us</h1>

        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className='form-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Email</label>
            <input type='text' name='email' id='email' className='form-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Message</label>
            <textarea
              type='text'
              name='message'
              id='message'
              rows='7'
              className='form-input'></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='contact-btn'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
