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
      zoo.changeLocation("Oz");
      expect(zoo.location).toEqual("Oz");
      ///bleh
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual(true);
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      if(zoo.open === true) {
        return "open";
      }else {
        return "closed";
      }
    });
    it('should see if the zoo is closed', function(){
      if(zoo.open === true) {
        return "open";
      }else {
        return "closed";
      }
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals()).toEqual([])
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){

      expect(zoo.addAnimal("fox")).toEqual("fox");
    });
    it('should add an animal to the animals array', function(){

    });

    it('should only add instances of animals', function(){

    });

    it('should not add duplicates', function(){
      expect(zoo.addAnimal("fox")).toEqual("duplicate");
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){

    });
  });
});
