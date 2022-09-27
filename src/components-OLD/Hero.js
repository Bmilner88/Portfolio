import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div className="my-5 pb-5">
      <Fade>
        <div className="container">
          <div style={{ minHeight: "75vh" }} className="row justify-content-center align-items-center g-5">
            <div className="col-sm-5">
              <img
                className="img-fluid rounded"
                src={require("../assets/images/main/ben-milner.jpg")}
                alt="Ben Milner"
              />
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm">
              <p className="m-0 about-text">
                Hi there! My name is Ben Milner, and I am seeking employment in
                the field of Web Development. I am well qualified, having
                completed a Full-Stack Web Development Boot Camp through the
                University of Utah in addition to my professional and personal
                experience. I am a fast learner, a reliable employee, and I work
                well with others both as part of a team and in assisting clients
                and fellow employees.
                <br />
                <br />I have about 4 years of professional experience in IT and
                have always been fascinated with technology. In my spare time I
                enjoy skiing, hiking and playing lots of games. I've been
                learning how to resin 3D print which definitely keeps my mind
                active. I love traveling to new places and learning new things.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}