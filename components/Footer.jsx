import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="footer-container">
      <p>Developed by Nikhil</p>
      <p>Contact me</p>
      <p className="icons">
        <a href='https://www.instagram.com/_the_nikhil/'><AiFillInstagram /> </a> 
        <a href='https://www.facebook.com/profile.php?id=100012935553636'><FaSquareFacebook /></a> 
      </p>
    </div>
  )
}

export default Footer