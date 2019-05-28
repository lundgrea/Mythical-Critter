class Direwolf {
  constructor(name, home, size){
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(person) {
    if (this.home === person.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(person)
      person.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(person){
    this.starksToProtect = [];
    person.safe = false;

  }
}

module.exports = Direwolf