import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/Container'
import Currency from 'components/Currency'
import Filters from 'components/Filters'
import Classes from './index.scss'

const LeftBar = props => (
  <Container className={Classes.container}>
    <Currency currency={props.currency} onChange={props.onCurrencyChange} />
    <Filters filters={props.filters} onChange={props.onFiltersChange} />
  </Container>
)

LeftBar.propTypes = {
  currency: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  onFiltersChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired
}

export default LeftBar
