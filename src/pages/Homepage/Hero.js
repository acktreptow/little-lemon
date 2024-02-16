import bread from "../../assets/restaurant-food.jpg";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-container">
      <div className="hero-description-container">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-info">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <button
          className="hero-button"
          onClick={() => navigate("/little-lemon/reservations")}
        >
          Reserve A Table
        </button>
      </div>
      <div className="hero-img-container">
        <img src={bread} alt="bread" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;
