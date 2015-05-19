// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
}

Zoo.prototype.changeLocation = function(newLocation){

};

module.exports=Zoo;