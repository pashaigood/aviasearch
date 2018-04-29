import React from 'react'
import ReactDOM from 'react-dom'
import Application from './containers/Application'
import './components/UIKit'

ReactDOM.render(<Application />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
