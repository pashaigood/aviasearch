import React from 'react'
import Component from './Application'
import { shallow } from 'enzyme'

describe('containers/Application', () => {
  it('Should be rendered', () => {
    shallow(<Component />)
  })
})
