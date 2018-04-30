import React from 'react'
import Ticket from './components/Ticket'
import { tickets } from 'mocks/tickets.json'

export default (props) => (
  <div>
    {
      tickets.map((ticket, index) => (
        <Ticket
          key={index}
          ticket={ticket}
        />
      ))
    }
  </div>
)