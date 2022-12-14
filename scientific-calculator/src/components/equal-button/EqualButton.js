import React, { useContext } from "react";
import "./equal-button.css";
import * as math from "mathjs";
import { MyContext } from "../../MyContext";

function EqualButton({ name }) {
  const { userInput, setUserInput} = useContext(MyContext);
  const myObject = {
    "โ": "sqrt",
    "%": "/100*",
    "๐": "pi",
    "รท": "/",
    "ร": "*",
  };

  const buttonClick = () => {
    const replaced = [...userInput]
      .map((letter) => {
        if (myObject[letter]) {
          return myObject[letter];
        } else {
          return letter;
        }
      })
      .join("");
    try {
      setUserInput(math.evaluate(replaced));
    } catch (error) {
      setUserInput(math.evaluate(replaced + ")"));
    }
  };

  return (
    <button className="equal" onClick={buttonClick}>
      {name}
    </button>
  );
}

export default EqualButton;
