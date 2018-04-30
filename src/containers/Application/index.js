import React from 'react'
import Header from 'components/Header'
import Filters from 'components/Filters'
import Tickets from 'components/Tickets'
import Classes from './index.scss'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <div className={`container-fluid ${Classes.container}`}>
          <div className="row">
            <div className={`col ${Classes.filters}`}>
              <Filters />
            </div>
            <div className="col-sm">
              <Tickets />
            </div>
          </div>
        </div>
      </div>
    )
  }
}