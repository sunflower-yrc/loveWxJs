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
exports.FurnitureItem = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var FloorsMgr_1 = require("../../Entity/floor/FloorsMgr");
var FurnitureEnum_1 = require("../../Entity/furniture/FurnitureEnum");
var FurnitureMgr_1 = require("../../Entity/furniture/FurnitureMgr");
var FurnitureVO_1 = require("../../Entity/furniture/FurnitureVO");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var DataMgr_1 = require("../mgr/DataMgr");
var DropMgr_1 = require("../mgr/DropMgr");
var ButtonPlus_1 = require("../tools/ButtonPlus");
var DataObject_1 = require("../tools/DataObject");
var RedDotMgr_1 = require("../mgr/RedDotMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var FurnitureItem = function () {
    var _classDecorators = [ccclass('FurnitureItem')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var FurnitureItem = _classThis = /** @class */ (function (_super) {
        __extends(FurnitureItem_1, _super);
        function FurnitureItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.decorateOwnedData = null;
            _this.isNew = false;
            _this.destroyed = false;
            return _this;
        }
        FurnitureItem_1.prototype.initData = function (data) {
            this.decorateOwnedData = data;
            if (this.decorateOwnedData) {
                //有值
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath(this.decorateOwnedData.furnitureData.grade.toString()), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.node, GameResPath_1.GameResPath.getFurnitureListIconsPath(this.decorateOwnedData.furnitureData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
                this.isNew = DataMgr_1.DataMgr.getDecorateNewState(DataObject_1.DropType.Furniture, this.decorateOwnedData.furnitureData.id) == 1;
                this.refreshNewState();
                this.refreshAmont();
            }
            else {
                //空的
                ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.node, GameResPath_1.GameResPath.getQualityBgPath("0"), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.clearSpriteFrameByName("icon", this.node);
                ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, false);
            }
            //绑定明细
            var btnCom = this.getComponent(ButtonPlus_1.default);
            if (btnCom) {
                btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
            }
        };
        /**
         * 设置新状态
         */
        FurnitureItem_1.prototype.refreshNewState = function () {
            ViewUtil_1.ViewUtil.setNodeActiveByName("new", this.node, this.isNew);
        };
        /**
         * 刷新家具摆放和剩余数量
         */
        FurnitureItem_1.prototype.refreshAmont = function () {
            if (this.decorateOwnedData) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("amount", this.node, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("amount", this.node, this.decorateOwnedData.leftAmount.toString());
                var gray = this.decorateOwnedData.leftAmount <= 0;
                ViewUtil_1.ViewUtil.setSpriteGray(this.node, gray);
                ViewUtil_1.ViewUtil.setSpriteGrayByName("icon", this.node, gray);
                var isLineup = this.decorateOwnedData.lineupCount > 0;
                ViewUtil_1.ViewUtil.setNodeActiveByName("lineup", this.node, isLineup);
                if (isLineup) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("lineup/count", this.node, this.decorateOwnedData.lineupCount.toString());
                }
            }
        };
        FurnitureItem_1.prototype.btn_click = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, pixel, size, url, node, furnitureMgr, vo;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            if (!this.decorateOwnedData) {
                                return [2 /*return*/];
                            }
                            if (this.decorateOwnedData.leftAmount <= 0) {
                                return [2 /*return*/];
                            }
                            if (GameMgr_1.GameMgr.Instance.lockSpawnFurniture) {
                                return [2 /*return*/];
                            }
                            GameMgr_1.GameMgr.Instance.lockSpawnFurniture = true;
                            data = this.decorateOwnedData.furnitureData;
                            //去掉新获得的状态
                            if (this.isNew) {
                                this.isNew = false;
                                DataMgr_1.DataMgr.setDecorateNewState(DataObject_1.DropType.Furniture, data.id, false);
                                this.refreshNewState();
                                this.decorateOwnedData.isNew = 0;
                                RedDotMgr_1.RedDotMgr.setFurnitureRedDot(this.decorateOwnedData, -1);
                                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.DecorateRefreshRedDot, this.decorateOwnedData.furnitureData.furnitureType);
                            }
                            GameMgr_1.GameMgr.Instance.clickItem.setOffClickItem();
                            GameMgr_1.GameMgr.Instance.sceneMgr.hideMoveArrow();
                            pixel = StringUtil_1.StringUtil.stringToArray5(data.pixel);
                            size = {
                                xH: parseInt(pixel[0]),
                                yW: parseInt(pixel[1])
                            };
                            url = "";
                            switch (data.furnitureType) {
                                case FurnitureEnum_1.FurnitureTypeEnum.FloorTile:
                                case FurnitureEnum_1.FurnitureTypeEnum.Wallpaper:
                                    url = "prefab/".concat(data.furnitureType);
                                    break;
                                case FurnitureEnum_1.FurnitureTypeEnum.Door:
                                    url = "prefab/".concat(data.furnitureType + "-" + data.pixel);
                                    break;
                                case FurnitureEnum_1.FurnitureTypeEnum.WallDecoration:
                                    url = "prefab/".concat(data.furnitureType + "-" + data.pixel);
                                    break;
                                case FurnitureEnum_1.FurnitureTypeEnum.OtherWallDecorations:
                                    url = "prefab/".concat(data.furnitureType + "-" + data.pixel);
                                    break;
                                case FurnitureEnum_1.FurnitureTypeEnum.Window:
                                    url = "prefab/".concat(data.furnitureType + "-" + data.pixel);
                                    break;
                                default:
                                    url = "prefab/".concat(data.pixel);
                                    break;
                            }
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(url, BundleConfig_1.default.instance.furniture.name)];
                        case 1:
                            node = _a.sent();
                            furnitureMgr = node.getComponent(FurnitureMgr_1.FurnitureMgr);
                            vo = new FurnitureVO_1.FurnitureVO({ id: data.id, name: data.getName() + "", direction: FurnitureEnum_1.FurnitureDirectionEnum.Left, type: data.furnitureType, settlePos: { x: 1, y: 1, room: 0 }, size: size, land_id: 0, isPlotPos: false });
                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.init(vo, false);
                            furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.loadAsset();
                            this.scheduleOnce(function () {
                                console.log("FurnitureItem: scheduleOnce.144行." + _this.destroyed);
                                if (_this.destroyed) {
                                    return;
                                }
                                furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.clicked(false);
                                var flag = FloorsMgr_1.FloorsMgr.Instance.backtracking(furnitureMgr);
                                GameMgr_1.GameMgr.Instance.lockSpawnFurniture = false;
                                if (!flag) {
                                    furnitureMgr === null || furnitureMgr === void 0 ? void 0 : furnitureMgr.putBack(false, true);
                                    return;
                                }
                                GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(furnitureMgr.getActiveNode(), 0);
                                _this.decorateOwnedData.lineupCount++;
                                _this.decorateOwnedData.leftAmount--;
                                Oops_1.oops.logB(DataManager_1.default.Instance.feedbackDataFurnitureOwnedData);
                                _this.refreshAmont();
                                GameMgr_1.GameMgr.Instance.sceneMgr.checkShowMoveArrows(furnitureMgr);
                                GameMgr_1.GameMgr.Instance.sceneMgr.updateArrowFace(furnitureMgr);
                                if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step == 7) {
                                    //列表降下去
                                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowFurnitureAnimate);
                                    //显示教学
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.GuideMove);
                                }
                            }, 0.1);
                            return [2 /*return*/];
                    }
                });
            });
        };
        FurnitureItem_1.prototype.onLongPressThis = function (event) {
            if (this.decorateOwnedData) {
                var touchPos = event.getUILocation();
                var dropData = void 0;
                if (this.decorateOwnedData.furnitureData) {
                    dropData = DropMgr_1.DropMgr.getDropInfo(DataObject_1.DropType.Furniture, this.decorateOwnedData.furnitureData.id, 0);
                }
                else {
                    dropData = DropMgr_1.DropMgr.getDropInfo(DataObject_1.DropType.Dress, this.decorateOwnedData.dressData.id, 0);
                }
                var itemDetailsData = new DataObject_1.ItemDetailsData();
                itemDetailsData.dropData = dropData;
                itemDetailsData.touchPos = touchPos;
                DataMgr_1.DataMgr.OpenItemDetails(itemDetailsData);
                // if (this.decorateOwnedData.furnitureData.furnitureSuit > 0) {
                //     //套装
                //     DataMgr.OpenItemDetails(itemDetailsData, UIID.ItemDetailsSuit);
                // } else {
                //     //普通
                //     DataMgr.OpenItemDetails(itemDetailsData, UIID.ItemDetailsDecorate);
                // }
            }
        };
        FurnitureItem_1.prototype.onLongPressEndThis = function (event) {
            DataMgr_1.DataMgr.CloseItemDetails();
        };
        FurnitureItem_1.prototype.onDestroy = function () {
            this.destroyed = true;
            GameMgr_1.GameMgr.Instance.lockSpawnFurniture = false;
        };
        return FurnitureItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FurnitureItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FurnitureItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FurnitureItem = _classThis;
}();
exports.FurnitureItem = FurnitureItem;
