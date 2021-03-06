import React from 'react'
import { withProps } from 'recompose'
import Container from 'components/Container'
import CurrencyFormat from 'components/CurrencyFormat'
import LineLogo from 'images/line-logo.png'
import format from 'utils/format'
import Classes from './index.scss'

/**
 *
 * @param {TicketDTO} ticket
 */
const Ticket = ({ticket, onBuy}) => (
  <Container className={`${Classes.container} `}>
    <div className='row no-gutters'>
      <div className={Classes.buy}>
        <div>
          <img src={LineLogo} width={120} height={35}/>
        </div>
        <button onClick={onBuy} className='btn'>
          Купить <br /> за <CurrencyFormat value={ticket.price}/>
        </button>
      </div>
      <div className='col'>
        <div className={Classes.info}>
          <div className={Classes.transfer}>
            <div className={Classes.count}>
              {format.stopQuantityName(ticket.stops)}
            </div>
            <div className={Classes.direction}/>
          </div>
          <div className='d-flex'>
            <div className='w-50'>
              <div className={Classes.time}>{ticket.arrivalTime}</div>
              <div className={Classes.location}>
                {ticket.origin}, {ticket.originName}
              </div>
              <div className={Classes.date}>
                {format.date(ticket.arrivalDate)}
              </div>
            </div>
            <div className={`w-50 ${Classes.destination}`}>
              <div className={Classes.time}>{ticket.departureTime}</div>
              <div className={Classes.location}>
                {ticket.destinationName}, {ticket.destination}
              </div>
              <div className={Classes.date}>
                {format.date(ticket.departureDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default withProps({
  onBuy (e) {
    const { pageX, pageY } = e
    import('components/Firework')
      .then((firework) => {
        firework.default(pageX, pageY)
      })
      .catch((e) => {
        console.error(e)
        alert('no more fireworks!')
      })
  }
})(Ticket)
