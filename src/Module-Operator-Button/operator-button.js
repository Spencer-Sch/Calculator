export class OperatorButton {
  constructor(opChar) {
    this.operatorMap = {
      "=": "equals",
      ".": "decimal",
      "+/-": "pos-neg",
      "+": "add",
      "-": "sub",
      X: "mult",
      "/": "div",
      "<=": "del",
      C: "clr-all",
      CE: "clr-entry",
      "%": "percent",
    };
    if (opChar === "X") {
      this.value = "*";
    } else {
      this.value = opChar;
    }
    this.tag = this.operatorMap[`${opChar}`];
    this.id = "btn-" + this.tag;
    this.DOMEl = document.getElementById(`${this.id}`);
  }
}

// const newButton = new OperatorButton("+");
// console.log(newButton.tag);
