import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TopMenu from './TopMenu';
import { data } from '../../utils'

it('renders without crash', () => {
    let div = document.createElement('div');
    ReactDOM.render(<TopMenu/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders navbar correctly', () => {
  let { getByTestId } = render(<TopMenu />)
  expect(getByTestId('navBar')).toBeTruthy()
});

it('should render name correctly', () => {
    let { getByTestId } = render(<TopMenu />)
    const correctlyTitle = getByTestId('navBarTitle')
    expect(getByTestId(correctlyTitle)).toHaveTextContent(data.name)
})