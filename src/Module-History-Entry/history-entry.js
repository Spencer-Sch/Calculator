import { Output } from "../Module-Output/output";

export class HistoryEntry {
  constructor(result, arr, id) {
    this.equasionResult = result;
    this.equasion = arr;
    this.id = id;
  }

  render() {
    const newLi = document.createElement("li");
    newLi.className = "hist-output";
    newLi.id = `${this.id}`;
    const template = document.getElementById("hist-entry");
    const templateContent = document.importNode(template.content, true);
    newLi.append(templateContent);
    const h1 = newLi.querySelector("h1");
    const h2 = newLi.querySelector("h2");
    h1.textContent = this.equasionResult;
    h2.textContent = Output.renderEquasion(this.equasion);
    const histUl = document.querySelector("#hist-display ul");
    histUl.append(newLi);
  }
}
