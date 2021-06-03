import { Calculator } from "../Module-Calculator/calculator";
import { Output } from "../Module-Output/output";

export class HistoryEntry {
  constructor(result, arr) {
    this.equasionResult = result;
    this.equasion = arr;
  }

  render() {
    const newLi = document.createElement("li");
    newLi.className = "hist-output";
    const template = document.getElementById("hist-entry");
    // const template = document.querySelector("#hist-entry");
    const templateContent = document.importNode(template.content, true);
    newLi.append(templateContent);
    const h1 = newLi.querySelector("h1");
    const h2 = newLi.querySelector("h2");
    h1.textContent = this.equasionResult;
    h2.textContent = Output.renderEquasion(this.equasion);
    newLi.addEventListener(
      "click",
      Calculator.recoverHistory.bind(this, this.equasion, this.equasionResult)
    );
    const histUl = document.querySelector("#hist-display ul");
    histUl.append(newLi);
  }
}
