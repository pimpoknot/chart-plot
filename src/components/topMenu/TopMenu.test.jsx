import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TopMenu from './TopMenu';


it('renders without crash', () => {
    let div = document.createElement('div');
    ReactDOM.render(<TopMenu/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders navbar correctly', () => {
  let { getByTestId } = render(<TopMenu />)
  expect(getByTestId('navBar')).toBeTruthy()
});
