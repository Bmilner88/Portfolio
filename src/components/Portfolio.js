import React from "react";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-center text-slate-300 font-bold text-3xl my-7">Portfolio</h2>
      <section className="h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center mb-7 gap-10">
        <div className="bg-slate-200 rounded-lg w-9/12 shadow-lg">
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <a
            href="https://bm-skyscape.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require(`../assets/images/portfolio/skyscape.png`)}
              className="rounded-b-lg"
              alt="Skyscape website"
            ></img>
          </a>
        </div>
        <div className="bg-slate-200 rounded-lg w-9/12 shadow-lg">
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <a
            href="https://bm-skyscape.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require(`../assets/images/portfolio/skyscape.png`)}
              className="rounded-b-lg"
              alt="Skyscape website"
            ></img>
          </a>
        </div>

        <div className="bg-slate-200 rounded-lg w-9/12 shadow-lg">
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <a
            href="https://bm-skyscape.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require(`../assets/images/portfolio/skyscape.png`)}
              className="rounded-b-lg"
              alt="Skyscape website"
            ></img>
          </a>
        </div>
        <div className="bg-slate-200 rounded-lg w-9/12 shadow-lg">
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <a
            href="https://bm-skyscape.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require(`../assets/images/portfolio/skyscape.png`)}
              className="rounded-b-lg"
              alt="Skyscape website"
            ></img>
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
