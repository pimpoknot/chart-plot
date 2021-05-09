import  TopMenu  from './components/topMenu/TopMenu'
import CodeEditor from './components/codeMirror/CodeEditor'
import ChartView from './components/chart/ChartView'
import './styles/global.scss'

function App () {
  return (
    <>
      <TopMenu />
      <CodeEditor />
      <ChartView />
    </>
  ) 
}

export default App;
