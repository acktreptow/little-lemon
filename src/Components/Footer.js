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
          <Link to="/little-lemon">Home</Link>
          <Link to="/little-lemon/about">About</Link>
          <Link to="/little-lemon/menu">Menu</Link>
          <Link to="/little-lemon/reservations">Reservations</Link>
          <Link to="/little-lemon/order-online">Order Online</Link>
          <Link to="/little-lemon/login">Login</Link>
        </div>
        <div className="footer-contact-container">
          <h1>Contact</h1>
          <Link to="/little-lemon/contact">Address</Link>
          <Link to="/little-lemon/contact">Phone Number</Link>
          <Link to="/little-lemon/contact">Email</Link>
        </div>
        <div className="footer-socialMedia-container">
          <h1>Social Media</h1>
          <Link to="/little-lemon/contact">Facebook</Link>
          <Link to="/little-lemon/contact">Instagram</Link>
          <Link to="/little-lemon/contact">Twitter</Link>
          <Link to="/little-lemon/contact">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
