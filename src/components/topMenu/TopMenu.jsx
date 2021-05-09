import './style.scss'
import React from 'react'
import { TITLE } from '../../utils'


export default class TopMenu extends React.Component {
  render() {
    return (
          <div className="navBar-container">
            <nav data-testid="navBar" className="navBar background-topBar">
              <p data-testid="navBarTitle" className="titleTop-bar">{TITLE}</p>
            </nav>
          </div>
    )
  }
}
