import React,  { useState }  from 'react';
import logo from '../../images/logo.png';
import './navbar.css';
import { Outlet } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
        <div className="navbar">
            <span className="nav-logo"><img src={logo} alt="unsplashage" /></span>
           
            <div className={`nav-items ${isOpen && "open"}`}>
            <a href="About us">About Us</a>
            <a href="services">Services</a>
            <a href="faqs">FAQs</a>
            <a href="contact">Contact Us</a>
            <a href="blog">Blog</a>
          </div>
    
           
          <div className='nav-foot'>
            <button className='btn-1'>Login</button>
            <button className='btn-2'>Sign up</button>
          </div>

            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}> 
            <div className="bar"></div>
            </div>

            </div>

        <Outlet/>
   
    </section>
  )
}

export default Navbar