// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

global.exampleJsonArray = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 0.9
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  }
];

global.correctChartArrayWithNewStart = [
  [
    "ts",
    "linux chrome min",
    "linux chrome max"
  ],
  [
    new Date("2018-03-01T00:00:00.000Z"),
    0.1,
    1.3
  ],
  [
    new Date("2018-03-01T00:01:00.000Z"),
    0.2,
    0.9
  ]
]

global.correctChartArrayWithExtraLinesAfterStop = [
  [
    "ts",
    "mac chrome min",
    "mac chrome max",
    "mac firefox min",
    "mac firefox max",
    "linux firefox min",
    "linux firefox max"
  ],
  [
    new Date("2018-03-01T00:00:00.000Z"),
    0.2,
    1.2,
    0.3,
    1.2,
    0.1,
    1
  ],
  [
    new Date("2018-03-01T00:01:00.000Z"),
    0.1,
    1,
    0.2,
    1.1,
    0.3,
    1.4
  ]
]

global.exampleChartArray = [
  [
    "ts",
    "linux chrome min",
    "linux chrome max",
    "mac chrome min",
    "mac chrome max",
    "mac firefox min",
    "mac firefox max",
    "linux firefox min",
    "linux firefox max"
  ],
  [
    new Date("2018-03-01T00:00:00.000Z"),
    0.1,
    1.3,
    0.2,
    1.2,
    0.3,
    1.2,
    0.1,
    1
  ],
  [
    new Date("2018-03-01T00:01:00.000Z"),
    0.2,
    0.9,
    0.1,
    1,
    0.2,
    1.1,
    0.3,
    1.4
  ]
];

global.jsonArrayWithNewStart = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 0.9
  },
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 0.9
  }
];

global.jsonArrayWithExtraLinesAfterStop = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 0.9
  }
]

global.jsonArrayMoreThanOneSpanBegin = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  }
]

global.correctEmptyArrayGraph = [[{ f: 'Date', type: 'date' }, { f: 'Line', type: 'number' }]];

global.jsonArrayDataBeforeSpan = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  }
]

global.jsonArrayMoreThanOneSpanEnd = [ {
  "type": "start",
  "timestamp": 1519862400000,
  "select": [
    "min_response_time",
    "max_response_time"
  ],
  "group": [
    "os",
    "browser"
  ]
},
{
  "type": "span",
  "timestamp": 1519862400000,
  "end": 1519862460000
},
{
  "type": "span",
  "timestamp": 1519862400000,
  "begin": 1519862400000,
  "end": 1519862460000
},
{
  "type": "data",
  "timestamp": 1519862400000,
  "os": "mac",
  "browser": "chrome",
  "min_response_time": 0.2,
  "max_response_time": 1.2
},
{
  "type": "data",
  "timestamp": 1519862400000,
  "os": "mac",
  "browser": "firefox",
  "min_response_time": 0.3,
  "max_response_time": 1.2
},
{
  "type": "data",
  "timestamp": 1519862400000,
  "os": "linux",
  "browser": "firefox",
  "min_response_time": 0.1,
  "max_response_time": 1
},
{
  "type": "data",
  "timestamp": 1519862460000,
  "os": "mac",
  "browser": "chrome",
  "min_response_time": 0.1,
  "max_response_time": 1
},
{
  "type": "data",
  "timestamp": 1519862460000,
  "os": "mac",
  "browser": "firefox",
  "min_response_time": 0.2,
  "max_response_time": 1.1
},
{
  "type": "data",
  "timestamp": 1519862460000,
  "os": "linux",
  "browser": "firefox",
  "min_response_time": 0.3,
  "max_response_time": 1.4
},
{
  "type": "stop",
  "timestamp": 1519862460000
}
]

global.jsonArrayWithTimestampGreatherThanEnd = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1519862480000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 0.9
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  }
]

global.jsonArrayWithTimestampLowerThanBegin = [
  {
    "type": "start",
    "timestamp": 1519862400000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "span",
    "timestamp": 1519862400000,
    "begin": 1519862400000,
    "end": 1519862460000
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1419862400000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.2
  },
  {
    "type": "data",
    "timestamp": 1519862400000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 0.9
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "mac",
    "browser": "firefox",
    "min_response_time": 0.2,
    "max_response_time": 1.1
  },
  {
    "type": "data",
    "timestamp": 1519862460000,
    "os": "linux",
    "browser": "firefox",
    "min_response_time": 0.3,
    "max_response_time": 1.4
  },
  {
    "type": "stop",
    "timestamp": 1519862460000
  }
]

global.correctChartArrayIgnoringOutsideBoundary = [
  [
    "ts",
    "linux chrome min",
    "linux chrome max",
    "mac firefox min",
    "mac firefox max",
    "linux firefox min",
    "linux firefox max"
  ],
  [
    new Date("2018-03-01T00:00:00.000Z"),
    0.1,
    1.3,
    0.3,
    1.2,
    0.1,
    1
  ],
  [
    new Date("2018-03-01T00:01:00.000Z"),
    0.2,
    0.9,
    0.2,
    1.1,
    0.3,
    1.4
  ]
]

global.correctEditorCode = "{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}\n"+
"{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}\n"+
"{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}\n"+
"{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}\n"+
"{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}\n"+
"{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}\n"+
"{type: 'stop', timestamp: 1519862460000}";

global.badJsonEditorCode = "{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}\n"+
"fkdajfkajdflakjdlk bad json\n"+
"{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}\n"+
"{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}\n"+
"{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}\n"+
"fkdajfkajdflakjdlk bad json\n"+
"{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}\n"+
"{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}\n"+
"{type: 'stop', timestamp: 1519862460000}";