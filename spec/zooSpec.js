var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js'),
animal,
zoo;

describe('Zoo', function(){

  beforeEach(function(){
    // create a new zoo object each time
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){

    });
  });

  describe('#open', function(){
    it('should change status to open', function(){

    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){

    });
    it('should see if the zoo is closed', function(){

    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){

    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){

    });
    it('should add an animal to the animals array', function(){

    });

    it('should only add instances of animals', function(){

    });

    it('should not add duplicates', function(){

    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){

    });
  });
});


