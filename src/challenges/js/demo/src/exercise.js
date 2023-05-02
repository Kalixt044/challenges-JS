
export function checkArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return true;
    }
  }
  return false;}
