export default class FiltersDTO {
  constructor ({ stopQuantities = [] } = {}) {
    this.stopQuantities = stopQuantities
  }

  /**
   *
   * @param {TicketDTO} ticket
   */
  getFilter = ticket => {
    return (
      !this.stopQuantities.length || this.stopQuantities.includes(ticket.stops)
    )
  }
}
