import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  let [message, setMessage] = useState({ sent: false, text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/send", {
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
            text: "Message sent!",
          });

          setFormState({
            name: "",
            email: "",
            message: "",
          });
        } else if (resData.status === "fail") {
          setMessage({
            sent: true,
            text:`Message failed to send, code: ${res.message.code}`
          });
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="page">
      <h2 className="contact">Contact Me</h2>
      <form
        id="contact-form"
        className="container col-lg-6 offset-lg-3"
        onSubmit={handleSubmit}
      >
        <div className="row justify-content-center">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              className="form-control"
              placeholder="John Doe"
              name="name"
              type="text"
              id="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input
              className="form-control"
              placeholder="name@example.com"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              className="form-control"
              placeholder="Message..."
              name="message"
              type="text"
              id="message"
              rows="10"
              value={formState.message}
              onChange={handleChange}
            />
          </div>

          <button id="submit" className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      {message.sent && (
        <div className="message-sent">
          <p>{message.text}</p>
        </div>
      )}
    </section>
  );
}
