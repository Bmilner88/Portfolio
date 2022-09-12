import React, { useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

import "./App.css";

function App() {
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <Header projectsRef={projectsRef} />
      <Hero />
      <div className="pt-5" ref={projectsRef}>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
