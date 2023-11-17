"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConfig = void 0;
var GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    GlobalConfig.platformDev = "dev";
    GlobalConfig.platformWeChat = "H5WeChat";
    GlobalConfig.platformIOS = "ios";
    GlobalConfig.platformWeAndroid = "android";
    GlobalConfig.platformByteDance = "TT";
    GlobalConfig.version = "0.1.1"; //提审之前必须修改版本号，跟实际（微信版本以及cdn目录的版本）一致
    GlobalConfig.frameRate = 30;
    return GlobalConfig;
}());
exports.GlobalConfig = GlobalConfig;
