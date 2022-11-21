import React from "react";
// import PDF from "../../assets/fake-resume.pdf";

export default function Resume() {
  return (
    <div className="m-5">
      <h1>Resume</h1>
      <div className="pb-2">
        Download my <a href="#">resume</a>
        {/* <object width="100%" height="800" data={PDF} type="application/pdf" /> */}
      </div>
      <ul>
        Front-end Proficiencies
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive deisgn</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <ul>
        Back-end Proficiencies
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
