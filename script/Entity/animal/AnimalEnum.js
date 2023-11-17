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
exports.AnimalInfo = exports.AnimalState = void 0;
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var Singleton_1 = require("../../game/common/base/Singleton");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var GlobalData_1 = require("../../game/common/tableData/GlobalData");
var AnimalState;
(function (AnimalState) {
    AnimalState["sleep"] = "sleep";
    AnimalState["running"] = "running";
    AnimalState["waitting"] = "waitting";
})(AnimalState || (exports.AnimalState = AnimalState = {}));
var AnimalInfo = /** @class */ (function (_super) {
    __extends(AnimalInfo, _super);
    function AnimalInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //可出现位置的索引
        _this.indexs = [];
        _this.secenPos = null;
        return _this;
    }
    Object.defineProperty(AnimalInfo, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    AnimalInfo.prototype.init = function (secenType) {
        this.setSecenPos(secenType);
        this.indexs = [];
        for (var i = 0, len = this.secenPos.length; i < len; i++) {
            this.indexs.push(i);
        }
        var globalTable = new GlobalData_1.GlobalData(10);
        this.showTimes = parseInt(globalTable.value) - SingletonModuleComp_1.smc.account.AccountModel.animalInteractCount;
    };
    AnimalInfo.prototype.setSecenPos = function (secenType) {
        var globalTable = new GlobalData_1.GlobalData(11);
        var result = StringUtil_1.StringUtil.stringToArray2(globalTable.value);
        this.secenPos = secenType == 1 ? JSON.parse(result[0]) : JSON.parse(result[1]);
    };
    return AnimalInfo;
}(Singleton_1.default));
exports.AnimalInfo = AnimalInfo;
