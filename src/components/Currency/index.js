import React from 'react'
import PropTypes from 'prop-types'
import { Group } from 'components/Container'
import Classes from './index.scss'
import Currencies from 'constants/Currencies'

const Currency = ({currency, onChange}) => (
  <Group
    className={Classes.container}
    name='Валюта'
  >
    <div className='d-flex btn-group btn-group-toggle' data-toggle="buttons">
      {
        Object.keys(Currencies).map(name => (
          <label key={name} className={`${name === currency ? 'active' : ''} ${Classes.button} btn btn-outline-primary w-100`}>
            <input
              onChange={() => onChange(name)}
              type="radio"
              name="currency"
              id={name}
            /> {name}
          </label>
        ))
      }
    </div>
  </Group>
)

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Currency