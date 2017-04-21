const assert = require('assert');
const Automobile = require('../lib/lib.js');
const Boat = require('../lib/lib.js');

describe('lib.js', function(){
  describe('#sportCar', function(){
    it('should return..., if given...', function() {
      let theBull = new Automobile.sportCar('lambo', 5000000);
      assert.equal(theBull.name, 'lambo');
      assert.equal(theBull.price, 5000000);
    });
    it('should return a valid object', function() {
      let theBull = new Automobile.sportCar('lambo', 5000000);
      assert.equal(theBull.speed, 'fast');
    });
  });
});
describe('lib.js', function(){
  describe('#Yatch', function(){
    it('should return..., if given...', function() {
      let theTitanic = new Boat.Yatch('megaBoat', 5000000);
      assert.equal(theTitanic.name, 'megaBoat');
      assert.equal(theTitanic.price, 5000000);
    });
    it('should return a valid object', function() {
      let theTitanic = new Boat.Yatch('megaBoat', 5000000);
      assert.equal(theTitanic.speed, 'slow');
    });
  });
});
