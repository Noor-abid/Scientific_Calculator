export function calculate(expression) {
  try {
    let exp = expression
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log10")
      .replace(/√/g, "Math.sqrt")
      .replace(/\^/g, "**");

    return eval(exp).toString();
  } catch (error) {
    return "Error";
  }
}
