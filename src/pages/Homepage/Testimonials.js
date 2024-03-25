import user1 from "../../assets/User1.png";
import user2 from "../../assets/User2.png";
import user3 from "../../assets/User3.png";
import user4 from "../../assets/User4.png";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-container">
      <h1 className="testimonials-title">What Our Customers Say!</h1>
      <div>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="img-name-username-container">
              <img src={user1} alt="first review" className="testimonial-img" />
              <div className="name-username-container">
                <h2 className="testimonial-name">Jane Smith</h2>
                <h2 className="testimonial-user-name">Jane92</h2>
              </div>
            </div>
            <p className="testimonial-text">
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare."
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="img-name-username-container">
              <img src={user2} alt="first review" className="testimonial-img" />
              <div className="name-username-container">
                <h2 className="testimonial-name">John Utah</h2>
                <h2 className="testimonial-user-name">Jonny_Utah</h2>
              </div>
            </div>
            <p className="testimonial-text">
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare."
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <div className="img-name-username-container">
              <img src={user3} alt="first review" className="testimonial-img" />
              <div className="name-username-container">
                <h2 className="testimonial-name">Sara Lopez</h2>
                <h2 className="testimonial-user-name">Sara74</h2>
              </div>
            </div>
            <p className="testimonial-text">
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare."
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="img-name-username-container">
              <img src={user4} alt="first review" className="testimonial-img" />
              <div className="name-username-container">
                <h2 className="testimonial-name">Duc Duong</h2>
                <h2 className="testimonial-user-name">ducky_D</h2>
              </div>
            </div>
            <p className="testimonial-text">
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
