import React, { useContext } from "react";
import "./button.css";
import { MyContext } from "../../MyContext";

export function Button({ name, type }) {
  const { userInput, setUserInput } = useContext(MyContext);
  return (
    <button
      onClick={() => {
        switch (type) {
          case "func":
            setUserInput(userInput + name + "(");
            break;
          case "pi":
            setUserInput(userInput + "\u{1D70B}");
            break;
          case "sqrt":
            setUserInput(userInput + "√(");
            break;
          case "cbrt":
            setUserInput(userInput + "cbrt(");
            break;

          case "degreecube":
            setUserInput(userInput + "^3");
            break;
          case "degreesqr":
            setUserInput(userInput + "^2");
            break;
          case "xpowern":
            setUserInput(userInput + "^");
            break;
          default:
            setUserInput(userInput + name);
            break;
        }
      }}
    >
      {" "}
      {name}
    </button>
  );
}

export function ClearButton({ name }) {
  const { setUserInput } = useContext(MyContext);
  return <button onClick={() => setUserInput("")}>{name}</button>;
}

export function DeleteButton({ name }) {
  const { userInput, setUserInput } = useContext(MyContext);
  return (
    <button onClick={() => setUserInput(userInput.slice(0, -1))}>{name}</button>
  );
}



