import React from 'react'
import CodeEditor from './CodeEditor'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { ContextData } from '../../utils'

configure({ adapter: new Adapter() })

describe('test about basic render components', () => {

  // test if CodeEditor is render

  test('should render correctly', () => {
    shallow(<CodeEditor />, {context: ContextData})
  })

  //  test if uncontrolled codemirror was render

  test('should have 1 CodeMirror component', () => {
    let container = shallow(<CodeEditor />, {context: ContextData})
    expect(container.find(CodeMirror)).toHaveLength(1)
  })
})

describe('test CodeMirror component', () => {
  test('should have correct component', () => {
    let container = shallow(<CodeEditor />, {context: ContextData})
    let CorrectOptions = {
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true
    }
    expect(container.find({ options: CorrectOptions })).toHaveLength(1)
  })

  test.skip('should set editor correctly', () => {
    let spy = jest.fn()
    let container = shallow(
      <ContextData.Provider>
        <CodeMirror onChange={spy} />
      </ContextData.Provider>
    )
    container.props().onChange
    expect(spy).toHaveBeenCalledTimes(1)
  })
})