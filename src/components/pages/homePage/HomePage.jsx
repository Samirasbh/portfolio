import "./HomePage.css";

import Hero from "./HeroSection/Hero";
import Intro from "./Intro/Intro";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Hero />
        <Intro/>
      </div>
    </>
  );
};
export default HomePage;
