"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description: 一个检验用户信息的类
 * @param {type}
 * @return:
 */
var CheckObj = function CheckObj() {
  _classCallCheck(this, CheckObj);

  this.checkName = function () {
    console.log("我来检测下名字");
  };
  this.checkEmail = function () {
    console.log("我来检测下邮箱");
  };
};

// ES6
// export default CheckObj;

// ES5


module.exports = CheckObj;