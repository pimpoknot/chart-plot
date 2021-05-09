import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import TopMenu from '../components/topMenu/TopMenu'
import CodeMirror from '../components/codeMirror/CodeEditor'


configure({ adapter: new Adapter() })

describe('should have all base components in App', () => {
  test('should have TopMenu component', () => {
    let container = shallow(<App />)
    expect(container.find(TopMenu)).toHaveLength(1)
  })

  test('should have CodeEditor component', () => {
    let container = shallow(<App />)
    expect(container.find(CodeMirror)).toHaveLength(1)
  })
})