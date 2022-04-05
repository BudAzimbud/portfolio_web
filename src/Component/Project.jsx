import React from "react";
import Project1 from "../Asset/Project1.png";
import Project2 from "../Asset/Project2.png";

function Project() {
  return (
    <div className="container-fluid mt-3">
      <p className="title-page">My Project on going</p>
      <div className="summary ">
        <div className="row ml-5 ">
          <div className="col ">
            <h5>Nestjs & Vue js</h5>
            <a href="https://keepmy.space">
              <img src={Project1} alt="" width={"300"} />
            </a>
          </div>
          <div className="col ">
            <h5>Reactjs (CMS)</h5>
            <a href="/">
              <img src={Project2} alt="" width={"300"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
