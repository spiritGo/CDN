"use strict";

var _CheckObj = require("./CheckObj");

var _CheckObj2 = _interopRequireDefault(_CheckObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkObj = new _CheckObj2.default(); // es6
// import CheckObj from "./CheckObj.js";
// import "./CheckObj";

// es5


checkObj.checkName();
checkObj.checkEmail();