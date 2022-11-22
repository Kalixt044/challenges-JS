import "./styles.css";
import { addNewAttr } from "./exercise";

(() => {
  const array = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ];

  document.getElementById("app").innerHTML = `
    <h1>Calc taxes in array</h1>
    <p>Array: <code>${JSON.stringify(array, null, 1)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = JSON.stringify(addNewAttr(array), null, 1);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
