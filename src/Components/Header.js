import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <img
        src={logo}
        alt="Little Lemon's Logo"
        onClick={() => navigate("/little-lemon")}
      />
      <Nav />
    </header>
  );
}

export default Header;
