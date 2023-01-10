import "./styles/Links.scss";
import data from "../../utils/data.json";

function Links() {
  return (
    <>
      <div className="links-component">
        <h4>Here is my social media:</h4>
        <br />
        {data.links.map((elm, index) => {
          return (
            <div className="links-container">
              <p>{elm.name}: </p>
              <a href={elm.link} target="_blank">
                {elm.link}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Links;
