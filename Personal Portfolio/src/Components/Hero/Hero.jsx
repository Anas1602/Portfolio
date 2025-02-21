import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
