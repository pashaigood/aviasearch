import Filters from '../Filters'
import ticketsMocks from 'mocks/tickets.json'

describe('dtos/Filters', () => {
  it('Should filter items', () => {
    const tickets = filterTickets({stopQuantities: [1]})
    const ticketsWithOneStop = getTicketsWithNStops(1)
    expect(tickets.length).toBe(ticketsWithOneStop.length)
  })

  it('Should filter return all tickets with empty filter', () => {
    const tickets = filterTickets({stopQuantities: []})
    expect(tickets.length).toBe(ticketsMocks.tickets.length)
  })

  it('Should filter several stops', () => {
    const ticketsWithOneStop = getTicketsWithNStops(1)
    const ticketsWithThreeStop = getTicketsWithNStops(3)
    const tickets = filterTickets({stopQuantities: [1, 3]})
    expect(tickets.length).toBe(ticketsWithOneStop.length + ticketsWithThreeStop.length)
  })
})

function filterTickets (filters) {
  return ticketsMocks.tickets.filter(new Filters(filters).getFilter)
}

function getTicketsWithNStops (n) {
  const tickets = ticketsMocks.tickets.filter(t => t.stops === n)
  expect(tickets).toBeTruthy()
  return tickets
}