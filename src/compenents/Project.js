function Project({ data }) {
  return (
    <div>
      <h1 className="projects border border black">
        <a href={data.projectURL}>{data.projectName}</a>
      </h1>
    </div>
  );
}

export default Project;
