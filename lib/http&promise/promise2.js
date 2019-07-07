"use strict";

var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise(function (resolve, reject) {
  //   reject("reject");
  resolve(111);
});

Promise.all([p1, p2, p3, p4, p5]).then(function (values) {
  console.log(values);
}, function (reason) {
  console.log(reason);
});

//From console:
//"reject"

//You can also use .catch
// Promise.all([p1, p2, p3, p4, p5])
//   .then(values => {
//     console.log(values);
//   })
//   .catch(reason => {
//     console.log(reason);
//   });

//From console:
//"reject"