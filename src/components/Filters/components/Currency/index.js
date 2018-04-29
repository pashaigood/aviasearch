import React from 'react'
import Filter from '../Filter'
import Classes from './index.scss'

const Currencies = [
  'RUB',
  'USD',
  'EUR'
]

export default () => (
  <Filter
    className={Classes.container}
    name='Валюта'
  >
    <div className='btn-group d-flex btn-group-toggle' data-toggle="buttons">
      {
        Currencies.map(name => (
          <label key={name} className={`${Classes.button} ${name === Currencies[0] ? 'active' : ''} btn btn-outline-primary w-100`}>
            <input type="radio" name="currency" id={name}/> {name}
          </label>
        ))
      }
    </div>
  </Filter>
)
