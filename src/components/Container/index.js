import React from 'react'
import PropTypes from 'prop-types'
import Classes from './index.scss'

const Container = (props) => {
  return (
    <div
      style={props.style}
      className={Classes.container}
      children={props.children}
    />
  )
}

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default Container