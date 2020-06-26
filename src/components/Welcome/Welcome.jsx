import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <div className='welcome-section'>
      <div className='welcome-text-container'>
        <div>
          <h1>Welcome</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            enim reiciendis sequi culpa est fugit vero ea, deleniti quia aliquid
            ipsam consequatur alias in unde, quaerat sapiente eius doloribus
            maxime quo officia harum itaque. Dolorem, iusto esse reprehenderit
            cumque accusantium tempora quaerat itaque. Molestias sed delectus
            aliquam suscipit recusandae? Ut.
          </p>
        </div>

        <a href='#more' className='read-more-btn'>
          Read more
        </a>
      </div>
    </div>
  );
}
