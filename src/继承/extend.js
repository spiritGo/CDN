class superClass {
  constructor(name) {
    this.books = ["html", "css", "javascript"];
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

class subClass {
  constructor(name, id) {
    this.id = id;
    superClass.call(this, name);
  }
  getId() {
    console.log(this.id);
  }
}

subClass.prototype = new superClass();

var instance1 = new subClass("子类一", 1);
var instance2 = new subClass("子类二", 2);

instance1.getId();
instance1.getName();
instance2.getId();
instance2.getName();
