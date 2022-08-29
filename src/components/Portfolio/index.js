import React from "react";
import Fade from "react-reveal/Fade";

export default function Portfolio() {
  return (
    <div className="pt-5">
      <div className="container-fluid">
        <h2>Portfolio</h2>
        <div className="row">
          <Fade left>
            <div className="col-sm-6 pb-3">
              <div className="project-caption m-3">
                <h3 className="text-center">Skyscape</h3>
                <a
                  href="https://bm-skyscape.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/images/portfolio/skyscape.png`)}
                    className="img-fluid rounded"
                    alt="Skyscape website"
                  ></img>
                </a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <div className="project-caption m-3">
                <h3 className="text-center">Regal</h3>
                <a
                  href="https://regal-help.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/images/portfolio/regal.png`)}
                    className="img-fluid rounded"
                    alt="Regal website"
                  ></img>
                </a>
              </div>
            </div>
          </Fade>
          <div className="row">
            <Fade left>
              <div className="col-sm-6">
                <div className="project-caption m-3">
                  <h3 className="text-center">Budgetek</h3>
                  <a
                    href="https://quiet-tundra-30236.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../../assets/images/portfolio/budgetek.png`)}
                      className="img-fluid rounded"
                      alt="Budgetek website"
                    ></img>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-sm-6">
                <div className="project-caption m-3">
                  <h3 className="text-center">ShowPro</h3>
                  <a
                    href="https://BlinkingHeimdall.github.io/show-pro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../../assets/images/portfolio/showpro.png`)}
                      className="img-fluid rounded"
                      alt="ShowPro website"
                    ></img>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
