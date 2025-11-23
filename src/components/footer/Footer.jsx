import React from 'react'
import "./Footer.css"
import logo from "../../assests/logo.png"

const Footer = () => {
  return (
    <div className="signlang__footer section__padding">
      <div className="signlang__footer-links">
        <div className="signlang__footer-links_logo">
          <img src={logo} alt="signify_logo" />
          <p>Signify <br /> All Rights Reserved</p>
        </div>
        <div className="signlang__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="signlang__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="signlang__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="signlang__footer-copyright">
        <p>@2025 Signify. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer