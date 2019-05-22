class Wizard {
  constructor(object) {
    this.name = object.name;
    this.counter = 0;
    this.isRested = true;
    if (object.bearded == false) {
      this.bearded = object.bearded;
    } else {
      this.bearded = true;
    }
  }
  incantation(message) {
   this.message = message;
   return message.toUpperCase();
  }
  cast() {
    this.counter ++;
    if (this.counter >= 3){
      this.isRested = false;
      return 'I SHALL NOT CAST!'
    } else {
    return 'MAGIC BULLET'
    }
  }
}

module.exports = Wizard

