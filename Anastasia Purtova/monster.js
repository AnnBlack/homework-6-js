function Monster () {
  Character.apply(this, arguments);
}

Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;


Monster.prototype.getDamage = function() {
  if ( this.shouldUseSkill() ) {
    this.counter--;
    return this.character.damage * 2;
  }
  return this.character.damage;
}

Monster.prototype.setLife = function(dmg) {
  if ( this.shouldUsePotion() ) {
  } else {
      this.character.life -= dmg;
    }
}
