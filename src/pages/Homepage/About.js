import adrian from "../../assets/adrian.jpg";
import marioAdrian from "../../assets/mario-adrian.jpg";
import "./About.css";

function About() {
  return (
    <section className="about-container">
      <div className="about-info">
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequal sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Vellt officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="about-images">
        <img
          src={marioAdrian}
          alt="Adrian and Mario of Little Lemon"
          className="adrian-mario-img"
        />
        <img src={adrian} alt="Adrian the co-owner" className="adrian-img" />
      </div>
    </section>
  );
}

export default About;
