import React from 'react'
import PropTypes from 'prop-types'
import Currencies from 'contexts/Currencies'
import format from 'utils/format'

const CurrencyFormat = (props) => (
  <Currencies.Consumer>
    {(currency) => (format.currency(props.value, currency))}
  </Currencies.Consumer>
)

CurrencyFormat.propTypes = {
  value: PropTypes.number.isRequired
}

export default CurrencyFormat