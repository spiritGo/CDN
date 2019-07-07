"use strict";

var check = function check() {};
check.prototype = {
  checkName: function checkName() {
    console.log("checkName");
    return this;
  },
  checkEmail: function checkEmail() {
    console.log("checkEmail");
    return this;
  }
};

var check = new check();
check.checkEmail().checkName();

Function.prototype.check = {
  checkName: function checkName() {
    console.log("checkName");
    return this;
  },
  checkEmail: function checkEmail() {
    console.log("checkEmail");
    return this;
  }
};

var a = new Function();
a.check.checkEmail().checkName();