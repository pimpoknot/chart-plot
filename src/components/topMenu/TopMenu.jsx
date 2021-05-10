import './style.scss'
import React from 'react'
import { data } from '../../utils'


export default class TopMenu extends React.Component {
  render() {
    return (
          <div className="navBar-container">
            <nav data-testid="navBar" className="navBar background-topBar">
              <p data-testid="navBarTitle" className="titleTop-bar">{data.name}</p>
            </nav>
          </div>
    )
  }
}
