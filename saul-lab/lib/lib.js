//.call()
module.exports = exports = {};

function Automobile(name, price) {
  this.name = name;
  this.price = price;
}

exports.sportCar = function(name, price) {
  Automobile.call(this, name, price);
  this.category = 'sportcar';
  this.speed = 'fast';
  this.reliability = 'low';
};

exports.truck = function(name, price) {
  Automobile.call(this, name, price);
  this.category = 'truck';
  this.speed = 'slow';
  this.reliability = 'high';
};
////

//.apply()
function Boat(name, price) {
  this.name = name;
  this.price = price;

}

exports.speedBoat = function(name, price) {
  Boat.apply(this, [name, price]);
  this.category = 'speedBoat';
  this.speed = 'fast';
  this.reliability = 'low';
};

exports.Yatch = function(name, price) {
  Boat.apply(this, [name, price]);
  this.category = 'Yatch';
  this.speed = 'slow';
  this.reliability = 'high';
};
