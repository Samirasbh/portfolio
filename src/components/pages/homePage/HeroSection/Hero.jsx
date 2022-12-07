import Button from "../../../button/Button";
import "./Hero.css";
const Hero = () => {
  window.addEventListener("scroll", () => {
    if (
      window.scrollY >= document.querySelector(".content").offsetTop &&
      window.scrollY < document.querySelector(".hero").offsetHeight
    )
      document.querySelector(".content").classList.remove("vanish");

    if (window.scrollY > document.querySelector(".hero").offsetHeight)
      document.querySelector(".content").classList.add("vanish");
  });

  return (
    <>
      <div className="hero">
        <div className="content">
          <h3>samira sobhani - sky painter</h3>
          <p>
            Follow your heart, it will lead you to heaven. I listened to the
            whisper of my soul and it showed me the path where the gates of
            bliss lay. I started to create my dream world on canvas And I
            nurtured the unlimited space of the sky in my mind to create my
            artwork. i named my collection SKYART , i hope you enjoy it.
          </p>
          <Button title={"Contact Me"} />
        </div>
      </div>
    </>
  );
};
export default Hero;
