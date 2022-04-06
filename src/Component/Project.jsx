import React from "react";
import Project1 from "../Asset/Project1.png";
import Project2 from "../Asset/Project2.png";

function Project() {
  return (
    <div className="container-fluid mt-3">
      <p className="title-page">My Project on going</p>
      <div className="project ">
        <div
          className="container"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "18rem", height: "55%" }}>
            <img className="card-img-top" src={Project1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">NestJS & VueJS</h5>
              <p className="card-text text-secondary">
                Purpose application to save your asset and notif to your family
                if u was gone
              </p>
              <a href="https://keepmy.space" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", height: "55%" }}>
            <img className="card-img-top" src={Project2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">ReactJs (CMS)</h5>
              <p className="card-text text-secondary">
                Purpose application to manage app in my internal Project like
                cms application
              </p>
              <a
                href="https://wa.me/+62895323496371"
                className="btn btn-primary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
