function Hero() {
  Character.apply(this, arguments);
}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;


Hero.prototype.getDamage = function() {
  if(this.shouldUsePotion()) {
   return this.character.damage * 2;
  }
  return this.character.damage;
}

Hero.prototype.setLife = function(dmg) {
  if ( this.shouldUseSkill() ) {
    this.counter--;
    this.character.life = this.character.life;
  } else {
      this.character.life -= dmg;
    }
}