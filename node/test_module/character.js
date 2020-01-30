function Character(name, strenght) {
    this.name = name;
    this.strenght = strenght;
    this.lifepoints = 50;
}

Character.prototype.attack = function(enemy){
    console.log(this.name + ' attack ' + enemy.name);
    console.log(enemy.name + ' lost ' + this.strenght + ' lifepoints');
    console.log(enemy.name + ' has '+ enemy.lifepoints + ' lifepoints');
    enemy.looseLP(this.strenght);
}

Character.prototype.looseLP = function(damages){
    this.lifepoints -= damages;
}

module.exports.Character = Character;