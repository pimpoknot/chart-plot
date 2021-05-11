import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ButtonBar from './ButtonBar'
import { cleanup } from '@testing-library/react'
import  { GENERATE_CHART }  from '../../utils/utils'


configure({adapter: new Adapter()})

describe('test about the render process of ButtonBar component', () => {
  let container
  beforeEach(() => {
    container = shallow(<ButtonBar />)
  })
  afterEach(cleanup)

  test('should have navbar fixed-bottom', () => {
    expect(container.find('nav').hasClass('fixed-bottom')).toBe(true)
  })

  test('should have a button with the correctly name', () => {
    expect(container.find('button').text()).toEqual(GENERATE_CHART)
  })
})

describe('test about generate chart button action', () => {
  let spy
  let container
  let button
  beforeEach(()=> {
    spy = jest.fn()
    container = shallow(<ButtonBar callbackGenerateGraphClick={spy} />)
    button = container.find('button')
  })
  afterEach(cleanup)

  // test if 1 click generate 1 callback

  test('should callback 1 time if have 1 functions calls onClick', () => {
    button.props().onClick()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('should callback any time if have any onClick', () => {
    let countClick = 2
    for(let i =0 ;i < countClick; i++) {
      button.props().onClick()
    }
    expect(spy).toHaveBeenCalledTimes(countClick)
  })

  test('should not callback if has no click', () => {
    expect(spy).toHaveBeenCalledTimes(0);
  });
})