class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }
  drink() {
    return this.thirsty = false;
  }
}

module.exports = Vampire

