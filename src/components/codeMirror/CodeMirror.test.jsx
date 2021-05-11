import React from 'react';
import { DATA_CONTEXT } from '../context';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UnControlled as CodeMirror} from 'react-codemirror2';
import CodeEditor from './CodeEditor';

configure({ adapter: new Adapter() });

describe('tests about basic render components', () => {
  /**
   * Test if InputJSON was render
   */
  test('should render correctly', () => {
    shallow(<CodeEditor />, {context: DATA_CONTEXT});
  });

  /**
  * Test if uncontrolled codemirror was render
  */
  test('should have 1 UnControlled CodeMirror component', () => {
    let wrapper = shallow(<CodeEditor />, { context: DATA_CONTEXT });
    expect(wrapper.find(CodeMirror)).toHaveLength(1);
  });
})

describe('tests about UnControlled CodeMirror component', () => {
  /**
   * Test if component have uncontrolled codemirror with correct options
   */
  test('should have correct options', () => {
    let wrapper = shallow(<CodeEditor />, { context: DATA_CONTEXT });
    let correctOpts = {
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true
    }
    expect(wrapper.find({ options: correctOpts })).toHaveLength(1);
  });

  /**
   * TODO: back to finish
   */
  test.skip('should set editor correctly', () => {
    let spy = jest.fn();
    let wrapper = shallow(
      <DATA_CONTEXT.Provider>
        <CodeEditor onChange={spy} />            
      </DATA_CONTEXT.Provider>
    );
    wrapper.props().onChange;
    expect(spy).toHaveBeenCalledTimes(1);
  })
});