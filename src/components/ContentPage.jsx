import contentPageImg from '../assets/hero2.svg'
const ContentPage = ({ image, title, text }) => {
  return (
    <section className="content-page">
      <img src={contentPageImg} alt="content visual" />
      <div className='text'>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};
export default ContentPage;