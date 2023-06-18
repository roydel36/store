import * as React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Welcome!</h1>
        <h1>Find Your Merch!</h1>
        <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
      </div>
      <img src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" className="hero-img" />
    </div>
  );
};

export default Hero;