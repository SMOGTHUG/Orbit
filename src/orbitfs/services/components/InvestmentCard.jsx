import React from 'react';
import pg2 from '../../../images/pg2.png'

const InvestmentCard = () => {
  return (
    <div className='service-section'>
       
        <div>
          <img src={pg2} width={550} alt="unsplash" />
        </div>
        <div>
        <button className='service-btn'>Investment</button>
          <h2 className='service-title'>Sustainable Investing</h2>
          <h3>Description</h3>
          <p>Offering investment opportunities aligned with environmental and social values.</p>
          <h3>Benefits</h3>
          <ul>
            <li>Ethical returns and positive impact on society</li>
          </ul>
          <h3>Application Process</h3>
          <ul>
            <li>Step 1: Create an investment account</li>
            <li>Step 2: Choose from our portfolio of sustainable investment options</li>
            <li>Step 3: Monitor and manage your investments online</li>
          </ul>
          <a href="">Create an Investment account now</a>
        </div>
      
    </div>
  )
}

export default InvestmentCard
