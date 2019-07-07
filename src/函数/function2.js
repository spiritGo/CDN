var check = function() {
  return {
    checkName: function() {
      console.log("checkName");
    }
  };
};

var check1 = check();
check1.checkName();
