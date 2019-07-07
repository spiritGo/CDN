"use strict";

var check = function check() {
  return {
    checkName: function checkName() {
      console.log("checkName");
    }
  };
};

var check1 = check();
check1.checkName();