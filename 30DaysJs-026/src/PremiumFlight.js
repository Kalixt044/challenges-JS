import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    
    if (this.capacity > 0) {
      this.passengers.push(passenger);
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: this.price + this.specialService,
      });
      this.capacity--;
      return new Reservation(this, passenger);
    } else
  }
}