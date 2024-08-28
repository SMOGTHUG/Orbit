import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './orbitfs/components/HomePage'
import AboutPage from './orbitfs/about/components/AboutPage';
import ServicesPage from './orbitfs/services/components/ServicesPage';
import FAQPage from './orbitfs/faq/components/FAQPage';
import ContactUsPage from './orbitfs/contact/pages/ContactUsPage';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/services' element={<ServicesPage />}/>
      <Route path='/faq' element={<FAQPage />}/>
      <Route path='/contact' element={<ContactUsPage />}/>
    </Routes>
   </Router>
  )
}

export default App
