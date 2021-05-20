export class NumberButton {
  constructor(btnValue) {
    this.value = btnValue;
    this.id = `btn-${this.value}`;
    this.DOMEl = document.getElementById(`${this.id}`);
  }
}
