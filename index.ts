import { getObstacleEvents } from './computer-vision';

// Types
interface AutonomousCar {
    isRunning?: string;
    respond: (events: Events) => void;
}

interface Events {
    [index: string]: Boolean;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering;
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

// Classes
class Car implements AutonomousCar {
    isRunning;
    steeringControl;
    constructor(props: AutonomousCarProps ) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }

    respond(events: Events) {
        Object.keys(events);
        Object.keys(events).forEach(eventKey => {
            if (events[eventKey] == false) {
                return;
            }
            if (eventKey == 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }

            if (eventKey == 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
          })
        if (this.isRunning == false) {
            return console.log("The car is off");
        }
    }


}

class SteeringControl implements Steering{
    execute(command: string) {
        console.log(`Execute: ${command}`);
    }

    turn(direction: string) {
        this.execute(`Turn to ${direction}`);
    }
}
// Execution
const steering = new SteeringControl();
const autonomousCar = new Car({isRunning: true, steeringControl: steering});
autonomousCar.respond(getObstacleEvents())
steering.turn("right");