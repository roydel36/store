import * as React from "react"
import "./Contact.css"


const Contact = () => {
  return (
    <div className="heading">
      <div className="contact">
        <p className="color">Email: code@path.org</p>
        <p className="color">Phone: 1-800-CODEPATH</p>
        <p className="color">Address: 123 Fake Street, San Francisco, CA</p>
      </div>
      <img src="https://pbs.twimg.com/profile_images/1527299950073217024/H3Kw4tkF_400x400.jpg" className="abt1" />
    </div>
  );
};

export default Contact;