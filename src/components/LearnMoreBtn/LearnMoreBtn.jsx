import "../LearnMoreBtn/LearnMoreBtn.css";
const LearnMore = ({label = "Learn More"}) => {
  return (
    <div>
      <button className="learn-more-btn">{label}</button>
    </div>
  );
};

export default LearnMore;
