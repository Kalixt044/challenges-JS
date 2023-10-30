export function delay(time, message) {return new Promise((resolve) => {
  window.setTimeout(() => {
    console.log(`after ${time}ms`);
    resolve(message);
  }, time);
});

}
