import React from 'react'
import './testimonial.css';
import test1 from '../../images/test1.png';
import test2 from '../../images/test2.png';
import test3 from '../../images/test3.png';

const Testimonial = () => {
  return (
    <div className='testimony'>
        <div className='test'>
            <button>Testimonial</button>

            <h1>What Customers Say</h1>
        </div>

        <div className='test-container'>
            <div className='test-items1'>
            <img src={test1}   alt="unsplashage" />
            </div>
            <div className='test-items1'>
            <img src={test2}  alt="unsplashage" />
            </div>
            <div className='test-items1'>
                 <img src={test3}  alt="unsplashage" />

            </div>
            <div className='test-items1'>
            <img src={test3}  alt="unsplashage" />

            </div>
        </div>
    </div>
  )
}

export default Testimonial