import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "df06626a-97c8-442f-897f-5d65730a9bb6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        console.error("Submission Error:", data);
        setResult(data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want to work on!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p> anas.laribi95@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+212 6 15 97 96 88</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Le Havre, France</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            name="email"
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter Your Message"></textarea>
          <button
            className="contact-submit"
            type="submit"
            disabled={result === "Sending...."}>
            {result === "Sending...." ? "Sending..." : "Submit Now"}
          </button>
          <p className="contact-result">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
