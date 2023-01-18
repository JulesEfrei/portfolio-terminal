import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { command } from "../../utils/commandType";
import data from "../../utils/data.json";
import "./styles/Input.scss";

function Input({
  addToHistory,
  inputValue,
  isDisable = false,
  history = [],
}: {
  addToHistory?: (inputRef: command) => void;
  inputValue?: string;
  isDisable?: Boolean;
  history?: command[];
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = useState(inputValue ? inputValue : "");

  //Focus input
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  //Arrow event handler
  useEffect(() => {
    let count: number = history.length;

    const arrowUp = () => {
      if (count !== 0) {
        count -= 1;
      }
      setInputState(history[count]);
    };

    const arrowDown = () => {
      if (count !== history.length) {
        count += 1;
      }
      setInputState(history[count]);
    };

    const handleEvent = (e: KeyboardEvent) => {
      if (e.code === "ArrowUp") {
        arrowUp();
      } else if (e.code === "ArrowDown") {
        arrowDown();
      }
    };

    //Arrow Up event
    if (!inputValue) {
      window.addEventListener("keydown", handleEvent);
    }

    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [history]);

  //Submit form
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputState !== "") {
      addToHistory!(inputState as command);
      setInputState("");
    }
  };

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <p>
          <span className="type-color">{data.terminal.type}</span>
          <span className="accent-color">@</span>
          {data.terminal.name}
          <span className="accent-color">$</span> :
        </p>
        <input
          type="text"
          ref={inputRef}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          disabled={isDisable ? true : false}
        />
      </form>
    </>
  );
}

export default Input;
