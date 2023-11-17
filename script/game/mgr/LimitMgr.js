"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitMgr = void 0;
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var FunctionOpenData_1 = require("../common/tableData/FunctionOpenData");
var LimitData_1 = require("../common/tableData/LimitData");
var SuitData_1 = require("../common/tableData/SuitData");
var DataObject_1 = require("../tools/DataObject");
var LimitMgr = /** @class */ (function () {
    function LimitMgr() {
    }
    /**
     * 功能是否满足开启条件
     * @param limtId
     */
    LimitMgr.functionOpen = function (functionType) {
        var functionOpenData = new FunctionOpenData_1.FunctionOpenData(functionType);
        var limitData = new LimitData_1.LimitData(functionOpenData.limitId);
        return this.isCondSatisfied(limitData);
    };
    /**
     * 是否达到条件
     * @param limtId
     */
    LimitMgr.isCondSatisfiedById = function (limtId) {
        var limitData = new LimitData_1.LimitData(limtId);
        return this.isCondSatisfied(limitData);
    };
    /**
     * 是否达到条件
     * @param limitData
     * @returns
     */
    LimitMgr.isCondSatisfied = function (limitData) {
        var result = new DataObject_1.LimitConditionData();
        switch (limitData.limitType) {
            case 101:
                //玩家等级达到xx级
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.vm.playerLevel >= parseInt(limitData.typeValue);
                break;
            case 102:
                //登录天数达到xx天
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.loginDays >= parseInt(limitData.typeValue);
                break;
            case 103:
                //开箱xx次
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.boxOpenTimes >= parseInt(limitData.typeValue);
                break;
            case 104:
                //堆叠游戏达到xx关
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel >= parseInt(limitData.typeValue);
                break;
            case 105:
                //手动拍照xx次
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.manualPhotoTimes >= parseInt(limitData.typeValue);
                break;
            case 106:
                //观看广告xx次
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.vm.adsTimes >= parseInt(limitData.typeValue);
                break;
            case 107:
                //装扮评分达到xx
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.vm.dressScore >= parseInt(limitData.typeValue);
                break;
            case 108:
                //家具评分达到xx
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.vm.furnitureScore >= parseInt(limitData.typeValue);
                break;
            case 109:
                //章节达到xx
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.chapter >= parseInt(limitData.typeValue);
                break;
            case 110:
                //消耗xx金币
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.coinsConsumeAmount >= parseInt(limitData.typeValue);
                break;
            case 111:
                //装扮数量达到xx个
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.dressTotalAmount >= parseInt(limitData.typeValue);
                break;
            case 112:
                //家具数量达到xx个
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.furnitureTotalAmount >= parseInt(limitData.typeValue);
                break;
            case 113:
                //获得套装id为xx的所有部件
                var suitId = parseInt(limitData.typeValue);
                var suitData = new SuitData_1.SuitData(suitId);
                var suitOwned = suitData.getSuitOwned();
                result.satisfied = suitOwned.length == suitData.ownedAmount;
                break;
            case 114:
                //房屋评级达到xx
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.houseRateData.houseRateConfigKey >= parseInt(limitData.typeValue);
                break;
            case 115:
                //完成指定xx外出事件
                result.satisfied = SingletonModuleComp_1.smc.account.AccountModel.outEventOverArray.indexOf(parseInt(limitData.typeValue)) >= 0;
                break;
        }
        if (!result.satisfied) {
            result.unSatisfiedDesc = limitData.getDesc() + Oops_1.oops.language.getLangByID("common.funcOpen");
        }
        return result;
    };
    return LimitMgr;
}());
exports.LimitMgr = LimitMgr;
