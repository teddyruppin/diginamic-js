"use strict";

var p = fetch('https://api.spacexdata.com/v3/launches/latest').then(function (r) {
  return r.json();
}).then(function (d) {
  return console.log(d);
});