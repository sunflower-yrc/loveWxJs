"use strict";
/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-05 10:13:47
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tips = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../config/GameUIConfig");
/** 提示窗口管理 */
var TipsManager = /** @class */ (function () {
    function TipsManager() {
    }
    /** 网络恢复 */
    TipsManager.prototype.networkRecovery = function () {
        Oops_1.oops.timer.unschedule(this.netInstableOpen);
        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Netinstable);
    };
    /** 打开网络不稳定提示 */
    TipsManager.prototype.netInstableOpen = function () {
        if (!Oops_1.oops.gui.has(GameUIConfig_1.UIID.Netinstable)) {
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Netinstable);
        }
    };
    TipsManager.prototype.netInstableClose = function () {
        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Netinstable);
    };
    /** 网络延时 */
    TipsManager.prototype.networkLatency = function (time) {
        Oops_1.oops.timer.unschedule(this.netInstableOpen);
        Oops_1.oops.timer.scheduleOnce(this.netInstableOpen, time);
    };
    TipsManager.prototype.test = function (callback) {
        var operate = {
            title: 'common_prompt_title_sys',
            content: "common_prompt_content",
            okWord: 'common_prompt_ok',
            cancelWord: 'common_prompt_cancal',
            okFunc: function () {
                console.log("okFunc");
            },
            cancelFunc: function () {
                console.log("cancelFunc");
            },
            needCancel: true
        };
        // oops.gui.open(UIID.Window, operate, this.getPopCommonEffect());
    };
    TipsManager.prototype.alert = function (content, cb, title, okWord) {
        var operate = {
            title: title ? title : 'common_prompt_title_sys',
            content: content,
            okWord: okWord ? okWord : 'common_prompt_ok',
            okFunc: function () {
                cb && cb();
            },
            needCancel: false
        };
        // oops.gui.open(UIID.Window, operate, tips.getPopCommonEffect());
    };
    TipsManager.prototype.confirm = function (content, cb, okWord) {
        if (okWord === void 0) { okWord = "common_prompt_ok"; }
        var operate = {
            title: 'common_prompt_title_sys',
            content: content,
            okWord: okWord,
            cancelWord: 'common_prompt_cancal',
            okFunc: function () {
                cb && cb();
            },
            cancelFunc: function () {
            },
            needCancel: true
        };
        // oops.gui.open(UIID.Window, operate, tips.getPopCommonEffect());
    };
    /** 弹窗动画 */
    TipsManager.prototype.getPopCommonEffect = function (callbacks) {
        var newCallbacks = {
            // 节点添加动画
            onAdded: function (node, params) {
                node.setScale(0.1, 0.1, 0.1);
                (0, cc_1.tween)(node)
                    .to(0.2, { scale: new cc_1.Vec3(1, 1, 1) })
                    .start();
            },
            // 节点删除动画
            onBeforeRemove: function (node, next) {
                (0, cc_1.tween)(node)
                    .to(0.2, { scale: new cc_1.Vec3(0.1, 0.1, 0.1) })
                    .call(next)
                    .start();
            },
        };
        if (callbacks) {
            if (callbacks && callbacks.onAdded) {
                var onAdded_1 = callbacks.onAdded;
                // @ts-ignore
                callbacks.onAdded = function (node, params) {
                    onAdded_1(node, params);
                    // @ts-ignore
                    newCallbacks.onAdded(node, params);
                };
            }
            if (callbacks && callbacks.onBeforeRemove) {
                var onBeforeRemove_1 = callbacks.onBeforeRemove;
                callbacks.onBeforeRemove = function (node, params) {
                    onBeforeRemove_1(node, params);
                    // @ts-ignore
                    newCallbacks.onBeforeRemove(node, params);
                };
            }
            return callbacks;
        }
        return newCallbacks;
    };
    return TipsManager;
}());
exports.tips = new TipsManager();
