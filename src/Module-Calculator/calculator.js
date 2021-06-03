import { NumberButton } from "../Module-Number-Button/number-button";
import { OperatorButton } from "../Module-Operator-Button/operator-button";
import { Util } from "../Module-Utility/utility";
import { Output } from "../Module-Output/output";
import { HistoryEntry } from "../Module-History-Entry/history-entry";

export class Calculator {
  constructor() {
    this.operandStr = "0";
    this.equasionArr = [];
    this.sumSubMultDivIsOn = false;
    this.equasionResult = 0;
    this.equalsIsOn = false;
    this.decimalIsOn = false;
    this.percentIsOn = false;
    this.currentPercent;
    this.numeralOutput = document.getElementById("numeral-output");
    this.equasionOutput = document.getElementById("equasion-output");

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

    const clearBtn = document.getElementById("hist-cntrl-btn");

    clearBtn.addEventListener("click", this.clearHistory);
  }

  recoverHistory(equasion, equasionResult) {
    this.sumSubMultDivIsOn = false;
    this.equalsIsOn = false;
    this.percentIsOn = false;
    console.log(equasion);
    console.log(equasionResult);
    const resultStr = `${equasionResult}`;
    if (resultStr.length > 14) {
      const el = document.getElementById("numeral-output");
      el.style.fontSize = "0.6em";
    } else {
      const el = document.getElementById("numeral-output");
      el.style.fontSize = "0.9em";
    }
    this.numeralOutput.textContent = Output.renderOperand(equasionResult);
    this.equasionOutput.textContent = Output.renderEquasion(equasion);
    this.operandStr = equasionResult;
    this.equasionResult = equasionResult;
    this.equasionArr = equasion;
  }

  createHistoryEntry(result, arr) {
    const id = Math.random();
    const historyEntry = new HistoryEntry(result, arr, id);
    historyEntry.render();
    const entryId = historyEntry.id;
    const eqRes = historyEntry.equasionResult;
    const eq = historyEntry.equasion;
    const entryEl = document.getElementById(`${entryId}`);
    entryEl.addEventListener(
      "click",
      this.recoverHistory.bind(this, eq, eqRes)
    );
  }

  clearHistory() {
    const histUl = document.querySelector("#hist-display ul");
    const liArr = histUl.querySelectorAll("li");
    for (let li of liArr) {
      histUl.removeChild(li);
    }
  }

  cClear() {
    this.equasionArr = [];
    this.operandStr = "0";
    this.equalsIsOn = false;
    this.sumSubMultDivIsOn = false;
    this.decimalIsOn = false;
    this.percentIsOn = false;
    this.currentPercent = 0;
    console.log(this.operandStr);
    const el = document.getElementById("numeral-output");
    el.style.fontSize = "0.9em";
    this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    console.log(this.equasionArr);
    this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
  }

  ceClear() {
    if (this.equalsIsOn) {
      this.cClear();
    } else {
      this.operandStr = "0";
      this.decimalIsOn = false;
      this.percentIsOn = false;
      this.currentPercent = 0;
      console.log(this.operandStr);
      this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
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
      this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    }
    if (!Util.isFloat(this.operandStr)) {
      this.decimalIsOn = false;
    }
  }

  decimal() {
    if (!this.decimalIsOn) {
      this.decimalIsOn = true;
      if (
        this.sumSubMultDivIsOn ||
        (this.equasionArr.length === 2 && +this.operandStr < 0)
      ) {
        this.operandStr = "0.";
      } else if (this.equalsIsOn) {
        this.operandStr = "0.";
        this.equasionArr = [];
      } else {
        this.operandStr += ".";
      }
      this.equalsIsOn = false;
      this.sumSubMultDivIsOn = false;
      this.percentIsOn = false;
      console.log(this.operandStr);
      this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    }
  }

  posNeg() {
    if (this.equasionArr.length === 0) {
      this.operandStr = Util.negate(this.operandStr);
      console.log(this.operandStr);
    } else if (this.equasionArr.length === 2 && this.operandStr === "0") {
      this.operandStr = Util.negate(this.equasionArr[0]);
      this.operandStr = this.operandStr;
      console.log(this.equasionArr);
      console.log(this.operandStr);
    } else if (this.equasionArr.length === 2 && this.operandStr != "0") {
      this.operandStr = Util.negate(this.operandStr);
      console.log(this.operandStr);
    } else if (this.equasionArr.length === 3) {
      this.equasionResult = `${Util.negate(this.equasionResult)}`;
      this.operandStr = this.equasionResult;
      console.log(this.equasionArr);
      console.log(this.operandStr);
    }
    this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    this.equalsIsOn = false;
    this.sumSubMultDivIsOn = false;
    this.percentIsOn = false;
  }

  percentHelper(arr, key) {
    this.operandStr = arr[0];
    this.currentPercent = arr[1];
    console.log(this.operandStr);
    this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    console.log(this.currentPercent);
    if (key === 1) {
      this.equasionResult = this.operandStr;
    }
  }

  percent() {
    this.equalsIsOn = false;
    this.sumSubMultDivIsOn = false;
    if (this.percentIsOn) {
      this.operandStr = +this.operandStr * this.currentPercent;
      console.log(this.operandStr);
      this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    }
    if (!this.percentIsOn) {
      if (this.equasionArr.length === 2 && this.operandStr === "0") {
        const resultArr = Util.getPercent(this.equasionArr[0], null);
        this.percentHelper(resultArr, 0);
      } else if (this.equasionArr.length === 2 && this.operandStr != "0") {
        const resultArr = Util.getPercent(this.equasionArr[0], this.operandStr);
        this.percentHelper(resultArr, 0);
      } else if (this.equasionArr.length === 3) {
        const resultArr = Util.getPercent(this.equasionResult, null);
        this.percentHelper(resultArr, 1);
      }
      this.percentIsOn = true;
    }
  }

  collectOperand(val) {
    if (!(this.operandStr.length > 14)) {
      if (this.equalsIsOn) {
        this.operandStr = "0";
      }
      if (this.operandStr === "0") {
        this.operandStr = "";
      }
      this.operandStr += val;
      this.equalsIsOn = false;
      this.sumSubMultDivIsOn = false;
      this.percentIsOn = false;
      console.log(this.operandStr);
      this.numeralOutput.textContent = Output.renderOperand(this.operandStr);
    }
  }

  sumSubMultDiv(op) {
    this.decimalIsOn = false;
    if (this.equalsIsOn) {
      this.equalsIsOn = false;
      this.percentIsOn = false;
      this.equasionArr.pop();
      this.equasionArr[0] = this.equasionResult;
      this.equasionArr[1] = op;
      console.log(this.equasionArr);
      this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
    }
    if (!this.sumSubMultDivIsOn) {
      this.sumSubMultDivIsOn = true;
      if (this.equasionArr.length === 0) {
        this.equasionArr.push(this.operandStr);
        this.operandStr = "0";
        this.equasionArr.push(op);
        console.log(this.equasionArr);
        console.log(this.operandStr);
        this.equasionOutput.textContent = Output.renderEquasion(
          this.equasionArr
        );
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
        this.equasionOutput.textContent = Output.renderEquasion(
          this.equasionArr
        );
      }
    } else {
      this.equasionArr[1] = op;
      console.log("from SSMD main else: ", this.equasionArr);
      this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
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
    this.percentIsOn = false;
    this.calculate(arrCopy, operator, true);
  }

  equals() {
    console.log("equals triggered");
    if (this.equasionArr.length === 0) {
      this.equasionArr.push(this.operandStr);
      this.equasionArr.push("=");
      this.equasionArr.push(this.operandStr);
      this.equalsHelper(0);
      return;
    }
    if (this.equasionArr.length === 2 && this.sumSubMultDivIsOn) {
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
    this.numeralOutput.textContent = Output.renderOperand("/0");
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
      const resultStr = `${this.equasionResult}`;
      if (resultStr.length > 14) {
        const el = document.getElementById("numeral-output");
        el.style.fontSize = "0.6em";
      }
      this.equasionOutput.textContent = Output.renderEquasion(this.equasionArr);
      this.numeralOutput.textContent = Output.renderOperand(
        this.equasionResult
      );
      this.createHistoryEntry(this.equasionResult, arr);
      if (!cameFromEquals) {
        console.log("triggered");
        this.equasionArr.pop();
        this.equasionArr[0] = this.equasionResult;
        this.equasionArr[1] = nextOp;
        this.equasionOutput.textContent = Output.renderEquasion(
          this.equasionArr
        );
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
      this.percent();
    }
    if (op === ".") {
      this.decimal();
    }
    if (op === "+/-") {
      this.posNeg();
    }
  }
}
