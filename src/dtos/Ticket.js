export default class TicketDTO {
  /* eslint-disable */
  constructor ({
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price
  }) {
    this.origin = origin
    this.originName = origin_name
    this.destination = destination
    this.destinationName = destination_name
    this.departureDate = departure_date
    this.departureTime = departure_time
    this.arrivalDate = arrival_date
    this.arrivalTime = arrival_time
    this.carrier = carrier
    this.stops = stops
    this.price = price
  }
  /* eslint-enable */
}
