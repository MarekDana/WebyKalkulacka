const calculator = {
  displayValue: "0",
  firstOperand: null,
  secondOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

updateDisplay();

function inputDigit(digit) {
  if (calculator.waitingForSecondOperand === true) {
    console.log(digit);
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    if (calculator.displayValue === "0") {
      calculator.displayValue = digit;
    } else {
      calculator.displayValue = calculator.displayValue + digit;
    }
  }
}

function handleOperator(nextOperator) {
  if (calculator.firstOperand == null) {
    calculator.firstOperand = parseFloat(calculator.displaValue);
    console.log(calculator.firstOperand);
  } else if (calculator.operator) {
    const result = performCalculation[calculator.operator](
      calculator.firstOperand,
      parseFloat(calculator.displayValue)
    );
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
    console.log(calculator.firstOperand);
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}
const performCalculation = {
  "÷": (firstOperand, secondOperand) => firstOperand / secondOperand,

  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

  "=": (firstOperand, secondOperand) => secondOperand
};
function resetCalculator() {
  calculator.dsiplayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
const keys = document.getElementsByClassName("calculator-keys");
for (var zes = 0; zes < keys.length; zes++) {
  keys[zes].addEventListener("click", event => {
    const { target } = event;
    console.log(target, event);
    if (!target.matches("button")) {
      return;
    }
    if (target.classList.contains("operator")) {
      handleOperator(target.value);
      updateDisplay();
      return;
    }
    if (target.classList.contains("all-clear")) {
      resetCalculator();
      updateDisplay();
      return;
    }

    inputDigit(target.value);
    updateDisplay();
  });
}
