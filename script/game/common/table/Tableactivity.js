"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableactivity = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableactivity = /** @class */ (function () {
    function Tableactivity() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableactivity.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableactivity.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableactivity.prototype, "type", {
        /** 活动类型
    1.活动模板1（契合七夕）
    2.周常活动
    3.活动模板（中秋国庆）
    4.限时礼包活动
    5.猜谜类活动 */
        get: function () {
            return this.data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "typeValue", {
        /** 活动类型参数
    1. 进度奖励
    2. 宠物标签页为1，开箱标签页为2，消除标签页为
    3.关联子活动id；
    4.暂时填0；
    5.可猜时间段
     */
        get: function () {
            return this.data.typeValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "functionId", {
        /** 关联功能开启表id */
        get: function () {
            return this.data.functionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "timeType", {
        /** 活动开启时间类型
    1.为固定时间开启 ；
    2.为根据玩家角色注册时间开启 3.为在配置时间进入即可开启活动，持续时间后关闭 */
        get: function () {
            return this.data.timeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "timeConfig", {
        /** 活动时间配置 */
        get: function () {
            return this.data.timeConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "activityFunction", {
        /** 活动关联功能
    1.签到；
    2.任务；
    3.礼包；
    4.开箱额外奖励；
    5.活动订单；
    6.兑换；
    7.收集进度 */
        get: function () {
            return this.data.activityFunction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "idValue", {
        /** 关联id
    1.sign表主键；
    2.task表主键；
    3.purchase表主键；
    4.boxReward表主键；
    5.activityOrder表主键；
    6.exchange表主键；
    7.activityCollect表主键 */
        get: function () {
            return this.data.idValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "popWindow", {
        /** 弹窗规则类型
    1-不弹窗
    2-每日首登弹窗
    3-每次登陆都弹窗 */
        get: function () {
            return this.data.popWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "popImage", {
        /** 弹窗图片名字 */
        get: function () {
            return this.data.popImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tableactivity.prototype, "activityJump", {
        /** 活动关联跳转 */
        get: function () {
            return this.data.activityJump;
        },
        enumerable: false,
        configurable: true
    });
    Tableactivity.TableName = "activity";
    return Tableactivity;
}());
exports.Tableactivity = Tableactivity;
