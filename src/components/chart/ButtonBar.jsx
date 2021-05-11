import React from 'react';
import { GENERATE_CHART } from '../../utils/utils';
import './buttonBar.scss'

export default class GraphControlBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand fixed-bottom background-bar background-topBar">
        <button type="button" className="btn btn-primary" onClick={() => { this.props.callbackGenerateGraphClick() }}>{GENERATE_CHART}</button>
      </nav>
    );
  }
}
