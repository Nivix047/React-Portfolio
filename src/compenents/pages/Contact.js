import React from "react";

export default function Contact() {
  return (
    <div className="m-5 w-50">
      <h1>Contact</h1>
      <form>
        <div className="form-group m-3">
          <label>Name:</label>
          <textarea className="form-control" rows="1"></textarea>
        </div>
        <div className="form-group m-3">
          <label>Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group m-3">
          <label>Message:</label>
          <textarea className="form-control" rows="10"></textarea>
        </div>
        <div class="form-group m-3">
          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
