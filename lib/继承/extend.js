"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var superClass = function () {
  function superClass(name) {
    _classCallCheck(this, superClass);

    this.books = ["html", "css", "javascript"];
    this.name = name;
  }

  _createClass(superClass, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
    }
  }]);

  return superClass;
}();

var subClass = function () {
  function subClass(name, id) {
    _classCallCheck(this, subClass);

    this.id = id;
    superClass.call(this, name);
  }

  _createClass(subClass, [{
    key: "getId",
    value: function getId() {
      console.log(this.id);
    }
  }]);

  return subClass;
}();

subClass.prototype = new superClass();

var instance1 = new subClass("子类一", 1);
var instance2 = new subClass("子类二", 2);

instance1.getId();
instance1.getName();
instance2.getId();
instance2.getName();