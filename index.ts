import { getObstacleEvents } from './computer-vision';

// Types
interface AutonomousCar {
    isRunning?: string;
}

interface AutonomousCarProps {
    isRunning?: boolean;
}
// Classes
class Car implements AutonomousCar {
    isRunning;
    constructor(props: AutonomousCarProps ) {
        this.isRunning = props.isRunning;
    }
}
// Execution
const autonomousCar = new Car({isRunning: true});
console.log(autonomousCar.isRunning)