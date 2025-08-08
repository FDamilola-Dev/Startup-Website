import React from "react";
import "./Service.css";
import LearnMoreButton from "../components/LearnMoreBtn/LearnMoreBtn";
// import Partner from "../components/Partners"

import Footer from "../components/Footer";
const servicePlans = [
  {
    name: "Basic",
    price: "$100",
    period: "/month",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    features: [
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
    ],
  },
  {
    name: "Plus",
    price: "$250",
    period: "/month",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    features: [
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
    ],
  },
  {
    name: "Pro",
    price: "$400",
    period: "/month",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    features: [
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
      "Lorem ipsum, dolor sit",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="serviceSection">
      <div className="textWrapper">
        <p className="title">PLANS</p>
        <h2 className="planTitle">Our Services</h2>
        <p className="planSubtext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="cardsWrapper">
        {servicePlans.map((plan) => (
          <div className="top">
            <div className="card" key={plan.name}>
              <h3 className="planName">{plan.name}</h3>
              <div className="price">
                <span> {plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="description">{plan.description}</p>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="check">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="lrnMoreBtn">
              <LearnMoreButton to="/PortfolioPage" label="Learn More" />
            </div>
          </div>
        ))}
      </div>
      <div className="Footer">
        <Footer to="/Footer" label="Footer" />
      </div>
    </section>
  );
};

export default ServicesSection;
