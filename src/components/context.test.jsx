import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DataProvider } from './context';
import { cleanup } from '@testing-library/react';

configure({adapter: new Adapter()});

describe('tests about component render', () => {
  test('should render correctly', () => {
    shallow(<DataProvider />);
  });
});

describe('tests about functions', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<DataProvider />);
    instance = wrapper.instance();
  });
  afterEach(cleanup);

  test('should set editor correctly', () => {
    let testString = 'editor setted';
    instance.setEditor(testString);
    expect(wrapper.state('codeEditor')).toEqual(testString);
  });

  // Test if getJSONArray returns correctly 
  test('should generate correct JSON array if codeEditor is correct', () => {
    wrapper.setState({codeEditor: global.correctEditorCode});    
    expect(instance.getJSONArray()).toEqual(global.exampleJsonArray);
  });

  
   //Test if getJSONArray return undefined if undefined

  test('should return undefined if codeEditor undefined', () => {
    expect(instance.getJSONArray()).toEqual(undefined);
  });

  /**
   * Test if getJSONArray return undefined if bad JSON
   */
  test('should return undefined if codeEditor have bad json', () => {
    window.alert = () => {};
    wrapper.setState({codeEditor: global.badJsonEditorCode});
    expect(instance.getJSONArray()).toEqual(undefined);
  })
});