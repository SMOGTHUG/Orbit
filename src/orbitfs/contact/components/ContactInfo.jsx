/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="info-container">
        <h2 className="info-title">Get in touch with Us</h2>
        <div className="info-details">
          <div className="info-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d0f25b07b27c5069950bd2977313d13469d7392cbb66195b3a954e16ff91e61?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Address Icon"
              className="info-icon"
            />
            <p className="info-text">
              No 24, Ikorodu road, Iyana-Isashi Lagos State
            </p>
          </div>
          <div className="info-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d0f25b07b27c5069950bd2977313d13469d7392cbb66195b3a954e16ff91e61?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Email Icon"
              className="info-icon"
            />
            <p className="info-text">Info@ofsl.com</p>
          </div>
          <div className="info-item">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d0f25b07b27c5069950bd2977313d13469d7392cbb66195b3a954e16ff91e61?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
              alt="Phone Icon"
              className="info-icon"
            />
            <p className="info-text">+23480000000, +23480000001</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-info {
          background: var(
            --orbit-color-style-orbit-pry-blue-orbit-pry-blue-500-main,
            #00327e
          );
          padding: 26px 70px;
          display: flex;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .contact-info {
            padding: 0 20px;
          }
        }
        .info-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          color: rgba(255, 255, 255, 1);
          font-family: Effra, sans-serif;
        }
        .info-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 24px;
        }
        @media (max-width: 991px) {
          .info-title {
            font-size: 40px;
          }
        }
        .info-details {
          display: flex;
          flex-direction: column;
          gap: 22px;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.4;
        }
        .info-item {
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .info-icon {
          width: 44px;
          aspect-ratio: 1;
        }
        .info-text {
          margin: 0;
        }
      `}</style>
    </section>
  );
}

export default ContactInfo;
