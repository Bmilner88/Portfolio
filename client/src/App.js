import React, { useRef } from "react";
import Fade from "react-reveal/Fade";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

import "./App.css";

function App() {
  const projectsRef = useRef(null);

  return (
    <div className="App justify-flex-start">
      <Header projectsRef={projectsRef} />
      <div className="container about-container">
        <Fade>
          <div className="row align-items-center">
            <div className="col-sm-5 mt-5">
              <img
                className="img-fluid rounded"
                src={require("./assets/images/main/ben-milner.jpg")}
                alt="Ben Milner"
              />
            </div>
            <div className="col-sm-1 mt-5"></div>
            <p className="col-sm about-text">
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
              enjoy skiing, hiking and playing lots of games. I've been learning
              how to resin 3D print which definitely keeps my mind active. I
              love to travel and am looking forward to one day visiting a
              country outside of the US.
            </p>
          </div>
        </Fade>
      </div>
      <div className="container mt-5" ref={projectsRef}>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
