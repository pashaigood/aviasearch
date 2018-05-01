import React from 'react'
import PropTypes from 'prop-types'
import Classes from './index.scss'

export { default as Group } from './components/Group'

const Container = (props) => {
  return (
    <div
      style={props.style}
      className={`${Classes.container} ${props.className || ''}`}
      children={props.children}
    />
  )
}

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Container