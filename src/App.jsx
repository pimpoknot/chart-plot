import CodeEditor from './components/codeMirror/CodeEditor'

import  TopMenu  from './components/topMenu/TopMenu'
import './styles/global.scss'

export function App () {
  return (
    <>
      <TopMenu />
      <CodeEditor />
    </>
  ) 
}
