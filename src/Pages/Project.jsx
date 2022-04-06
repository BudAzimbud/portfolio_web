import React from "react";
import Project from "../Component/Project";
import "./Project.css";
function ProjectPage() {
  return (
    <div className="container-fluid bg-light">
      <div className="project-hero ">
        <h1>
          <strong className="text-primary">P</strong>roject
        </h1>
        <p className="text-secondary">
          some of the projects that I've worked on to completion with some of
          the technologies
        </p>
        <Project />
      </div>
    </div>
  );
}

export default ProjectPage;
