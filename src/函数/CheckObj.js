/**
 * @description: 一个检验用户信息的类
 * @param {type}
 * @return:
 */
class CheckObj {
  constructor() {
    this.checkName = function() {
      console.log("我来检测下名字");
    };
    this.checkEmail = function() {
      console.log("我来检测下邮箱");
    };
  }
}

// ES6
// export default CheckObj;

// ES5
module.exports = CheckObj;
