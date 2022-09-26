import React, { useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  const projectsRef = useRef(null);

  return (
    <div>
      <Header projectsRef={projectsRef} />
      <Hero />
      <div ref={projectsRef}>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
