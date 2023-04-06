export function myMap(array, func) {
return array.reduce((accumulator, currentValue) => {
    accumulator.push(func(currentValue));
    return accumulator;
  }, []);
}
