import React from "react";
import "./Skill.css";
import { DiReact, DiRedis } from "react-icons/di";
import { SiNestjs, SiMongodb, SiDocker } from "react-icons/si";
function Skill() {
  return (
    <div className="container-fluid mt-3">
      <p className="title-page">Technology used</p>
      <div className="summary">
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <h5>Reactjs</h5>
            <h1>
              <DiReact />
            </h1>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <h5>Nestjs</h5>
            <h1>
              <SiNestjs />
            </h1>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <h5>Mongodb</h5>
            <h1>
              <SiMongodb />
            </h1>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <h5>Docker</h5>
            <h1>
              <SiDocker />
            </h1>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <h5>Redis</h5>
            <h1>
              <DiRedis />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
