class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.wolf = false;
    this.human = true; 
    this.hungry = false;
  }
  change() {
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    this.human = !this.human;    
    }
  eat(victim) { 
    if (this.human === false) {
      victim.alive = false;
      this.human = true;
  } 
}
}

module.exports = Werewolf;