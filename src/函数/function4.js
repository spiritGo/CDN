var check = function() {};
check.prototype = {
  checkName() {
    console.log("checkName");
    return this;
  },
  checkEmail() {
    console.log("checkEmail");
    return this;
  }
};

var check = new check();
check.checkEmail().checkName();

Function.prototype.check = {
  checkName() {
    console.log("checkName");
    return this;
  },
  checkEmail() {
    console.log("checkEmail");
    return this;
  }
};

var a = new Function();
a.check.checkEmail().checkName();
