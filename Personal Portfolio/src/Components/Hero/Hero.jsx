import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I am Anas Laribi</span>, Frontend Developer Based In Morocco
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos
        deleniti saepe officia in recusandae, aliquam non odio harum vero
        ducimus. Quaerat debitis impedit cupiditate
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
