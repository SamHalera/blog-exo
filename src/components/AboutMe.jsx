import imgAboutMe from "../images/aboutme.jpg";
const AboutMe = () => {
  return (
    <div className="about-me">
      <h3>About Me</h3>
      <img src={imgAboutMe} alt="" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, non
        recusandae? Eaque ab possimus suscipit tempora eligendi aliquam dolore
        ratione similique,
      </p>
    </div>
  );
};
export default AboutMe;
