import React from "react";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <div className="pt-5" id="projects">
      <div className="container-fluid">
        <div className="row">
          <h2>Projects</h2>
          <div className="card m-5 col">
            <Fade left>
              <div className="card-body">
                <a
                  href="https://regal-help.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="card-header">Regal</h4>
                </a>
                <img
                  id="regal"
                  src={require(`../../assets/images/regal.png`)}
                  alt="Regal"
                  className="card-img"
                />
                <a
                  className="btn btn-primary mt-3"
                  href="https://github.com/BlinkingHeimdall/Regal"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </Fade>
          </div>
          <div className="card m-5 col">
            <Fade right>
              <div className="card-body">
                <a
                  href="https://quiet-tundra-30236.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="card-header">Budgetek</h4>
                </a>
                <img
                  id="budgetek"
                  src={require(`../../assets/images//budgetek.png`)}
                  alt="ShowPro"
                  className="card-img"
                />
                <a
                  className="btn btn-primary mt-3"
                  href="https://github.com/dsamuelson/Budgetek"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="card m-5 col">
            <Fade left>
              <div className="card-body">
                <a
                  href="https://BlinkingHeimdall.github.io/show-pro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="card-header">ShowPro</h4>
                </a>
                <img
                  id="showpro"
                  src={require(`../../assets/images/showpro.png`)}
                  alt="ShowPro"
                  className="card-img"
                />
                <a
                  className="btn btn-primary mt-3"
                  href="https://github.com/BlinkingHeimdall/show-pro"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </Fade>
          </div>
          <div className="card m-5 col">
            <Fade right>
              <div className="card-body">
                <a
                  href="https://bmilner88.github.io/sfcc-cg-xml-gen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="card-header">SFCC Customer Group XML Gen</h4>
                </a>
                <img
                  id="sfcc-xml"
                  src={require(`../../assets/images/sfcc-xml.png`)}
                  alt="SFCC Customer Group XML Gen"
                  className="card-img"
                />
                <a
                  className="btn btn-primary mt-3"
                  href="https://github.com/Bmilner88/sfcc-cg-xml-gen"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row bottom-cards">
          <div className="project card m-5 col">
            <Fade left>
              <div className="card-body">
                <a
                  href="https://bmilner88.github.io/c4-code-quiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="card-header">Code Quiz</h4>
                </a>
                <img
                  id="code=quiz"
                  src={require(`../../assets/images/code-quiz.png`)}
                  alt="Code Quiz"
                  className="card-img-top"
                />
                <a
                  className="btn btn-primary mt-3"
                  href="https://github.com/Bmilner88/c4-code-quiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </Fade>
          </div>
          <div className="project card m-5 col">
            <Fade right>
              <div className="card-body">
                <a
                  href="https://bmilner88.github.io/c6-weather-dashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="card-header">Weather Dashboard</h4>
                </a>
                <img
                  id="weather-dashboard"
                  src={require("../../assets/images/weather-dashboard.png")}
                  alt="Weather Dashboard"
                  className="card-img"
                />
                <a
                  className="btn btn-primary mt-3"
                  href="https://github.com/Bmilner88/c6-weather-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
