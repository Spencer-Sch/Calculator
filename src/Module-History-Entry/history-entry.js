export class HistoryEntry {
  constructor(result, arr) {
    this.equasionResult = result;
    this.equasion = arr;
  }

  render() {
    const liTemplate = document.getElementById("hist-entry");
    const historyLi = document.importNode(liTemplate, true);
    console.log(historyLi);
    document.querySelector("#hist-display ul").appendChild(historyLi);
    console.log(document.querySelector("#hist-display"));
    ////////////
    const equasionH2 = historyLi.querySelector("#hist-equasion h2");
    equasionH2.textContent = this.equasion;
    const resultH1 = historyLi.querySelector("#hist-result h1");
    resultH1.textContent = this.equasionResult;
  }
}
