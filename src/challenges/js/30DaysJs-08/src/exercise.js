export function createCalculator() {
let total = 0;

  // dentro del return devolvemos las funciones que modifican la variable privada
  return {
    add(value) {
      // Para sumar, simplemente sumamos el valor al total
      // y retornamos el total
      total += value;
      return total;
    },

    subtract(value) {
     // Lo mismo con la resta 
      total -= value;
      return total;
    },

    multiply(value) {
      // Lo mismo con la multiplicación y división
      total *= value;
      return total;
    },

    divide(value) {
      total /= value;
      return total;
    },

    // Al final una función para reiniciar el valor a 0
    clear() {
      total = 0;
      return total;
    },

    getTotal() {
      // Y el total por si se quiere guardar el valor en otra variable en cierto momento
      return total;
    },
  };
}
