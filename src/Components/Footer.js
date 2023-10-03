import logoWhite from "../assets/logo-white.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-image-container">
        <img src={logoWhite} alt="white logo" className="footer-logo" />
      </div>
      <div className="footer-links">
        <div className="footer-navigation-container">
          <h1>Navigation</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order-online">Order Online</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="footer-contact-container">
          <h1>Contact</h1>
          <Link to="/contact">Address</Link>
          <Link to="/contact">Phone Number</Link>
          <Link to="/contact">Email</Link>
        </div>
        <div className="footer-socialMedia-container">
          <h1>Social Media</h1>
          <Link to="/contact">Facebook</Link>
          <Link to="/contact">Instagram</Link>
          <Link to="/contact">Twitter</Link>
          <Link to="/contact">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
