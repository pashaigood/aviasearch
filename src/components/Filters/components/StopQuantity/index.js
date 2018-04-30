import React from 'react'
import Checkbox from '../Checkbox'
import SearchContainer from '../Filter'
import Classes from './index.scss'

const Transfers = [
  'Все',
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
]

export default () => (
  <SearchContainer
    className={Classes.container}
    name='Количество пересадок'
  >
    <div
      className={Classes.stopQuantity}
    >
      {
        Transfers.map((name, id) => (
          <div
            key={id}
            className={Classes.transfer}
          >
            <Checkbox
              className={Classes.transferCheckbox}
              id={'transfer' + id}
              name={'transfer'}
              label={name}
              checked={!!(id % 2)}
            />
            <span className={Classes.only}>Только</span>
          </div>
        ))
      }
    </div>
  </SearchContainer>
)
