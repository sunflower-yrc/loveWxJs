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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotUpdate = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-04-15 14:44:04
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-29 14:13:42
 */
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../../common/config/GameUIConfig");
var TipsManager_1 = require("../../common/prompt/TipsManager");
var Hot_1 = require("./Hot");
var LoadingViewComp_1 = require("./LoadingViewComp");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
/** 热更新界面控制脚本 */
var HotUpdate = function () {
    var _classDecorators = [ccclass('HotUpdate')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var HotUpdate = _classThis = /** @class */ (function (_super) {
        __extends(HotUpdate_1, _super);
        function HotUpdate_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 热更新业务管理对象 */
            _this.hot = new Hot_1.Hot();
            /** 公用加载界面UI做更新提示 */
            _this.lv = null;
            return _this;
        }
        HotUpdate_1.prototype.onLoad = function () {
            if (cc_1.sys.isNative) {
                this.lv = this.getComponent(LoadingViewComp_1.LoadingViewComp);
                this.lv.data.prompt = Oops_1.oops.language.getLangByID("update_tips_check_update");
                this.startHotUpdate();
            }
        };
        /** 开始热更新 */
        HotUpdate_1.prototype.startHotUpdate = function () {
            var _this = this;
            var options = new Hot_1.HotOptions();
            options.onVersionInfo = function (data) {
                // console.log(`【热更新界面】本地版本:${data.local},远程版本:${data.server}`);
            };
            options.onUpdateProgress = function (event) {
                // 进度提示字
                var pc = event.getPercent();
                var _total = event.getTotalBytes();
                var _have = event.getDownloadedBytes();
                var total, have;
                if (_total < 1048576) { // 小于1m，就显示kb
                    _total = Math.ceil(_total / 1024);
                    total = _total + 'K';
                }
                else { // 显示m
                    total = (_total / (1024 * 1024)).toFixed(1);
                    total = total + 'M';
                }
                if (_have < 1048576) { // 小于1m，就显示kb
                    _have = Math.ceil(_have / 1024);
                    have = _have + 'K';
                }
                else { // 显示m
                    have = (_have / (1024 * 1024)).toFixed(1);
                    have = have + 'M';
                }
                if (total == '0K') {
                    _this.lv.data.prompt = Oops_1.oops.language.getLangByID("update_tips_check_update");
                }
                else {
                    _this.lv.data.prompt = Oops_1.oops.language.getLangByID("update_tips_update") + have + '/' + total + ' (' + parseInt(pc * 100 + "") + '%)';
                }
                // 进度条
                if (!isNaN(event.getPercent())) {
                    _this.lv.data.finished = event.getDownloadedFiles();
                    _this.lv.data.total = event.getTotalFiles();
                    _this.lv.data.progress = (event.getPercent() * 100).toFixed(2);
                }
            };
            options.onNeedToUpdate = function (data, totalBytes) {
                _this.lv.data.prompt = Oops_1.oops.language.getLangByID("update_tips_new_version");
                var total = "";
                if (totalBytes < 1048576) { // 小于1m，就显示kb
                    totalBytes = Math.ceil(totalBytes / 1024);
                    total = total + 'KB';
                }
                else {
                    total = (totalBytes / (1024 * 1024)).toFixed(1);
                    total = total + 'MB';
                }
                // 提示更新
                _this.checkForceUpdate(function () {
                    // 非 WIFI 环境提示玩家
                    _this.showUpdateDialog(total, function () {
                        _this.hot.hotUpdate();
                    });
                });
            };
            options.onNoNeedToUpdate = function () {
                _this.lv.enter();
            };
            options.onUpdateFailed = function () {
                _this.lv.data.prompt = Oops_1.oops.language.getLangByID("update_tips_update_fail");
                _this.hot.checkUpdate();
            };
            options.onUpdateSucceed = function () {
                _this.lv.data.progress = 100;
                _this.lv.data.prompt = Oops_1.oops.language.getLangByID("update_tips_update_success");
                setTimeout(function () {
                    cc_1.game.restart();
                }, 1000);
            };
            this.hot.init(options);
        };
        /** 检查是否强制更新信息 */
        HotUpdate_1.prototype.checkForceUpdate = function (callback) {
            var _this = this;
            var operate = {
                title: 'common_prompt_title_sys',
                content: "update_tips_force",
                okWord: 'common_prompt_ok',
                cancelWord: 'common_prompt_cancal',
                okFunc: function () {
                    _this.hot.clearHotUpdateStorage();
                    callback();
                },
                cancelFunc: function () {
                    cc_1.game.end();
                },
                needCancel: true
            };
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Window, operate);
        };
        /** 非 WIFI 环境提示玩家 */
        HotUpdate_1.prototype.showUpdateDialog = function (size, callback) {
            if (cc_1.sys.getNetworkType() == cc_1.sys.NetworkType.LAN) {
                callback();
                return;
            }
            TipsManager_1.tips.alert(Oops_1.oops.language.getLangByID("update_nowifi_tip") + size, callback);
        };
        return HotUpdate_1;
    }(_classSuper));
    __setFunctionName(_classThis, "HotUpdate");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HotUpdate = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HotUpdate = _classThis;
}();
exports.HotUpdate = HotUpdate;
