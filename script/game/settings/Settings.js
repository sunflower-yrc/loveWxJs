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
exports.Settings = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GlobalConfig_1 = require("../tools/GlobalConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var GameMgr_1 = require("../common/mgr/GameMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Settings = function () {
    var _classDecorators = [ccclass('Settings')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var _toggleMusic_decorators;
    var _toggleMusic_initializers = [];
    var _toggleSound_decorators;
    var _toggleSound_initializers = [];
    var _toggleFps_decorators;
    var _toggleFps_initializers = [];
    var _toggleAds_decorators;
    var _toggleAds_initializers = [];
    var Settings = _classThis = /** @class */ (function (_super) {
        __extends(Settings_1, _super);
        function Settings_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.bg = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _bg_initializers, void 0));
            _this.toggleMusic = __runInitializers(_this, _toggleMusic_initializers, void 0);
            _this.toggleSound = __runInitializers(_this, _toggleSound_initializers, void 0);
            _this.toggleFps = __runInitializers(_this, _toggleFps_initializers, void 0);
            _this.toggleAds = __runInitializers(_this, _toggleAds_initializers, void 0);
            _this.preClick = -1;
            _this.exCount0 = 0;
            _this.exCount1 = 0;
            return _this;
        }
        Settings_1.prototype.start = function () {
            // ViewUtil.setNodeActiveByName("root/bg/funcContent/btn_service", this.node, smc.account.AccountModel.isShowPay);
            ViewUtil_1.ViewUtil.setLabelStringByName("bg_info/id", this.bg, "ID:" + SingletonModuleComp_1.smc.account.AccountModel.userId);
            var testServer = Oops_1.oops.http.server == Oops_1.oops.config.game.httpServer ? "v" : "tt";
            ViewUtil_1.ViewUtil.setLabelStringByName("ver/version", this.bg, testServer + GlobalConfig_1.GlobalConfig.version);
            ViewUtil_1.ViewUtil.setHeadIcon(SingletonModuleComp_1.smc.account.AccountModel.avatarUrl, "bg_info/head/mask/icon", this.bg);
            this.toggleMusic.setIsCheckedWithoutNotify(Oops_1.oops.audio.switchMusic);
            this.toggleSound.setIsCheckedWithoutNotify(Oops_1.oops.audio.switchEffect);
            this.toggleFps.setIsCheckedWithoutNotify(GlobalConfig_1.GlobalConfig.frameRate == 60);
            this.toggleAds.setIsCheckedWithoutNotify(GameMgr_1.GameMgr.Instance.adsTipType == DataObject_1.AdsTipType.jump);
            this.showWechatFunc();
        };
        Settings_1.prototype.btn_copy = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (cc_3.sys.platform === cc_3.sys.Platform.WECHAT_GAME) {
                var wx = window["wx"];
                if (wx && wx.setClipboardData) {
                    wx.setClipboardData({
                        data: SingletonModuleComp_1.smc.account.AccountModel.userId
                    });
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.copySucc"));
                }
            }
            else {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.copySucc"));
            }
        };
        Settings_1.prototype.showWechatFunc = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/funcContent/btn_social", this.node, cc_3.sys.platform === cc_3.sys.Platform.WECHAT_GAME);
            // ViewUtil.setNodeActiveByName("root/bg/funcContent/btn_gongzhonghao", this.node, sys.platform === sys.Platform.WECHAT_GAME);
        };
        Settings_1.prototype.toggle_music = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.audio.switchMusic = !Oops_1.oops.audio.switchMusic;
            Oops_1.oops.audio.save();
        };
        Settings_1.prototype.toggle_sound = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.audio.switchEffect = !Oops_1.oops.audio.switchEffect;
            Oops_1.oops.audio.save();
        };
        Settings_1.prototype.toggle_fps = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            GlobalConfig_1.GlobalConfig.frameRate = Oops_1.oops.storage.getNumber(DataObject_1.StorageType.HighFps, 30);
            if (GlobalConfig_1.GlobalConfig.frameRate == 30) {
                GlobalConfig_1.GlobalConfig.frameRate = 60;
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("settings.fpsTips"));
            }
            else {
                GlobalConfig_1.GlobalConfig.frameRate = 30;
            }
            Oops_1.oops.storage.set(DataObject_1.StorageType.HighFps, GlobalConfig_1.GlobalConfig.frameRate);
            cc_4.game.frameRate = GlobalConfig_1.GlobalConfig.frameRate;
        };
        Settings_1.prototype.toggle_ads = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (GameMgr_1.GameMgr.Instance.adsTipType != DataObject_1.AdsTipType.jump) {
                GameMgr_1.GameMgr.Instance.adsTipType = DataObject_1.AdsTipType.jump;
            }
            else {
                GameMgr_1.GameMgr.Instance.adsTipType = DataObject_1.AdsTipType.nothing;
            }
        };
        Settings_1.prototype.btn_social = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.GameClubPop);
        };
        Settings_1.prototype.btn_gongzhonghao = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.GongzhonghaoPop);
        };
        Settings_1.prototype.btn_service = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            // smc.initialize.platform.openCustomerServiceConversation();
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Service);
        };
        Settings_1.prototype.btn_userAgreement = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Privacy, "agreement");
            // if (sys.platform === sys.Platform.ANDROID || sys.platform === sys.Platform.IOS) {
            //     sys.openURL("https://h5.ixyn.cn/appsdk/ball/agreement_xingyuan.html");
            // } else {
            // }        
        };
        Settings_1.prototype.btn_privacyAgreement = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Privacy, "privacy");
            // if (sys.platform === sys.Platform.ANDROID || sys.platform === sys.Platform.IOS) {
            //     sys.openURL("https://h5.ixyn.cn/appsdk/ball/privacy_xingyuan.html");
            // } else {
            // }
        };
        Settings_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Settings);
        };
        Settings_1.prototype.btn_exServer = function (event, data) {
            if (parseInt(data) == 0) {
                //id
                this.exCount0++;
            }
            else {
                //ver
                if (this.exCount0 >= 5) {
                    this.exCount1++;
                    if (this.exCount1 >= 5) {
                        //切换测试服
                        cc_3.sys.localStorage.setItem(DataObject_1.StorageType.UseQA, "1");
                        ViewUtil_1.ViewUtil.setNodeActiveByName("exServer", this.bg, true);
                    }
                }
            }
            this.preClick = 0;
        };
        Settings_1.prototype.update = function (dt) {
            if (this.preClick > 1.5 && this.exCount1 < 5) {
                this.preClick = -1;
                this.exCount0 = 0;
                this.exCount1 = 0;
            }
            else if (this.preClick >= 0) {
                this.preClick += dt;
            }
        };
        Settings_1.prototype.btn_exchange = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Exchange);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Settings);
        };
        Settings_1.prototype.btn_xiao_hong_shu = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.XiaoHongShuPop);
        };
        Settings_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Settings);
        };
        return Settings_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Settings");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _bg_decorators = [property(cc_1.Node)];
        _toggleMusic_decorators = [property(cc_2.Toggle)];
        _toggleSound_decorators = [property(cc_2.Toggle)];
        _toggleFps_decorators = [property(cc_2.Toggle)];
        _toggleAds_decorators = [property(cc_2.Toggle)];
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggleMusic_decorators, { kind: "field", name: "toggleMusic", static: false, private: false, access: { has: function (obj) { return "toggleMusic" in obj; }, get: function (obj) { return obj.toggleMusic; }, set: function (obj, value) { obj.toggleMusic = value; } }, metadata: _metadata }, _toggleMusic_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggleSound_decorators, { kind: "field", name: "toggleSound", static: false, private: false, access: { has: function (obj) { return "toggleSound" in obj; }, get: function (obj) { return obj.toggleSound; }, set: function (obj, value) { obj.toggleSound = value; } }, metadata: _metadata }, _toggleSound_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggleFps_decorators, { kind: "field", name: "toggleFps", static: false, private: false, access: { has: function (obj) { return "toggleFps" in obj; }, get: function (obj) { return obj.toggleFps; }, set: function (obj, value) { obj.toggleFps = value; } }, metadata: _metadata }, _toggleFps_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggleAds_decorators, { kind: "field", name: "toggleAds", static: false, private: false, access: { has: function (obj) { return "toggleAds" in obj; }, get: function (obj) { return obj.toggleAds; }, set: function (obj, value) { obj.toggleAds = value; } }, metadata: _metadata }, _toggleAds_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Settings = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Settings = _classThis;
}();
exports.Settings = Settings;
