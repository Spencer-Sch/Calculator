import { Calculator } from "../Module-Calculator/calculator";

export class NumberButton {
  constructor(btnValue) {
    this.value = btnValue;
    this.propName = `btn_${this.value}`;
    this.id = `btn-${this.value}`;
    this.DOMEl = document.getElementById(`${this.id}`);
    // this.DOMPath.addEventListener("click", this.clickHandler.bind(this));
  }

  // clickHandler() {
  //   Calculator.collectOperand(this.value);
  //   // console.log(this.value);
  // }
}
