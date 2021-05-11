import './style.scss'
import React from 'react'
import  { TOP_NAVBAR_TEXT }  from '../../utils/utils'


export default class TopMenu extends React.Component {
  render() {
    return (
          <div className="navBar-container">
            <nav data-testid="navBar" className="navBar background-topBar">
              <p data-testid="topNavBarName" className="titleTop-bar">{TOP_NAVBAR_TEXT}</p>
            </nav>
          </div>
    )
  }
}
