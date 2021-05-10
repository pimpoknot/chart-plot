import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChartView from './ChartView'
import Chart from 'react-google-charts';
import { cleanup } from '@testing-library/react';
import { getDataTableStruct } from './ChartView'
import ButtonBar from '../ButtonBar/ButtonBar';
import { ContextData } from '../../utils';


configure({adapter: new Adapter()})

describe('test about components inside ChartView', () => {
  test('should render CharView correctly', () => {
    shallow(<ChartView />)
  })

  test('should have 1 Chart component', () => {
    let container = shallow(<ChartView />)
    expect(container.find(Chart)).toHaveLength(1)
  })

  test('should have 1 Chart component', () => {
    let container = shallow(<ChartView />)
    expect(container.find(ButtonBar)).toHaveLength(1)
  })

  test('should generateGraphClickCallback update correctly', () => {
    let container = mount (
      <ContextData.Provider value={{
        TransformJSONInArray: () => { return global.exampleJsonArray }
      }}>
        <ButtonBar />
      </ContextData.Provider>
    )
    container.instance().generateGraphClickCallback();
    expect(container.state('chartData')).toEqual(global.exampleChartArray);
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
    let correctLoader = '<div>'+'Loading Chart'+'</div>';
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