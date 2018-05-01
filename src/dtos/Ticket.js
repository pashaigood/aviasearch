export default class TicketDTO {
  constructor ({origin, origin_name, destination, destination_name, departure_date, departure_time, arrival_date, arrival_time, carrier, stops, price}) {
    this.origin = origin
    this.origin_name = origin_name
    this.destination = destination
    this.destination_name = destination_name
    this.departure_date = departure_date
    this.departure_time = departure_time
    this.arrival_date = arrival_date
    this.arrival_time = arrival_time
    this.carrier = carrier
    this.stops = stops
    this.price = price
  }
}