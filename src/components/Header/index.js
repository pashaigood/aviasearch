import React from 'react'
import Logo from './assets/Logo.png'

const Styles = {
  container: {
    height: 160,
    textAlign: 'center'
  },
  logo: {
    marginTop: 40
  }
}

export default () => (
  <div style={Styles.container}>
    <img
      style={Styles.logo}
      src={Logo}
      width={82}
      height={90}
      alt="Logo"
    />
  </div>
)