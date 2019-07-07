var Humen = function(params) {
  this.skill = (params && params.skill) || "保密";
  this.hobby = (params && params.hobby) || "保密";
};

Humen.prototype = {
  getSkill() {
    return this.skill;
  },
  getHobby() {
    return this.hobby;
  }
};

var named = function(name) {
  var that = this;
  (function(name, that) {
    that.wholeName = name;
    if (name.indexOf(" ") > -1) {
      that.firstName = name.slice(0, name.indexOf(" "));
      that.secondName = name.slice(name.indexOf(" "));
    }
  })(name, that);
};

var Work = function(work) {
  var that = this;
  (function(work, name) {
    switch (work) {
      case "code":
        that.work = "工程师";
        that.workDescript = "每天沉醉于编程";
        break;
      case "UI":
      case "UE":
        that.work = "设计师";
        that.workDescript = "设计更是一种艺术";
        break;
      case "code":
        that.work = "教师";
        that.workDescript = "分享也是一种快乐";
        break;
      default:
        that.work = work;
        that.workDescript = "对不起,我们还不知道您所选择的职位描述";
    }
  })(work, that);
};

Work.prototype.changeWork = function(work) {
  this.work = work;
};

Work.prototype.changeDescript = function(setence) {
  this.workDescript = setence;
};

var Person = function(name, work) {
  var _persion = new Humen();
  _persion.name = new named(name);
  _persion.work = new Work(work);
  return _persion;
};

var xiaoming = new Person("xiao ming", "code");
console.log(xiaoming.getSkill());
console.log(xiaoming.getHobby());
console.log(xiaoming.work);
console.log(xiaoming.name);
xiaoming.work.changeWork("教师");
xiaoming.work.changeDescript("教师也很忙");
console.log(xiaoming.work);
