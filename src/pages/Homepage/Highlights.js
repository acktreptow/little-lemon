import greekSalad from "../../assets/greek-salad.jpg";
import bruschetta from "../../assets/bruschetta.svg";
import lemonDessert from "../../assets/lemon-dessert.jpg";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Highlights.css";
import { Link } from "react-router-dom";

function Highlights() {
  return (
    <section className="highlights-container">
      <div className="highlights-section-top">
        <h1 className="highlights-header"> Chef's Specials!</h1>
        <Link to="/little-lemon/menu">
          <button className="highlights-button">Online Menu</button>
        </Link>
      </div>
      <div>
        <div className="highlights-section-bottom">
          <div className="specials-card">
            <div>
              <img
                src={greekSalad}
                alt="greek salad"
                className="specials-image"
              />
            </div>
            <div className="specials-title-price-container">
              <h3 className="specials-title">Greek Salad</h3>
              <p className="specials-price">$12.99</p>
            </div>
            <p className="specials-description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="specials-delivery-container">
              <p className="specials-delivery-request">Order For Delivery</p>
              <FontAwesomeIcon icon={faMotorcycle} className="faMotorcycle" />
            </div>
          </div>
          <div className="specials-card">
            <div>
              <img
                src={bruschetta}
                alt="bruchetta"
                className="specials-image"
              />
            </div>
            <div className="specials-title-price-container">
              <h3 className="specials-title">Bruschetta</h3>
              <p className="specials-price">$5.99</p>
            </div>
            <p className="specials-description">
              Our bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div className="specials-delivery-container">
              <p className="specials-delivery-request">Order For Delivery</p>
              <FontAwesomeIcon icon={faMotorcycle} className="faMotorcycle" />
            </div>
          </div>
          <div className="specials-card">
            <div>
              <img
                src={lemonDessert}
                alt="greek salad"
                className="specials-image"
              />
            </div>
            <div className="specials-title-price-container">
              <h3 className="specials-title">Lemon Dessert</h3>
              <p className="specials-price">$5.00</p>
            </div>
            <p className="specials-description">
              This comes straight from grandma's recipe book, every last
              ingredient has been sources and is as authentic as can be
              imagined.
            </p>
            <div className="specials-delivery-container">
              <p className="specials-delivery-request">Order For Delivery</p>
              <FontAwesomeIcon icon={faMotorcycle} className="faMotorcycle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
