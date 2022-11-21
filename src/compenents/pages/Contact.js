import React from "react";

export default function Contact() {
  return (
    <div className="m-5 w-50">
      <h1>Contact</h1>
      <form>
        <div className="form-group m-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            required
            minLength="1"
          />
        </div>
        <div className="form-group m-3">
          <label>Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            pattern="/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/"
          />
        </div>
        <div className="form-group m-3">
          <label>Message:</label>
          <textarea
            className="form-control"
            rows="10"
            required
            minLength="1"
          ></textarea>
        </div>
        <div className="form-group m-3">
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
