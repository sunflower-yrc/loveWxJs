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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetHome = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var ListItem_1 = require("../tools/ListItem");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PetHome = function () {
    var _classDecorators = [ccclass('PetHome')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _houseList_decorators;
    var _houseList_initializers = [];
    var _foodList_decorators;
    var _foodList_initializers = [];
    var _playList_decorators;
    var _playList_initializers = [];
    var _itemList_decorators;
    var _itemList_initializers = [];
    var PetHome = _classThis = /** @class */ (function (_super) {
        __extends(PetHome_1, _super);
        function PetHome_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverData = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.houseList = __runInitializers(_this, _houseList_initializers, null);
            _this.foodList = __runInitializers(_this, _foodList_initializers, null);
            _this.playList = __runInitializers(_this, _playList_initializers, null);
            _this.itemList = __runInitializers(_this, _itemList_initializers, null);
            _this.currSelected = 0;
            return _this;
        }
        PetHome_1.prototype.onAdded = function (data) {
            this.serverData = data.list;
        };
        PetHome_1.prototype.start = function () {
            this.itemList.numItems = this.serverData.length;
            this.houseData = this.serverData[this.currSelected].list[0].list;
            this.houseList.numItems = this.houseData.length;
            this.playData = this.serverData[this.currSelected].list[1].list;
            this.playList.numItems = this.playData.length;
            this.foodData = this.serverData[this.currSelected].list[2].list;
            this.foodList.numItems = this.foodData.length;
        };
        PetHome_1.prototype.onItemListRender = function (item, idx) {
            if (item) {
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(item, GameResPath_1.GameResPath.getPetDecorateTagOffIconsPath(this.serverData[idx].pet_id), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("select/Sprite", item, GameResPath_1.GameResPath.getPetDecorateTagOnIconsPath(this.serverData[idx].pet_id), BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        PetHome_1.prototype.onHouseListRender = function (item, idx) {
            if (item) {
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_buyHouse, this);
                ViewUtil_1.ViewUtil.findChildByName("changeBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_changeHouse, this);
                ViewUtil_1.ViewUtil.setLabelStringByName("Label", item, "+" + StringUtil_1.StringUtil.stringToArray5(this.houseData[idx].openCoins)[2]);
                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, "+" + this.houseData[idx].comfort);
                ViewUtil_1.ViewUtil.setNodeActiveByName("using", item, this.houseData[idx].isUse);
                ViewUtil_1.ViewUtil.setNodeActiveByName("changeBtn", item, !this.houseData[idx].isUse && this.houseData[idx].isBuy);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", item, !this.houseData[idx].isBuy);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getPetDecorateIconsPath(this.houseData[idx].resName), BundleConfig_1.default.instance.guiBundle.name);
                if (Number(StringUtil_1.StringUtil.stringToArray5(this.houseData[idx].openCoins)[0]) > 0)
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("getBtn/Sprite", item, GameResPath_1.GameResPath.getDropIconsPath(Number(StringUtil_1.StringUtil.stringToArray5(this.houseData[idx].openCoins)[0])), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_buyHouse, this);
                ViewUtil_1.ViewUtil.findChildByName("changeBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_changeHouse, this);
            }
        };
        PetHome_1.prototype.onPlayListRender = function (item, idx) {
            if (item) {
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_buyPlay, this);
                ViewUtil_1.ViewUtil.findChildByName("changeBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_changePlay, this);
                ViewUtil_1.ViewUtil.setLabelStringByName("Label", item, "+" + StringUtil_1.StringUtil.stringToArray5(this.playData[idx].openCoins)[2]);
                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, "+" + this.playData[idx].comfort);
                ViewUtil_1.ViewUtil.setNodeActiveByName("using", item, this.playData[idx].isUse);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getPetDecorateIconsPath(this.playData[idx].resName), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setNodeActiveByName("changeBtn", item, !this.playData[idx].isUse && this.playData[idx].isBuy);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", item, !this.playData[idx].isBuy);
                if (Number(StringUtil_1.StringUtil.stringToArray5(this.playData[idx].openCoins)[0]) > 0)
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("getBtn/Sprite", item, GameResPath_1.GameResPath.getDropIconsPath(Number(StringUtil_1.StringUtil.stringToArray5(this.playData[idx].openCoins)[0])), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_buyPlay, this);
                ViewUtil_1.ViewUtil.findChildByName("changeBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_changePlay, this);
            }
        };
        PetHome_1.prototype.onFoodListRender = function (item, idx) {
            if (item) {
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_buyFood, this);
                ViewUtil_1.ViewUtil.findChildByName("changeBtn", item).off(cc_1.Button.EventType.CLICK, this.btn_changeFood, this);
                ViewUtil_1.ViewUtil.setLabelStringByName("Label", item, "+" + StringUtil_1.StringUtil.stringToArray5(this.foodData[idx].openCoins)[2]);
                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, "+" + this.foodData[idx].comfort);
                ViewUtil_1.ViewUtil.setNodeActiveByName("using", item, this.foodData[idx].isUse);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getPetDecorateIconsPath(this.foodData[idx].resName), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setNodeActiveByName("changeBtn", item, !this.foodData[idx].isUse && this.foodData[idx].isBuy);
                ViewUtil_1.ViewUtil.setNodeActiveByName("getBtn", item, !this.foodData[idx].isBuy);
                if (Number(StringUtil_1.StringUtil.stringToArray5(this.foodData[idx].openCoins)[0]) > 0)
                    ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("getBtn/Sprite", item, GameResPath_1.GameResPath.getDropIconsPath(Number(StringUtil_1.StringUtil.stringToArray5(this.foodData[idx].openCoins)[0])), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.findChildByName("getBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_buyFood, this);
                ViewUtil_1.ViewUtil.findChildByName("changeBtn", item).on(cc_1.Button.EventType.CLICK, this.btn_changeFood, this);
            }
        };
        PetHome_1.prototype.onListSelected = function (item, selectedId, lastSelectedId, val, param) {
            if (!item)
                return;
            this.currSelected = selectedId;
            this.start();
        };
        PetHome_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetHome);
            //刷新petmain状态
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
        };
        //购买房子
        PetHome_1.prototype.btn_buyHouse = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.houseData[idx];
            HttpPost_1.HttpPost.instance.petApplianceBuy(this.serverData[this.currSelected].pet_id, item.applianceId, function (data) {
                _this.onAdded(data);
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                _this.start();
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        //购买玩具
        PetHome_1.prototype.btn_buyPlay = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.playData[idx];
            HttpPost_1.HttpPost.instance.petApplianceBuy(this.serverData[this.currSelected].pet_id, item.applianceId, function (data) {
                _this.onAdded(data);
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                _this.start();
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        //购买食盆
        PetHome_1.prototype.btn_buyFood = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.foodData[idx];
            HttpPost_1.HttpPost.instance.petApplianceBuy(this.serverData[this.currSelected].pet_id, item.applianceId, function (data) {
                _this.onAdded(data);
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin = data.coin;
                _this.start();
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        //更换房子
        PetHome_1.prototype.btn_changeHouse = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.houseData[idx];
            HttpPost_1.HttpPost.instance.petApplianceUse(this.serverData[this.currSelected].pet_id, item.applianceId, function (data) {
                _this.onAdded(data);
                _this.start();
            });
        };
        //更换玩具
        PetHome_1.prototype.btn_changePlay = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.playData[idx];
            HttpPost_1.HttpPost.instance.petApplianceUse(this.serverData[this.currSelected].pet_id, item.applianceId, function (data) {
                _this.onAdded(data);
                _this.start();
            });
        };
        //更换食盆
        PetHome_1.prototype.btn_changeFood = function (button) {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            var item = this.foodData[idx];
            HttpPost_1.HttpPost.instance.petApplianceUse(this.serverData[this.currSelected].pet_id, item.applianceId, function (data) {
                _this.onAdded(data);
                _this.start();
            });
        };
        PetHome_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetHome);
        };
        return PetHome_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetHome");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _houseList_decorators = [property({ type: List_1.default })];
        _foodList_decorators = [property({ type: List_1.default })];
        _playList_decorators = [property({ type: List_1.default })];
        _itemList_decorators = [property({ type: List_1.default })];
        __esDecorate(null, null, _houseList_decorators, { kind: "field", name: "houseList", static: false, private: false, access: { has: function (obj) { return "houseList" in obj; }, get: function (obj) { return obj.houseList; }, set: function (obj, value) { obj.houseList = value; } }, metadata: _metadata }, _houseList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _foodList_decorators, { kind: "field", name: "foodList", static: false, private: false, access: { has: function (obj) { return "foodList" in obj; }, get: function (obj) { return obj.foodList; }, set: function (obj, value) { obj.foodList = value; } }, metadata: _metadata }, _foodList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _playList_decorators, { kind: "field", name: "playList", static: false, private: false, access: { has: function (obj) { return "playList" in obj; }, get: function (obj) { return obj.playList; }, set: function (obj, value) { obj.playList = value; } }, metadata: _metadata }, _playList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemList_decorators, { kind: "field", name: "itemList", static: false, private: false, access: { has: function (obj) { return "itemList" in obj; }, get: function (obj) { return obj.itemList; }, set: function (obj, value) { obj.itemList = value; } }, metadata: _metadata }, _itemList_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetHome = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetHome = _classThis;
}();
exports.PetHome = PetHome;
