"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablepetAppliance = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablepetAppliance = /** @class */ (function () {
    function TablepetAppliance() {
        /** 编号【KEY】 */
        this.id = 0;
        /** 双主键【KEY】 */
        this.applianceId = 0;
    }
    TablepetAppliance.prototype.init = function (id, applianceId) {
        var table = JsonUtil_1.JsonUtil.get(TablepetAppliance.TableName);
        this.data = table[id][applianceId];
        this.id = id;
        this.applianceId = applianceId;
    };
    Object.defineProperty(TablepetAppliance.prototype, "applianceType", {
        /** 宠物用具类型
    1.房屋；
    2.玩具；
    3.饭碗； */
        get: function () {
            return this.data.applianceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetAppliance.prototype, "openCoins", {
        /** 用具解锁消耗 */
        get: function () {
            return this.data.openCoins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetAppliance.prototype, "comfort", {
        /** 舒适度 */
        get: function () {
            return this.data.comfort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetAppliance.prototype, "applianceName", {
        /** 用具名称 */
        get: function () {
            return this.data.applianceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetAppliance.prototype, "resName", {
        /** 资源名称 */
        get: function () {
            return this.data.resName;
        },
        enumerable: false,
        configurable: true
    });
    TablepetAppliance.TableName = "petAppliance";
    return TablepetAppliance;
}());
exports.TablepetAppliance = TablepetAppliance;
