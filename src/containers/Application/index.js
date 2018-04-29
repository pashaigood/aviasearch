import React from 'react'
import Header from '../../components/Header'
import Filters from '../../components/Filters'

const Styles = {
  container: {
    width: 880
  }
}

export default class extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <div style={Styles.container} className="container">
          <div className="col">
            <Filters />
          </div>
        </div>
      </div>
    )
  }
}