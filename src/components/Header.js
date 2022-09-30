import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import pdf from "../assets/pdf/resume.pdf";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState({
    set: false,
    text: "",
    loading: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setMessage({
        sent: true,
        text: "Please fill in all the fields!",
      });
      return;
    }

    setMessage({
      sent: true,
      text: "Sending",
      loading: true,
    });

    await fetch("https://bm-portfolio-api.onrender.com/api/send/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === "success") {
          setMessage({
            sent: true,
            text: "Message Sent!",
            loading: false,
          });

          setFormState({
            name: "",
            email: "",
            message: "",
          });
        } else if (resData.status === "fail") {
          setMessage({
            sent: true,
            text: `Message failed to send - Code: ${res.message.code}`,
            loading: false,
          });
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage({
      sent: false,
      text: "",
    });

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
            <a href="https://github.com/Bmilner88?tab=stars" target="_blank" rel="noreferrer">
              <button className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">
                Projects
              </button>
            </a>
          </li>
          <li className="mr-3">
            <a href={pdf} target="_blank" rel="noreferrer">
              <button className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]">
                Resume
              </button>
            </a>
          </li>
          <li className="mr-3">
            <button
              onClick={() => setShowModal(true)}
              className="text-white font-semibold p-2 transition duration-500 rounded-xl hover:text-slate-700 hover:bg-[#BFbada55]"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative sm:w-[550px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Send Me An Email</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="container">
                    <div className="row justify-content-center mx-auto">
                      <div className="form-group">
                        <label for="name">Name</label>
                        <input
                          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                          placeholder="John Doe"
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mt-3" for="email">
                          Email
                        </label>
                        <input
                          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                          placeholder="name@example.com"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="mt-3" for="message">
                          Message
                        </label>
                        <textarea
                          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                          placeholder="Message..."
                          name="message"
                          type="text"
                          rows="8"
                          value={formState.message}
                          onChange={handleChange}
                        />
                      </div>
                      {message.sent && message.loading && (
                        <div>
                          <div id="message-sent" className="mt-4">
                            <p>
                              {message.text}{" "}
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                              ></span>
                            </p>
                          </div>
                        </div>
                      )}
                      {message.sent && !message.loading && (
                        <div id="message-sent" className="mt-4">
                          <p>{message.text}</p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-slate-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 transition duration-500 rounded hover:text-slate-700 hover:bg-[#BFbada55]"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gradient-to-r from-green-400 to-blue-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-200 hover:scale-110"
                    type="button"
                    onClick={handleSubmit}
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
