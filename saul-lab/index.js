
const Automobile = require('./lib/lib.js');
const Boat = require('./lib/lib.js');


let ferrari = new Automobile.sportCar('F12', 6000000);
let ford = new Automobile.truck('raptor', 700000);

let mastercraft = new Boat.speedBoat('mastercraft', 55000);
let starline = new Boat.Yatch('starline', 10000000);

console.log(ferrari);
console.log(ford);
console.log(mastercraft);
console.log(starline);
