export function fibonacci(number) {
  const fibo = [];
  let a = 1;
  let b = 0;
  let temp;

  for (let i = 0; i < n; i++) {
    fibo.push(a);
    temp = a;
    a = a + b;
    b = temp;
  }

  return fibo;
}