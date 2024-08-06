import React from 'react'
import './footer.css'
import logo from '../../images/logo.png'
import Icon from '../../images/Icons.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-card'>
            <img src={logo} alt="unsplashage" />
            <p>@ Copyright 2024 Orbit <br/>All right reservered</p>
            
        </div>
        <div className='footer-card1'>
            <h6>Quick Links</h6>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Services</p>
            <p>Contact us</p>
        </div>
        <div className='footer-card2'>
            <h6>Contact Information</h6>
            <p>Phone number</p>
            <p>Email Address</p>
            <p>Office Location</p>
        </div>
        <div className='footer-card3'>
            <p>Follow us</p>
            <img src={Icon} alt="unsplashage" />
        </div>
    </div>
  )
}

export default Footer