function Car(gal, mpg) {
  this.gal = gal;
  this.mpg = mpg;
}

function Route(distance, destination, city, state){
  this.distance = distance;
  this.destination = destination;
  this.city = city;
  this.state = state;
}

var redCar = new Car(20, 30);
var blueHybrid = new Car(20, 50);

var scenic = new Route(40, "Beach", "Miami", "Florida");
var urban = new Route(10, "Highrise", "Chicago", "Illinois");
var phishTerr = new Route(1500, "Nirvana", "Burlington", "Vermont");

function enoughGas(car, route){
    var maxDistance = car.gal * car.mpg;
    if (maxDistance >= route.distance)
    return true;
    return false;
}

console.log(enoughGas(redCar,scenic));
console.log(enoughGas(redCar, phishTerr));
console.log(enoughGas(blueHybrid, phishTerr));
