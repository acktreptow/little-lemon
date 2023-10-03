import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Little Lemon's Logo" />
      <Nav />
    </header>
  );
}

export default Header;
