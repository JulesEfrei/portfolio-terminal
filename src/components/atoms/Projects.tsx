import data from "../../utils/data.json";
import "./styles/Projects.scss";

function Projects() {
  return (
    <>
      <div className="projects-component">
        <h4>Here is some of my project</h4>
        <p>
          You can see more projects on my{" "}
          <span className="github-span">GitHub</span>
        </p>
        <div className="list-wrapper">
          {data.projects.map((elm, index) => {
            return (
              <div key={`${elm.name}-${index}`} className="list-item">
                <p className="name">
                  <span>{elm.name}</span>:
                </p>
                <p className="description">{elm.description}</p>
                <a href={elm.link} target="_blank">
                  {elm.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
