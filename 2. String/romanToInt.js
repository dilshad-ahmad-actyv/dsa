/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const n = s.length;
  let IntValue = 0;
  for (let i = 0; i < n; i++) {
    if (isConditionMatch(s[i], i, s)) {
      IntValue -= convertCharToValue(s[i]);
    } else {
      IntValue += convertCharToValue(s[i]);
    }
  }
  return IntValue;
};

function convertCharToValue(char) {
  let value;

  switch (char) {
    case "I":
      value = 1;
      break;
    case "V":
      value = 5;
      break;
    case "X":
      value = 10;
      break;
    case "L":
      value = 50;
      break;
    case "C":
      value = 100;
      break;
    case "D":
      value = 500;
      break;
    case "M":
      value = 1000;
      break;
    default:
      value = 0;
  }

  return value;
}

function isConditionMatch(roman, position, s) {
  if (roman === "I") {
    if (s[position + 1] === "V" || s[position + 1] === "X") {
      return true;
    }
  } else if (roman === "X") {
    if (s[position + 1] === "L" || s[position + 1] === "C") {
      return true;
    }
  } else if (roman === "C") {
    if (s[position + 1] === "D" || s[position + 1] === "M") {
      return true;
    }
  }
  return false;
}
