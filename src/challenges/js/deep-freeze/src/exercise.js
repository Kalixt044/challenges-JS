export function deepFreeze(obj) {return new Promise((resolve) => {
  window.setTimeout(() => {
    console.log(`after ${time}ms`);
    resolve(message);
  }, time);
});
}
