import React from 'react'
import Container from '../Container'
import Currency from './components/Currency'
import StopQuantity from './components/StopQuantity'

const Styles = {
  container: {
    width: 232
  }
}

export default () => (
  <Container style={Styles.container}>
    <Currency />
    <StopQuantity />
  </Container>
)