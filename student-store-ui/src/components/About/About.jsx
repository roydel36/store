import * as React from "react"
import "./About.css"


const About = () => {
  return (
    <div className="foot">
      <div className="about">
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
      </div>
      <img src="https://mma.prnewswire.com/media/1800392/codepath_1x1_solid_dark_Logo.jpg?p=twitter" className="hero-img1" />
    </div>
  );
};

export default About;