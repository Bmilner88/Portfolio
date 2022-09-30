import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-slate-800">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
