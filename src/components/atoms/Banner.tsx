import "./styles/Banner.scss";
import data from "../../utils/data.json";

function Banner() {
  const date = new Date();

  return (
    <>
      <div className="banner-component">
        <p className="run-text">
          Run <span>PersonalPortolfio</span>
        </p>
        <p className="secondary-text">[{date.toString().split("G")[0]}]</p>
        <p>
          Welcome on my <span>portfolio</span>
        </p>
        <p>
          Try to type <span>'help'</span> command if you're lost
        </p>
        <p>
          Access to a 'classic' portfolio by typing <span>"classic"</span>{" "}
          command
        </p>
        {/* <h1>{data.banner.text}</h1> */}
        <p className="secondary-text">{data.banner.version}</p>
      </div>
    </>
  );
}

export default Banner;
