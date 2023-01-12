import data from "../../utils/data.json";
import "./styles/Skills.scss";

type skills = {
  "Common Stack": string[];
  "Front-End": string[];
  Mobile: string[];
  "Back-end": string[];
  Database: string[];
  Programation: string[];
  "What I'm learning": string[];
};

function Skills() {
  return (
    <>
      <div className="skills-component">
        {Object.keys(data.skills).map((elm, index: Number) => {
          return (
            <div className="container" key={`${elm}-${index}`}>
              <h4>{elm}</h4>
              <div className="item-container">
                {data.skills[elm as keyof skills].map((item, i) => {
                  return <p key={`${item}-${i}`}>{item}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
