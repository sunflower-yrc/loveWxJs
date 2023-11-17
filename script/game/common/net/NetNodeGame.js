"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-06-02 09:38:48
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-14 17:52:54
 */
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
exports.NetNodeGame = void 0;
var NetNode_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/network/NetNode");
var NetConfig_1 = require("./NetConfig");
/** 网络节点扩展 */
var NetNodeGame = /** @class */ (function (_super) {
    __extends(NetNodeGame, _super);
    function NetNodeGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCompress = false;
        return _this;
    }
    NetNodeGame.prototype.req = function (action, method, data, rspObject, showTips, force) {
        if (showTips === void 0) { showTips = true; }
        if (force === void 0) { force = false; }
        var protocol = {
            action: action,
            method: method,
            data: JSON.stringify(data),
            isCompress: this.isCompress,
            channelid: NetConfig_1.netConfig.channelid
        };
        return this.request(protocol, rspObject, showTips, force);
    };
    NetNodeGame.prototype.reqUnique = function (action, method, data, rspObject, showTips, force) {
        if (showTips === void 0) { showTips = true; }
        if (force === void 0) { force = false; }
        var protocol = {
            action: action,
            method: method,
            data: JSON.stringify(data),
            isCompress: this.isCompress,
            channelid: NetConfig_1.netConfig.channelid
        };
        return _super.prototype.requestUnique.call(this, protocol, rspObject, showTips, force);
    };
    return NetNodeGame;
}(NetNode_1.NetNode));
exports.NetNodeGame = NetNodeGame;
