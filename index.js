"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classes
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props.isRunning;
    }
    return Car;
}());
// Execution
var autonomousCar = new Car({ isRunning: true });
console.log(autonomousCar.isRunning);
//# sourceMappingURL=index.js.map