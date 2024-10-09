"use client";
import { useState, useEffect, use } from "react";

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
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setMessage({
        ...message,
        sent: true,
        text: "Please fill in all the fields!",
      });
      return;
    } else {
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
        .then(async (data) => {
          const resData = await data;
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
              text: `Message failed to send - Code: ${data.message.code}`,
              loading: false,
            });
          }
        });
    }
  };

  return (
    <section id="contact" className="scroll-mt-36">
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
            <div className="flex flex-wrap -mx-3">
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
              </div>
            </div>
            <div className="flex justify-center mb-3">
              {message.sent && message.loading && (
                <div id="message-sent" className="text-gray-700">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>{message.text} </p>
                    <svg
                      className="text-gray-300 animate-spin m-2"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-gray-900"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
              {message.sent && !message.loading && (
                <div id="message-sent" className="text-gray-700">
                  <p>{message.text}</p>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-teal-400 to-blue-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-200 hover:scale-110"
                type="button"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
