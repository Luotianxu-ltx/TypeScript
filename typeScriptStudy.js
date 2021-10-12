"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 8] = "Left";
    Direction[Direction["Right"] = 9] = "Right"; // 9
})(Direction || (Direction = {}));
const direction = Direction.Down;
