import React from 'react'
import { pure } from 'recompose'
import CurrenciesContext from 'contexts/Currencies'
import Header from 'components/Header'
import LeftBar from 'components/LeftBar'
import Tickets from 'components/Tickets'
import Classes from './index.scss'

const Application = ({
  filters,
  currency,
  tickets,
  onCurrencyChange,
  onFiltersChange
}) => (
  <div>
    <Header />
    <div className={`container-fluid ${Classes.container}`}>
      <div className={Classes.leftBar}>
        <LeftBar
          currency={currency.name}
          onCurrencyChange={onCurrencyChange}
          filters={filters}
          onFiltersChange={onFiltersChange}
        />
      </div>
      <div className={Classes.tickets}>
        <CurrenciesContext.Provider value={currency}>
          <Tickets items={tickets} />
        </CurrenciesContext.Provider>
      </div>
    </div>
  </div>
)

export default pure(Application)
