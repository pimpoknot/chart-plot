import React from "react"

export const data = {
  name: 'Your Name\'s Challenge',
  title: 'title',
  button: 'generate chart' 
}

export const TITLE = 'Your Name\'s Challenge'


const ContextData = React.createContext()
const DataConsumer = ContextData.Consumer


class DataProvider extends React.Component {
  state = {
    codeEditor: undefined
  }

  SetEditor = (edt) => {
    this.SetEditor(() => {
      return {
        codeEditor: edt
      }
    })
  }

  // Função que pega o texto e converter para um Array em JSON onde cada elemento é um JSON

  TransformJSONInArray = () => {
    var jsonArr = []
    if(!this.state.codeEditor) {
      return undefined
    }

    var lines = this.state.codeEditor.match(/[^\r\n]+/g)
    for(let i=0; i < lines ; i++) {
      
      let text = lines[i]

      text = text.replace(/\s/g,'')

      text = this.insertDoubleQuoteInsideField(text, 'type')
      text = this.insertDoubleQuoteInsideField(text, 'timestamp')

      if(text.includes('start')) {
        text = this.insertDoubleQuoteInsideField(text, 'select')
        text = this.insertDoubleQuoteInsideField(text, 'group')
      }
      else if(text.includes('span')) {
        text = this.insertDoubleQuoteInsideField(text, 'begin')
        text = this.insertDoubleQuoteInsideField(text, 'end')
      }
      else if(text.includes('data')) {
        text = this.insertDoubleQuoteInsideField(text, 'os')
        text = this.insertDoubleQuoteInsideField(text, 'browser') 
        text = this.insertDoubleQuoteInsideField(text, 'min_response_time')
        text = this.insertDoubleQuoteInsideField(text, 'max_response_time')
      }

      text = text.replace(/'/g, '"')

      try {
        jsonArr.push(JSON.parse(text))
      } catch(e) {
        alert('json inserted incorrectly')
        return undefined
      }
    }
    return jsonArr
  }

  insertDoubleQuoteInsideField = (text, field) => {
    return text.replace(field+":", '"' +field+ '":')
  }

  render() {
    return (
     <ContextData.Provider value={{
        state: Object.assign(this.state),
        setJSONDATA: this.setJSONDATA,
        SetEditor: this.SetEditor,
        TransformJSONInArray: this.TransformJSONInArray
      }}>{this.props.children}
      </ContextData.Provider>
    )
  }
}

export { DataProvider, DataConsumer, ContextData }

