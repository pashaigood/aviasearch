import React from 'react'
import Container from 'components/Container'
import CurrencyFormat from 'components/CurrencyFormat'
import LineLogo from 'images/line-logo.png'
import format from 'utils/format'
import Classes from './index.scss'

/**
 *
 * @param {TicketDTO} ticket
 */
export default ({ticket}) => (
  <Container className={`${Classes.container} `}>
    <div className='row no-gutters'>
      <div className={Classes.buy}>
        <div>
          <img src={LineLogo} width={120} height={35} />
        </div>
        <button className="btn">
          Купить <br /> за <CurrencyFormat value={ticket.price}/>
        </button>
      </div>
      <div className="col">
        <div className={Classes.info}>
          <div className={Classes.transfer}>
            <div className={Classes.count}>{format.stopQuantityName(ticket.stops)}</div>
            <div className={Classes.direction}/>
          </div>
          <div className="d-flex">
            <div className="w-100">
              <div className={Classes.time}>{ticket.arrival_time}</div>
              <div className={Classes.location}>{ticket.origin}, {ticket.origin_name}</div>
              <div className={Classes.date}>{format.date(ticket.arrival_date)}</div>
            </div>
            <div className={`w-100 ${Classes.destination}`}>
              <div className={Classes.time}>{ticket.departure_time}</div>
              <div className={Classes.location}>{ticket.destination_name}, {ticket.destination}</div>
              <div className={Classes.date}>{format.date(ticket.departure_date)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)
