import React from "react";
import "./style.css";

function Profile() {
  return (
    <div className="container-profile">
      <h3 className="color-yellow">About Me</h3>
      <p>
        My name is Soy Sin. I was born on 20 May 2000.
        <br></br>I am a Mobile Developer. I want to make everything to you if
        need.
        <br></br>I want to build everything that you need.
      </p>
      <div className="button">
        <button className="button-inline">Download CV</button>
        <button className="button-outline margin">Portfolio</button>
      </div>
    </div>
  );
}

export default Profile;
