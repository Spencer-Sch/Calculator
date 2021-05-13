export class NumberButton {
  constructor(btnValue) {
    this.value = btnValue;
    this.id = `btn-${this.value}`;
    this.DOMPath = document.getElementById(`${this.id}`);
    this.DOMPath.addEventListener("click", this.listenerTarget);
  }

  listenerTarget() {
    console.log(`${this.id} was clicked`);
  }
}

export class OperatorButton {
  constructor(opChar, opTag) {
    this.value = opChar;
    this.tag = opTag;
    this.id = `btn-${this.tag}`;
    this.DOMPath = document.getElementById(`${this.id}`);
    this.DOMPath.addEventListener("click", this.listenerTarget);
  }

  listenerTarget() {
    console.log(`${this.id} was clicked`);
  }
}
