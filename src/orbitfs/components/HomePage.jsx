/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";

import Certifications from "./Certifications";
import ValueProposition from "./ValueProposition";
import Services from "./service/Services";
import OurServices from "./ourservice/OurServices";
import Testimonials from "./testimonial/Testimonials";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import './styles.css'
import Hero from "./hero/Hero";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <Certifications />
        {/*<ValueProposition />*/}
        <Services />
        <OurServices />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
