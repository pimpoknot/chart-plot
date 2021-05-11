## Challenge Documentation

### Components folder explanation

- TopMenu component is responsible to render Name and top bar.
- CodeEditor is responsible to input data in JSON format.
- ChartView component is responsible to render the chart received from google charts component. Inside the chat component, it has another component responsible for a button that sends the information, called ButtonBar.
- ButtonBar component has a function called callbackGenerateGraphClick which receives data and send to CodeMirror.

### Library explanation

#### React Google Chart
- The choice of React Google Chart (https://developers.google.com/chart) for rendering the Chart's line was done in order to speed up the work on implementing this chart, instead of being done from scratch. This choice was made because the React Google Chart has a well-structured component, as well as intuitive and practical.

### Project Install

use `yarn` or `npm install`

### Run Project 

use `yarn dev` or `npm run dev`

### Dependencies explanation

# Eslint
  A escolha do Eslint foi feita por conta dos problemas que vivenciei ao longo da minha carreira como Front-end developer. Uma delas é falta e organização e padronização do código, e para isso resolvi usar o formato JavaScript Standard no qual temos uma documentação bem ituitiva.
  (https://standardjs.com/rules.html)
# Husky
  - You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
  A escolha do husky foi por puro costume, sempre gosto de garantir que meus commits jamais sejam commitados de forma errada. Garantindo boas práticas. (https://www.conventionalcommits.org/en/v1.0.0/)
# Webpack
  Webpack foi escolhido novamente por puro hábito e por garantir automação e otimização na produção. 
# Jest
  Para nossos testes escolhi o jest por ser a ferramenta mais utilizada no mercado atualmente e ter toda documentação bem ituitiva.


##### Data testing in a challenge
``` 
{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.5, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.3, max_response_time: 1.0}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.3, max_response_time: 0.4}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.5}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.1}
```
