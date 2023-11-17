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
exports.LevelGift = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var GameMgr_1 = require("../common/mgr/GameMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var LevelGift = function () {
    var _classDecorators = [ccclass('LevelGift')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _page_decorators;
    var _page_initializers = [];
    var _layout_decorators;
    var _layout_initializers = [];
    var LevelGift = _classThis = /** @class */ (function (_super) {
        __extends(LevelGift_1, _super);
        function LevelGift_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _title_initializers, void 0));
            _this.page = __runInitializers(_this, _page_initializers, void 0);
            _this.layout = __runInitializers(_this, _layout_initializers, void 0);
            _this.currentPage = 0;
            _this.currPageUngetCount = 0;
            _this.items = [];
            return _this;
        }
        LevelGift_1.prototype.start = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Levelup);
            this.items = this.layout.children;
            this.showUI();
        };
        LevelGift_1.prototype.showUI = function () {
            //翻页
            this.page.active = SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 1;
            //等级
            ViewUtil_1.ViewUtil.setLabelStringByName("root/level_bg/level", this.node, SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].level.toString());
            ViewUtil_1.ViewUtil.setLabelString(this.title, Oops_1.oops.language.getLangByID("chapter.levelup", SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].level));
            this.currPageUngetCount = 0;
            if (this.items) {
                for (var i = 0; i < this.items.length; i++) {
                    var element = this.items[i];
                    if (i < SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].giftData.length) {
                        // element.getComponent(LevelGiftItem)?.initData(this, this.currentPage, i);
                        element.active = true;
                        if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].giftData[i].unget) {
                            this.currPageUngetCount++;
                        }
                    }
                    else {
                        element.active = false;
                    }
                }
            }
            this.showCost();
        };
        LevelGift_1.prototype.showCost = function () {
            //花费
            ViewUtil_1.ViewUtil.setLabelStringByName("root/btn_getAll/amount", this.node, "x" + SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].cost);
        };
        LevelGift_1.prototype.btn_page = function (event, data) {
            var pageAdd = parseInt(data);
            this.currentPage += pageAdd;
            if (this.currentPage >= SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length) {
                this.currentPage = 0;
            }
            else if (this.currentPage < 0) {
                this.currentPage = SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length - 1;
            }
            this.showUI();
        };
        LevelGift_1.prototype.btn_getAll = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].cost) {
                //钻石不够
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("common.notEnoughJewels"));
                return;
            }
            HttpPost_1.HttpPost.instance.receiveLevelUpGift(SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[this.currentPage].level, 2, 0, 1, function (data) {
                //显示掉落
                var dropDatas = [];
                for (var i = 0; i < SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[_this.currentPage].giftData.length; i++) {
                    var element = SingletonModuleComp_1.smc.account.AccountModel.levelGiftList[_this.currentPage].giftData[i];
                    if (element.unget) {
                        var dropData = DropMgr_1.DropMgr.getDropData(element.dropData)[0];
                        dropDatas.push(dropData);
                    }
                }
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.UIID.push(GameUIConfig_1.UIID.LevelGift);
                dropInfo.UIID.push(GameUIConfig_1.UIID.LimitGift);
                dropInfo.dropFrom = DataObject_1.DropFrom.LevelGift;
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                //钻石
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                //更新数据
                DataMgr_1.DataMgr.updateUserData(data.userGrade, data.levelUpGift, data.taskList);
                _this.refreshUI();
            });
        };
        LevelGift_1.prototype.refreshUI = function (fromSingle) {
            if (fromSingle === void 0) { fromSingle = false; }
            if (SingletonModuleComp_1.smc.account.AccountModel.levelGiftList.length > 0) {
                if (fromSingle) {
                    if (this.currPageUngetCount == 1) {
                        this.currentPage = 0;
                    }
                }
                else {
                    this.currentPage = 0;
                }
                this.showUI();
            }
            else {
                //关闭
                this.close();
            }
        };
        LevelGift_1.prototype.close = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LevelGift);
            if (GameMgr_1.GameMgr.Instance.tips[0]) {
                Oops_1.oops.gui.open(GameMgr_1.GameMgr.Instance.tips[0]);
                GameMgr_1.GameMgr.Instance.tips.splice(0, 1);
            }
        };
        LevelGift_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.close();
        };
        LevelGift_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.LevelGift);
        };
        return LevelGift_1;
    }(_classSuper));
    __setFunctionName(_classThis, "LevelGift");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [property(cc_1.Node)];
        _page_decorators = [property(cc_1.Node)];
        _layout_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _page_decorators, { kind: "field", name: "page", static: false, private: false, access: { has: function (obj) { return "page" in obj; }, get: function (obj) { return obj.page; }, set: function (obj, value) { obj.page = value; } }, metadata: _metadata }, _page_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _layout_decorators, { kind: "field", name: "layout", static: false, private: false, access: { has: function (obj) { return "layout" in obj; }, get: function (obj) { return obj.layout; }, set: function (obj, value) { obj.layout = value; } }, metadata: _metadata }, _layout_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LevelGift = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LevelGift = _classThis;
}();
exports.LevelGift = LevelGift;
