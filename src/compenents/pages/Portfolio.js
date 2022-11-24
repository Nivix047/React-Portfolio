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
    <div className="container">
      <h3>Portfolio</h3>
      <div className="row">
        {data.map((project, index) => {
          return <Project key={index} data={project} />;
        })}
      </div>
    </div>
  );
}
