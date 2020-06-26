import React from 'react';
import './GridImages.css';

export default function GridImages() {
  return (
    <div className='grid-images'>
      <div className='grid-item item-1'>
        <div className='grid-text'>
          <h1>
            catalog <br /> shoot
          </h1>
        </div>
      </div>
      <div className='grid-item item-2'>
      <div className='grid-text'>
          <h1>
            sweet <br /> october
          </h1>
        </div>
      </div>
      <div className='grid-item item-3'>
      <div className='grid-text'>
          <h1>
            cruise <br /> workshop
          </h1>
        </div>
      </div>
      <div className='grid-item item-4'>
      <div className='grid-text'>
          <h1>
            wedding <br /> photography
          </h1>
        </div>
      </div>
    </div>
  );
}
