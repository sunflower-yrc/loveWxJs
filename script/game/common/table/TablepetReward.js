"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablepetReward = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablepetReward = /** @class */ (function () {
    function TablepetReward() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablepetReward.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablepetReward.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablepetReward.prototype, "rewardType", {
        /** 奖励类型
    1.纪念物；
    2.照片；
    3.宠物动作；
    4.皮肤；
    5.旅行出行道具； */
        get: function () {
            return this.data.rewardType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "rewardRank", {
        /** 品质 */
        get: function () {
            return this.data.rewardRank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "rewardRes", {
        /** 资源名称
    1.纪念物直接配置图标；
    2.照片配置背景；
    3.配置宠物id；
    4.宠物id-皮肤id
    5.0 */
        get: function () {
            return this.data.rewardRes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "resValue", {
        /** 资源参数
    2.配置照片生成：宠物id|动作id|定格帧|x|y|x方向
    3.链接的动作id */
        get: function () {
            return this.data.resValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "petId", {
        /** 所属宠物 */
        get: function () {
            return this.data.petId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "collectReward", {
        /** 藏馆解锁奖励 */
        get: function () {
            return this.data.collectReward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "name", {
        /** 名称 */
        get: function () {
            return this.data.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "desc", {
        /** 描述 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "getDesc", {
        /** 来源描述 */
        get: function () {
            return this.data.getDesc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "getJump", {
        /** 获得跳转 */
        get: function () {
            return this.data.getJump;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "rewardIcon", {
        /** 奖励图标 */
        get: function () {
            return this.data.rewardIcon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TablepetReward.prototype, "yOffset", {
        /** 商店展示偏移Y轴 */
        get: function () {
            return this.data.yOffset;
        },
        enumerable: false,
        configurable: true
    });
    TablepetReward.TableName = "petReward";
    return TablepetReward;
}());
exports.TablepetReward = TablepetReward;
