"use strict";

var checkObj = {
  checkName: function checkName() {
    console.log("checkName");
    return this;
  },
  checkEmail: function checkEmail() {
    console.log("checkEmail");
    return this;
  }
};

checkObj.checkName().checkEmail();