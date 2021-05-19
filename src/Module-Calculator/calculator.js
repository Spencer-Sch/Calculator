import { NumberButton } from "../Module-Number-Button/number-button";
// Module-number-button/number-button;
import { OperatorButton } from "../Module-Operator-Button/operator-button";

// Next Steps:
// the "=" should trigger a method that does the latter step of the "collectOperator" method and triggers "calculate".
// "=" method should push the 2nd number into "equasionArr"
// "=" method should have multiple if checks to replicate the functionality of the windows calculator.
//

export class Calculator {
  constructor() {
    this.operandStr = "0";
    this.equasionArr = [];
    this.sumSubMultDivIsOn = false;
    this.equasionResult = 0;

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

  collectOperand(val) {
    this.sumSubMultDivIsOn = false;
    if (this.operandStr === "0") {
      this.operandStr = "";
    }
    this.operandStr += val;
    console.log(this.operandStr);
  }

  sumSubMultDiv(op) {
    if (!this.sumSubMultDivIsOn) {
      this.sumSubMultDivIsOn = true;
      if (this.equasionArr.length === 0) {
        this.equasionArr.push(this.operandStr);
        this.equasionArr.push(op);
        this.operandStr = "0";
        console.log(this.equasionArr);
      } else if (this.equasionArr.length === 2) {
        this.equasionArr.push(this.operandStr);
        this.operandStr = "0";
        const arrCopy = [...this.equasionArr];
        // this.equasionArr = [];
        this.calculate(arrCopy, op);
      } // else if (this.equasionArr.length === 3) {
      //   this.equasionArr.pop();
      //   this.equasionArr[0] = this.equasionResult;
      //   console.log("from SSMD L=3: ", this.equasionArr);
      // }
    } else {
      this.equasionArr[1] = op;
      console.log("from SSMD main else: ", this.equasionArr);
    }
  }

  equals() {}

  // sumSubMultDiv(op) {
  //   console.log(this.equasionArr);
  //   if (this.equasionArr.length === 0) {
  //     this.equasionArr.push(this.operandStr);
  //     this.operandStr = "0";
  //   } else if (this.equasionArr.length === 1) {
  //     this.equasionArr.push(op);
  //     /////////////////////////////////////////
  //     // bellow should be in "=" method
  //     /////////////////////////////////////////
  //   } else if (this.equasionArr.length === 3) {
  //     const arrCopy = [...this.equasionArr];
  //     this.equasionArr = [];
  //     this.calculate(arrCopy);
  //   }
  // }

  calculate(arr, nextOp) {
    console.log("from calculate:", arr);
    const operand1 = +arr[0];
    const operand2 = +arr[2];
    const operator = arr[1];
    if (operator === "+") {
      this.equasionResult = operand1 + operand2;
      // this.sumSubMultDivIsOn = false;
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
    // this.operandStr = `${this.equasionResult}`;
    console.log(this.equasionResult);
    this.equasionArr.pop();
    this.equasionArr[0] = this.equasionResult;
    this.equasionArr[1] = nextOp;
    console.log(this.equasionArr);
  }

  evaluateOperator(op) {
    if (op === "+" || op === "-" || op === "*" || op === "/") {
      this.sumSubMultDiv(op);
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
}
