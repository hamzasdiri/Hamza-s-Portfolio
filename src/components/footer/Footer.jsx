import React from 'react'
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
const Footer = () => {
  return (
    <>
    <br /><br /><br /><br /><br /><br /><br />
    <footer id="footer">
    <div className="waves">
      <div className="wave" id="wave1" />
      <div className="wave" id="wave2" />
      <div className="wave" id="wave3"/>
      <div className="wave" id="wave4" />
    </div>
    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>
    
    <h4 className='text-center'>" Living, learning, & leveling up one day at a time."</h4>
    <br /><br />
    <div className='footer_socials'>
        <ul>
        <li><a href="https://www.facebook.com/hamza.sdiri.148/" target='_blank'><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="https://www.linkedin.com/in/hamza-sdiri-25b5211bb/" target='_blank'><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
  <li><a href="https://www.instagram.com/7mzv__01/" target='_blank'><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
       
      </div>
    <br /><br /><br /><br /><br /><br />
  </footer>
  </>
  )
}

export default Footer