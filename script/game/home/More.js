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
exports.More = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var cc_2 = require("cc");
var DataMgr_1 = require("../mgr/DataMgr");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var LimitMgr_1 = require("../mgr/LimitMgr");
var HttpPost_1 = require("../tools/HttpPost");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameMgr_1 = require("../common/mgr/GameMgr");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var More = function () {
    var _classDecorators = [ccclass('More')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var More = _classThis = /** @class */ (function (_super) {
        __extends(More_1, _super);
        function More_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changeSeverCount = 0;
            return _this;
        }
        More_1.prototype.start = function () {
            this.initRed();
            this.initData();
            this.setBtnShow();
            this.test();
            Oops_1.oops.storage.set("test", [1]);
        };
        //初始化评分
        More_1.prototype.initData = function () {
            if (GameMgr_1.GameMgr.Instance.furnitureScoreStatus == DataObject_1.Score.nothing) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/fuUp", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/fuDown", this.node, false);
            }
            else if (GameMgr_1.GameMgr.Instance.furnitureScoreStatus == DataObject_1.Score.up) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/fuUp", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/fuDown", this.node, false);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/fuUp", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/fuDown", this.node, true);
            }
            if (GameMgr_1.GameMgr.Instance.dressScoreStatus == DataObject_1.Score.nothing) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/drUp", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/drDown", this.node, false);
            }
            else if (GameMgr_1.GameMgr.Instance.furnitureScoreStatus == DataObject_1.Score.up) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/drUp", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/drDown", this.node, false);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/drUp", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/drDown", this.node, true);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/fuScore", this.node, SingletonModuleComp_1.smc.account.AccountModel.vm.furnitureScore + "");
            ViewUtil_1.ViewUtil.setLabelStringByName("root/dreScore", this.node, SingletonModuleComp_1.smc.account.AccountModel.vm.dressScore + "");
            this.showTime();
            this.schedule(this.showTime, 30);
        };
        More_1.prototype.initRed = function () {
            this.rentRed();
            this.mailRed();
            this.galleryRedDot();
        };
        More_1.prototype.setBtnShow = function () {
            //拍照是否开启
            var photo = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Photo).satisfied;
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/list/picture", this.node, photo);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/photo", this.node, photo);
            var funcOpenStore = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Store).satisfied;
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/list/shop", this.node, funcOpenStore);
            //ViewUtil.setNodeActiveByName("root/list/pet", this.node, funcOpenPet);
        };
        /**
         * 显示当前时间(本地)
         */
        More_1.prototype.showTime = function () {
            var timeStr = StringUtil_1.StringUtil.formatLocalTime();
            ViewUtil_1.ViewUtil.setLabelStringByName("root/time", this.node, timeStr);
        };
        //出租红点
        More_1.prototype.rentRed = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/list/rent/redDot", this.node, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.hireRedDot));
        };
        //邮件红点
        More_1.prototype.mailRed = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/list/mail/redDot", this.node, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.mailOrNoticeRedDot));
        };
        /**
         * 图鉴红点
         */
        More_1.prototype.galleryRedDot = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/list/gallery/redDot", this.node, Boolean(SingletonModuleComp_1.smc.account.AccountModel.mainRed.codexRedDot));
        };
        //返回
        More_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.unscheduleAllCallbacks();
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        /**
         * 设置
         */
        More_1.prototype.btnSettings = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if ((cc_2.sys.platform === cc_2.sys.Platform.WECHAT_GAME || cc_2.sys.platform === cc_2.sys.Platform.BYTEDANCE_MINI_GAME) && !SingletonModuleComp_1.smc.account.AccountModel.wxInfoReject) {
                DataMgr_1.DataMgr.getUserInfo(GameUIConfig_1.UIID.Settings);
            }
            else {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Settings);
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        //出租
        More_1.prototype.btnRent = function () {
            var test = JSON.parse(Oops_1.oops.storage.get("test"));
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Rent);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            HttpPost_1.HttpPost.instance.hireInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Rent, data);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
            });
        };
        /**
         * tilegame
         */
        More_1.prototype.btnTileGame = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.openTileGame();
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        More_1.prototype.openTileGame = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getMiniGame(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.TileGameHome, data);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
            });
        };
        /**
         * 图鉴
         */
        More_1.prototype.btn_gallery = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.getCodexList(1, function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Gallery, data);
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
            });
        };
        /**
         * 邮件 公告
         */
        More_1.prototype.btnMail = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Mail);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        /**
         * 商城
         */
        More_1.prototype.btnStore = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Store, { "storeType": DataObject_1.StoreBuyType.Dress });
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        /**
         * 相册
         */
        More_1.prototype.btnPhoto = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Album);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        /**
         * 住所
         */
        More_1.prototype.btnRoom = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //住所是否开启
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.ChoseRoom);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ChoseRoom);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        /**
         * 拍照
         */
        More_1.prototype.btn_shoot = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Shoot);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        More_1.prototype.btn_pet = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Pet);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.pet.length <= 0) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetChoose);
            }
            else {
                HttpPost_1.HttpPost.instance.petList(function (data) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetMain, data);
                });
            }
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        More_1.prototype.changeServerNum = function () {
            var wx = window["wx"];
            if (wx && wx.getAccountInfoSync) {
                var accountInfo = wx.getAccountInfoSync();
                if (accountInfo && accountInfo.miniProgram && accountInfo.miniProgram.envVersion != "release") {
                    if (this.changeSeverCount > 8) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("change", this.node, true);
                    }
                    else {
                        this.changeSeverCount++;
                    }
                }
            }
        };
        More_1.prototype.changeServer = function (ev, type) {
            cc_2.sys.localStorage.setItem(DataObject_1.StorageType.UseQA, type);
            if (cc_2.sys.platform === cc_2.sys.Platform.WECHAT_GAME) {
                var wx = window["wx"];
                if (wx) {
                    wx.restartMiniProgram();
                }
            }
        };
        More_1.prototype.btn_wish = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var limitConditionData = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.Wish);
            if (!limitConditionData.satisfied) {
                //功能未开启
                Oops_1.oops.gui.toast(limitConditionData.unSatisfiedDesc);
                return;
            }
            HttpPost_1.HttpPost.instance.promiseInit(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Wish, { "type": DataObject_1.DecorateType.Furniture, "data": data });
            });
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.More);
        };
        More_1.prototype.test = function () {
            var rex = /^(?=.*[a-zA-Z])(?=.*\d).{6,10}$/;
            console.log("testresg11111", rex.test("111111111"), rex.test("gg1111111"), rex.test("111111h77g"), rex.test("gg111"));
        };
        return More_1;
    }(_classSuper));
    __setFunctionName(_classThis, "More");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        More = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return More = _classThis;
}();
exports.More = More;
