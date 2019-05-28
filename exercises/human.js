class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre() {
    if (this.encounterCounter < 3) {
      return false;
    } else if 
      ((this.encounterCounter % 3) > 0) {
      return false;
    } else { 
      return true; 
    }
  }
}
module.exports = Human 