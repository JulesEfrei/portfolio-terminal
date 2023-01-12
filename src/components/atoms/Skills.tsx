import data from "../../utils/data.json";
import "./styles/Skills.scss";

function Skills() {
  return (
    <>
      <div className="skills-component">
        {Object.keys(data.skills).map((elm: String, index: Number) => {
          return (
            <div className="container" key={`${elm}-${index}`}>
              <h4>{elm}</h4>
              <div className="item-container">
                {data.skills[elm].map((item, i) => {
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
