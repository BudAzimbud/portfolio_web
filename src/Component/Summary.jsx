import React from "react";
import "./Summary.css";
function Summary() {
  return (
    <div className="container-fluid mt-3">
      <p className="title-page">What can i do</p>
      <div className="summary ">
        <div className="row  ">
          <div className="col">
            <h5>Frontend Dev</h5>
            <p>
              Develop application from the side design and Develop a good user
              interface and user experience, with a beautiful and comfortable
              appearance
            </p>
          </div>
          <div className="col">
            <h5>Backend Dev</h5>
            <p>
              Developing a very well-functioning web applications, various
              features and performance
            </p>
          </div>
          <div className="col">
            <h5>Deploy</h5>
            <p>
              Launching application and Develop a good Performance website and
              web application for more better experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
