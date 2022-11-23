function Project({ data }) {
  return (
    <div>
      <div className="d-inine-flex p-3">
        <div>
          <a href={data.projectURL}>{data.projectName}</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
