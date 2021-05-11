import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChartView from './ChartView'
import { getDataTableStruct } from './ChartView'
import Chart from 'react-google-charts';
import { cleanup } from '@testing-library/react';
import ButtonBar from './ButtonBar';
import { LOADING_CHART } from '../../utils/utils'
import '@testing-library/jest-dom/extend-expect';

configure({adapter: new Adapter()});

describe('tests about components inside GraphView', () => {
  /**
  * Test if component render correctly
  */
  test('should render GraphView correctly', () => {
    shallow(<GraphView />);
  });

  /**
   * Test if component have 1 Chart
   */
  test('should have 1 Chart component', () => {
    let wrapper = shallow(<ChartView />);
    expect(wrapper.find(Chart)).toHaveLength(1);
  });

  /**
   * Test if component have 1 GraphControlBar
   */
  test('should have 1 GraphControlBar', () => {
    let wrapper = shallow(<ChartView />);
    expect(wrapper.find(ButtonBar)).toHaveLength(1);
  });

  /**
   * Test if generateGraphClickCallback change state.chartData correctly
   */
  test('should generateGraphClickCallback update chartData correctly', () => {
    let wrapper = mount(
      <DATA_CONTEXT.Provider value={{
        getJSONArray: () => { return global.exampleJsonArray }
      }}>
        <ChartView />
      </DATA_CONTEXT.Provider>
    )
    wrapper.instance().generateGraphClickCallback();
    expect(wrapper.state('chartData')).toEqual(global.exampleChartArray);
  });
})

describe('tests about Chart parameters', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ChartView />);
  })
  afterEach(cleanup);

  /**
   * Test if chart options are correct
   */
  test('should have correct options', () => {
    let correctOpts = {
      chartArea: { left: "3%", top: "7%", right: "16%", width: "100%", height: "80%" },
      vAxis: { textPosition: 'none' },
      hAxis: { gridlines: { color: 'transparent' }, format: 'mm:ss' },
      pointsVisible: true,
      interpolateNulls: true
    };
    expect(wrapper.find({options: correctOpts})).toHaveLength(1);
  });

  /**
   * Test if graph have type LineChart
   */
  test('should have graph type LineChart', () => {
    expect(wrapper.find({chartType: 'LineChart'})).toHaveLength(1);
  });

  /**
   * Test if graph have loader with correct string
   */
  test('should have loader with correct string', () => {
    let correctLoader = '<div>'+LOADING_CHART+'</div>';
    expect(wrapper.find({loader: correctLoader}));
  });

  /**
   * Test chart data change if state.chartData changes
   */
  test('should have chart data bind to state', () => {
    wrapper.setState({ chartData: null});
    expect(wrapper.find(Chart).prop('data')).toBeNull();
    let arrTest = [[0,0],[1,1]];
    wrapper.setState({ chartData: arrTest });
    expect(wrapper.find(Chart).prop('data')).toEqual(arrTest);
  });
});

// The globals are in setupTests.js
describe('test GraphView functions which convert json/arrays', () => {
  beforeEach(() => {
    window.alert = () => {};
  })
  /**
   * Test if the pass of an undefined to the main convert method will 
   * return simple chart array data to plot blank graph
   */
  test('should return simple chart array data', () => {
    expect(getDataTableStruct(undefined)).toEqual(global.correctEmptyArrayGraph);
  });

  /**
   * Test if it returns correct chart array if pass the
   * example in README.   
   */
  test('should return correct chart arrat in example', () => {    
    expect(getDataTableStruct(global.exampleJsonArray)).toEqual(global.exampleChartArray);
  });

  /**
   * Test if it returns correct if insert array with extra lines
   * without new start
   */
  test('should ignore extra lines after stop if dont have new start', () => {
    expect(getDataTableStruct(global.jsonArrayWithExtraLinesAfterStop))
      .toEqual(global.correctChartArrayWithExtraLinesAfterStop);
  });

  /**
   * Test if returns correct if insert array with new start
   */
  test('should restart arr if new start', () => {
    expect(getDataTableStruct(global.jsonArrayWithNewStart)).toEqual(global.correctChartArrayWithNewStart);
  });

  /**
   * Test if returns empty array if json array have more
   * than 1 span to set begin without a new start
   */
  test('should return empty array if more than 1 span to set begin', () => {
    expect(getDataTableStruct(global.jsonArrayMoreThanOneSpanBegin)).toEqual(global.correctEmptyArrayGraph);
  });

  /**
   * Test if returns empty array if json array have more
   * than 1 span to set end without a new start
   */
  test('should return empty array if more than 1 span to set end', () => {
    expect(getDataTableStruct(global.jsonArrayMoreThanOneSpanEnd)).toEqual(global.correctEmptyArrayGraph);
  });

  /**
   * Test if returns empty array if json array have data
   * before span
   */
  test('should return empty array if more data befory span', () => {
    expect(getDataTableStruct(global.jsonArrayDataBeforeSpan)).toEqual(global.correctEmptyArrayGraph);
  });

  /**
   * Test if it returns correct chart array ignoring pair with timestamp
   * greather than end defined by span
   */
  test('should return correct chart array ignoring greather timestamp data', () => {
    expect(getDataTableStruct(global.jsonArrayWithTimestampGreatherThanEnd))
      .toEqual(global.correctChartArrayIgnoringOutsideBoundary);
  });

  /**
   * Test if it returns correct chart array ignoring pair with timestamp
   * lower than begin defined by span
   */
  test('should return correct chart array ignoring lower timestamp data', () => {
    expect(getDataTableStruct(global.jsonArrayWithTimestampLowerThanBegin))
      .toEqual(global.correctChartArrayIgnoringOutsideBoundary);
  });
})