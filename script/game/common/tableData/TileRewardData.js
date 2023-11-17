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
exports.TileRewardData = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var SingletonModuleComp_1 = require("../ecs/SingletonModuleComp");
var TablemergeReward_1 = require("../table/TablemergeReward");
var TileRewardData = /** @class */ (function (_super) {
    __extends(TileRewardData, _super);
    function TileRewardData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // static TableName: string = "S1Level";
    // private gameData: any;
    // id: number = 1;
    TileRewardData.prototype.getData = function () {
        this.init(this.fineNowId());
    };
    TileRewardData.prototype.fineNowId = function () {
        var table = JsonUtil_1.JsonUtil.get(TablemergeReward_1.TablemergeReward.TableName);
        var idx = 1;
        for (var data in table) {
            if (table[data].pointCondition >= SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel) {
                return idx;
            }
            idx++;
        }
        return idx - 1;
    };
    return TileRewardData;
}(TablemergeReward_1.TablemergeReward));
exports.TileRewardData = TileRewardData;
