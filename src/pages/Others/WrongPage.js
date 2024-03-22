import starWars from "../../assets/star-wars.gif";
import "./WrongPage.css";

function WrongPage() {
  return (
    <div className="page-container">
      <h1 className="title">This isn't the page you're looking for!</h1>
      <h2 className="sub-title">
        (Click either Home or Reservations in the navbar above for relevant
        parts of the project)
      </h2>
      <img src={starWars} className="star-wars-img" alt="Star Wars meme" />
    </div>
  );
}

export default WrongPage;
