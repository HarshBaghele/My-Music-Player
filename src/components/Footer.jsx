import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className="footer-column">
          <h4>Communities</h4>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>
        <div className="footer-column">
          <h4>Useful links</h4>
          <p>Support</p>
          <p>Free Mobile App</p>
          <p>Popular by Country</p>
        </div>
        <div className="footer-column">
          <h4>Spotify Plans</h4>
          <p>Premium Individual</p>
          <p>Premium Duo</p>
          <p>Premium Family</p>
          <p>Premium Student</p>
          <p>Spotify Free</p>
        </div>
        <div className="footer-socials">
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Spotify AB</p>
      </div>
    </footer>
  );
};

export default Footer;