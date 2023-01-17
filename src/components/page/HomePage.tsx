import { useState } from "react";
import { command } from "../../utils/commandType";
import { History, Input } from "../container";
import "./styles/HomePage.scss";

function HomePage() {
  const [history, setHistory] = useState<command[]>([]);
  const commandList = [
    "banner",
    "links",
    "contact",
    "projects",
    "about",
    "skills",
    "clasic",
    "help",
    "credit",
    "secret",
    "download",
  ];

  const updateHistory: (input: command) => void = (input) => {
    if (input === "clear") {
      setHistory([]);
    } else {
      if (commandList.includes(input)) {
        setHistory((curr) => [...curr, input]);
      } else {
        setHistory((curr) => [...curr, "error"]);
      }
    }
  };

  return (
    <>
      <div className="home-page-container">
        <History history={history} />
        <Input addToHistory={(input: command) => updateHistory(input)} />
      </div>
    </>
  );
}

export default HomePage;
