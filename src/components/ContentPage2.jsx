import contentPageImg2 from '../assets/hero3.svg'
const ContentPagee = ({ image, title, text }) => {
  return (
    <section className="content-page">
      <img src={contentPageImg2} alt="content visual" />
      <div className='text'>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};
export default ContentPagee;