import "./Gallery.css";
import Artwork from "./Artwork";

const Gallery = () => {


  window.addEventListener("scroll", () => {
    if (window.scrollY <= document.querySelector(".gallery-sect1").offsetTop) {
      document.querySelector(".gallery-sect1").classList.remove("hide");
    }
    if (window.scrollY > document.querySelector(".gallery-sect1").offsetTop) {
      document.querySelector(".gallery-sect1").classList.add("hide");
    }
  });
  return (
    <>
      <div className="gallery-sect1">
        <h2>The sky is not the limit,your mind is...</h2>
        <p>
          In this gallery you can see a selection of my colourful unique
          artistic coasters. I tried to include all the paintings of the night
          sky in this gallery. Each of the works is the result of my efforts of
          several months, in which I have spent all my energy during that time.
          This gallery will not be the end of my journey and I will prepare
          again for new galleries.
        </p>
      </div>
      <div>
        <h1 className="gallery-title "><span className="hiding-text">skyART</span> GALLERY</h1>
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
