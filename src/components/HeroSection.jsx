import heroImg from '../assets/heroImg.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>WELCOME</p>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
        <button>Explore</button>
      </div>
      <img src={heroImg} alt="hero illustration" />
    </section>
  );
};
export default Hero;
