import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import ContentPage from "./components/ContentPage";
import ContentPagee from "./components/ContentPage2";
import Talents from "./components/Talents";
import Footer from "./components/Footer";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Service"
import Contact from "./Pages/Contact"

import "./App.css";
import contentPageImg from "./assets/hero2.svg";
import contentPageImg2 from "./assets/hero3.svg";


const Home = () => (
  <>
    <HeroSection />
    <Partners />
    <ContentPage
      image={contentPageImg}
      title="Lorem ipsum dolor sit amet consectetur"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
    />
    <ContentPagee
      image={contentPageImg2}
      title="Lorem ipsum dolor sit amet consectetur "
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
    />
    <Talents />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
