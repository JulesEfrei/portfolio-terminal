import "./styles/Error.scss";
import data from "../../utils/data.json";

function Error() {
  return (
    <>
      <div className="error-container">
        <p>
          <span className="error-text">{data.terminal.type}</span>: Command not
          found. Try <span className="accent-text">'help'</span> command
        </p>
      </div>
    </>
  );
}

export default Error;
