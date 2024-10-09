import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-800">
      {/* Hero */}
      <section className="container mx-auto py-40z">
        <div className="columns-2">
          <Image
            className="gap-8 w-1/2 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-600 p-1 shadow-xl shadow-slate-900"
            src={"/images/main/ben-milner.jpg"}
            width={500}
            height={500}
            alt="Ben Milner"
          />
        </div>
      </section>
      {/* Portfolio */}
      <h2 id="portfolio" className="text-center text-slate-300 font-bold text-5xl my-12">
        Portfolio
      </h2>
      <section className="h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center mb-7 gap-5">
        <div className="relative text-center">
          <a
            href="https://www.pickupapiece.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/images/portfolio/puap.png"}
              width={1000}
              height={500}
              alt="Pick Up a Piece landing page"
              className="rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
            />
            <div className="w-full absolute top-0 left-0 text-center mt-10">
              <h2 className="text-4xl font-bold text-red-500 text-center">
                Pick Up A Piece
              </h2>
            </div>
          </a>
        </div>

        <a
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
          href="https://regal-help.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/portfolio/regal.png"}
            width={1000}
            height={500}
            alt="Regal landing page"
          />
        </a>
      </section>
      {/* <section className="h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center mb-7 gap-5">
        <a
          href="https://www.pickupapiece.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">
            Pick Up A Piece
          </h3>
          <Image
            src={"/images/portfolio/puap.png"}
            width={1000}
            height={500}
            alt="Pick Up a Piece landing page"
          />
        </a>
        <a
          href="https://bm-skyscape.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <Image
            src={"/images/portfolio/skyscape.png"}
            width={1000}
            height={500}
            alt="Skyscape landing page"
          />
        </a>
        <a
          href="https://regal-help.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Regal</h3>
          <Image
            src={"/images/portfolio/regal.png"}
            width={1000}
            height={500}
            alt="Regal landing page"
          />
        </a>
        <a
          href="https://BlinkingHeimdall.github.io/show-pro/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">ShowPro</h3>
          <Image
            src={"/images/portfolio/showpro.png"}
            width={1000}
            height={500}
            alt="ShowPro landing page"
          />
        </a>
      </section> */}
      {/* Contact */}
      <h2 className="text-center text-slate-300 font-bold text-5xl my-12">
        Contact
      </h2>
      <section>
        <div></div>
      </section>
      {/* Footer */}
      <div className="flex place-content-center gap-x-10 py-3">
        <a
          href="https://www.linkedin.com/in/bmilner88"
          target="_blank"
          rel="noreferrer"
          className="text-white transition duration-500 hover:text-green-300"
        ></a>
        <a
          href="https://github.com/Bmilner88"
          target="_blank"
          rel="noreferrer"
          className="text-white transition duration-500 hover:text-green-300"
        ></a>
        <a
          href="https://stackoverflow.com/users/19388818/ben-milner"
          target="_blank"
          rel="noreferrer"
          className="text-white transition duration-500 hover:text-green-300"
        ></a>
      </div>
    </div>
  );
}
