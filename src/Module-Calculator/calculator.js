import { NumberButton } from "../Module-Number-Button/number-button";
// Module-number-button/number-button;
import { OperatorButton } from "../Module-Operator-Button/operator-button";

export class Calculator {
  constructor() {
    const buttonArr = document.querySelectorAll(".number-btn");
    // console.log(buttonArr);

    for (let btn of buttonArr) {
      const newButton = new NumberButton(+btn.textContent);
      newButton.DOMEl.addEventListener(
        "click",
        this.collectOperand.bind(this, newButton.value)
      );
    }

    this.btn_equals = new OperatorButton("=", "equals");
    this.btn_decimal = new OperatorButton(".", "decimal");
    this.btn_posNeg = new OperatorButton("+/-", "pos-neg");
    this.btn_add = new OperatorButton("+", "add");
    this.btn_sub = new OperatorButton("-", "sub");
    this.btn_mult = new OperatorButton("x", "mult");
    this.btn_div = new OperatorButton("/", "div");
    this.btn_del = new OperatorButton("<=", "del");
    this.btn_clrAll = new OperatorButton("C", "clr-all");
    this.btn_clrEntry = new OperatorButton("CE", "clr-entry");
    this.btn_percent = new OperatorButton("%", "percent");
    this.operandStr = "0";
    // console.log(this.btn_1);
  }

  static equasionArr = [];
  // static operandStr = "0";
  static operator;

  // testMethod() {
  //   console.log("test worked!");
  // }

  collectOperand(val) {
    if (this.operandStr === "0") {
      this.operandStr = "";
    }
    this.operandStr += val;
    console.log(this.operandStr);
  }

  // static collectOperand(val) {
  //   if (this.operandStr === "0") {
  //     this.operandStr = "";
  //   }
  //   this.operandStr += val;
  //   console.log(this.operandStr);
  // }

  static collectOperator(op) {
    this.equasionArr.push(this.operandStr);
    this.operandStr = "0";
    if (this.equasionArr.length === 1) {
      this.equasionArr.push(op);
    } else if (this.equasionArr.length === 3) {
      Calculator.calculate(this.equasionArr);
    }

    // console.log(this.equasionArr);
  }

  static calculate(arr) {
    console.log(arr);
  }
}
