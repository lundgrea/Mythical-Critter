class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white"
  }
  isWhite() {
    if (this.color !== "white")
    return false
    }
  says(things) {
    return `**;* ${things} *;**`
  }
}

module.exports = Unicorn

