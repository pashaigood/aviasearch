import React from 'react'
import Container from 'components/Container'
import Classes from './index.scss'
import LineLogo from 'images/line-logo.png'

export default () => (
  <Container className={Classes.container}>
    <div className='d-flex'>
      <div className={Classes.buy}>
        <img src={LineLogo} width={120} height={35} />
        <button className="btn">
          Купить <br /> за 21 032 ​₽
        </button>
      </div>
      <div className={`w-100 ${Classes.info}`}>
        <div className={Classes.transfer}>
          <div className={Classes.count}>1 ПЕРЕСАДКА</div>
          <div className={Classes.direction}/>
        </div>
        <div className="d-flex">
          <div className="w-100">
            <div className={Classes.time}>09:25</div>
            <div className={Classes.location}>VVO, Владивосток</div>
            <div className={Classes.date}>9 окт 2018, Пт</div>
          </div>
          <div className={`w-100 ${Classes.destination}`}>
            <div className={Classes.time}>11:45</div>
            <div className={Classes.location}>Тель-Авив, TLV</div>
            <div className={Classes.date}>10 окт 2018, Пт </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)