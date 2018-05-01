import React from 'react'
import PropTypes from 'prop-types'
import Container  from 'components/Container'
import Currency from 'components/Currency'
import Filters from 'components/Filters'

const LeftBar = (props) => (
  <Container>
    <Currency
      currency={props.currency}
      onChange={props.onCurrencyChange}
    />
    <Filters
      filters={props.filters}
      onChange={props.onFiltersChange}
    />
  </Container>
)

LeftBar.propTypes = {
  currency: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired
}

export default LeftBar