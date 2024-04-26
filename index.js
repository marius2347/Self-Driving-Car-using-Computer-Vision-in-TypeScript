"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_vision_1 = require("./computer-vision");
// Classes
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    Car.prototype.respond = function (events) {
        var _this = this;
        Object.keys(events);
        Object.keys(events).forEach(function (eventKey) {
            if (events[eventKey] == false) {
                return;
            }
            if (eventKey == 'ObstacleLeft') {
                _this.steeringControl.turn('right');
            }
            if (eventKey == 'ObstacleRight') {
                _this.steeringControl.turn('left');
            }
        });
        if (this.isRunning == false) {
            return console.log("The car is off");
        }
    };
    return Car;
}());
var SteeringControl = /** @class */ (function () {
    function SteeringControl() {
    }
    SteeringControl.prototype.execute = function (command) {
        console.log("Execute: ".concat(command));
    };
    SteeringControl.prototype.turn = function (direction) {
        this.execute("Turn to ".concat(direction));
    };
    return SteeringControl;
}());
// Execution
var steering = new SteeringControl();
var autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
steering.turn("right");
//# sourceMappingURL=index.js.map