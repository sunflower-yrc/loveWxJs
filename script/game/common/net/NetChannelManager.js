"use strict";
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
exports.netChannel = exports.NetChannelManager = exports.NetChannelType = void 0;
var NetManager_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/network/NetManager");
var NetProtocolPako_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/network/NetProtocolPako");
var WebSock_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/network/WebSock");
var NetConfig_1 = require("./NetConfig");
var NetGameTips_1 = require("./NetGameTips");
var NetNodeGame_1 = require("./NetNodeGame");
var NetChannelType;
(function (NetChannelType) {
    /** 游戏服务器 */
    NetChannelType[NetChannelType["Game"] = 0] = "Game";
})(NetChannelType || (exports.NetChannelType = NetChannelType = {}));
/** 游戏服务器心跳协议 */
var GameProtocol = /** @class */ (function (_super) {
    __extends(GameProtocol, _super);
    function GameProtocol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 心跳协议 */
    GameProtocol.prototype.getHearbeat = function () {
        return "{\"action\":\"LoginAction\",\"method\":\"heart\",\"data\":\"null\",\"isCompress\":false,\"channelid\":".concat(NetConfig_1.netConfig.channelid, ",\"callback\":\"LoginAction_heart\"}");
    };
    return GameProtocol;
}(NetProtocolPako_1.NetProtocolPako));
var NetChannelManager = /** @class */ (function () {
    function NetChannelManager() {
    }
    /** 创建游戏服务器 */
    NetChannelManager.prototype.gameCreate = function () {
        this.game = new NetNodeGame_1.NetNodeGame();
        // 游戏网络事件逻辑统一在 NetGameTips 里写
        this.game.init(new WebSock_1.WebSock(), new GameProtocol(), new NetGameTips_1.NetGameTips());
        NetManager_1.NetManager.getInstance().setNetNode(this.game, NetChannelType.Game);
    };
    /** 连接游戏服务器 */
    NetChannelManager.prototype.gameConnect = function () {
        NetManager_1.NetManager.getInstance().connect({
            url: "ws://".concat(NetConfig_1.netConfig.gameIp, ":").concat(NetConfig_1.netConfig.gamePort),
            autoReconnect: 0 // 手动重连接
        }, NetChannelType.Game);
    };
    /** 断开游戏服务器 */
    NetChannelManager.prototype.gameClose = function () {
        NetManager_1.NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
    };
    return NetChannelManager;
}());
exports.NetChannelManager = NetChannelManager;
exports.netChannel = new NetChannelManager();
