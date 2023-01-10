import React, { useRef } from "react";
import { command } from "../../utils/commandType";
import { Banner } from "../atoms";
import "./styles/Input.scss";

function Input({
  addToHistory,
}: {
  addToHistory: (inputRef: command) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      addToHistory(inputRef.current.value as command);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <input type="text" ref={inputRef} />
      </form>
    </>
  );
}

export default Input;
