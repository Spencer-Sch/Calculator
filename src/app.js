import { NumberButton } from "./Module-Button/button";
import { OperatorButton } from "./Module-Button/button";

class Calculator {
  constructor() {
    this.btn_0 = new NumberButton(0);
    this.btn_1 = new NumberButton(1);
    this.btn_2 = new NumberButton(2);
    this.btn_3 = new NumberButton(3);
    this.btn_4 = new NumberButton(4);
    this.btn_5 = new NumberButton(5);
    this.btn_6 = new NumberButton(6);
    this.btn_7 = new NumberButton(7);
    this.btn_8 = new NumberButton(8);
    this.btn_9 = new NumberButton(9);
    this.btn_add = new OperatorButton("+", "add");
    console.log("This should update 5");
  }

  calculate() {}

  // btnTest() {
  //   console.log(this.btn_5);
  //   const btn5 = document.getElementById(`${this.btn_5.id}`);
  //   btn5.addEventListener("click");
  //   console.log(btn5);
  // }
}

const newCalculator = new Calculator();
// newCalculator.calculate();
// newCalculator.btnTest();

///////////////////////////////////////////////////////
