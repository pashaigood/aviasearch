import React from 'react'
import { shallow } from 'enzyme'
import StopQuantity, { Values } from 'constants/StopQuantity'
import Component from './index'
import Checkbox from '../Checkbox'

describe('components/Filters/components/StopQuantity', () => {
  let component
  let onChange
  beforeEach(() => {
    onChange = jest.fn()
    component = shallow(<Component values={[]} onChange={onChange} />)
  })

  it('Should check values', () => {
    const values = [Values.DIRECT, Values.THREE]
    component.setProps({ values: values.map(v => StopQuantity[v]) })
    const checkboxProps = getCheckedProps()
    values.forEach(v => {
      expect(findChecked(v, checkboxProps)).toBeTruthy()
    })

    let notSelectValues = new Set(Object.values(Values))
    values.forEach(v => {
      notSelectValues.delete(v)
    })
    notSelectValues.delete(Values.ALL)
    notSelectValues = Array.from(notSelectValues)

    notSelectValues.forEach(v => {
      expect(findChecked(v, checkboxProps)).toBeFalsy()
    })
  })

  it('Should check all when other not checked', () => {
    const checkboxes = component.find(Checkbox)
    expect(checkboxes.length).toBeGreaterThan(0)
    const checkboxProps = getCheckedProps()
    const isAllChecked = findChecked(Values.ALL, checkboxProps)
    const isOtherChecked = checkboxProps
      .filter(p => p.value !== Values.ALL)
      .reduce((result, p) => result && p.checked, true)
    expect(isAllChecked).toBeTruthy()
    expect(isOtherChecked).toBeFalsy()
  })

  it('Should not check all when anything checked', () => {
    component.setProps({
      values: [StopQuantity[Values.DIRECT]]
    })
    const isAllChecked = findChecked(Values.ALL)
    const isDirectChecked = findChecked(Values.DIRECT)
    expect(isAllChecked).toBeFalsy()
    expect(isDirectChecked).toBeTruthy()
  })

  describe('Should return changed values', () => {
    let values
    let instance
    beforeEach(() => {
      values = [Values.DIRECT, Values.ONE].map(v => StopQuantity[v])
      component.setProps({ values })
      instance = component.instance()
    })

    it('When value toggle', () => {
      instance.toggle(Values.TWO)
      expect(onChange.mock.calls[0][0]).toEqual(
        values.concat(StopQuantity[Values.TWO])
      )

      instance.toggle(Values.DIRECT)
      expect(onChange.mock.calls[1][0]).toEqual([StopQuantity[Values.ONE]])
    })

    it('When checked only one value', () => {
      instance.checkOnly(Values.TWO)
      expect(onChange.mock.calls[0][0]).toEqual([StopQuantity[Values.TWO]])
    })

    it('When all checked', () => {
      instance.checkAll()
      expect(onChange.mock.calls[0][0]).toEqual([])
    })
  })

  function findChecked (value, checkboxProps) {
    checkboxProps = checkboxProps || getCheckedProps()
    return checkboxProps.find(p => p.value === value).checked
  }

  function getCheckedProps () {
    return component.find(Checkbox).map(c => c.props())
  }
})
