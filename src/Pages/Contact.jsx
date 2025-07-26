import React from "react";
// import "../styles/ContactSection.css";
import map from "../assets/map.svg"
// import desktopmap from "../assets/desktopmap.svg"
import LearnMore from "../components/LearnMoreBtn/LearnMoreBtn";
import Footer from "../components/Footer";
import "./Contact.css"

const ContactSection = () => {
  return (
    <section className="contactSection">
      <div className="contactHeader">
        <h2>Contact Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="contactContent">
        <form className="contactForm">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here" rows="4" />

           <div className="submit">
                       <LearnMore to="/Contact" label="Submit" />
                     </div>
        </form>

        <div className="contactMap">
          <img src={map} alt="" />
          {/* <img src={desktopmap} alt="" /> */}
        </div>
      </div>
      <div className="Footer">
              <Footer to="/Footer" label="Footer" />
            </div>
    </section>

  );
};

export default ContactSection;
