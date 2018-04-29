import React from 'react'
import PropTypes from 'prop-types'
import Classes from './index.scss'

const Checkbox = ({id, name, checked, label, className, ...props}) => (
  <div
    className={`${Classes.checkbox} ${checked ? Classes.checked : ''}`}
    {...props}
  >
    <input id={id} name={name} type='checkbox'/>
    <label htmlFor={id} className={className}><span className={Classes.checkmark}/>{label}</label>
  </div>
)

Checkbox.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.node.isRequired
}

export default Checkbox