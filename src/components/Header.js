import React from "react";
import { BiMenu } from "react-icons/bi";

import pdf from "../assets/pdf/resume.pdf";

const Header = ({ projectsRef }) => {
  const scrollToElement = () => projectsRef.current.scrollIntoView();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-blue-400 shadow-lg p-6 fixed w-screen z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="text-white text-3xl font-bold">Ben Milner</h1>
      </div>

      <div className="block sm:hidden">
        <button
          onClick={() => {
            document.getElementById("nav-content").classList.toggle("hidden");
          }}
          className="flex items-center px-3 py-2 rounded text-white hover:text-slate-700 hover:bg-[#BFbada55]"
        >
          <BiMenu size={25} />
        </button>
      </div>

      <div
        id="nav-content"
        className="w-full flex-grow sm:flex sm:items-center sm:w-auto hidden sm:block pt-6 sm:pt-0"
      >
        <ul className="list-reset sm:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <button
              className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]"
              onClick={scrollToElement}
            >
              Projects
            </button>
          </li>
          <li className="mr-3">
            <a href={pdf} target="_blank" rel="noreferrer">
              <button className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">
                Resume
              </button>
            </a>
          </li>
          <li className="mr-3">
            <button className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
