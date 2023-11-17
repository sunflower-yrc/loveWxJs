"use strict";
/*
 * @Date: 2021-08-12 09:33:37
 * @LastEditors: dgflash
 * @LastEditTime: 2022-01-24 15:15:30
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.netConfig = void 0;
/** 网络配置 */
var NetConfig = /** @class */ (function () {
    function NetConfig() {
        this.gameIp = "192.168.1.150";
        this.gamePort = "9587";
    }
    return NetConfig;
}());
exports.netConfig = new NetConfig();
