const CoverImage = ({ image }) => {
  return (
    <div className="img-container">
      <img src={image} alt="music cover" className="cover" />
    </div>
  );
};

export default CoverImage;
