import React from 'react'

import 'codemirror/mode/javascript/javascript.js';
import { UnControlled as CodeMirror} from 'react-codemirror2'
import './CodeMirror.scss'

export default class CodeEditor extends React.Component { 
  render() {
    return (
      <CodeMirror
      options={{
        mode:'javascript',
        theme: 'material',
        lineNumbers: true
      }}
      
    />
    )
  }
}
