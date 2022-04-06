import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container bg-light">
      <div className="hero">
        <div className="row d-flex justify-content-center">
          <h1>
            What about <strong className="text-primary">Me</strong>
          </h1>
        </div>
        <div className="row d-flex justify-content-center">
          <p className="text-secondary">Hello Let me tell about me</p>
        </div>
      </div>
      <div className="story mt-3">
        <strong>Hay its about me that's im Azim as Developer</strong>
        <p className="text-secondary">
          My name is Azim , i live in bandung.. I was graduated in 2021 from
          high school<br></br>
          Now i'm focus on my career and deep learning about Programming.{" "}
          <br></br>
          I'm good about logic as well good as backend but i've got chance as
          Frontend eenginering <br></br>
          unless interest about design but im always practice my self<br></br>
          <br></br>
          <strong>What is my goal</strong>
          <br></br>I wanna be master in nodejs and make so many contribution and
          be master in golang and get my careers in google
          <br></br>
          <br></br>
          <strong>I want</strong>
          <br></br>
          Im just wanna have private room with programming tool(exp : chair ,
          table , laptop and more...) programming and do it every day
        </p>
      </div>
    </div>
  );
}

export default About;
