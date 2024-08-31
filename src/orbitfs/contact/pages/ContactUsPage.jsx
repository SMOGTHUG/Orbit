
import * as React from "react";

import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ContactUsPage() {
  return (
    <>
      <Header />
      <section className="main-banner">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a0a7cba1992a934e48658a057d435a8c75f6fefd463412a09f3623ec5ab050?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892"
          alt="Main Banner"
          className="banner-image"
        />
        <div className="banner-content1">
          <h1 className="banner-title">Contact Us</h1>
          <p className="banner-description">
            We are glad to be of assistance to ensure that you receive the
            required <br/>support, online or in person at any of our offices across
            Nigeria
          </p>
        </div>
      </section>
      
      <section className="contact-section">
      <ContactInfo />
        <ContactForm />
      </section>
      <Footer />
      <style jsx>{`
        .main-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 236px 8px;
          color: rgba(255, 255, 255, 1);
          position: relative;
          margin-top:  -19.5rem;
        }
        @media (max-width: 991px) {
          .main-banner {
            padding: 100px 20px;
          }
        }
        .banner-image {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
        .banner-content1 {
         
          display: flex;
          flex-direction: column;
          gap: 1px;
         
          left: 3rem;
          text-align: start;
        }
        .banner-title {
          font-size: 48px;
          font-weight: 700;
          
          padding-left: -3rem
        }
        @media (max-width: 991px) {
          .banner-title {
            font-size: 40px;
          }
        }
        .banner-description {
          font-size: 20px;
          font-weight: 400;
           text-align: start;
           padding-left: -3rem 
        }
        .contact-section {
          background: var(
            --orbit-color-style-orbit-pry-blue-orbit-pry-blue-500-main,
            #00327e
          );
          display: flex;
          justify-content: center;
          align-content: center;
         
          padding: 26px 70px;
          margin-top: 10rem;
          gap: 5rem
        }
        @media (max-width: 991px) {
          .contact-section {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default ContactUsPage;
