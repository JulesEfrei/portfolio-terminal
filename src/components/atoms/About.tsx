import data from "../../utils/data.json";
import "./styles/About.scss";

function About() {
  return (
    <div className="about-component">
      <p>{data.about.text}</p>
    </div>
  );
}

export default About;
