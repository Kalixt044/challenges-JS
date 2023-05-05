export class Motor {
  // Constructor de la clase `Motor`.
  constructor(propulsionTo, history) {
    // Establece una propiedad llamada `propulsionTo` para el objeto `Motor`.
    this.propulsionTo = propulsionTo;
    // Establece una propiedad llamada `history` para el objeto `Motor`.
    this.history = history;
    // Establece una propiedad llamada `status` para el objeto `Motor`.
    this.status = "off";
  }

  // Método que cambia el valor de la propiedad `status` del objeto `Motor` a "on" y agrega un objeto de cambio al historial.
  turnOn() {
    this.status = "on";
    this.history.addChange(this.propulsionTo, this.status);
  }

  // Método que cambia el valor de la propiedad `status` del objeto `Motor` a "off" y agrega un objeto de cambio al historial.
  turnOff() {
    this.status = "off";
    this.history.addChange(this.propulsionTo, this.status);
  }
}
// Clase History
export class History {
  constructor() {
    // Si la instancia de la clase `History` no existe, crea una nueva y establece una propiedad llamada `history` como un array vacío.
    if (!History.instance) {
      History.instance = this;
      this.history = [];
    }
    // Devuelve la instancia existente de la clase `History`.
    return History.instance;
  }

  // Método que agrega un objeto de cambio al historial si el último objeto agregado tiene una propiedad diferente de `propulsionTo` o `status`.
  addChange(propulsionTo, status) {
    const lastChange = this.history[this.history.length - 1];
    if (!lastChange || lastChange.propulsionTo !== propulsionTo || lastChange.status !== status) {
      this.history.push({ propulsionTo, status });
    }
  }

  // Método que devuelve una copia del historial.
  getFullState() {
    return this.history.slice();
  }
}