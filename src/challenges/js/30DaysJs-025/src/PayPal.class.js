import { Pay } from "./Pay.class.js";

export class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(quantity) {
    const payObject = super.makePay(quantity);
    return {
      ...payObject,
      platform: "PayPal",
      email: this.email
    }
  }
}
