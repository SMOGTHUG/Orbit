/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Footer = () => {
  const quickLinks = ["About Us", "Services", "FAQs", "Careers", "Contact Us"];
  const contactInfo = ["Phone number", "Email Address", "Office Location"];
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f171e421e21525bdef7c5ddcae7f22adf7aa0a452f46fa1178910740ba2e07e?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c8d30b16ac8576fef915422bb0d3f266c125e151477a481cdc78b6e942cd65d?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1becfa654d08058e7df39437ecf91b199fec98216c702189631aead4648acee9?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab6b63125340ed23d047a1c0ea184fa7a06a1a5e029fdaa0b3f08f402ebbc421?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/350ca9e1764ab677b939e99e99d5d62530be9447dcbd40bb55c33b5b35be02ee?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Company logo icon"
              className="footer-logo-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8bf3f3711527911dfeea1cab00db9765239a355ae880a2fb98f67b56aa28f9?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Company logo text"
              className="footer-logo-text"
            />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="footer-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact Information</h4>
              <ul className="footer-list">
                {contactInfo.map((info, index) => (
                  <li key={index} className="footer-info">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Follow us</h4>
              <div className="social-icons">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" className="social-link">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="social-icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#terms" className="legal-link">
              Terms of Service
            </a>
            <a href="#privacy" className="legal-link">
              Privacy Policy
            </a>
          </div>
          <p className="copyright">
            © Copyright 2024 Orbit All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
