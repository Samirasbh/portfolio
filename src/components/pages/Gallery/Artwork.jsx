import "./Artwork.css"
const Artwork = (props) => {
  return (
    <>
      <div className="art-container">
        <img src={props.src} alt="this is a painting" />
      </div>
    </>
  );
};

export default Artwork;
