export const processData = ({ name, score }) => {
  if (typeof name !== "string" || typeof score !== "number") {
    throw new Error("У тебя проблемы");
  }
  return { name, score, status: score >= 50 ? "pass" : "fail" };
};

export const restrictLength = (str, maxLength) => {
  if (typeof str !== "string") throw new Error("Input must be a string");
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
};
