"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Calculator = require("./Calculator");

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = exports.app = (0, _express2.default)();

var port = 8080;

app.use(_bodyParser2.default.json());

app.listen(port, function () {
  return console.log("oneway is listening on port " + port);
});

(0, _Calculator2.default)(app);