import Button from "./Button";

const buttons = [
  "7", "8", "9", "/", "sin(",
  "4", "5", "6", "*", "cos(",
  "1", "2", "3", "-", "tan(",
  "0", ".", "(", ")", "+",
  "log(", "√(", "^", "C", "="
];

function ButtonGrid({ onButtonClick }) {
  return (
    <div className="button-grid">
      {buttons.map((btn, index) => (
        <Button key={index} label={btn} onClick={onButtonClick} />
      ))}
    </div>
  );
}

export default ButtonGrid;
