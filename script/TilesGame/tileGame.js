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
exports.tileGame = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../game/common/bundle/BundleConfig");
var GameEvent_1 = require("../game/common/config/GameEvent");
var GameResPath_1 = require("../game/common/config/GameResPath");
var GameUIConfig_1 = require("../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../game/common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../game/mgr/DataMgr");
var GlobalData_1 = require("../game/common/tableData/GlobalData");
var TileData_1 = require("../game/common/tableData/TileData");
var TileRewardData_1 = require("../game/common/tableData/TileRewardData");
var DataObject_1 = require("../game/tools/DataObject");
var HttpPost_1 = require("../game/tools/HttpPost");
var tile_1 = require("./tile");
var tileGameMgr_1 = require("./tileGameMgr");
var tilesLayer_1 = require("./tilesLayer");
var SdkPlatform_1 = require("../game/platform/SdkPlatform");
var cc_3 = require("cc");
var cc_4 = require("cc");
var EventReport_1 = require("../Global/EventReport");
var StringUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var tileGame = function () {
    var _classDecorators = [ccclass('tileGame')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _pilePosParent_decorators;
    var _pilePosParent_initializers = [];
    var _levelNode_decorators;
    var _levelNode_initializers = [];
    var _panels_decorators;
    var _panels_initializers = [];
    var _buyPanel_decorators;
    var _buyPanel_initializers = [];
    var _animParrentNode_decorators;
    var _animParrentNode_initializers = [];
    var _roleAni_decorators;
    var _roleAni_initializers = [];
    var _removeAnis_decorators;
    var _removeAnis_initializers = [];
    var tileGame = _classThis = /** @class */ (function (_super) {
        __extends(tileGame_1, _super);
        function tileGame_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pilePosParent = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _pilePosParent_initializers, null));
            _this.levelNode = __runInitializers(_this, _levelNode_initializers, null);
            _this.panels = __runInitializers(_this, _panels_initializers, null);
            _this.buyPanel = __runInitializers(_this, _buyPanel_initializers, null);
            _this.animParrentNode = __runInitializers(_this, _animParrentNode_initializers, null);
            _this.roleAni = __runInitializers(_this, _roleAni_initializers, null);
            _this.removeAnis = __runInitializers(_this, _removeAnis_initializers, []);
            _this.btnCb = null;
            _this.data = null;
            _this.playAdFlag = false;
            /**秒级 */
            _this.startTime = null;
            _this.needNum = 0;
            _this.isJump = false;
            _this.isRequest = false;
            return _this;
        }
        tileGame_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        tileGame_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RefreshTileTotalNum, this.RefreshTileTotalNum, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.TileGameWin, this.showWin, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.TileGameLose, this.showLose, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.TileGame);
            BundleConfig_1.default.instance.guiBundle.release(GameResPath_1.GameResPath.getTilesGameItemPrefabPath());
            BundleConfig_1.default.instance.guiBundle.release(GameResPath_1.GameResPath.getTilesGameLayerPrefabPath());
            tileGameMgr_1.tileGameMgr.Instance.destroy();
        };
        tileGame_1.prototype.onLoad = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide)
                        ViewUtil_1.ViewUtil.setNodeActiveByName("setting", this.node, false);
                    ViewUtil_1.ViewUtil.getChildByName("bg", this.buyPanel).on(cc_2.Node.EventType.TOUCH_START, function () {
                        _this.buyPanel.active = false;
                    }, this);
                    Oops_1.oops.message.on(GameEvent_1.GameEvent.TileGameWin, this.showWin, this);
                    Oops_1.oops.message.on(GameEvent_1.GameEvent.TileGameLose, this.showLose, this);
                    Oops_1.oops.message.on(GameEvent_1.GameEvent.RefreshTileTotalNum, this.RefreshTileTotalNum, this);
                    this.init();
                    return [2 /*return*/];
                });
            });
        };
        tileGame_1.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var table, _a, _b, maxLength, maxYlength, _i, _c, layer;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            //打点关卡
                            SdkPlatform_1.SdkPlatform.tilegame_enter(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel);
                            this.startTime = Oops_1.oops.timer.getServerTime();
                            tileGameMgr_1.tileGameMgr.Instance.isJump = false;
                            table = new TileData_1.TileData();
                            table.init(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel);
                            table.getData();
                            table.releaseData();
                            // smc.account.AccountModel.vm.prop1 += 100;
                            // smc.account.AccountModel.vm.prop2 += 100;
                            // smc.account.AccountModel.vm.prop3 += 100;
                            tileGameMgr_1.tileGameMgr.Instance.init();
                            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameAddPos);
                            ViewUtil_1.ViewUtil.setNodeActiveByName("st_icon_bg_2", this.node, true);
                            tileGameMgr_1.tileGameMgr.Instance.pilePosParent = this.pilePosParent;
                            tileGameMgr_1.tileGameMgr.Instance.animParrentNode = this.animParrentNode;
                            tileGameMgr_1.tileGameMgr.Instance.targetPos = this.roleAni.worldPosition;
                            tileGameMgr_1.tileGameMgr.Instance.spine = this.roleAni.getComponent(cc_4.sp.Skeleton);
                            tileGameMgr_1.tileGameMgr.Instance.removeAnims = this.removeAnis;
                            _a = tileGameMgr_1.tileGameMgr.Instance;
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getTilesGameRemoveAnimPrefabPath(), BundleConfig_1.default.instance.guiBundle.name)];
                        case 1:
                            _a.removeAnimNode = _d.sent();
                            _b = tileGameMgr_1.tileGameMgr.Instance;
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getTilesGameFlyPrefabPath(), BundleConfig_1.default.instance.guiBundle.name)];
                        case 2:
                            _b.flyNode = _d.sent();
                            maxLength = 0;
                            maxYlength = 10;
                            for (_i = 0, _c = table.layers; _i < _c.length; _i++) {
                                layer = _c[_i];
                                if (layer.length >= maxYlength) {
                                    maxLength = 9;
                                }
                                if (maxLength < layer[0].length)
                                    maxLength = layer[0].length;
                            }
                            // oops.logB(maxLength, "宽多少：");
                            if (maxLength >= 10) {
                                ViewUtil_1.ViewUtil.getChildByName("layers", this.node).scale = new cc_2.Vec3(0.75, 0.75, 0.75);
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.height = 59.25;
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.width = 75;
                            }
                            else if (maxLength >= 9) {
                                ViewUtil_1.ViewUtil.getChildByName("layers", this.node).scale = new cc_2.Vec3(0.85, 0.85, 0.85);
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.height = 67.15;
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.width = 85;
                            }
                            else if (maxLength >= 8) {
                                ViewUtil_1.ViewUtil.getChildByName("layers", this.node).scale = new cc_2.Vec3(0.9, 0.9, 0.9);
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.height = 71.1;
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.width = 90;
                            }
                            else {
                                ViewUtil_1.ViewUtil.getChildByName("layers", this.node).scale = new cc_2.Vec3(1, 1, 1);
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.height = 79;
                                tileGameMgr_1.tileGameMgr.Instance.tileWH.width = 100;
                            }
                            return [4 /*yield*/, this.removeAllTiles()];
                        case 3:
                            _d.sent();
                            return [4 /*yield*/, this.generateTiles(table)];
                        case 4:
                            _d.sent();
                            tileGameMgr_1.tileGameMgr.Instance.fallingAnim = false;
                            ViewUtil_1.ViewUtil.setNodeActiveByName("jump", this.node, false);
                            tileGameMgr_1.tileGameMgr.Instance.setGrayNode();
                            this.initSettingBtns();
                            this.initLoseBtns();
                            this.initWinBtns();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**初始化设置界面 */
        tileGame_1.prototype.initSettingBtns = function (on) {
            var _a, _b, _c, _d;
            if (on === void 0) { on = true; }
            var activeNode = ViewUtil_1.ViewUtil.getChildByName("pausePanel", this.panels);
            if (on) {
                (_a = ViewUtil_1.ViewUtil.getChildByName("home", activeNode)) === null || _a === void 0 ? void 0 : _a.on("click", this.homeEvent, this);
                (_b = ViewUtil_1.ViewUtil.getChildByName("restart", activeNode)) === null || _b === void 0 ? void 0 : _b.on("click", this.restartEvent, this);
            }
            else {
                (_c = ViewUtil_1.ViewUtil.getChildByName("home", activeNode)) === null || _c === void 0 ? void 0 : _c.off("click", this.homeEvent, this);
                (_d = ViewUtil_1.ViewUtil.getChildByName("restart", activeNode)) === null || _d === void 0 ? void 0 : _d.off("click", this.restartEvent, this);
            }
        };
        /**返回游戏机界面 */
        tileGame_1.prototype.homeEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    HttpPost_1.HttpPost.instance.getMiniGame(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var gameTime;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    gameTime = Oops_1.oops.timer.getServerTime() - this.startTime;
                                    SdkPlatform_1.SdkPlatform.tilegame_end(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, gameTime, 2);
                                    return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.TileGameHome, data)];
                                case 1:
                                    _a.sent();
                                    Oops_1.oops.gui.removeByNode(this.node, true);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        /**继续游戏 */
        tileGame_1.prototype.continueEvent = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var activeNode = ViewUtil_1.ViewUtil.getChildByName("pausePanel", this.panels);
            this.panels.active = false;
            activeNode.active = false;
        };
        /**重开游戏 */
        tileGame_1.prototype.restartEvent = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var gameTime = Oops_1.oops.timer.getServerTime() - this.startTime;
            SdkPlatform_1.SdkPlatform.tilegame_end(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, gameTime, 2);
            if (SingletonModuleComp_1.smc.account.AccountModel.power <= 0) {
                this.showBuyToolPanel(4);
                return;
            }
            var vo = new DataObject_1.TileGameVo(4, 1);
            HttpPost_1.HttpPost.instance.expendProp(vo, function (data) { return __awaiter(_this, void 0, void 0, function () {
                var activeNode;
                return __generator(this, function (_a) {
                    SingletonModuleComp_1.smc.account.AccountModel.power--;
                    this.init();
                    this.panels.active = false;
                    activeNode = ViewUtil_1.ViewUtil.getChildByName("pausePanel", this.panels);
                    activeNode.active = false;
                    return [2 /*return*/];
                });
            }); });
        };
        /**初始化设置界面 */
        tileGame_1.prototype.initLoseBtns = function (on) {
            var _a, _b;
            if (on === void 0) { on = true; }
            var activeNode = ViewUtil_1.ViewUtil.getChildByName("losePanel", this.panels);
            if (on) {
                (_a = ViewUtil_1.ViewUtil.getChildByName("continue", activeNode)) === null || _a === void 0 ? void 0 : _a.on("click", this.loseEvent, this);
            }
            else {
                (_b = ViewUtil_1.ViewUtil.getChildByName("continue", activeNode)) === null || _b === void 0 ? void 0 : _b.off("click", this.loseEvent, this);
            }
        };
        tileGame_1.prototype.loseEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var activeNode;
                var _this = this;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    activeNode = ViewUtil_1.ViewUtil.getChildByName("losePanel", this.panels);
                    HttpPost_1.HttpPost.instance.getMiniGame(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.panels.active = false;
                                    activeNode.active = false;
                                    return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.TileGameHome, data)];
                                case 1:
                                    _a.sent();
                                    Oops_1.oops.gui.removeByNode(this.node, true);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        /**初始化设置界面 */
        tileGame_1.prototype.initWinBtns = function (on) {
            var _a, _b;
            if (on === void 0) { on = true; }
            var activeNode = ViewUtil_1.ViewUtil.getChildByName("winPanel", this.panels);
            if (on) {
                (_a = ViewUtil_1.ViewUtil.getChildByName("continue", activeNode)) === null || _a === void 0 ? void 0 : _a.on("click", this.winEvent, this);
            }
            else {
                (_b = ViewUtil_1.ViewUtil.getChildByName("continue", activeNode)) === null || _b === void 0 ? void 0 : _b.off("click", this.winEvent, this);
            }
        };
        tileGame_1.prototype.winEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var activeNode;
                var _this = this;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    activeNode = ViewUtil_1.ViewUtil.getChildByName("winPanel", this.panels);
                    HttpPost_1.HttpPost.instance.getMiniGame(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step == 19) {
                                        SingletonModuleComp_1.smc.guide.GuideView.next();
                                    }
                                    this.panels.active = false;
                                    activeNode.active = false;
                                    return [4 /*yield*/, Oops_1.oops.gui.openAsync(GameUIConfig_1.UIID.TileGameHome, data)];
                                case 1:
                                    _a.sent();
                                    Oops_1.oops.gui.removeByNode(this.node, true);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        };
        /**刷新数量 */
        tileGame_1.prototype.RefreshTileTotalNum = function () {
            if (this.levelNode.isValid)
                ViewUtil_1.ViewUtil.setLabelStringByName("leftNum", this.levelNode, tileGameMgr_1.tileGameMgr.Instance.totalCount + "");
        };
        tileGame_1.prototype.removeAllTiles = function () {
            return __awaiter(this, void 0, void 0, function () {
                var layers, _i, _a, i, _b, _c, i;
                return __generator(this, function (_d) {
                    layers = ViewUtil_1.ViewUtil.getChildByName("layers", this.node);
                    for (_i = 0, _a = layers.children; _i < _a.length; _i++) {
                        i = _a[_i];
                        i.destroy();
                    }
                    for (_b = 0, _c = this.pilePosParent.getComponentsInChildren(tile_1.tile); _b < _c.length; _b++) {
                        i = _c[_b];
                        i.node.destroy();
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**生成块 */
        tileGame_1.prototype.generateTiles = function (table) {
            return __awaiter(this, void 0, void 0, function () {
                var layerNodes, layerPromises, allNodes;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tileGameMgr_1.tileGameMgr.Instance.layers = table.layers;
                            tileGameMgr_1.tileGameMgr.Instance.maskLen = table.maskLen || 0;
                            if (table.mergeicon) {
                                tileGameMgr_1.tileGameMgr.Instance.mergeicons = table.mergeicon;
                            }
                            tileGameMgr_1.tileGameMgr.Instance.setTotalNum();
                            tileGameMgr_1.tileGameMgr.Instance.setColors(table.uniqueTiles, 24);
                            tileGameMgr_1.tileGameMgr.Instance.setTypes();
                            layerNodes = [];
                            layerPromises = table.layers.map(function (layer, i) { return __awaiter(_this, void 0, void 0, function () {
                                var layerNode;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getTilesGameLayerPrefabPath(), BundleConfig_1.default.instance.guiBundle.name)];
                                        case 1:
                                            layerNode = _b.sent();
                                            layerNode.parent = ViewUtil_1.ViewUtil.getChildByName("layers", this.node);
                                            layerNodes.push(layerNode.getComponent(tilesLayer_1.tilesLayer));
                                            layerNode.position = (0, cc_1.v3)(layerNode.position).add((0, cc_1.v3)(0, 1300));
                                            return [4 /*yield*/, ((_a = layerNode.getComponent(tilesLayer_1.tilesLayer)) === null || _a === void 0 ? void 0 : _a.init(layer, i))];
                                        case 2:
                                            _b.sent();
                                            return [2 /*return*/, layerNode];
                                    }
                                });
                            }); });
                            return [4 /*yield*/, Promise.all(layerPromises)];
                        case 1:
                            allNodes = _a.sent();
                            tileGameMgr_1.tileGameMgr.Instance.allLayoutNode = allNodes;
                            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.LoadingOut);
                            this.isJump = true;
                            return [4 /*yield*/, this.playGameStartAnim()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**异步播放掉落动画 */
        tileGame_1.prototype.playGameStartAnim = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var waitTime, _i, _a, i, _b, i_1, j;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        waitTime = tileGameMgr_1.tileGameMgr.Instance.initTime / tileGameMgr_1.tileGameMgr.Instance.totalCount;
                                        _i = 0, _a = tileGameMgr_1.tileGameMgr.Instance.tilesDivByLayer;
                                        _c.label = 1;
                                    case 1:
                                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                                        i = _a[_i];
                                        _b = 0, i_1 = i;
                                        _c.label = 2;
                                    case 2:
                                        if (!(_b < i_1.length)) return [3 /*break*/, 5];
                                        j = i_1[_b];
                                        if (tileGameMgr_1.tileGameMgr.Instance.isJump) {
                                            return [2 /*return*/, resolve()];
                                        }
                                        return [4 /*yield*/, j.playFallDown(waitTime)];
                                    case 3:
                                        _c.sent();
                                        _c.label = 4;
                                    case 4:
                                        _b++;
                                        return [3 /*break*/, 2];
                                    case 5:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 6:
                                        this.scheduleOnce(resolve, 0.35);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        };
        /**撤回 */
        tileGame_1.prototype.withdraw = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (tileGameMgr_1.tileGameMgr.Instance.fallingAnim || tileGameMgr_1.tileGameMgr.Instance.usingTool) {
                return;
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 <= 0) {
                this.showBuyToolPanel(1);
                return;
            }
            if (tileGameMgr_1.tileGameMgr.Instance.isAni)
                return;
            this.backTile();
        };
        /**
         * 获取道具
         */
        tileGame_1.prototype.getTool = function (ev, type) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.showBuyToolPanel(parseInt(type));
        };
        /**
         * 看广告撤回
         */
        tileGame_1.prototype.showAds = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var activeNode = ViewUtil_1.ViewUtil.getChildByName("losePanel", this.panels);
            this.panels.active = false;
            activeNode.active = false;
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.TileGameProp2, function () {
                Oops_1.oops.audio.resumeAll();
                if (!tileGameMgr_1.tileGameMgr.Instance.canFlyBackToPos()) {
                    return;
                }
                tileGameMgr_1.tileGameMgr.Instance.flyBackToPos();
            }, function () {
                _this.panels.active = true;
                activeNode.active = true;
            });
        };
        /**
         * 撤回
         */
        tileGame_1.prototype.backTile = function () {
            if (!tileGameMgr_1.tileGameMgr.Instance.canFlyBackToPos()) {
                return;
            }
            tileGameMgr_1.tileGameMgr.Instance.usingTool = true;
            tileGameMgr_1.tileGameMgr.Instance.timeTool = Oops_1.oops.timer.getServerTime();
            HttpPost_1.HttpPost.instance.expendProp(new DataObject_1.TileGameVo(1), function () {
                tileGameMgr_1.tileGameMgr.Instance.flyBackToPos();
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop1--;
                tileGameMgr_1.tileGameMgr.Instance.usingTool = false;
            });
        };
        /**
         * 提示
         */
        tileGame_1.prototype.prompt = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            if (tileGameMgr_1.tileGameMgr.Instance.fallingAnim) {
                                return [2 /*return*/];
                            }
                            if (SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 <= 0) {
                                this.showBuyToolPanel(2);
                                return [2 /*return*/];
                            }
                            if (tileGameMgr_1.tileGameMgr.Instance.usingTool)
                                return [2 /*return*/];
                            tileGameMgr_1.tileGameMgr.Instance.usingTool = true;
                            tileGameMgr_1.tileGameMgr.Instance.timeTool = Oops_1.oops.timer.getServerTime();
                            // if (await tileGameMgr.Instance.getRandomTilePrompt()) {
                            //     smc.account.AccountModel.vm.prop2--;
                            //     HttpPost.instance.expendProp(new TileGameVo(2));
                            // }
                            return [4 /*yield*/, this.promptTile()];
                        case 1:
                            // if (await tileGameMgr.Instance.getRandomTilePrompt()) {
                            //     smc.account.AccountModel.vm.prop2--;
                            //     HttpPost.instance.expendProp(new TileGameVo(2));
                            // }
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        tileGame_1.prototype.promptTile = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            if (!tileGameMgr_1.tileGameMgr.Instance.checkGameEnd()) {
                                resolve(true);
                            }
                            HttpPost_1.HttpPost.instance.expendProp(new DataObject_1.TileGameVo(2), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop2--;
                                            return [4 /*yield*/, tileGameMgr_1.tileGameMgr.Instance.getRandomTilePrompt()];
                                        case 1:
                                            _a.sent();
                                            resolve(true);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        })];
                });
            });
        };
        /**
         * 洗牌
         */
        tileGame_1.prototype.shuffle = function (event) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (tileGameMgr_1.tileGameMgr.Instance.fallingAnim || tileGameMgr_1.tileGameMgr.Instance.usingTool) {
                return;
            }
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 <= 0) {
                this.showBuyToolPanel(3);
                return;
            }
            tileGameMgr_1.tileGameMgr.Instance.usingTool = true;
            tileGameMgr_1.tileGameMgr.Instance.timeTool = Oops_1.oops.timer.getServerTime();
            HttpPost_1.HttpPost.instance.expendProp(new DataObject_1.TileGameVo(3), function () {
                tileGameMgr_1.tileGameMgr.Instance.shuffle();
                tileGameMgr_1.tileGameMgr.Instance.usingTool = false;
                SingletonModuleComp_1.smc.account.AccountModel.vm.prop3--;
            });
        };
        /**打开设置界面 */
        tileGame_1.prototype.openSettingPanel = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.panels.active = true;
            ViewUtil_1.ViewUtil.setNodeActiveByName("pausePanel", this.panels, true);
        };
        /**加pile数量 */
        tileGame_1.prototype.addPileNum = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //看广告
            SdkPlatform_1.SdkPlatform.showAds(DataObject_1.AdRewardType.TileGameAddPos, function () {
                tileGameMgr_1.tileGameMgr.Instance.maxPileNum++;
                ViewUtil_1.ViewUtil.setNodeActiveByName("st_icon_bg_2", _this.node, false);
            });
        };
        /**显示胜利 */
        tileGame_1.prototype.showWin = function () {
            var _this = this;
            Oops_1.oops.audio.stopAll();
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_MergeSuccess);
            var guide_id = 0;
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step < 20) {
                guide_id = 20;
            }
            this.isRequest = true;
            var key = StringUtil_1.StringUtil.guid();
            this.scheduleOnce(function () {
                if (_this.isRequest == true) {
                    HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.tileGameError, extra: { errInfo: "小游戏无法结算错误", info: tileGameMgr_1.tileGameMgr.Instance.totalCount, key: key, level: SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel } });
                }
            }, 2);
            HttpPost_1.HttpPost.instance.upMiniGame(guide_id, new DataObject_1.TileGameVo(1), SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, function (data) {
                HttpPost_1.HttpPost.instance.eventReport({ event: EventReport_1.EVENT_REPORT.tileGameError, extra: { errInfo: "小游戏结算正常", info: tileGameMgr_1.tileGameMgr.Instance.totalCount, key: key, level: SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel } });
                _this.panels.active = true;
                _this.isRequest = false;
                var activeNode = ViewUtil_1.ViewUtil.setNodeActiveByName("winPanel", _this.panels, true);
                var mergeRewardTable = new TileRewardData_1.TileRewardData();
                mergeRewardTable.getData();
                var bfTable = new TileRewardData_1.TileRewardData();
                bfTable.init(mergeRewardTable.id - 1);
                ViewUtil_1.ViewUtil.getChildByName("passNumRichText", activeNode).getComponent(cc_2.RichText).string = Oops_1.oops.language.getLangByID("TileGame.winDes", SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel);
                SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel++;
                var gameTime = Oops_1.oops.timer.getServerTime() - _this.startTime;
                SdkPlatform_1.SdkPlatform.tilegame_end(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, gameTime, 1);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bubble", activeNode, SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel > mergeRewardTable.pointCondition);
                ViewUtil_1.ViewUtil.setNodeActiveByName("light", activeNode, SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel > mergeRewardTable.pointCondition);
                var bfCondition = 0;
                if (mergeRewardTable.id - 1 > 0) {
                    var bfTable_1 = new TileRewardData_1.TileRewardData();
                    bfTable_1.init(mergeRewardTable.id - 1);
                    bfCondition = bfTable_1.pointCondition;
                }
                ViewUtil_1.ViewUtil.getChildByName("pro", activeNode).getComponent(cc_2.Sprite).fillRange = (SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel - bfCondition - 1) / (mergeRewardTable.pointCondition - bfCondition);
                ViewUtil_1.ViewUtil.getChildByName("giftNum", activeNode).getComponent(cc_2.Label).string = "".concat(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel - 1, "/").concat(mergeRewardTable.pointCondition);
                //更新数据
                DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
            });
        };
        /**显示失败 */
        tileGame_1.prototype.showLose = function () {
            Oops_1.oops.audio.stopAll();
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_MergeFail);
            var gameTime = Oops_1.oops.timer.getServerTime() - this.startTime;
            SdkPlatform_1.SdkPlatform.tilegame_end(SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, gameTime, 2);
            this.panels.active = true;
            ViewUtil_1.ViewUtil.setNodeActiveByName("losePanel", this.panels, true);
            SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp2);
        };
        /**显示购买界面 */
        tileGame_1.prototype.showBuyToolPanel = function (id) {
            var _this = this;
            ViewUtil_1.ViewUtil.getChildByName("adBtn", this.buyPanel).off("click", this.btnReward, this);
            ViewUtil_1.ViewUtil.getChildByName("buyBtn", this.buyPanel).off("click", this.btnReward, this);
            var itemId = id + 1;
            this.playAdFlag = false;
            this.buyPanel.active = true;
            var toolNode = ViewUtil_1.ViewUtil.getChildByName("toolType", this.buyPanel);
            ViewUtil_1.ViewUtil.setSingleSpriteFrame(toolNode, GameResPath_1.GameResPath.getToolTypeSpfPath(id), BundleConfig_1.default.instance.guiBundle.name);
            /**读取的表数据 */
            var globalTable = null;
            /**读取的当前道具的回复次数 */
            var thisTimes = null;
            this.btnCb = function () {
                var vo = new DataObject_1.TileGameVo(itemId, 1);
                if (_this.needNum && _this.needNum > SingletonModuleComp_1.smc.account.AccountModel.vm.jewel) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { type: DataObject_1.JumpTipType.diamond, closeView: GameUIConfig_1.UIID.TileGame });
                    return;
                }
                HttpPost_1.HttpPost.instance.upMiniGame(0, vo, SingletonModuleComp_1.smc.account.AccountModel.vm.tileGameLevel, function (data) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Drop);
                    SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                    switch (itemId) {
                        case 2:
                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop1 = data.numerical;
                            _this.data.revocationTimes++;
                            break;
                        case 3:
                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop2 = data.numerical;
                            _this.data.promptTimes++;
                            break;
                        case 4:
                            SingletonModuleComp_1.smc.account.AccountModel.vm.prop3 = data.numerical;
                            _this.data.shuffleTimes++;
                            break;
                        case 5:
                            SingletonModuleComp_1.smc.account.AccountModel.power = data.numerical;
                            _this.data.powerTimes++;
                            break;
                        default:
                            break;
                    }
                    _this.buyPanel.active = false;
                });
            };
            ViewUtil_1.ViewUtil.getChildByName("adBtn", this.buyPanel).on("click", this.btnReward, this);
            ViewUtil_1.ViewUtil.getChildByName("buyBtn", this.buyPanel).on("click", this.btnReward, this);
            switch (itemId) {
                case 2:
                    globalTable = new GlobalData_1.GlobalData(5);
                    thisTimes = this.data.revocationTimes;
                    break;
                case 3:
                    globalTable = new GlobalData_1.GlobalData(5);
                    thisTimes = this.data.promptTimes;
                    break;
                case 4:
                    globalTable = new GlobalData_1.GlobalData(5);
                    thisTimes = this.data.shuffleTimes;
                    break;
                case 5:
                    globalTable = new GlobalData_1.GlobalData(4);
                    thisTimes = this.data.powerTimes;
                    break;
                default:
                    break;
            }
            var data = globalTable.value.split("|");
            if (thisTimes < parseInt(data[0])) {
                //todo显示广告
                this.playAdFlag = true;
                switch (itemId) {
                    case 2:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp1);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.TileGameProp1;
                        break;
                    case 3:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp2);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.TileGameProp2;
                        break;
                    case 4:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.TileGameProp3);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.TileGameProp3;
                        break;
                    case 5:
                        SdkPlatform_1.SdkPlatform.ad_button_show(DataObject_1.AdRewardType.Power);
                        this.nowPlayAdFlag = DataObject_1.AdRewardType.Power;
                        break;
                    default:
                        break;
                }
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.ADRewardDes"));
                ViewUtil_1.ViewUtil.setLabelStringByName("getTimes", this.buyPanel, "".concat(parseInt(data[0]) - thisTimes, "/").concat(data[0]));
                this.needNum = 0;
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("buyBtn", this.buyPanel, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("adBtn", this.buyPanel, false);
                var nums = data[1].split("-");
                var needNum = parseInt(nums[0]) + parseInt(nums[1]) * (thisTimes - parseInt(data[0]));
                this.needNum = needNum;
                ViewUtil_1.ViewUtil.setLabelStringByName("des", this.buyPanel, Oops_1.oops.language.getLangByID("TileGame.DiamondDes", needNum));
                ViewUtil_1.ViewUtil.setLabelStringByName("needNum", this.buyPanel, "x".concat(needNum));
            }
        };
        tileGame_1.prototype.btnReward = function () {
            var _this = this;
            if (this.playAdFlag) {
                //看广告
                SdkPlatform_1.SdkPlatform.showAds(this.nowPlayAdFlag, function () {
                    _this.btnCb && _this.btnCb();
                });
            }
            else {
                this.btnCb && this.btnCb();
            }
        };
        //跳过动画
        tileGame_1.prototype.jumpTween = function () {
            if (!this.isJump) {
                return;
            }
            if (tileGameMgr_1.tileGameMgr.Instance.isJump) {
                return;
            }
            tileGameMgr_1.tileGameMgr.Instance.isJump = true;
            cc_3.Tween.stopAllByTag(100);
            var waitTime = tileGameMgr_1.tileGameMgr.Instance.initTime / tileGameMgr_1.tileGameMgr.Instance.totalCount;
            for (var _i = 0, _a = tileGameMgr_1.tileGameMgr.Instance.tilesDivByLayer; _i < _a.length; _i++) {
                var i = _a[_i];
                for (var _b = 0, i_2 = i; _b < i_2.length; _b++) {
                    var j = i_2[_b];
                    j.notPlayFallDown();
                }
            }
        };
        return tileGame_1;
    }(_classSuper));
    __setFunctionName(_classThis, "tileGame");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pilePosParent_decorators = [property(cc_2.Node)];
        _levelNode_decorators = [property(cc_2.Node)];
        _panels_decorators = [property(cc_2.Node)];
        _buyPanel_decorators = [property(cc_2.Node)];
        _animParrentNode_decorators = [property(cc_2.Node)];
        _roleAni_decorators = [property(cc_2.Node)];
        _removeAnis_decorators = [property(cc_4.sp.Skeleton)];
        __esDecorate(null, null, _pilePosParent_decorators, { kind: "field", name: "pilePosParent", static: false, private: false, access: { has: function (obj) { return "pilePosParent" in obj; }, get: function (obj) { return obj.pilePosParent; }, set: function (obj, value) { obj.pilePosParent = value; } }, metadata: _metadata }, _pilePosParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _levelNode_decorators, { kind: "field", name: "levelNode", static: false, private: false, access: { has: function (obj) { return "levelNode" in obj; }, get: function (obj) { return obj.levelNode; }, set: function (obj, value) { obj.levelNode = value; } }, metadata: _metadata }, _levelNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _panels_decorators, { kind: "field", name: "panels", static: false, private: false, access: { has: function (obj) { return "panels" in obj; }, get: function (obj) { return obj.panels; }, set: function (obj, value) { obj.panels = value; } }, metadata: _metadata }, _panels_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _buyPanel_decorators, { kind: "field", name: "buyPanel", static: false, private: false, access: { has: function (obj) { return "buyPanel" in obj; }, get: function (obj) { return obj.buyPanel; }, set: function (obj, value) { obj.buyPanel = value; } }, metadata: _metadata }, _buyPanel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _animParrentNode_decorators, { kind: "field", name: "animParrentNode", static: false, private: false, access: { has: function (obj) { return "animParrentNode" in obj; }, get: function (obj) { return obj.animParrentNode; }, set: function (obj, value) { obj.animParrentNode = value; } }, metadata: _metadata }, _animParrentNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleAni_decorators, { kind: "field", name: "roleAni", static: false, private: false, access: { has: function (obj) { return "roleAni" in obj; }, get: function (obj) { return obj.roleAni; }, set: function (obj, value) { obj.roleAni = value; } }, metadata: _metadata }, _roleAni_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _removeAnis_decorators, { kind: "field", name: "removeAnis", static: false, private: false, access: { has: function (obj) { return "removeAnis" in obj; }, get: function (obj) { return obj.removeAnis; }, set: function (obj, value) { obj.removeAnis = value; } }, metadata: _metadata }, _removeAnis_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        tileGame = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return tileGame = _classThis;
}();
exports.tileGame = tileGame;
