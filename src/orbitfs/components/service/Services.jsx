import React from 'react'
import './service.css'
import Frame1 from '../../../images/Frame1.png'
import Frame2 from '../../../images/Frame2.png'
import Frame3 from '../../../images/Frame3.png'
import Frame4 from '../../../images/Frame4.png'

const Services = () => {
  return (
    <div>
      <div className='service-icon'>
        <div> <img src={Frame1} width={600}  alt="unsplashage" /></div>
        <div> <img src={Frame2}  width={600} alt="unsplashage" /></div>
      </div>

      <div className='service-icon'>
        <div> <img src={Frame3}  width={600} alt="unsplashage" /></div>
        <div> <img src={Frame4 } width={600}  alt="unsplashage" /></div>
      </div>
    </div>
  )
}

export default Services
