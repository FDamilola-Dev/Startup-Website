import google from "../assets/google.svg";
import microsoft from "../assets/microsoft.png";
import airbnb from "../assets/airbnb.png";
import facebook from "../assets/facebook.svg";
import spotify from "../assets/spotify.svg";

const Partners = () => {
  return (
    <section className="partners">
      <h4>PARTNERS</h4>
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
      <div className="logos">
        <img src={google} alt="Google" />
        <img src={microsoft} alt="Microsoft" />
        <img src={airbnb} alt="Airbnb" />
        <img src={facebook} alt="Facebook" />
        <img src={spotify} alt="Spotify" />
      </div>
      <button>Learn More</button>
    </section>
  );
};
export default Partners;
