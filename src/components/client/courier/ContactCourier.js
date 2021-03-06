import React from "react";

function ContactCourier() {
  return (
    <div>
      <div id="contact-form">
        <form>
          <br />
          <h3>Contact Courier</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="textarea"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>

          <a href="/courierConfirm">
          <button
            type="button"
            id="submit"
            name="submit"
            className="btn btn-primary pull-right"
          >
            Send
          </button>
          </a>        

          <a href="/courierConfirm">
          <button
            style={{margin:"10px"}}
            type="button"
            id="submit"
            name="submit"
            className="btn btn-primary pull-right"
          >
            Call
          </button>
          </a>

          
        </form>
      </div>
    </div>
  );
}

export default ContactCourier;
