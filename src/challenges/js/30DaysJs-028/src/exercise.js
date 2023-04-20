export class CarBuilder {
  // Tu código aquí 👇
  constructor(year, model, brand, color, price, isAvailable) {
    this.year = year;
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.isAvailable = isAvailable;
  }
}
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setPrice(price) {
    this.car.price = price;
    return this;
  }

  setIsAvailable(isAvailable) {
    this.car.isAvailable = isAvailable;
    return this;
  }

  build() {
    return this.car;
  }
}

const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build();

console.log(car);