import React, { useEffect, useRef } from "react";
import { command } from "../../utils/commandType";
import data from "../../utils/data.json";
import "./styles/Input.scss";

function Input({
  addToHistory,
  inputValue,
}: {
  addToHistory?: (inputRef: command) => void;
  inputValue?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      addToHistory!(inputRef.current.value as command);
      inputRef.current.value = "";
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
        {inputValue ? (
          <p className="input-value">{inputValue}</p>
        ) : (
          <input type="text" ref={inputRef} />
        )}
      </form>
    </>
  );
}

export default Input;
