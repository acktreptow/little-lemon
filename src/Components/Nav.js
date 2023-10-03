import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/little-lemon">Home</Link>
        <Link to="/little-lemon/about">About</Link>
        <Link to="/little-lemon/menu">Menu</Link>
        <Link to="/little-lemon/reservations">Reservations</Link>
        <Link to="/little-lemon/order-online">Order Online</Link>
        <Link to="/little-lemon/login">Login</Link>
      </nav>
    </>
  );
}

export default Nav;
