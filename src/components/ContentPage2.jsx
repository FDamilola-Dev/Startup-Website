const ContentPagee = ({ image,title, text }) => {
  return (
    <section className="content-page">
      <img src={image} alt="content visual" />
      <div className='text'>
        <h2>{title}</h2>
        <p>{text}</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};
export default ContentPagee;