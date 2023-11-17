"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsPositionSystem = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-08-11 16:41:12
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-25 17:05:02
 */
var ECS_1 = require("../../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
var MoveTo_1 = require("./MoveTo");
var EcsPositionSystem = /** @class */ (function (_super) {
    __extends(EcsPositionSystem, _super);
    function EcsPositionSystem() {
        var _this = _super.call(this) || this;
        _this.add(new MoveTo_1.MoveToSystem());
        return _this;
    }
    return EcsPositionSystem;
}(ECS_1.ecs.System));
exports.EcsPositionSystem = EcsPositionSystem;
