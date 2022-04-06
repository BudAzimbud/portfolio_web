import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className="container-fluid bg-light">
      <div className="resume-hero ">
        <h1>
          <strong className="text-primary">R</strong>esume
        </h1>
        <p className="text-secondary">
          My Experience, education and all activeness{" "}
        </p>
      </div>

      <div className="work-experience mt-3">
        <h5 className="text-secondary">Work Experience</h5>
        <ul>
          <li>
            <h6>Frontend Developer</h6>
            <p className="text-secondary">
              On present develop application from side UI at PT.WGS
            </p>
          </li>
          <li>
            <h6>Backend Developer</h6>
            <p className="text-secondary">
              Bootcamp at Adhavi on September-Desember 2022{" "}
            </p>
          </li>
        </ul>
      </div>

      <div className="work-experience mt-3">
        <h5 className="text-secondary">Educational</h5>
        <ul>
          <li>
            <h6>Software Eenginering(RPL)</h6>
            <p className="text-secondary">
              Studying at SMK Wiraswata Cimahi and graduated on 2021
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
