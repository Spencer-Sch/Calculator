import { Calculator } from "../Module-Calculator/calculator";

export class OperatorButton {
  constructor(opChar, opTag) {
    this.value = opChar;
    this.tag = opTag;
    this.id = `btn-${this.tag}`;
    this.DOMPath = document.getElementById(`${this.id}`);
    this.DOMPath.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler() {
    Calculator.collectOperator(this.value);
  }
}
