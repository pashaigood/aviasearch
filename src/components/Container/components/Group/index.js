import React from 'react'
import PropTypes from 'prop-types'
import Classes from './index.scss'

const SearchContainer = ({ children, name, className, ...props }) => (
  <div className={`${Classes.container || ''} ${className || ''}`} {...props}>
    <h3 className={Classes.heading}>{name}</h3>
    {children}
  </div>
)

SearchContainer.propTypes = {
  name: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}

export default SearchContainer
