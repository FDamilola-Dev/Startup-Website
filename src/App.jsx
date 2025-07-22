import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import ContentPage from './components/ContentPage';
import ContentPagee from './components/ContentPage2';
import './App.css';
import Talents from './components/Talents';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partners />
      <ContentPage
        image="/images/illustration1.png"
        title="Lorem ipsum dolor sit amet consectetur"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
      />
      <ContentPagee
        image="/images/illustration2.png"
        title="Another lorem section"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?"
      />
      <Talents/>
      <Footer/>
    </div>
  );
}

export default App;
