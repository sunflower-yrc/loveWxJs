"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropMgr = void 0;
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var DataObject_1 = require("../tools/DataObject");
var GameResPath_1 = require("../common/config/GameResPath");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var PetFoodData_1 = require("../pet/PetFoodData");
var PetRewardData_1 = require("../pet/PetRewardData");
var SelectRewardData_1 = require("../common/tableData/SelectRewardData");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DropMgr = /** @class */ (function () {
    function DropMgr() {
    }
    /**
     * 1  14001  10
     * @param dropId
     * @param dropType
     * @param amount
     * @returns
     */
    DropMgr.getDropInfo = function (dropType, dropId, amount) {
        var dropData = new DataObject_1.DropData();
        dropData.type = dropType;
        dropData.dropId = dropId;
        dropData.dropAmount = amount;
        if (dropData.type == DataObject_1.DropType.Furniture) {
            //家具
            var data = new FurnitureData_1.FurnitureData(dropData.dropId);
            dropData.name = data.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getFurnitureListIconsPath(dropData.dropId.toString());
            var furniture = new FurnitureData_1.FurnitureData(dropData.dropId);
            dropData.grade = furniture.grade;
        }
        else if (dropData.type == DataObject_1.DropType.Dress) {
            //装饰
            var data = new DressData_1.DressData(dropData.dropId);
            dropData.name = data.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getDressListIconsPath(dropData.dropId.toString());
            var dress = new DressData_1.DressData(dropData.dropId);
            dropData.grade = dress.grade;
        }
        else if (dropData.type == DataObject_1.DropType.Coins) {
            //金币
            dropData.name = Oops_1.oops.language.getLangByID("common.coins");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 2;
        }
        else if (dropData.type == DataObject_1.DropType.BoxTimes) {
            //开箱次数
            dropData.name = Oops_1.oops.language.getLangByID("common.boxTimes");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.Exp) {
            //经验值
            dropData.name = Oops_1.oops.language.getLangByID("common.exp");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 3;
        }
        else if (dropData.type == DataObject_1.DropType.RandomSuit) {
            //随时家具套装1件或者随机时装套装1件
            dropData.name = Oops_1.oops.language.getLangByID("common.randomSuit");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.Power) {
            //体力
            dropData.name = Oops_1.oops.language.getLangByID("common.power");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 3;
        }
        else if (dropData.type == DataObject_1.DropType.Jewel) {
            //钻石
            dropData.name = Oops_1.oops.language.getLangByID("common.jewel");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.NoAdsTicket) {
            //免广告券
            dropData.name = Oops_1.oops.language.getLangByID("common.noAdsTicket");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.BoxSpeedupTicket) {
            //开箱加速券
            dropData.name = Oops_1.oops.language.getLangByID("common.boxSpeedupTicket");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.Sweet) {
            //糖果
            dropData.name = Oops_1.oops.language.getLangByID("common.sweet");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.Prompt) {
            //消除道具-提示
            dropData.name = Oops_1.oops.language.getLangByID("common.prompt");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.Flip) {
            //消除道具-翻牌
            dropData.name = Oops_1.oops.language.getLangByID("common.flip");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.Cancel) {
            //消除道具-撤销
            dropData.name = Oops_1.oops.language.getLangByID("common.revoke");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.PassExp) {
            //通行证经验
            dropData.name = Oops_1.oops.language.getLangByID("common.passExp");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.PetFood) {
            //宠物食物
            var data = new PetFoodData_1.PetFoodData(dropData.dropId);
            dropData.name = data.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getPetRewardIconsPath(data.foodIcon);
            dropData.grade = data.foodRank;
        }
        else if (dropData.type == DataObject_1.DropType.PetMemorial || dropData.type == DataObject_1.DropType.PetTravelTool) {
            //宠物纪念物或者出游道具
            var data = new PetRewardData_1.PetRewardData(dropData.dropId);
            dropData.name = data.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getPetRewardIconsPath(data.rewardIcon);
            dropData.grade = data.rewardRank;
        }
        else if (dropData.type == DataObject_1.DropType.PetSkin) {
            //宠物皮肤
            var data = new PetRewardData_1.PetRewardData(dropData.dropId);
            dropData.name = data.getName();
            dropData.dropAmount = 1;
            dropData.iconUrl = GameResPath_1.GameResPath.getPetRewardIconsPath(data.rewardIcon);
            dropData.grade = data.rewardRank;
        }
        else if (dropData.type == DataObject_1.DropType.PetCard) {
            //宠物照片
            var data = new PetRewardData_1.PetRewardData(dropData.dropId);
            dropData.name = data.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = data.rewardRank;
        }
        else if (dropData.type == DataObject_1.DropType.PetActAni) {
            //宠物动作
            var data = new PetRewardData_1.PetRewardData(dropData.dropId);
            dropData.dropAmount = 1;
            dropData.name = data.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = data.rewardRank;
        }
        else if (dropData.type == DataObject_1.DropType.CommemorativeCoins) {
            //宠物纪念币
            dropData.name = Oops_1.oops.language.getLangByID("common.commemorativeCoins");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.MoonCake1) {
            //榴莲月饼
            dropData.name = Oops_1.oops.language.getLangByID("common.moonCake1");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.MoonCake2) {
            //双黄月饼
            dropData.name = Oops_1.oops.language.getLangByID("common.moonCake2");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.MoonCake3) {
            //玫瑰月饼
            dropData.name = Oops_1.oops.language.getLangByID("common.moonCake3");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.MoonCake4) {
            //随机奖励MoonExchange
            dropData.name = Oops_1.oops.language.getLangByID("common.moonCake4");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.MoonExchange) {
            //中秋活动兑换券
            dropData.name = Oops_1.oops.language.getLangByID("common.moonExchange");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.RamdomReward) {
            //多选一奖励
            var select = new SelectRewardData_1.SelectRewardData(dropId);
            dropData.name = select.getName();
            dropData.iconUrl = GameResPath_1.GameResPath.getDropRamdomIconsPath(select.icon);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.ManorCoin) {
            //庄园币
            dropData.name = Oops_1.oops.language.getLangByID("common.manorCoins");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        else if (dropData.type == DataObject_1.DropType.ManorWater) {
            //庄园水滴
            dropData.name = Oops_1.oops.language.getLangByID("common.manorWater");
            dropData.iconUrl = GameResPath_1.GameResPath.getDropIconsPath(dropData.type);
            dropData.grade = 4;
        }
        return dropData;
    };
    /**
     * 获得来源和用途
     */
    DropMgr.getDropDesc = function (dropType) {
        var result = ["", ""];
        if (dropType == DataObject_1.DropType.Coins) {
            //金币
            result[0] = Oops_1.oops.language.getLangByID("drop.coinsFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.coinsUse");
        }
        else if (dropType == DataObject_1.DropType.BoxTimes) {
            //开箱次数
            result[0] = Oops_1.oops.language.getLangByID("drop.boxTimesFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.boxTimesUse");
        }
        else if (dropType == DataObject_1.DropType.Exp) {
            //经验值
            result[0] = Oops_1.oops.language.getLangByID("drop.expFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.expUse");
        }
        else if (dropType == DataObject_1.DropType.Power) {
            //体力
            result[0] = Oops_1.oops.language.getLangByID("drop.powerFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.powerUse");
        }
        else if (dropType == DataObject_1.DropType.Jewel) {
            //钻石
            result[0] = Oops_1.oops.language.getLangByID("drop.jewelFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.jewelUse");
        }
        else if (dropType == DataObject_1.DropType.NoAdsTicket) {
            //免广告券
            result[0] = Oops_1.oops.language.getLangByID("drop.noAdsTicketFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.noAdsTicketUse");
        }
        else if (dropType == DataObject_1.DropType.BoxSpeedupTicket) {
            //开箱加速券
            result[0] = Oops_1.oops.language.getLangByID("drop.boxSpeedupTicketFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.boxSpeedupTicketUse");
        }
        else if (dropType == DataObject_1.DropType.Prompt) {
            //消除道具-提示
            result[0] = Oops_1.oops.language.getLangByID("drop.promptFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.promptUse");
        }
        else if (dropType == DataObject_1.DropType.Flip) {
            //消除道具-翻牌
            result[0] = Oops_1.oops.language.getLangByID("drop.flipFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.flipUse");
        }
        else if (dropType == DataObject_1.DropType.Cancel) {
            //消除道具-撤销
            result[0] = Oops_1.oops.language.getLangByID("drop.revokeFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.revokeUse");
        }
        else if (dropType == DataObject_1.DropType.PassExp) {
            //通行证经验
            //消除道具-撤销
            result[0] = Oops_1.oops.language.getLangByID("drop.passExpFrom");
            result[1] = Oops_1.oops.language.getLangByID("drop.passExp");
        }
        return result;
    };
    /**
     * 1-14001-1
     * @param dropString
     * @returns
     */
    DropMgr.getDropData = function (dropString) {
        var result = [];
        var array = StringUtil_1.StringUtil.stringToArray2(dropString);
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            var drop = StringUtil_1.StringUtil.stringToArray5(element);
            var dropData = this.getDropInfo(parseInt(drop[0]), parseInt(drop[1]), parseInt(drop[2]));
            result.push(dropData);
        }
        return result;
    };
    /**
     * 单个掉落
     * @param dropType
     * @param dropId
     * @param amount
     * @returns
     */
    DropMgr.getSingleDropData = function (dropType, dropId, amount) {
        var result = [];
        var data = this.getDropInfo(dropType, dropId, amount);
        result.push(data);
        return result;
    };
    /**
     * 1-14001-1
     * @param dropString
     * @returns
     */
    DropMgr.getDropCount = function (dropString) {
        var _a, _b;
        var drop = StringUtil_1.StringUtil.stringToArray5(dropString);
        var type = parseInt(drop[0]);
        if (type == DataObject_1.DropType.Furniture) {
            //家具
            var data = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData;
            var furnitureData = new FurnitureData_1.FurnitureData(parseInt(drop[1]));
            var count = 0;
            var subData = (_a = data.get(furnitureData.valueType)) === null || _a === void 0 ? void 0 : _a.get(furnitureData.furnitureType);
            if (subData && subData.length > 0) {
                for (var _i = 0, subData_1 = subData; _i < subData_1.length; _i++) {
                    var i = subData_1[_i];
                    if (i.furnitureData.id == parseInt(drop[1])) {
                        count = i.leftAmount + i.lineupCount;
                        break;
                    }
                }
            }
            return count;
        }
        else if (type == DataObject_1.DropType.Dress) {
            //装饰
            var data = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
            var dressData = new DressData_1.DressData(parseInt(drop[1]));
            var count = 0;
            var subData = (_b = data.get(dressData.classify)) === null || _b === void 0 ? void 0 : _b.get(dressData.dressType);
            if (subData && subData.length > 0) {
                for (var _c = 0, subData_2 = subData; _c < subData_2.length; _c++) {
                    var i = subData_2[_c];
                    if (i.dressData.id == parseInt(drop[1])) {
                        count = i.leftAmount + i.lineupCount;
                        break;
                    }
                }
            }
            return count;
        }
        else if (type == DataObject_1.DropType.Coins) {
            //金币
            return SingletonModuleComp_1.smc.account.AccountModel.vm.coin;
        }
        else if (type == DataObject_1.DropType.BoxTimes) {
            //开箱次数
            return SingletonModuleComp_1.smc.account.AccountModel.vm.giveTimes;
        }
        else if (type == DataObject_1.DropType.Power) {
            //体力
            return SingletonModuleComp_1.smc.account.AccountModel.power;
        }
        else if (type == DataObject_1.DropType.Jewel) {
            //钻石 
            return SingletonModuleComp_1.smc.account.AccountModel.vm.jewel;
        }
        else if (type == DataObject_1.DropType.NoAdsTicket) {
            //免广告券
            return SingletonModuleComp_1.smc.account.AccountModel.vm.noAdsTicket;
        }
        else if (type == DataObject_1.DropType.BoxSpeedupTicket) {
            //开箱加速券
            return SingletonModuleComp_1.smc.account.AccountModel.vm.openBoxSpeed;
        }
        else if (type == DataObject_1.DropType.Prompt) {
            //消除道具-提示
            return SingletonModuleComp_1.smc.account.AccountModel.vm.prop2;
        }
        else if (type == DataObject_1.DropType.Flip) {
            //消除道具-翻牌
            return SingletonModuleComp_1.smc.account.AccountModel.vm.prop3;
        }
        else if (type == DataObject_1.DropType.Cancel) {
            //消除道具-翻牌
            return SingletonModuleComp_1.smc.account.AccountModel.vm.prop1;
        }
        return 0;
    };
    return DropMgr;
}());
exports.DropMgr = DropMgr;
