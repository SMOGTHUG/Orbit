import React from 'react'
import './services.css';
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
import pic4 from '../../images/pic4.png'

const Services = () => {
  return (
    <div className='services'>
        <div className='service-title'><h1>Our Services</h1></div>

        <div className='services-container'>
            <div className='service-item'>
            <img src={pic1} width={30} height={30}  alt="unsplashage" />
                <h6>Microloans for small business</h6>
                <h6><a href="">Learn more > </a></h6>
            </div>
             <div className='service-item'>
             <img src={pic2} width={30} height={30}   alt="unsplashage" />
                 <h6>Sustainable investing</h6>
                <h6><a href="">Learn more > </a></h6>
            </div>
            <div className='service-item'>
                 <img src={pic3} width={30} height={30}  alt="unsplashage" />
                <h6>Invoice discounting</h6>
                <h6><a href="">Learn more > </a></h6>
            </div>
            <div className='service-item'>
                 <img src={pic4} width={30} height={30}  alt="unsplashage" />
                <h6>Green financing</h6>
                <h6><a href="">Learn more > </a></h6>
            </div>
        </div>

    </div>
  )
}

export default Services