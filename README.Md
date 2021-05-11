## Challenge Documentation

### Components folder explanation

- TopMenu component is responsible to render Name and top bar.
- CodeEditor is responsible to input data in JSON format.
- ChartView component is responsible to render the chart received from google charts component. Inside the chat component, it has another component responsible for a button that sends the information, called ButtonBar.
- ButtonBar component has a function called callbackGenerateGraphClick which receives data and send to CodeMirror.

### Library explanation

#### React Google Chart
- The choice of React Google Chart (https://react-google-charts.com/) for rendering the Chart's line was done in order to speed up the work on implementing this chart, instead of being done from scratch. This choice was made because the React Google Chart has a well-structured component, as well as intuitive and practical.

### Project Install

use `yarn` or `npm install`

### Run Project 

use `yarn dev` or `npm run dev`

### Dependencies explanation

#### Eslint
  Eslint was chosen due to some issues I experienced in my career as a Front-End Developer. One of them is the lack of organization and standardization of the code. For this reason, I decided to use the JavaScript Standard format, which has a very intuitive documentation. Eslint, in turn, assists by giving us a precious time that would have been spent on code review.
  
#### Husky
  We can use Husky to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
  The choice of Husky was for pure habit, since I like to guarantee that my commits never perform incorrectly. This insures good practice, according to the standard conventional commits that you can find in this link (https://www.conventionalcommits.org/en/v1.0.0/)
#### Webpack
  Webpack was chosen again out of pure habit and for ensuring automation and optimization in production. With an easy setup and a documentation showing us step by step, it what makes the Webpack a tool that I will not let go of when it comes to develop.
#### Jest
  I chose Jest because it's the most used tool on the market nowadays and it has a very intuitive documentation.


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
