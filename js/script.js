import Calculator from "./Calculator.js";

const primaryOperandDisplay = document.querySelector("[data-primary-operand]");
const secondaryOperandDisplay = document.querySelector(
  "[data-secondary-operand]"
);
const operationDisplay = document.querySelector("[data-operation]");

const calculator = new Calculator(
  primaryOperandDisplay,
  secondaryOperandDisplay,
  operationDisplay
);

document.addEventListener("click", (e) => {
  //Clear all data
  if (e.target.matches("[data-all-clear]")) {
    calculator.clear();
  }
  //Add digits on screen
  if (e.target.matches("[data-number]")) {
    calculator.addDigit(e.target.textContent);
  }
  //Delete data from screen
  if (e.target.matches("[data-delete]")) {
    calculator.removeDigit();
  }
  //Select operator
  if (e.target.matches("[data-operation]")) {
    calculator.chooseOperation(e.target.textContent);
  }
  //Complete operation
  if (e.target.matches("[data-equals]")) {
    calculator.evaluate();
  }
});
