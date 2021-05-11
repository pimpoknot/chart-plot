## Challenge Documentation

Components folder explanation
- TopMenu component is responsible to render Name and top bar.
- CodeEditor is responsible to input data in JSON format
- ChartView component is responsible to render the chart received from google charts component. Inside the chat component, it has another component responsible for a button that sends the information, called ButtonBar
- ButtonBar component has a function called callbackGenerateGraphClick which receives data and send to CodeMirror

## Library explanation

### React Google Chart
- The choice of React Google Chart (https://developers.google.com/chart) for rendering the Chart's line was done in order to speed up the work on implementing this chart, instead of being done from scratch. This choice was made because the React Google Chart has a well-structured component, as well as intuitive and practical

### Project Install

use `yarn` or `npm install`

### Dependencies explanation

<<<<<<< HEAD
# Eslint
# Husky
  
# babel 
# Webpack
# Jest
=======
Eslint
Husky
babel 
Webpack
Jest
>>>>>>> 4cc66b3fa3ace7874e3847dec3ac5665d96be594



``` 
{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
```
