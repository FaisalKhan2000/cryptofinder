import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

// User ID
// uC87PV1At9_dBd9yq
// Access Token
// L6I28uTzR_NXIgVEwCI0-

//  "service_ymqhzuo", "template_qiiwgnq", form.current, "uC87PV1At9_dBd9yq";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ymqhzuo",
        "template_qiiwgnq",
        form.current,
        "uC87PV1At9_dBd9yq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Email - React Contact Form</h1>

          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label for="email_body">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
