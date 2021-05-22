export class Util {
  static isFloat(input) {
    const inputStr = `${input}`;
    const result = inputStr.includes(".");
    return result;
  }
}
