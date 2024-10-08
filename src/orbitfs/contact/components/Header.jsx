/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <div className="logo-section">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/984e8e1cc031580d793877c925f05699bbae9eab4a757872188ce3c3bc4899a8?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Company Logo"
              className="logo"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73707143721e36ad14cb7ec4d170c2400a1027e4361845064924197150e8287e?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Company Name"
              className="company-name"
            />
          </div>
          <nav className="nav-actions">
            <div className="nav-links">
              <a href="#about-us" className="nav-link">
                About Us
              </a>
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#faqs" className="nav-link">
                FAQs
              </a>
              <a href="#contact-us" className="nav-link active">
                Contact Us
              </a>
              <a href="#resources" className="nav-link">
                Resources
              </a>
            </div>
            <button className="primary-button">
              <span className="button-text">Sign up</span>
            </button>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .header {
          background: var(--Shade-White, #fff);
          display: flex;
          width: 100%;
          padding: 0 80px;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .header {
            padding: 0 20px;
          }
        }
        .container {
          display: flex;
          width: 100%;
          padding: 24px 0;
          justify-content: center;
        }
        .content {
          display: flex;
          width: 100%;
          gap: 40px 100px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }
        .logo-section {
          display: flex;
          gap: 8px;
        }
        .logo,
        .company-name,
        .img-2 {
          object-fit: contain;
        }
        .logo {
          width: 50px;
          aspect-ratio: 1;
        }
        .company-name {
          width: 226px;
          aspect-ratio: 4.61;
        }
        .nav-actions {
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 12px;
          font: 16px Effra, sans-serif;
        }
        .nav-link {
          color: var(
            --Orbit-Color-Style-Slate---Neutral-slate---neutral-500,
            #475569
          );
          font-weight: 400;
        }
        .nav-link.active {
          color: var(
            --Orbit-Color-Style-Slate---Neutral-slate---neutral-800,
            #0f172a
          );
          font-weight: 500;
        }
        .primary-button {
          background: var(
            --Orbit-Color-Style-Tiffany-blue-tiffany-blue-500---Main,
            #78d3ce
          );
          padding: 16px 24px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-feature-settings: "cv01" on, "cv03" on, "cv04" on;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .primary-button {
            padding: 0 20px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
