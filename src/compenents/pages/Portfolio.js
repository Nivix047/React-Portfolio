import React from "react";

export default function Portfolio() {
  return (
    <div className="m-5">
      <h3>Porfolio</h3>
      <div className="container">
        <div className="row">
          <div
            className="projects col m-3 border border black"
            id="project-one"
          >
            <h1>
              <a href="https://katarinamihaylovich.github.io/film-buzz/">
                Film Buzz
              </a>
            </h1>
          </div>
          <div
            className="projects col m-3 border border black"
            id="project-two"
          >
            <h1>
              <a href="https://jda-bank.herokuapp.com/login">JDA Bank</a>
            </h1>
          </div>
          <div className="w-100"></div>
          <div
            className="projects col m-3 border border black"
            id="project-three"
          >
            <h1>Project 3</h1>
          </div>
          <div
            className="projects col m-3 border border black"
            id="project-four"
          >
            <h1>Project 4</h1>
          </div>
          <div className="w-100"></div>
          <div
            className="projects col m-3 border border black"
            id="project-five"
          >
            <h1>Project 5</h1>
          </div>
          <div
            className="projects col m-3 border border black"
            id="project-six"
          >
            <h1>Project 6</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
