function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
}

Animal.prototype.oink = function(){
  if(this.kind === "Pig") {
    return "oink";
  } else {
    return "I am not a pig";
  }
};

Animal.prototype.growUp = function() {
  // this.age += 1;
  return this.age += 1;
};

Animal.prototype.awake = function() {
  this.awake = "off";
  return this.awake;
};

Animal.prototype.wakeUp = function() {
  this.awake = "awake";
  return this.awake;
  //awake....?
};

Animal.prototype.sleep = function() {
  this.sleeping = "sleeping";
  return this.sleeping;
};

Animal.prototype.feed = function() {
  //awake?!
  if(this.awake === "awake") {
    this.feed = "fed";
  } else {
    this.feed = "not fed";
  }
};

module.exports=Animal;
