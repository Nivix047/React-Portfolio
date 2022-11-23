import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const data = [
    {
      projectName: "Film Buzz",
      projectURL: "https://katarinamihaylovich.github.io/film-buzz/",
    },
    {
      projectName: "JDA Bank",
      projectURL: "https://jda-bank.herokuapp.com/login",
    },
    {
      projectName: "Project 3",
    },
    {
      projectName: "Project 4",
    },
    {
      projectName: "Project 5",
    },
    {
      projectName: "Project 6",
    },
  ];
  return (
    <div className="m-5">
      <h3>Porfolio</h3>
      {data.map((project) => {
        return <Project data={project} />;
      })}
    </div>
  );
}

{
  /* <div className="container">
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
</div> */
}
