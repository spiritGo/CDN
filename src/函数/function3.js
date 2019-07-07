var checkObj = {
  checkName() {
    console.log("checkName");
    return this;
  },
  checkEmail() {
    console.log("checkEmail");
    return this;
  }
};

checkObj.checkName().checkEmail();
