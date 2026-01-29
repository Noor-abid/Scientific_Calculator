import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import { calculate } from "../utils/mathOperations";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      setInput(calculate(input));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
