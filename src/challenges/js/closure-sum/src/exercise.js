export function sumWithClosure(firstNum) {
  let sum = firstNum || 0;

  function addNumber(nextNum) {
    if (typeof nextNum === 'number') {
      sum += nextNum;
    }
    return addNumber;
  }

  addNumber.toString = function () {
    return sum.toString();
  };

  return addNumber;
}

