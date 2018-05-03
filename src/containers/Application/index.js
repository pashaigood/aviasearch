import React from 'react'
import { hot } from 'react-hot-loader'
import Currencies, { Values as CurrencyValues } from 'constants/Currencies'
import FiltersDTO from 'dtos/Filters'
import Ticket from 'dtos/Ticket'
import Application from './Application'

const TICKETS_SORTING = 'price'

@hot(module)
export default class extends React.Component {
  componentWillMount () {
    this.init()
  }

  init () {
    const filters = new FiltersDTO()

    this.setState({
      currency: Currencies[CurrencyValues.RUB],
      filters,
      tickets: []
    })

    this.getTickets(filters)
  }

  changeCurrency = currencyName => {
    const currency = Currencies[currencyName]
    if (!currency) {
      throw new Error('Try to select unregistered currency.')
    }

    this.setState({
      currency
    })
  }

  changeFilter = ({ stopQuantities }) => {
    let { filters } = this.state

    filters = new FiltersDTO({
      stopQuantities: stopQuantities || filters.stopQuantities
    })

    this.setState({
      filters
    })

    this.getTickets(filters)
  }

  async getTickets (filters = this.state.filters, sort = TICKETS_SORTING) {
    try {
      const data = await fetch('./mocks/tickets.json').then(r => r.json())
      this.setState({
        tickets: data.tickets.filter(filters.getFilter)
          .sort((a, b) => a[sort] > b[sort])
          .map(t => new Ticket(t))
      })
    } catch (e) {
      alert('Извините, запрос не дал результатов.')
    }
  }

  render () {
    return (
      <Application
        {...this.state}
        onCurrencyChange={this.changeCurrency}
        onFiltersChange={this.changeFilter}
      />
    )
  }
}
