import { useEffect, useState } from "react";
import { command } from "../../utils/commandType";
import { History, Input } from "../container";

function HomePage() {
  const [history, setHistory] = useState<command[]>([]);

  useEffect(() => {
    console.log(history);
  }, [history]);

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
