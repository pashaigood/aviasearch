import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import { Group } from 'components/Container'
import StopQuantity from './components/StopQuantity'


/**
 *
 * @param {FiltersDTO} filters
 * @param {function} onChange
 * @constructor
 */
const Filters = ({filters, onChange}) => (
  <Group
    name='Количество пересадок'
  >
    <StopQuantity
      values={filters.stopQuantities}
      onChange={stopQuantities => onChange({stopQuantities})}
    />
  </Group>
)

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default pure(Filters)