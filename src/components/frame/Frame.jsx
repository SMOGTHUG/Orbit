import React from 'react'
import './frame.css';
import image3 from '../../images/image3.png'

const Frame = () => {
  return (
    <div className='frame'>
       <div className='fame'>
            <h1>Value Proposition</h1>
            <h5>Help First, Value Second!</h5>
            <p>Orbit Financial Services Limited (OFSL) differentiates itself by offering unique <br/>value and meeting specific customer needs with a customer-centric approach </p>

       </div>
        <div className='fames'>
            <img src={image3} width={700} height={500} alt="unsplashage" />
        </div>
    </div>
  )
}

export default Frame