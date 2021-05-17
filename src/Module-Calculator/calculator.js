import { NumberButton } from "../Module-Number-Button/number-button";
// Module-number-button/number-button;
import { OperatorButton } from "../Module-Operator-Button/operator-button";

// Next Steps:
// separate "=" btn from other operator buttons.  the "=" should trigger a method that does the latter step of the "collectOperator" method and triggers "calculate".
// the operator buttons should not trigger "calculate".
// "=" method should push the 2nd number into "equasionArr"
// "=" method should have multiple if checks to replicate the functionality of the windows calculator.
//

export class Calculator {
  constructor() {
    this.operandStr = "0";
    this.equasionArr = [];
    const numberButtonArr = document.querySelectorAll(".number-btn");

    for (let btn of numberButtonArr) {
      const newButton = new NumberButton(+btn.textContent);
      newButton.DOMEl.addEventListener(
        "click",
        this.collectOperand.bind(this, newButton.value)
      );
    }

    const operatorButtonArr = document.querySelectorAll(".operator-btn");

    for (let btn of operatorButtonArr) {
      const newButton = new OperatorButton(btn.textContent);
      newButton.DOMEl.addEventListener(
        "click",
        this.evaluateOperator.bind(this, newButton.value)
      );
    }

    // this.btn_equals = new OperatorButton("=", "equals");
    // this.btn_decimal = new OperatorButton(".", "decimal");
    // this.btn_posNeg = new OperatorButton("+/-", "pos-neg");
    // this.btn_del = new OperatorButton("<=", "del");
    // this.btn_clrAll = new OperatorButton("C", "clr-all");
    // this.btn_clrEntry = new OperatorButton("CE", "clr-entry");
    // this.btn_percent = new OperatorButton("%", "percent");
  }

  collectOperand(val) {
    if (this.operandStr === "0") {
      this.operandStr = "";
    }
    this.operandStr += val;
    console.log(this.operandStr);
  }

  evaluateOperator(op) {
    if (op === "+" || "-" || "X" || "/") {
      this.collectOperator(op);
    }
    if (op === "=") {
    }
    if (op === "C" || "CE" || "<=") {
    }
    if (op === "%") {
    }
    if (op === ".") {
    }
    if (op === "+/-") {
    }
  }

  collectOperator(op) {
    console.log(this.equasionArr);
    if (this.equasionArr.length === 0) {
      this.equasionArr.push(this.operandStr);
      this.operandStr = "0";
    } else if (this.equasionArr.length === 1) {
      this.equasionArr.push(op);
      /////////////////////////////////////////
      // bellow should be in "=" method
      /////////////////////////////////////////
    } else if (this.equasionArr.length === 3) {
      const arrCopy = [...this.equasionArr];
      this.equasionArr = [];
      this.calculate(arrCopy);
    }
  }

  calculate(arr) {
    console.log("from calculate:", arr);
    const operand1 = +arr[0];
    const operand2 = +arr[2];
    const operator = arr[1];
    let result;
    if (operator === "+") {
      result = operand1 + operand2;
    }
    if (operator === "-") {
      result = operand1 - operand2;
    }
    if (operator === "X") {
      result = operand1 * operand2;
    }
    if (operator === "/") {
      result = operand1 / operand2;
    }
    this.operandStr = `${result}`;
    console.log(result);
  }
}
