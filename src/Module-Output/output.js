export class Output {
  static renderOperand(operand) {
    if (operand === "/0") {
      return "Cannot divide by 0";
    } else {
      return operand;
    }
  }

  static renderEquasion(arr) {
    if (arr.length === 0) {
      return "";
    }
    if (arr.length === 2) {
      return `${arr[0]} ${arr[1]}`;
    }
    if (arr.length === 3) {
      if (arr[1] === "=") {
        return `${arr[0]} ${arr[1]} ${arr[2]}`;
      } else {
        return `${arr[0]} ${arr[1]} ${arr[2]} =`;
      }
    }
  }
}
