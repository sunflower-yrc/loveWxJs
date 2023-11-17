"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetGameTips = void 0;
/*
 * @Date: 2021-08-12 09:33:37
 * @LastEditors: dgflash
 * @LastEditTime: 2022-07-22 18:09:52
 */
var Logger_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/common/log/Logger");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../config/GameEvent");
var TipsManager_1 = require("../prompt/TipsManager");
/** 游戏服务器提示 */
var NetGameTips = /** @class */ (function () {
    function NetGameTips() {
    }
    /** 连接提示 */
    NetGameTips.prototype.connectTips = function (isShow) {
        if (isShow) {
            Logger_1.Logger.logNet("游戏服务器正在连接");
            TipsManager_1.tips.netInstableOpen();
        }
        else {
            Logger_1.Logger.logNet("游戏服务器连接成功");
            TipsManager_1.tips.netInstableClose();
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.GameServerConnected);
        }
    };
    /** 重连接提示 */
    NetGameTips.prototype.reconnectTips = function (isShow) { };
    /** 请求提示 */
    NetGameTips.prototype.requestTips = function (isShow) {
        if (isShow) {
        }
        else {
        }
    };
    /** 响应错误码提示 */
    NetGameTips.prototype.responseErrorCode = function (code) {
        console.log("游戏服务器错误码", code);
        if (code < 0) {
            TipsManager_1.tips.alert("netcode_" + code, function () {
                // SDKPlatform.restartGame(;)
            });
        }
        else {
            TipsManager_1.tips.alert("netcode_" + code);
        }
    };
    return NetGameTips;
}());
exports.NetGameTips = NetGameTips;
