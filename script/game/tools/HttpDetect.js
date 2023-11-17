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
exports.HttpDetect = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var HttpDetect = /** @class */ (function (_super) {
    __extends(HttpDetect, _super);
    function HttpDetect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inShowLoading = false;
        _this.inSchedule = false;
        _this.loadCache = new Map();
        _this.lastNetTipShow = 0;
        _this.lastNetLoadingShow = 0;
        _this.NET_SHOW_GAP = 30000; //不重复显示提示的间隔时间
        _this.DELAY_TIME = 2;
        _this.checkShowLoadingRes = function () {
            if (_this.loadCache.size > 0) {
                var values = _this.loadCache.entries();
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var _a = values_1[_i], k = _a[0], v = _a[1];
                    if ((Date.now() - v) >= _this.DELAY_TIME) {
                        _this.showLoadingRes(k);
                        break;
                    }
                }
            }
        };
        _this.showLoadingRes = function (key) {
            if (!_this.inShowLoading) {
                _this.inShowLoading = true;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.NetLoadingRes, { key: key, message: Oops_1.oops.language.getLangByID("common.netBlocksContent"), timeOut: 5 }, {
                    onRemoved: function () {
                        _this.inShowLoading = false;
                    }
                });
            }
        };
        _this.addSchelude = function (key) {
            if (!_this.inSchedule && !_this.inShowLoading) {
                var curTime = Date.now();
                if (_this.lastNetLoadingShow == 0 || (curTime - _this.lastNetLoadingShow) > _this.NET_SHOW_GAP) { //30s 内防止重复
                    _this.lastNetLoadingShow = curTime;
                    _this.scheduleOnce(_this.checkShowLoadingRes, _this.DELAY_TIME);
                    _this.inSchedule = true;
                }
            }
            _this.loadCache.set(key, Date.now());
        };
        _this.delSchelude = function () {
            _this.inSchedule = false;
            _this.unschedule(_this.showLoadingRes);
        };
        return _this;
    }
    HttpDetect.prototype.onLoadComplete = function (err, key, cmd) {
        if (err != null) {
            var curTime = Date.now();
            if (this.lastNetTipShow == 0 || (curTime - this.lastNetTipShow) > this.NET_SHOW_GAP) { //10s 内防止重复除非
                this.lastNetTipShow = curTime;
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.netBlocksContent"));
            }
        }
        this.delSchelude();
        this.loadCache.delete(key);
    };
    return HttpDetect;
}(cc_1.Component));
exports.HttpDetect = HttpDetect;
