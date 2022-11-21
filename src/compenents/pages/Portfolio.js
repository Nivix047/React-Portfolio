import React from "react";

export default function Portfolio() {
  return (
    <div className="m-5">
      <h3>Porfolio</h3>
      <div className="container">
        <div className="row">
          <div className="col m-3 border border black">
            <h1>
              <a href="https://katarinamihaylovich.github.io/film-buzz/">
                Film Buzz
              </a>
            </h1>
          </div>
          <div className="col m-3 border border black">
            <h1>
              <a href="https://jda-bank.herokuapp.com/login">JDA Bank</a>
            </h1>
          </div>
          <div className="w-100"></div>
          <div className="col m-3 border border black">
            <h1>Project 3</h1>
          </div>
          <div className="col m-3 border border black">
            <h1>Project 4</h1>
          </div>
          <div className="w-100"></div>
          <div className="col m-3 border border black">
            <h1>Project 5</h1>
          </div>
          <div className="col m-3 border border black">
            <h1>Project 6</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
