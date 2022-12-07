import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-container">
        {/* image section */}
        <div className="image-holder">
          <img src="/media/info.png" alt="" />
        </div>

        {/* info section */}
        <div className="about-text">
          <h2>About Me</h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam quos iusto molestias natus et optio, ratione provident
              nisi sint laboriosam voluptate quas fuga exercitationem velit
              necessitatibus assumenda! Voluptatibus, eveniet inventore? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              quibusdam aperiam modi, explicabo voluptas, quia at accusantium
              reiciendis quas sed ipsam. Exercitationem perferendis voluptatum
              harum voluptate dolores sapiente obcaecati magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam quos iusto molestias natus et optio, ratione provident
              nisi sint laboriosam voluptate quas fuga exercitationem velit
              necessitatibus assumenda! Voluptatibus, eveniet inventore?
            </p>
          </div>
        </div>
    </>
  );
};
export default About;