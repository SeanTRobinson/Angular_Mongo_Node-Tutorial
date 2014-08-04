var events = require("events");
function CarShow() {
    events.EventEmitter.call(this);
    this.seeCar = function(make) {
        this.emit('sawCar', make);
    };
}

CarShow.prototype.__proto__ = events.EventEmitter.prototype;

var show = new CarShow();
function logCar(make) {
    console.log("Saw a " + make);
}
function logColour(make, colour) {
    console.log("Saw a %s %s", colour, make);
}
show.on("sawCar", logCar);
show.on("sawCar", function(make) {
    var colours = ['red', 'blue', 'black'];
    var colour = colours[Math.floor(Math.random()*3)];
    logColour(make, colour);
});

show.seeCar("Ferrari");
show.seeCar("Porche");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");

