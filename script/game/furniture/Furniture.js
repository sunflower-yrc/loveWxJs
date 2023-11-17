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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furniture = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var FurnitureEnum_1 = require("../../Entity/furniture/FurnitureEnum");
var FurnitureMgr_1 = require("../../Entity/furniture/FurnitureMgr");
var DataManager_1 = require("../../Global/DataManager");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var Decorate_1 = require("../decorate/Decorate");
var DataObject_1 = require("../tools/DataObject");
var LimitMgr_1 = require("../mgr/LimitMgr");
var SdkPlatform_1 = require("../platform/SdkPlatform");
var FloorsMgr_1 = require("../../Entity/floor/FloorsMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Furniture = function () {
    var _classDecorators = [ccclass('Furniture')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Decorate_1.Decorate;
    var _instanceExtraInitializers = [];
    var _btns_decorators;
    var _btns_initializers = [];
    var Furniture = _classThis = /** @class */ (function (_super) {
        __extends(Furniture_1, _super);
        function Furniture_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.animation = (__runInitializers(_this, _instanceExtraInitializers), void 0);
            _this.btns = __runInitializers(_this, _btns_initializers, null);
            return _this;
        }
        Furniture_1.prototype.onLoad = function () {
            _super.prototype.onLoad.call(this);
            //跳转到装修的时候  如果等级礼包自动打开了 先关闭 避免遮挡
            if (Oops_1.oops.gui.has(GameUIConfig_1.UIID.LevelGift)) {
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.LevelGift);
            }
            SingletonModuleComp_1.smc.account.AccountModel.isOpendFurniture = true;
            SdkPlatform_1.SdkPlatform.furnitureClk("furnitureLoad:".concat(DataManager_1.default.Instance.curChapter));
        };
        Furniture_1.prototype.copyDataToFeedBack = function () {
            if (!GameMgr_1.GameMgr.Instance.isOutside) {
                // /** 缓存数据 */
                DataManager_1.default.Instance.feedbackDataFurnitureOwnedData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData);
            }
            else {
                /**外出布景家具数据 */
                DataManager_1.default.Instance.outsideFurnitureFeedBackData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData);
            }
        };
        Furniture_1.prototype.start = function () {
            //关闭按钮在引导的时候不出现
            ViewUtil_1.ViewUtil.setNodeActiveByName("btn_close", this.node, SingletonModuleComp_1.smc.account.AccountModel.isGuideOver);
            this.showBtns(SingletonModuleComp_1.smc.account.AccountModel.isGuideOver);
            this.animation = this.getComponent(cc_1.Animation);
            this.animation.on(cc_1.AnimationComponent.EventType.FINISHED, this.onAnimationFinished, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowFurnitureAnimate, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.ShowFurnitureBtns, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.FurnitureGuideTis, this.onHander, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.ClickItem, this.onHander, this);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshRoleExit, true);
            GameMgr_1.GameMgr.Instance.ConstructionState = true;
            GameMgr_1.GameMgr.Instance.mapOffsetState = !!this.arrowStatus;
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OffBtns);
            this.copyDataToFeedBack();
            if (!GameMgr_1.GameMgr.Instance.isOutside) {
                GameMgr_1.GameMgr.Instance.sceneMgr.showSomeItems(false);
            }
            //GameMgr.Instance.mapManager.setScreenToCenter(GameMgr.Instance.sceneMgr.node, 1.3);
            var scoreBg = ViewUtil_1.ViewUtil.findChildByName("score_bg", this.node);
            ViewUtil_1.ViewUtil.setNodeActiveByName("score", scoreBg, !GameMgr_1.GameMgr.Instance.isOutside);
            ViewUtil_1.ViewUtil.setNodeActiveByName("outScore", scoreBg, GameMgr_1.GameMgr.Instance.isOutside);
            if (GameMgr_1.GameMgr.Instance.manorMode) {
                FloorsMgr_1.FloorsMgr.Instance.getAllHasPlantFloorsMgrs().forEach(function (e) {
                    var _a, _b;
                    (_a = e.plotFurnitureMgr) === null || _a === void 0 ? void 0 : _a.closeBtnClick();
                    (_b = e.ManorBuffFurniture) === null || _b === void 0 ? void 0 : _b.closeBtnClick();
                });
            }
            this.freshBtns();
        };
        Furniture_1.prototype.onDestroy = function () {
            SingletonModuleComp_1.smc.account.AccountModel.isOpendFurniture = false;
            _super.prototype.onDestroy.call(this);
            GameMgr_1.GameMgr.Instance.ConstructionState = false;
            GameMgr_1.GameMgr.Instance.sceneMgr.showRoles();
            GameMgr_1.GameMgr.Instance.sceneMgr.showPets();
            GameMgr_1.GameMgr.Instance.sceneMgr.showNpcs();
            if (!GameMgr_1.GameMgr.Instance.isOutside)
                GameMgr_1.GameMgr.Instance.sceneMgr.showSomeItems();
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OnBtns);
            this.animation.off(cc_1.AnimationComponent.EventType.FINISHED, this.onAnimationFinished, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ShowFurnitureAnimate, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ShowFurnitureBtns, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.FurnitureGuideTis, this.onHander, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ClickItem, this.onHander, this);
            if (GameMgr_1.GameMgr.Instance.manorMode) {
                FloorsMgr_1.FloorsMgr.Instance.getAllHasPlantFloorsMgrs().forEach(function (e) {
                    var _a;
                    (_a = e.plotFurnitureMgr) === null || _a === void 0 ? void 0 : _a.openBtnClick();
                });
            }
        };
        Furniture_1.prototype.onHander = function (event, args) {
            switch (event) {
                case GameEvent_1.GameEvent.ShowFurnitureAnimate:
                    this.btn_arrow();
                    break;
                case GameEvent_1.GameEvent.ShowFurnitureBtns:
                    this.showBtns(args);
                    break;
                case GameEvent_1.GameEvent.FurnitureGuideTis:
                    this.showGuideTips();
                    break;
                case GameEvent_1.GameEvent.ClickItem:
                    this.freshBtns();
                    break;
            }
        };
        Furniture_1.prototype.showGuideTips = function () {
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide) {
                if (SingletonModuleComp_1.smc.guide.GuideModel.step == 8) {
                    //移动位置
                    ViewUtil_1.ViewUtil.setNodeActiveByName("guide_tips", this.node, true);
                    ViewUtil_1.ViewUtil.setLabelStringByName("guide_tips/tips", this.node, Oops_1.oops.language.getLangByID("guide.moveToPos"));
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 9) {
                    //确认
                    ViewUtil_1.ViewUtil.setNodeActiveByName("guide_tips", this.node, true);
                    ViewUtil_1.ViewUtil.setLabelStringByName("guide_tips/tips", this.node, Oops_1.oops.language.getLangByID("guide.claim"));
                }
                else if (SingletonModuleComp_1.smc.guide.GuideModel.step == 10) {
                    //保存
                    ViewUtil_1.ViewUtil.setNodeActiveByName("guide_tips", this.node, false);
                }
            }
        };
        /**
         * 操作按钮
         * @param isShow
         */
        Furniture_1.prototype.showBtns = function (isShow) {
            ViewUtil_1.ViewUtil.setNodeActiveByName("decorate/btns", this.node, isShow);
        };
        /**
         * 箭头下拉  回弹
         */
        Furniture_1.prototype.btn_arrow = function () {
            if (this.animation && !this.animating) {
                if (this.arrowStatus == 1) {
                    //开始下拉
                    this.animation.play('animationHideFurniture');
                    this.animating = true;
                }
                else {
                    //开始回弹
                    this.animation.play('animationShowFurniture');
                    this.animating = true;
                    this.animation.on(cc_1.AnimationComponent.EventType.FINISHED, this.onAnimationFinished, this);
                }
            }
        };
        Furniture_1.prototype.onAnimationFinished = function () {
            this.arrowStatus = this.arrowStatus == 0 ? 1 : 0;
            this.animating = false;
            GameMgr_1.GameMgr.Instance.mapOffsetState = !!this.arrowStatus;
        };
        /**
         * 清除
         */
        Furniture_1.prototype.btn_clear = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            for (var _i = 0, _a = GameMgr_1.GameMgr.Instance.sceneMgr.furnitureParentMgrs; _i < _a.length; _i++) {
                var i = _a[_i];
                i.getComponentsInChildren(FurnitureMgr_1.FurnitureMgr).forEach(function (furniture) {
                    if (furniture.node.active && furniture.blockType != FurnitureEnum_1.BlockType.Plot && furniture.blockType != FurnitureEnum_1.BlockType.ManorBuff)
                        furniture.putBack();
                });
            }
            this.showItems();
            GameMgr_1.GameMgr.Instance.sceneMgr.hideMoveArrow();
        };
        /**
         * 旋转
         */
        Furniture_1.prototype.btn_turn = function () {
            if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem && (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.blockType == FurnitureEnum_1.BlockType.Plot || GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.blockType == FurnitureEnum_1.BlockType.ManorBuff)) {
                return;
            }
            var clickItem = GameMgr_1.GameMgr.Instance.clickItem;
            if (clickItem && clickItem.furnitureItem) {
                clickItem.furnitureItem.setRotate();
                clickItem.furnitureItem.updatePos(clickItem.furnitureItem.settlePos, FurnitureEnum_1.TouchState.TouchEnd, clickItem.furnitureItem.isPlotType);
                // clickItem.furnitureItem.updateBlocks();
                GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(clickItem.furnitureItem.getActiveNode(), 1.3);
            }
            else {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("game.needClickedRotate"));
            }
        };
        /**刷新按钮 */
        Furniture_1.prototype.freshBtns = function () {
            //如果选中的是庄园土地或者设施，不能旋转，不能回收
            if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem && (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.blockType == FurnitureEnum_1.BlockType.Plot || GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.blockType == FurnitureEnum_1.BlockType.ManorBuff)) {
                ViewUtil_1.ViewUtil.setSpriteGrayByName("btn_turn", this.btns, true);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("btn_recycle", this.btns, true);
            }
            else {
                ViewUtil_1.ViewUtil.setSpriteGrayByName("btn_turn", this.btns, !GameMgr_1.GameMgr.Instance.clickItem.furnitureItem);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("btn_recycle", this.btns, !GameMgr_1.GameMgr.Instance.clickItem.furnitureItem);
            }
        };
        /**
         * 回收
         */
        Furniture_1.prototype.btn_recycle = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem && (GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.blockType == FurnitureEnum_1.BlockType.Plot || GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.blockType == FurnitureEnum_1.BlockType.ManorBuff)) {
                return;
            }
            var clickItem = GameMgr_1.GameMgr.Instance.clickItem;
            if (clickItem && clickItem.furnitureItem) {
                clickItem.furnitureItem.putBack();
                this.showItems();
                // GameMgr.Instance.clickItem. = null!;
            }
            else {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("game.needClickedRecycle"));
            }
            GameMgr_1.GameMgr.Instance.sceneMgr.hideMoveArrow();
        };
        /**
        * 保存
        */
        Furniture_1.prototype.btn_save = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            GameMgr_1.GameMgr.Instance.sceneMgr.saveAndHideMoveArrow();
                            return [4 /*yield*/, DataManager_1.default.Instance.uploadData()];
                        case 1:
                            //console.log(await DataManager.Instance.uploadData())
                            if (_a.sent()) {
                                console.log("btn_save success");
                                this.copyDataToFeedBack();
                                //排序
                                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortFurniture);
                            }
                            this.isOpenValuePack();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
        * 关闭
        */
        Furniture_1.prototype.btn_close = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            /**取消选中状态 */
                            GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem(true);
                            GameMgr_1.GameMgr.Instance.originPos = null;
                            GameMgr_1.GameMgr.Instance.originIsPlotType = null;
                            return [4 /*yield*/, DataManager_1.default.Instance.loadFurnitureSaveData()];
                        case 1:
                            _a.sent();
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshRoleExit, false);
                            //显示主界面UI
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
                            //排序
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortFurniture);
                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Furniture);
                            this.isOpenValuePack();
                            GameMgr_1.GameMgr.Instance.sceneMgr.hideMoveArrow();
                            return [2 /*return*/];
                    }
                });
            });
        };
        //特殊处理超值礼包弹的次数
        Furniture_1.prototype.isOpenValuePack = function () {
            var funcOpenValuePack = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.ValuePack).satisfied;
            if (funcOpenValuePack && !SingletonModuleComp_1.smc.account.AccountModel.videoReward) {
                var num = Oops_1.oops.storage.get("valuePack");
                if (!num) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ValuePack);
                }
                else if (parseInt(num) < GameMgr_1.GameMgr.Instance.valuePackShowTimes) {
                    num = (parseInt(num) + 1) + "";
                    Oops_1.oops.storage.set("valuePack", num);
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ValuePack);
                }
            }
        };
        return Furniture_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Furniture");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _btns_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _btns_decorators, { kind: "field", name: "btns", static: false, private: false, access: { has: function (obj) { return "btns" in obj; }, get: function (obj) { return obj.btns; }, set: function (obj, value) { obj.btns = value; } }, metadata: _metadata }, _btns_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Furniture = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Furniture = _classThis;
}();
exports.Furniture = Furniture;
