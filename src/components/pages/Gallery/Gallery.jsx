import "./Gallery.css";
import Artwork from "./Artwork";

const Gallery = () => {
  return (
    <>
      <div className="gallery-sect1">
        <h2></h2>
        <p></p>
      </div>
      <div>
        <h1 className="gallery-title">skyART GALLERY</h1>
        <div className="gallery-sect2">
          <Artwork src="/media/img1.jpg" />
          <Artwork src="/media/img2.jpg" />
          <Artwork src="/media/img3.jpg" />
          <Artwork src="/media/img4.jpg" />
          <Artwork src="/media/img5.jpg" />
          <Artwork src="/media/img6.jpg" />
          <Artwork src="/media/img7.jpg" />
          <Artwork src="/media/img8.jpg" />
          <Artwork src="/media/img9.jpg" />
          <Artwork src="/media/imgA.jpg" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
