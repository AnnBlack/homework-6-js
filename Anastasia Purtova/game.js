function Game(first, second) {
  this.first = first;
  this.second = second;
  this.first.name = first.character.name;
  this.second.name = second.character.name;
  this.fight(first, second);
}

Game.prototype.fight = function(first, second) {
  console.log(this.first.name + ' is fighting with ' + this.second.name);
  while (first.isAlive() && second.isAlive()) {
    first.attack(second);
    console.log(second.name + ' health power: ' + second.getLife());
    if (!second.isAlive()) {
      console.log(first.name + ' is the winner!');
      first.refresh();
      break;
    }
    second.attack(first);
    console.log(first.name + ' health power: ' + first.getLife());
    if (!first.isAlive()) {
      console.log(second.name + ' is the winner!');
      second.refresh();
    }
  }
}



