import React from "react";

import pdf from "../assets/pdf/resume.pdf";

const Header = ({ projectsRef }) => {
  const scrollToElement = () => projectsRef.current.scrollIntoView();

  return (
    <header className="fixed top-0 w-screen m-0 flex flex-col">
      <nav className="bg-gradient-to-r from-green-400 to-blue-400 shadow-lg">
        <div className="container mx-auto">
          <div className="sm:flex justify-around">
            <h1 className="text-white text-3xl font-bold p-3">Ben Milner</h1>
            <ul className="text-white sm:self-center text-xl border-t sm:border-none">
              <li className="sm:inline-block">
                <button
                  className="p-3 transition duration-200 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]"
                  onClick={scrollToElement}
                >
                  Projects
                </button>
              </li>
              <li className="sm:inline-block">
                <a href={pdf} target="_blank" rel="noreferrer">
                  <button className="p-3 transition duration-200 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">Resume</button>
                </a>
              </li>
              <li className="sm:inline-block">
                <button className="p-3 transition duration-200 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
