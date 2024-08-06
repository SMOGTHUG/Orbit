import React from 'react'
import './blogger.css';
import blog from '../../images/blog.png';
import blog2 from '../../images/blog2.png';

const Blogger = () => {
  return (
    <div className='blog'>
       <div className='blog-title'>
            <h1>Latest Blog </h1>
           

            <h3>In the News</h3>
       </div>

       <div className='blog-items'>
            <img src={blog} width={400} height={400} alt="unsplashage" />
            <img src={blog2} width={400} height={400} alt="unsplashage" />
            <img src={blog2} width={400} height={400} alt="unsplashage" />
            <img src={blog2} width={400} height={400} alt="unsplashage" />
       </div>
    </div>
  )
}

export default Blogger