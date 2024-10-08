/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo-section">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52a336d453b3ced60eca66f0747210482806efe8f97f638ae1e4188c21736855?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
                alt="Footer Logo"
                className="logo"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/388ea995b05d4e5b68fc84d9936663c4a586156325cde3e0d28f4fda2a8c6dd4?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
                alt="Footer Company Name"
                className="company-name"
              />
            </div>
            <div className="footer-links">
              <div className="footer-link-block">
                <h3 className="block-heading">Quick Links</h3>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#about-us" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#faqs" className="nav-link">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="nav-link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#contact-us" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-link-block">
                <h3 className="block-heading">Contact Information</h3>
                <ul className="footer-nav-list">
                  <li className="nav-link">Phone number</li>
                  <li className="nav-link">Email Address</li>
                  <li className="nav-link">Office Location</li>
                </ul>
              </div>
              <div className="footer-follow-us">
                <h3 className="block-heading">Follow us</h3>
                <div className="social-icons">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4611252c6d5f9d8de6ce315bbb0ee2486889f7a61776b8f30b92ddfc3d54ca6?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
                    alt="Facebook Icon"
                    className="icon"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/42e00503f1a03aa71b16d7c5cb04889b5289d6e2d8349babb81ce3dab67aa953?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
                    alt="Twitter Icon"
                    className="icon"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ec22bff956e6233c4845007465d9067ba1bfbaaab44127b345170bbad919c50?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
                    alt="LinkedIn Icon"
                    className="icon"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74fae6fa538d8f3f6b6ba339e0f8cad5333daec91b65c61110fcbd462f8d745e?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
                    alt="Instagram Icon"
                    className="icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-meta">
              <div className="footer-terms">
                <a href="#terms" className="terms-link">
                  Terms of Service
                </a>
                <a href="#privacy" className="privacy-link">
                  Privacy Policy
                </a>
              </div>
              <p className="copyright">
                © Copyright 2024 Orbit All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(
            --Orbit-Color-Style-Orbit--Pry-Blue-orbit--pry-blue-50,
            #e6ebf2
          );
          padding: 64px 80px;
        }
        @media (max-width: 991px) {
          .footer {
            padding: 0 20px;
          }
        }
        .footer-container {
          display: flex;
          flex-direction: column;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .footer-logo-section {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .logo {
          width: 50px;
          aspect-ratio: 1;
        }
        .company-name {
          width: 226px;
          aspect-ratio: 4.61;
        }
        .footer-links {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        .footer-link-block,
        .footer-follow-us {
          flex-basis: 240px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .block-heading {
          color: var(
            --Orbit-Color-Style-Slate---Neutral-slate---neutral-600,
            #334155
          );
          font-weight: 500;
        }
        .footer-nav-list {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-link {
          color: var(
            --Orbit-Color-Style-Slate---Neutral-slate---neutral-500,
            #475569
          );
          font-weight: 400;
        }
        .social-icons {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .icon {
          width: 24px;
          aspect-ratio: 1;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 64px;
        }
        .footer-divider {
          height: 1px;
          background: var(
            --Orbit-Color-Style-Orbit--Pry-Blue-orbit--pry-blue-50,
            #e6ebf2
          );
        }
        .footer-meta {
          display: flex;
          justify-content: space-between;
          color: var(
            --Orbit-Color-Style-Slate---Neutral-slate---neutral-500,
            #475569
          );
          font-size: 14px;
          line-height: 1.4;
        }
        .footer-terms,
        .copyright {
          display: flex;
          gap: 32px;
        }
        .terms-link,
        .privacy-link {
          font-weight: 500;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
