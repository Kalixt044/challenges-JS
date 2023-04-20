import { Pay } from "./Pay.class.js";

export class Card extends Pay {
  constructor(number) {
    super();
    this.number = number;
  }

  makePay(quantity) {
    if (this.number.length !== 16) {
      return {
        realized: false,
        quantity: 0,
        error: "Invalid card number"
      }
    }