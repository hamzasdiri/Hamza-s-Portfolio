import React from 'react'
import cv from '../../assets/cv-hamza.pdf';
const CTA = () => {
  return (
    <div className='cta'>
      
        <a href={cv} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Hire Me!</a>
    </div>
  )
}

export default CTA