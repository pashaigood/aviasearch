import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import Ticket from './components/Ticket'

/**
 *
 * @param {[TicketDTO]} items
 * @constructor
 */
const Tickets = ({items}) => (
  <div>
    {
      items.map((ticket, index) => (
        <Ticket
          key={index}
          ticket={ticket}
        />
      ))
    }
  </div>
)

Tickets.propTypes = {
  items: PropTypes.array.isRequired
}

export default pure(Tickets)