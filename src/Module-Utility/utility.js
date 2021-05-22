export class Util {
  static isFloat(input) {
    const inputStr = `${input}`;
    const result = inputStr.includes(".");
    return result;
  }

  static negate(input) {
    if (+input > 0) {
      const newStr = `-${input}`;
      return newStr;
    } else if (+input < 0) {
      const newStr = `${input.slice(1)}`;
      return newStr;
    }
  }
}
