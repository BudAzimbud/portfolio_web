import React from "react";
import Hero from "../Component/Hero";
import Project from "../Component/Project";
import Skill from "../Component/Skill";
import Summary from "../Component/Summary";

function Home() {
  return (
    <React.Fragment>
        <Hero />
        <Summary />
        <Skill />
        <Project />
    </React.Fragment>
  );
}

export default Home;
