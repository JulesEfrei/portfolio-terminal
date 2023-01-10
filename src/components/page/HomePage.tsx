import { useState } from "react";
import { command } from "../../utils/commandType";
import { History, Input } from "../container";

function HomePage() {
  const [history, setHistory] = useState<command[]>([]);

  return (
    <>
      <History history={history} />
      <Input
        addToHistory={(input: command) =>
          input === "clear"
            ? setHistory([])
            : setHistory((curr) => [...curr, input])
        }
      />
    </>
  );
}

export default HomePage;
