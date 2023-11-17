"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugPlatform = void 0;
var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.init = function (release, ver) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.getLoginCode = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.getUserInfo = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.share = function (title, imageUrlId, imageUrl) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.shareMessage = function (title, imageUrlId, imageUrl, gameScene, query) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.createRewardedVideoAd = function (adType) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.requestPayment = function (data) {
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    DebugPlatform.prototype.requestMidasPayment = function (quantity) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.exitMiniProgram = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.getExtraInfo = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.getSystemInfoSync = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.onShow = function (callback) {
    };
    DebugPlatform.prototype.onHide = function (callback) {
    };
    DebugPlatform.prototype.onMemoryWarning = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.triggerGC = function () {
    };
    DebugPlatform.prototype.openCustomerServiceConversation = function () {
    };
    DebugPlatform.prototype.showShareMenu = function () {
    };
    DebugPlatform.prototype.onShareTimeline = function (title, imageUrlId, imageUrl, query) {
    };
    DebugPlatform.prototype.reportRoleCreate = function (data) {
    };
    DebugPlatform.prototype.isShowPay = function (param) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    DebugPlatform.prototype.createGameClub = function (callback) {
    };
    DebugPlatform.prototype.showGameClub = function (flag) {
    };
    DebugPlatform.prototype.reportEvent = function (param) { };
    return DebugPlatform;
}());
exports.DebugPlatform = DebugPlatform;
