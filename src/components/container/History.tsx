import { useRef } from "react";
import { Input } from ".";
import { command, commandComposant } from "../../utils/commandType";
import {
  Banner,
  Links,
  Contact,
  About,
  Help,
  Projects,
  Error,
  Skills,
  Download,
  Clasic,
} from "../atoms";
import "./styles/History.scss";

function History({ history }: { history: command[] }) {
  const commandComponent: commandComposant = {
    banner: <Banner />,
    links: <Links />,
    contact: <Contact />,
    about: <About />,
    help: <Help />,
    projects: <Projects />,
    error: <Error />,
    skills: <Skills />,
    download: <Download />,
    clasic: <Clasic />,
  };

  setTimeout(function () {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: "smooth",
    });
  }, 1);

  return (
    <>
      <div className="history-container">
        <Banner />
        {history.map((elm, index) => {
          return (
            <div key={`${elm}-${index}`} style={{ marginBottom: "1rem" }}>
              <Input inputValue={elm} />
              <div className="command">{commandComponent[elm]}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default History;
