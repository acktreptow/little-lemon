import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <Link to="/little-lemon">
        <img src={logo} alt="Little Lemon's Logo" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
