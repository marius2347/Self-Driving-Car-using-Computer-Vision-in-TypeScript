"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObstacleEvents = void 0;
function getObstacleEvents() {
    var coinFlip = Boolean(Math.random() > 0.5);
    return {
        'ObstacleLeft': coinFlip,
        'ObstacleRight': !coinFlip
    };
}
exports.getObstacleEvents = getObstacleEvents;
//# sourceMappingURL=computer-vision.js.map