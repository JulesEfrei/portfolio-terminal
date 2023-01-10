import "./styles/Banner.scss";
import data from "../../utils/data.json";

function Banner() {
  return (
    <>
      <div className="banner-component">
        <h1>{data.banner.text}</h1>
        <p>{data.banner.version}</p>
      </div>
    </>
  );
}

export default Banner;
