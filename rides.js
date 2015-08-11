function Child(height, name, age){
  this.height = height;
  this.name = name;
  this.age = age;
}

function Ride(minHeight, maxHeight){
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
}

var timmy = new Child(48, "Timmy Turner", 14);
var johnny = new Child(36, "Johnny Johnson", 11);

var ballBuster = new Ride(42, 72);
var merryGoRound = new Ride(32, 72);

function isTallEnough(child, ride){
  if (child.height >= ride.minHeight)
  return true;
  return false;
}

console.log(isTallEnough(timmy, ballBuster));
console.log(isTallEnough(johnny, merryGoRound));
console.log(isTallEnough(johnny, ballBuster));
