import React from "react";
import Fade from "react-reveal/Fade";

export default function Portfolio() {
  return (
    <div className="pt-5" id="projects">
      <div className="container-fluid">
        <div className="row">
          <Fade left>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Regal</h3>
                <a
                  href="https://regal-help.herokuapp.com/"
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>
              </div>
              <img
                src={require(`../../assets/images/regal.png`)}
                className="img-fluid rounded"
                alt="Regal Website"
              ></img>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Regal</h3>
                <a
                  href="https://regal-help.herokuapp.com/"
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>
              </div>
              <img
                src={require(`../../assets/images/regal.png`)}
                className="img-fluid rounded"
                alt="Regal Website"
              ></img>
            </div>
          </Fade>
        </div>
        <div className="row mt-5 pb-5">
          <Fade left>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Regal</h3>
                <a
                  href="https://regal-help.herokuapp.com/"
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>
              </div>
              <img
                src={require(`../../assets/images/regal.png`)}
                className="img-fluid rounded"
                alt="Regal Website"
              ></img>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6">
              <div className="project-caption">
                <h3 className="text-center">Regal</h3>
                <a
                  href="https://regal-help.herokuapp.com/"
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>
              </div>
              <img
                src={require(`../../assets/images/regal.png`)}
                className="img-fluid rounded"
                alt="Regal Website"
              ></img>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
