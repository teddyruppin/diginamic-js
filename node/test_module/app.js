var Character = require('./character.js').Character;
console.log(Character);

var c1 = new Character("Luke", 100);
var c2 = new Character("Darth vador", 300);
c1.attack(c2);
c1.attack(c2);
c1.attack(c2);

var data = require('./data.json');
console.log(data.val4.b);

console.log(__dirname);
console.log(__filename);