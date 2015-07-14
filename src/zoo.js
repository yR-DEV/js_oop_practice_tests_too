// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
};

Zoo.prototype.open = function() {
  return this.open = true;
};

Zoo.prototype.isOpen = function() {
  if(this.open === true) {
    return "open";
  } else {
    return "closed";
  }
};

Zoo.prototype.animals = function() {
  return this.animals = [];
};

Zoo.prototype.addAnimal = function(animal) {
  if(this.open === true) {
    this.animals.push(animal);
    console.log(animals);
    for(var j = 0; j < animals.length; j++) {
      if(animals[j] === animal) {
        return "duplicate";
      }
    }
  }
}

Zoo.prototype.removeAnimal = function(animal) {
  if(this.open === "open") {
    for(var i = 0; i < animals.length; i++) {
      if(animals[i] == animal) {
        animals[i].splice(0, i);
        return animals[i];
      }
    }
  }
}
module.exports=Zoo;
