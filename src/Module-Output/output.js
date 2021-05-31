export class Output {
  static renderOperand(operand) {
    const numeralOutput = document.querySelector(".main-output");
    if (operand === "/0") {
      numeralOutput.textContent = "Cannot divide by 0";
    } else {
      numeralOutput.textContent = operand;
    }
  }

  static renderEquasion(arr) {
    const equasionOutput = document.querySelector(".equasion");
    if (arr.length === 0) {
      equasionOutput.textContent = "";
    }
    if (arr.length === 2) {
      equasionOutput.textContent = `${arr[0]} ${arr[1]}`;
    }
    if (arr.length === 3) {
      if (arr[1] === "=") {
        equasionOutput.textContent = `${arr[0]} ${arr[1]} ${arr[2]}`;
      } else {
        equasionOutput.textContent = `${arr[0]} ${arr[1]} ${arr[2]} =`;
      }
    }
  }
}
