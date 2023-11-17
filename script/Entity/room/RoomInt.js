"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    // 为了避免重复，我们可以将唯一标识作为 Room 类的构造函数参数来传递
    function Room(id) {
        this.id = id;
    }
    return Room;
}());
exports.Room = Room;
