// import Card from "../assets/portfolioAssets/portCard1.svg";

const PortfolioCard = ({image}) => {
  return (
    <div className="portfolio-grid">
      <div className="card">
        <img src={image} alt="Portfolio Page Design" />
      </div>
    </div>
  );
};

export default PortfolioCard;
