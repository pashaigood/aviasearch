import React from 'react'
import ReactDOM from 'react-dom'
import './components/UIKit'
import Application from './containers/Application'

ReactDOM.render(<Application />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
