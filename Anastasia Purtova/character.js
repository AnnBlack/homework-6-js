function Character(classType) {
  this.character = this.generateCharacter(classType);
  this.counter = 2;
  this.maxLife = this.character.life;
}

Character.prototype.generateCharacter = function(classType) {
  var random = Math.floor(Math.random() * (classType.length - 1) + 1);
  return classType[random];
}

Character.prototype.getLife = function() {
  return this.character.life;
}

Character.prototype.setLife = function(dmg) {
  this.character.life -= dmg;
}

Character.prototype.getDamage = function() {
  return this.character.damage;
}

Character.prototype.refresh = function() {
  this.character.life = this.maxLife;
  this.counter = 2;
}

Character.prototype.attack = function(obj) {
  obj.setLife(this.getDamage());
}

Character.prototype.isAlive = function() {
  return this.character.life > 0;
}

Character.prototype.shouldUseSkill = function() {
  return (this.character.life < this.maxLife/2 && this.counter > 0);
}

Character.prototype.shouldUsePotion = function() {
  return (this.character.life < this.maxLife / 2);
}
