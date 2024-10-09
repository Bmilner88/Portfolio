"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState({
    sent: false,
    text: "",
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formState.name || !formState.email || !formState.message) {
  //     setMessage({
  //       sent: true,
  //       text: "Please fill in all the fields!",
  //     });
  //     return;
  //   }

  //   setMessage({
  //     sent: true,
  //     text: "Sending",
  //     loading: true,
  //   });

  //   await fetch("https://bm-portfolio-api.onrender.com/api/send/", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(formState),
  //   })
  //     .then((res) => res.json())
  //     .then(async (res) => {
  //       const resData = await res;
  //       if (resData.status === "success") {
  //         setMessage({
  //           sent: true,
  //           text: "Message Sent!",
  //           loading: false,
  //         });

  //         setFormState({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       } else if (resData.status === "fail") {
  //         setMessage({
  //           sent: true,
  //           text: `Message failed to send - Code: ${res.message.code}`,
  //           loading: false,
  //         });
  //       }
  //     });
  // };



  return (
    <div className="grid sm:grid-cols-2 sm:gap-20">
      <div className="flex justify-center sm:justify-end my-auto">
        <p>
          Like what you see? Want to see more? Send me a message!
          <br />
          <br />
          Be sure to include your name and email and we will be in touch!
        </p>
      </div>
      <div className="">
        {/* <h3 className="text-3xl font-semibold md:mb-2">Send Me An Email</h3> */}
        <form className="w-3/4 xl:w-full max-w-lg bg-slate-100 rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all duration-300"
                id="grid-name"
                name="name"
                type="text"
                placeholder="John Doe"
                //value={formState.name}
                onChange={handleChange}
              />
              <p className="hidden text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all duration-300"
                id="grid-email"
                name="email"
                type="email"
                placeholder="name@example.com"
                // value={formState.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all duration-300"
                id="grid-message"
                name="message"
                rows={8}
                placeholder="Message..."
                // value={formState.message}
                onChange={handleChange}
              />
              {/* {message.sent && message.loading && (
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
                      )} */}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-teal-400 to-blue-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-200 hover:scale-110"
              type="button"
              //onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
