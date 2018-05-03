import React from 'react'
import PropTypes from 'prop-types'
import StopQuantity, { Values } from 'constants/StopQuantity'
import format from 'utils/format'
import Checkbox from '../Checkbox'
import Classes from './index.scss'

export default class extends React.PureComponent {
  static propTypes = {
    values: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  toggle = name => {
    const result = []
    const values = new Set(this.props.values)
    if (values.has(StopQuantity[name])) {
      values.delete(StopQuantity[name])
    } else {
      values.add(StopQuantity[name])
    }

    values.forEach(i => { result.push(i) })
    this.props.onChange(result)
  }

  checkOnly (name) {
    this.props.onChange([StopQuantity[name]])
  }

  checkAll = () => {
    this.props.onChange([])
  }

  render () {
    const { values } = this.props

    return (
      <div className={`row no-gutters ${Classes.container}`}>
        {Object.keys(StopQuantity).map(name => {
          const isAllCheckbox = name !== Values.ALL
          return (
            <div key={name} className={`col-6 col-sm-12 ${Classes.transfer}`}>
              <Checkbox
                className={Classes.transferCheckbox}
                value={name}
                label={format.stopQuantityName(StopQuantity[name])}
                checked={
                  isAllCheckbox
                    ? values.includes(StopQuantity[name])
                    : !values.length
                }
                onChange={isAllCheckbox ? this.toggle : this.checkAll}
              />
              {isAllCheckbox && (
                <span
                  className={Classes.only}
                  onClick={() => this.checkOnly(name)}
                >
                  Только
                </span>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}
