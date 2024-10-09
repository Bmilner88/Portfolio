"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [message, setMessage] = useState({
  //   sent: false,
  //   text: "",
  //   loading: false,
  // });

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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setMessage({
  //     sent: false,
  //     text: "",
  //   });

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <h3 className="text-3xl font-semibold">Send Me An Email</h3>
      <form className="w-full max-w-lg">
        <div className="form-group">
          <label>Name</label>
          <input
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="John Doe"
            name="name"
            type="text"
            // value={formState.name}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="mt-3">Email</label>
          <input
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="name@example.com"
            name="email"
            type="email"
            // value={formState.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="mt-3">Message</label>
          <textarea
            className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            placeholder="Message..."
            name="message"
            // type="text"
            rows={8}
            // value={formState.message}
            // onChange={handleChange}
          />
        </div>
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
        <button
          className="bg-gradient-to-r from-green-400 to-blue-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-200 hover:scale-110"
          type="button"
          //onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </>
  );
}
