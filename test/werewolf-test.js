var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');
var Victim = require('../exercises/victim');

describe('Werewolf', function() {

  it('should be a function', function() {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', function() {
    var werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it('should have a name', function() {
    var werewolf = new Werewolf('Jorge');
    var werewolf2 = new Werewolf('Sal');
    assert.equal(werewolf.name, 'Jorge');
    assert.equal(werewolf2.name, 'Sal');
  });

  it('should have a location', function() {
    var werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it('should default to human form', function() {
    var werewolf = new Werewolf('Mike','Basement lair');
    assert.equal(werewolf.human, true);
  });

  it('should refute human form after changing', function() {
    var werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert.equal(werewolf.human, false);
  });

  it('should show assert wolf form after change', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    assert.equal(werewolf.wolf, true);
  });

  it('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    werewolf.change();
    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.change();
    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it('should start off not hungry', function() {
  var werewolf = new Werewolf('Pete', 'Beach');
  assert.equal(werewolf.hungry, false);
    // your code here    

  });

  it('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Charlie', 'Bar');
    werewolf.change();
    assert.equal(werewolf.hungry, true);
    // your code here
  });

  it('should be able to eat(victim) once hungry', function() {
    var werewolf = new Werewolf('Lee', 'Pier');
    var victim = new Victim('Gully')

    assert.equal(werewolf.hungry, false)
    werewolf.change();
    assert.equal(werewolf.hungry, true)
    werewolf.eat(victim);
    // assert.equal(werewolf.eat(victim), true);
    // your code here
  });

  it('should not be hungry after changing back to human form', function() {
    var werewolf = new Werewolf('Bruce', 'Lunch');
    assert.equal(werewolf.human, true);
    assert.equal(werewolf.hungry, false);
    // your code here
  });

  it('should change back to human form after eating', function() {
    var werewolf = new Werewolf('Bones', 'Campsite');
    var victim = new Victim('Smalls')

    werewolf.change();
    assert.equal(werewolf.human, false);
    werewolf.eat(victim);
    assert.equal(werewolf.human, true);
    // your code here
  });

  it('should not be able to consume victim in human form', function() {
    var werewolf1 = new Werewolf('Frank', 'Under the Bridge');
    var werewolf2 = new Werewolf('John', 'Sante Fe');
    var victim1 = new Victim('Lobs');
    var victim2 = new Victim('Stu');

    assert.equal(werewolf1.human, true);
    werewolf1.change();
    werewolf1.eat(victim1);
    assert.equal(victim1.alive, false);

    assert.equal(werewolf2.human, true);
    werewolf2.eat(victim2);
    assert.equal(victim2.alive, true);





    // your code here
  });
});

describe('Victim', function() {

  it('should be a function', function() {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', function() {
    var victim = new Victim();
    assert.isObject(victim);
  });

  it('should have a name', function() {
    var victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it('should start alive', function() {
    var victim = new Victim('TayTay');
    assert.equal(victim.alive, true);
  });

  it('should be dead after being eaten', function() {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(victim.alive, false);
  });
});
