import Navbar from "../components/Navbar";
import Works from "../components/Works";
import PortfolioCard from "../components/portfolioCard";
import LearnMoreButton from "../components/LearnMoreBtn/LearnMoreBtn";
import "./Portfolio.css";
import Footer from "../components/Footer";

import port1 from "../assets/portfolioAssets/portCard1.svg";
import port2 from "../assets/portfolioAssets/portCard2.svg";
import port3 from "../assets/portfolioAssets/portCard3.svg";
import portF from "../assets/portfolioAssets/portCardF.svg";
import port4 from "../assets/portfolioAssets/portCard4.svg";
import port5 from "../assets/portfolioAssets/portCard5.svg";
import port6 from "../assets/portfolioAssets/portCard6.svg";
import port7 from "../assets/portfolioAssets/portCard7.png";

// Desktop Assets
import portDesk1 from "../assets/portfolioAssets/portDesk1.svg";
import portDesk2 from "../assets/portfolioAssets/portDesk2.svg";
import portDesk3 from "../assets/portfolioAssets/portDesk3.svg";
import portDesk4 from "../assets/portfolioAssets/portDesk4.svg";
import portDesk5 from "../assets/portfolioAssets/portDesk5.svg";
import portDesk6 from "../assets/portfolioAssets/portDesk6.svg";
import portDesk7 from "../assets/portfolioAssets/portDesk7.svg";
import portDesk8 from "../assets/portfolioAssets/portDesk8.svg";

const Portfolio = () => {
  const cards = [
    { image: port1 },
    { image: port2 },
    { image: port3 },
    { image: portF },
    { image: port4 },
    { image: port5 },
    { image: port6 },
    { image: port7 },
  ];

  const deskCards = [
    { image: portDesk1 },
    { image: portDesk2 },
    { image: portDesk3 },
    { image: portDesk4 },
    { image: portDesk5 },
    { image: portDesk6 },
    { image: portDesk7 },
    { image: portDesk8 },
  ];
  return (
    <div className="PortfolioWrapper">
      {/* <Navbar /> */}
      <Works />
      <div className="portfolioCards">
        {cards.map((card, index) => (
          <PortfolioCard key={index} image={card.image} />
        ))}
      </div>

      <div className="deskPortfolioCards">
        {deskCards.map((card, index) => (
          <PortfolioCard key={index} image={card.image} />
        ))}
      </div>

      <div className="lrnMoreBtn">
        <LearnMoreButton to="/PortfolioPage" label="Learn More" />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
