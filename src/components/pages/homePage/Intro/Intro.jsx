import "./Intro.css";
import Button from "../../../button/Button"
const Intro = () => {
    
  return (
    <>
      <div className="intro">
        {/* cover section */}
        <div className="intro-cover">
          <img src="/media/intro.jpg" alt="intro cover " />
        </div>
        {/* content section */}
        <div className="intro-content">
          <h3>INTRODUCTION</h3>
          <p className="p-1">only from the heart you can touch the sky</p>
          <p>
            I am very happy that I was able to exhibit my works for the first
            time at the Paris Photo art exhibition. Finally, all my efforts paid
            off. All the works are inspired by the space of galaxies and sky.
            Where we realize the greatness of the universe and our smallness in
            front of it.
          </p>
          <Button title= "ORDER"/>
          
        </div>
      </div>
    </>
  );
};

export default Intro;
