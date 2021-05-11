import React from 'react'
import 'codemirror/mode/javascript/javascript.js';
import './CodeMirror.scss'
import { DATA_CONTEXT } from '../context';
import {UnControlled} from 'react-codemirror2';

export default class CodeEditor extends React.Component {

  render() {
    return (
      <UnControlled
        options={{
          mode: 'javascript',
          theme: '3024-day',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => { this.context.setEditor(value); }}
       />
    )
  }
}


CodeEditor.contextType = DATA_CONTEXT