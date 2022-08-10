import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch"; */

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App justify-flex-start d-flex flex-column min-vh-100">
      <Header />
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-5">
            <img
              className="img-fluid rounded"
              src={require("./assets/images/main/ben-milner.jpg")}
              alt="Ben Milner"
            />
          </div>
          <p className="col about-text">
            Hi there! My name is Ben Milner, and I am seeking employment in the
            field of Web Development. I am well qualified, having completed a
            Full-Stack Web Development Boot Camp through the University of Utah
            in addition to my professional and personal experience. I am a fast
            learner, a reliable employee, and I work well with others both as
            part of a team and in assisting clients and fellow employees.
            <br />
            <br />I have about 4 years of professional experience in IT and have
            always been fascinated with technology. In my spare time I enjoy
            skiing, hiking and playing lots of games. I've been learning how to
            resin 3D print which definitely keeps my mind active. I love to
            travel and am looking forward to one day visiting a country outside
            of the US.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
