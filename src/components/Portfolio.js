import React from "react";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-center text-slate-300 font-bold text-5xl my-7">
        Portfolio
      </h2>
      <section className="h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center mb-7 gap-5">
        <a
          href="https://bm-skyscape.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <img
            src={require(`../assets/images/portfolio/skyscape.png`)}
            className="rounded-b-lg"
            alt="Skyscape website"
          ></img>
        </a>
        <a
          href="https://regal-help.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Regal</h3>

          <img
            src={require(`../assets/images/portfolio/regal.png`)}
            className="rounded-b-lg"
            alt="Regal website"
          ></img>
        </a>

        <a
          href="https://quiet-tundra-30236.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Budgetek</h3>
          <img
            src={require(`../assets/images/portfolio/budgetek.png`)}
            className="rounded-b-lg"
            alt="Budgetek website"
          ></img>
        </a>
        <a
          href="https://BlinkingHeimdall.github.io/show-pro/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">ShowPro</h3>
          <img
            src={require(`../assets/images/portfolio/showpro.png`)}
            className="rounded-b-lg"
            alt="ShowPro website"
          ></img>
        </a>
      </section>
    </>
  );
};

export default Portfolio;
