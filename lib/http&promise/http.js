"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.all = all;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.baseURL = "http://admin.jr.zhyxcxcs.cn";
_axios2.default.defaults.headers.post["Content-Type"] = "application/x-www-from-urlencoded";
_axios2.default.defaults.timeout = 30000;

_axios2.default.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log("request: " + JSON.stringify(config));
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

_axios2.default.interceptors.response.use(function (response) {
  // console.log("response: " + JSON.stringify(response));
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

function get(url, params) {
  return new Promise(function (resolve, reject) {
    _axios2.default.get(url, params).then(function (res) {
      resolve(res);
    }).catch(function (err) {
      reject(err);
    });
  });
}

function post(url, params) {
  return new Promise(function (resolve, reject) {
    _axios2.default.post(url, params).then(function (res) {
      resolve(res);
    }).catch(function (err) {
      reject(err);
    });
  });
}

function all() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var spread = arguments[1];

  _axios2.default.all(callback).then(function (values) {
    spread(values);
  });
}