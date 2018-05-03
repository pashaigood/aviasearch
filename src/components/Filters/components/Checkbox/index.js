import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'
import Classes from './index.scss'

const Checkbox = ({ checked, label, className, value, onChange, ...props }) => (
  <div
    className={`${Classes.checkbox} ${checked ? Classes.checked : ''}`}
    {...props}
    onClick={e => onChange(value)}
  >
    <div className={`${Classes.label} ${className}`}>
      <span className={Classes.checkmark} />
      {label}
    </div>
  </div>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

export default pure(Checkbox)
