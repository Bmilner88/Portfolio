"use client";
import { useCallback, useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [formErrors, setFormErrors] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: false,
  });

  // Validate form fields before submission
  // const validateForm = () => {
  //   let valid = true;
  //   const errors = {
  //     name: "",
  //     email: "",
  //     message: "",
  //   };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear any existing errors for the field
    // setFormErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: "",
    // }));
  };

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      setStatus({ loading: true, error: "", success: false });

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        if (res.ok) {
          console.log("Send Success");
        }

        setFormState({
          name: "",
          email: "",
          message: "",
        });

        setStatus({ loading: false, error: "", success: true });
      } catch (err) {
        console.error("Error sending email", err);
        setStatus({
          loading: false,
          error: "An unexpected error occurred",
          success: false,
        });
      }
    },
    [formState]
  );

  return (
    <div id="contact">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:ml-14">
            <h1 className="text-5xl font-bold">Send me an Email! 📨</h1>
            <p className="py-6">
              If you're interested in hiring me, I'd love to hear from you!🤝
            </p>
            <p>
              Don't forget to include your name and email address. I will get
              back to you as soon as possible. I look forward to connecting with
              you soon!👋
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" name="contact" onSubmit={handleSubmit}>
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input validator"
                  placeholder="Jon Doe"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
                <div className="validator-hint">Enter your name</div>

                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input validator"
                  placeholder="email@website.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                <div className="validator-hint">Enter valid email address</div>

                <label className="label">Message</label>
                <textarea
                  name="message"
                  className="textarea validator rounded-md"
                  placeholder="Message..."
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
                <div className="validator-hint">Enter a message</div>

                <button className="btn btn-neutral mt-4" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
