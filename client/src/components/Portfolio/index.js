import React from "react";
import Fade from "react-reveal/Fade";

export default function Portfolio() {
  return (
    <div className="pt-5">
      <div className="container-fluid">
        <h2>Portfolio</h2>
        <div className="row">
          <Fade left>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Regal</h3>
                <a
                  href="https://regal-help.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/images/regal.png`)}
                    className="img-fluid rounded"
                    alt="Regal Website"
                  ></img>
                </a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Budgetek</h3>
                <a
                  href="https://quiet-tundra-30236.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/images//budgetek.png`)}
                    className="img-fluid rounded"
                    alt="Regal Website"
                  ></img>
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="row mt-5 pb-5">
          <Fade left>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">ShowPro</h3>
                <a
                  href="https://BlinkingHeimdall.github.io/show-pro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/images/showpro.png`)}
                    className="img-fluid rounded"
                    alt="Regal Website"
                  ></img>
                </a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Weather Dashboard</h3>
                <a
                  href="https://bmilner88.github.io/c6-weather-dashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/images/weatherdashboard.png`)}
                    className="img-fluid rounded"
                    alt="Regal Website"
                  ></img>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
