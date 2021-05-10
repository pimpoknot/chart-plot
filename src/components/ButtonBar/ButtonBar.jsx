import React from 'react'
import './buttonBar.scss'
import { data } from '../../utils'

export default class ButtonBar extends React.Component {
  render() {
    return (
     <nav className="buttonBar navbar navbar-expand fixed-bottom background-topBar">
       <button type="button" className="btn btn-primary" onClick={ () => {this.props.callbackGenerateGraphClick() }}>{data.button}</button>
     </nav>
    )
  }
}

