import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import pdf from "../../assets/pdf/resume.pdf";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  let [message, setMessage] = useState({ sent: false, text: "" });


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formState.name || !formState.email || !formState.message) {
      setMessage({
        sent: true,
        text: "Please make sure all fields are filled out!",
      });
      return;
    }

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
            text: `Message failed to send, code: ${res.message.code}`,
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
    <header>
      <div className="container-lg mt-3">
        <div className="row align-items-center">
          <h1 className="col-5 header-name">Ben Milner</h1>
          <div className="col-1"></div>
          <div className="col-6 align-items-center">
            <a href="#projects">
              <button className="btn btn-header link-dark contact-btn">
                Projects
              </button>
            </a>
            <a href={pdf} target="_blank" rel="noreferrer">
              <button className="btn btn-header link-dark contact-btn">
                Resume
              </button>
            </a>
            <button
              className="btn btn-header link-dark contact-btn"
              onClick={handleShow}
            >
              Contact
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title id="contact-title">Contact Me</Modal.Title>
              </Modal.Header>
              <Modal.Body id="contact-body">
                <p>
                  Have a question/inquiry? Fill out the form below and I'll get
                  back to you as soon as I can!
                </p>
                <form className="container">
                  <div className="row justify-content-center mx-auto">
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        name="message"
                        type="text"
                        rows="8"
                        value={formState.message}
                        onChange={handleChange}
                      />
                    </div>
                    {message.sent && (
                      <div id="message-sent" className="mt-4">
                        <p>{message.text}</p>
                      </div>
                    )}
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer id="contact-buttons">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
