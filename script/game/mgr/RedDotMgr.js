"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedDotMgr = void 0;
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var TypeGlobalData_1 = require("../common/tableData/TypeGlobalData");
/**
 * 红点逻辑
 */
var RedDotMgr = /** @class */ (function () {
    function RedDotMgr() {
    }
    // static furnitureRedDot = false;
    // static furnitureMainRedDot: boolean[] = [];
    // static furnitureSubRedDot: boolean[] = [];
    // static dressMainRedDot: boolean[] = [];
    // static dressSubRedDot: boolean[] = [];
    // static dressRedDot = false;
    /**
     * 任务红点提示
     * @returns
     */
    RedDotMgr.getTaskRedDot = function () {
        return SingletonModuleComp_1.smc.account.AccountModel.isDailyTaskReward || (!SingletonModuleComp_1.smc.account.AccountModel.isMainTaskCompleted && SingletonModuleComp_1.smc.account.AccountModel.mainTaskData.isGetReward == 2);
    };
    RedDotMgr.getSignRedDot = function () {
        return;
    };
    /**
     * 家具红点
     */
    RedDotMgr.getFurnitureRedDot = function () {
        var _a;
        for (var _i = 0, _b = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData; _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            for (var _d = 0, value_1 = value; _d < value_1.length; _d++) {
                var _e = value_1[_d], key1 = _e[0], value1 = _e[1];
                var data = (_a = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(key)) === null || _a === void 0 ? void 0 : _a.get(key1);
                if (data) {
                    for (var i = 0; i < value1.length; i++) {
                        var element = value1[i];
                        if (element.isNew == 1) {
                            //计数
                            data.amount++;
                        }
                    }
                }
            }
        }
    };
    /**
     * 单个家具的红点
     * @param mainId
     * @param subId
     */
    RedDotMgr.setFurnitureRedDot = function (decorateOwnedData, add) {
        var _a, _b;
        var mainId = decorateOwnedData.furnitureData.valueType;
        var subId = decorateOwnedData.furnitureData.furnitureType;
        //单独的子类
        var data = (_a = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(mainId)) === null || _a === void 0 ? void 0 : _a.get(subId);
        data.amount += add;
        //汇总
        var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(mainId)[0]);
        if (firstId == 0) {
            //有多个子分类
            var dataAll = (_b = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(mainId)) === null || _b === void 0 ? void 0 : _b.get(firstId);
            dataAll.amount += add;
        }
    };
    /**
     * 家具总红点
     * @returns
     */
    RedDotMgr.getFurnitureHomeRedDot = function () {
        var _a;
        for (var _i = 0, _b = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData; _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(key)[0]);
            var data = (_a = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(key)) === null || _a === void 0 ? void 0 : _a.get(firstId);
            if (data && data.amount > 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * 时装红点
     */
    RedDotMgr.getDressRedDot = function () {
        var _a;
        for (var _i = 0, _b = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData; _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            for (var _d = 0, value_2 = value; _d < value_2.length; _d++) {
                var _e = value_2[_d], key1 = _e[0], value1 = _e[1];
                var data = (_a = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(key)) === null || _a === void 0 ? void 0 : _a.get(key1);
                if (data) {
                    for (var i = 0; i < value1.length; i++) {
                        var element = value1[i];
                        if (element.isNew == 1) {
                            //计数
                            data.amount++;
                        }
                    }
                }
            }
        }
    };
    /**
     * 单个时装的红点
     * @param mainId
     * @param subId
     */
    RedDotMgr.setDressRedDot = function (decorateOwnedData, add) {
        var _a, _b;
        var mainId = decorateOwnedData.dressData.classify;
        var subId = decorateOwnedData.dressData.dressType;
        //单独的子类
        var data = (_a = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(mainId)) === null || _a === void 0 ? void 0 : _a.get(subId);
        data.amount += add;
        //汇总
        var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(mainId)[0]);
        if (firstId == 0) {
            //有多个子分类
            var dataAll = (_b = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(mainId)) === null || _b === void 0 ? void 0 : _b.get(firstId);
            dataAll.amount += add;
        }
    };
    /**
     * 时装总红点
     * @returns
     */
    RedDotMgr.getDressHomeRedDot = function () {
        var _a;
        for (var _i = 0, _b = SingletonModuleComp_1.smc.account.AccountModel.dressRedData; _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(key)[0]);
            var data = (_a = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(key)) === null || _a === void 0 ? void 0 : _a.get(firstId);
            if (data && data.amount > 0) {
                return true;
            }
        }
        return false;
    };
    return RedDotMgr;
}());
exports.RedDotMgr = RedDotMgr;
