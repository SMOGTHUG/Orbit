import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Frame from '../frame/Frame'
import Services from '../services/Services'
import Testimonial from '../testimonial/Testimonial'
import Blogger from '../blogger/Blogger'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Frame />
        <Services />
        <Testimonial />
        <Blogger />
        <Footer />
    </div>
  )
}

export default Home