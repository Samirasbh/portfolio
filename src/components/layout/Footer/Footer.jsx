import Button from "../../button/Button";
import "./Footer.css";
const Footer = () => {
  window.addEventListener("scroll" , ()=>{
    if(
      window.scrollY >= document.querySelector("form") &&
      window.scrollY < document.querySelector("footer")
    ){
      document.querySelector("footer").classList.remove(".vanish")
    }
    if(window.scrollY < document.querySelector("footer")){
      document.querySelector("form").classList.add(".vanish")
    }
  })
  return (
    <>
      <footer>
        {/* newsletter section */}
        <div className="newsletter">
          <h2>NEWSLETTER</h2>
          <span>
            Receive my monthly newsletter: photo tips, private sales,
            behind-the-scenes content and logbook of my current projects
          </span>

          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
            />
            <Button title={"TO REGISTER"} />
          </form>
        </div>

        {/* social media section */}
        <div className="social-icon">
          <h4>LET'S KEEP IN TOUCH</h4>
          <div className="sc-icon">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa  fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer