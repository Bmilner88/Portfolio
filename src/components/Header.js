import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import pdf from "../assets/pdf/resume.pdf";

const Header = ({ projectsRef }) => {
  const scrollToElement = () => projectsRef.current.scrollIntoView();

  const [showModal, setShowModal] = useState(false);

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
          className="flex items-center px-3 py-2 rounded text-white transition duration-500  hover:text-slate-700 hover:bg-[#BFbada55]"
        >
          <BiMenu size={25} />
        </button>
      </div>

      <div
        id="nav-content"
        className="w-full flex-grow sm:flex sm:items-center sm:w-auto hidden pt-6 sm:pt-0"
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
            <button onClick={() => setShowModal(true)} className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Form Goes Here
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-slate-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gradient-to-r from-green-400 to-blue-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </nav>
  );
};

export default Header;
