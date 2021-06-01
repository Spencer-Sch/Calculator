export class HistoryEntry {
  constructor(result, arr) {
    this.equasionResult = result;
    this.equasion = arr;
  }

  render() {
    // const histEntEl = document.createElement("li");
    // histEntEl.className = "hist-output";
    // histEntEl.innerHTML = `
    //     <h2>${this.equasion}</h2>
    //     <h1>${this.equasionResult}</h1>
    // `;
    // const histDisplayUl = document.querySelector("#hist-display ul");
    // histDisplayUl.append(histEntEl);
    // console.log(histEntEl);

    const histEntEl = document.createElement("div");
    histEntEl.className = "hist-output";
    const histEntTemplate = document.getElementById("hist-entry");
    console.log(histEntTemplate);
    const histEntBody = document.importNode(histEntTemplate, true);
    histEntEl.appendChild(histEntBody);
    const histDisplayUl = document.querySelector("#hist-display");
    histDisplayUl.appendChild(histEntEl);
  }
}
