import { NumberButton } from "../Module-Number-Button/number-button";
import { OperatorButton } from "../Module-Operator-Button/operator-button";
import { Util } from "../Module-Utility/utility";

export class Calculator {
  constructor() {
    this.operandStr = "0";
    this.equasionArr = [];
    this.sumSubMultDivIsOn = false;
    this.equasionResult = 0;
    this.equalsIsOn = false;
    this.decimalIsOn = false;

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
  }

  cClear() {
    this.equasionArr = [];
    this.operandStr = "0";
    this.equalsIsOn = false;
    this.sumSubMultDivIsOn = false;
    this.decimalIsOn = false;
    console.log(this.operandStr);
    console.log(this.equasionArr);
  }

  ceClear() {
    if (this.equalsIsOn) {
      this.cClear();
    } else {
      this.operandStr = "0";
      this.decimalIsOn = false;
      console.log(this.operandStr);
    }
  }

  backspace() {
    if (this.equalsIsOn || this.sumSubMultDivIsOn) {
    } else {
      const reducedNumber = this.operandStr.slice(
        0,
        this.operandStr.length - 1
      );
      if (reducedNumber.length === 0) {
        this.operandStr = "0";
      } else {
        this.operandStr = reducedNumber;
      }
      console.log(this.operandStr);
    }
    if (!Util.isFloat(this.operandStr)) {
      this.decimalIsOn = false;
    }
  }

  decimal() {
    if (!this.decimalIsOn) {
      this.decimalIsOn = true;
      if (this.equalsIsOn || this.sumSubMultDivIsOn) {
        this.operandStr = "0.";
      } else {
        this.operandStr += ".";
        this.equalsIsOn = false;
        this.sumSubMultDivIsOn = false;
      }
      console.log(this.operandStr);
    }
  }

  collectOperand(val) {
    if (this.equalsIsOn) {
      this.operandStr = "0";
    }
    if (this.operandStr === "0") {
      this.operandStr = "";
    }
    this.operandStr += val;
    this.equalsIsOn = false;
    this.sumSubMultDivIsOn = false;
    console.log(this.operandStr);
  }

  sumSubMultDiv(op) {
    this.decimalIsOn = false;
    if (this.equalsIsOn) {
      this.equalsIsOn = false;
      this.equasionArr.pop();
      this.equasionArr[0] = this.equasionResult;
      this.equasionArr[1] = op;
      console.log(this.equasionArr);
    }
    if (!this.sumSubMultDivIsOn) {
      this.sumSubMultDivIsOn = true;
      if (this.equasionArr.length === 0) {
        this.equasionArr.push(this.operandStr);
        this.operandStr = "0";
        this.equasionArr.push(op);
        console.log(this.equasionArr);
      } else if (this.equasionArr.length === 2) {
        this.equasionArr.push(this.operandStr);
        this.operandStr = "0";
        const arrCopy = [...this.equasionArr];
        this.calculate(arrCopy, op, false);
      } else if (this.equasionArr.length === 3) {
        this.equasionArr = [];
        this.equasionArr.push(this.operandStr);
        this.operandStr = "0";
        this.equasionArr.push(op);
        console.log(this.equasionArr);
      }
    } else {
      this.equasionArr[1] = op;
      console.log("from SSMD main else: ", this.equasionArr);
    }
  }

  equalsHelper(key) {
    let operator = "";
    if (key === 0) {
      operator = "=";
    } else if (key === 1) {
      operator = this.equasionArr[1];
    }
    this.operandStr = "0";
    const arrCopy = [...this.equasionArr];
    this.decimalIsOn = false;
    this.equalsIsOn = true;
    this.sumSubMultDivIsOn = true;
    this.calculate(arrCopy, operator, true);
  }

  equals() {
    if (this.equasionArr.length === 0) {
      this.equasionArr.push(this.operandStr);
      this.equasionArr.push("=");
      this.equasionArr.push(0);
      this.equalsHelper(0);
      return;
    }
    if (this.equasionArr.length === 2 && this.equalsIsOn) {
      this.equasionArr.push(this.equasionArr[0]);
      this.equalsHelper(1);
      return;
    }
    if (this.equasionArr.length === 2 && !this.equalsIsOn) {
      this.equasionArr.push(this.operandStr);
      this.equalsHelper(1);
      return;
    }
    if (this.equasionArr.length === 3 && this.operandStr != "0") {
      this.equasionArr[0] = this.operandStr;
      this.equalsHelper(1);
      return;
    }
    if (this.equasionArr.length === 3) {
      this.equasionArr[0] = this.equasionResult;
      this.equalsHelper(1);
      return;
    }
  }

  divByZeroHandler() {
    this.equasionArr = [];
    this.operandStr = "0";
    this.equalsIsOn = false;
    this.sumSubMultDivIsOn = false;
    console.log("Cannot divide by 0");
  }

  calculate(arr, nextOp, cameFromEquals) {
    console.log("from calculate:", arr);
    const operand1 = +arr[0];
    const operand2 = +arr[2];
    const operator = arr[1];
    if (operator === "/" && operand2 === +"0") {
      this.divByZeroHandler();
    } else {
      if (operator === "+") {
        this.equasionResult = operand1 + operand2;
      }
      if (operator === "-") {
        this.equasionResult = operand1 - operand2;
      }
      if (operator === "*") {
        this.equasionResult = operand1 * operand2;
      }
      if (operator === "/") {
        this.equasionResult = operand1 / operand2;
      }
      if (operator === "=") {
        this.equasionResult = operand1;
      }
      console.log(this.equasionResult);
      if (!cameFromEquals) {
        this.equasionArr.pop();
        this.equasionArr[0] = this.equasionResult;
        this.equasionArr[1] = nextOp;
        console.log(this.equasionArr);
        console.log(this.operandStr);
      }
    }
  }

  evaluateOperator(op) {
    if (op === "+" || op === "-" || op === "*" || op === "/") {
      this.sumSubMultDiv(op);
    }
    if (op === "=") {
      this.equals();
    }
    if (op === "C") {
      this.cClear();
    }
    if (op === "CE") {
      this.ceClear();
    }
    if (op === "<=") {
      this.backspace();
    }
    if (op === "%") {
    }
    if (op === ".") {
      this.decimal();
    }
    if (op === "+/-") {
    }
  }
}
