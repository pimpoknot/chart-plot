export const FIELD_TYPE = 'type';
export const FIELD_TIMESTAMP = 'timestamp';
export const FIELD_SELECT = 'select';
export const FIELD_GROUP = 'group';
export const FIELD_BEGIN = 'begin';
export const FIELD_END = 'end';
export const FIELD_OS = 'os';
export const FIELD_BROWSER = 'browser';
export const FIELD_MIN = 'min_response_time';
export const FIELD_MAX = 'max_response_time';

export const TYPE_START = 'start';
export const TYPE_SPAN = 'span';
export const TYPE_DATA = 'data';
export const TYPE_STOP = 'stop';

export const LOADING_CHART = 'Loading chart';
export const GENERATE_CHART = 'GENERATE CHART';

export const ERROR_ONLY_ONE_SPAN_BEGIN = 'Should not have two events of type SPAN to set begin';
export const ERROR_ONLY_ONE_SPAN_END = 'Should not have two events of type SPAN to set end';
export const ERROR_DATA_BEFORE_SPAN = 'Should insert SPAN event with \'begin\' and \'end\', first of DATA event';
export const ERROR_JSON_PARSE = 'Bad JSON inside code editor';
