class Centaur {
  constructor (name, breed) {
    this.name = name;
    this.breed = breed;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
    this.cranky = false;
    }

  shoot() {
    if (this.standing === true && this.cranky === false) { 
      this.counter ++;
      if (this.counter >= 3) {
        this.cranky = true; } 
      return 'Twang!!!'
    } else {
      return 'NO!'
    }
  }

  run () {
    this.counter ++
    if (this.standing === true) {
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }

  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown
  }

  standUp() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown
  }

  sleep() {
    if (this.standing != true) {
      this.cranky = false;
      return 'ZZZZ'
    }      
    return 'NO!'
  }

  drinkPotion(){
    this.cranky = !this.cranky;
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    }

  }
}

module.exports = Centaur