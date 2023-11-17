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
exports.tile = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../game/common/bundle/BundleConfig");
var DataObject_1 = require("../game/tools/DataObject");
var tileGameMgr_1 = require("./tileGameMgr");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var tile = function () {
    var _classDecorators = [ccclass('tile')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _icon_decorators;
    var _icon_initializers = [];
    var _bg_decorators;
    var _bg_initializers = [];
    var _spine_decorators;
    var _spine_initializers = [];
    var _spine1_decorators;
    var _spine1_initializers = [];
    var tile = _classThis = /** @class */ (function (_super) {
        __extends(tile_1, _super);
        function tile_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tilegameInstance = (__runInitializers(_this, _instanceExtraInitializers), null);
            /**物品id */
            _this.itemId = 0;
            /**z坐标 */
            _this.zIdx = 0;
            _this.x = 0;
            _this.y = 0;
            _this.icon = __runInitializers(_this, _icon_initializers, null);
            _this.bg = __runInitializers(_this, _bg_initializers, null);
            _this.spine = __runInitializers(_this, _spine_initializers, null);
            _this.spine1 = __runInitializers(_this, _spine1_initializers, null);
            _this.isChooese = false;
            /**是否灰色 */
            _this.grayscale = false;
            _this.originPos = null;
            _this.destroyed = false;
            _this.isRemoved = false;
            _this.jumpType = tileGameMgr_1.JumpType.idle;
            _this.type = tileGameMgr_1.TileType.nomal;
            _this.endY = null;
            return _this;
        }
        /**只是占位 */
        tile_1.prototype.justPadding = function () {
            var _a, _b;
            // this.getComponent(Sprite)!.enabled = false;
            this.icon.enabled = false;
            this.bg.enabled = false;
            this.spine.enabled = false;
            (_a = this.getComponent(cc_2.Button)) === null || _a === void 0 ? void 0 : _a.destroy();
            (_b = this.getComponent(tile)) === null || _b === void 0 ? void 0 : _b.destroy();
            // this.getComponent(Sprite)?.destroy();
        };
        /**删除前隐藏 */
        tile_1.prototype.hideTile = function () {
            // this.getComponent(Sprite)!.enabled = false;
            this.icon.enabled = false;
            this.bg.enabled = false;
            this.spine.enabled = false;
        };
        tile_1.prototype.onDestroy = function () {
            this.destroyed = true;
            // super.onDestroy();
        };
        /**
         * 初始化
         * @param id 物品id
         * @param zIdx z轴
         */
        tile_1.prototype.init = function (id, zIdx, x, y, type, tilegameInstance) {
            return __awaiter(this, void 0, void 0, function () {
                var assetUrl;
                var _this = this;
                return __generator(this, function (_a) {
                    this.tilegameInstance = tilegameInstance;
                    this.grayscale = true;
                    this.itemId = id;
                    this.zIdx = zIdx;
                    this.type = type;
                    this.x = x;
                    this.y = y;
                    assetUrl = '';
                    if (this.type == tileGameMgr_1.TileType.mask) {
                        assetUrl = "texture/tilesGame/tiles/st_icon_0";
                        // await ViewUtil.setSingleSpriteFrameByName("sprite", this.node, "texture/tilesGame/tiles/st_icon_0", BundleConfig.instance.guiBundle.name);
                    }
                    else {
                        assetUrl = "texture/tilesGame/tiles/st_icon_".concat(id);
                        // await ViewUtil.setSingleSpriteFrameByName("sprite", this.node, "texture/tilesGame/tiles/st_icon_" + id, BundleConfig.instance.guiBundle.name);
                    }
                    BundleConfig_1.default.instance.guiBundle.load(assetUrl, function (err, sf) {
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("sprite", _this.node, assetUrl, BundleConfig_1.default.instance.guiBundle.name);
                        // this.addAutoReleaseAsset(sf);
                    });
                    this.getComponent(cc_2.Button).enabled = true;
                    if (!tilegameInstance.tilesDivByLayer[zIdx]) {
                        tilegameInstance.tilesDivByLayer[zIdx] = [];
                    }
                    tilegameInstance.tilesDivByLayer[zIdx].push(this);
                    return [2 /*return*/];
                });
            });
        };
        tile_1.prototype.btnTile = function () {
            return __awaiter(this, void 0, void 0, function () {
                var time;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            if (tileGameMgr_1.tileGameMgr.Instance.usingTool) {
                                time = Oops_1.oops.timer.getServerTime() - tileGameMgr_1.tileGameMgr.Instance.timeTool;
                                if (time > 2) {
                                    tileGameMgr_1.tileGameMgr.Instance.usingTool = false;
                                }
                            }
                            if (this.isChooese ||
                                this.grayscale ||
                                this.tilegameInstance.isAni ||
                                this.tilegameInstance.eliminating ||
                                this.tilegameInstance.usingTool ||
                                this.tilegameInstance.pilePosParent.getComponentsInChildren(tile).length >= this.tilegameInstance.maxPileNum)
                                return [2 /*return*/];
                            if (!(this.type == tileGameMgr_1.TileType.mask)) return [3 /*break*/, 2];
                            return [4 /*yield*/, ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("sprite", this.node, "texture/tilesGame/tiles/st_icon_" + this.itemId, BundleConfig_1.default.instance.guiBundle.name)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this.originPos = new cc_2.Vec3(this.node.worldPosition);
                            this.tilegameInstance.isIdle = true;
                            this.tilegameInstance.flyToPos(this.node);
                            this.tilegameInstance.checkEliminatable();
                            this.tilegameInstance.setGrayNode();
                            return [2 /*return*/];
                    }
                });
            });
        };
        tile_1.prototype.reset = function (id) {
            if (id === void 0) { id = this.itemId; }
            this.resetSprite();
        };
        tile_1.prototype.resetSprite = function (isShow) {
            if (isShow === void 0) { isShow = false; }
            if (this.type == tileGameMgr_1.TileType.mask && !isShow) {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("sprite", this.node, "texture/tilesGame/tiles/st_icon_0", BundleConfig_1.default.instance.guiBundle.name);
            }
            else {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("sprite", this.node, "texture/tilesGame/tiles/st_icon_" + this.itemId, BundleConfig_1.default.instance.guiBundle.name);
            }
        };
        /**为了避免循环引用这样处理 */
        tile_1.prototype.remove = function (tileGameMgr, index) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) {
                                _this.isRemoved = true;
                                if (index == 1) {
                                    // if (tileGameMgr.totalCount == 3) {
                                    //     HttpPost.instance.eventReport({ event: EVENT_REPORT.tileGameError, extra: { call: "removeFun" } });
                                    // }
                                    (0, cc_2.tween)(_this.node).delay(0.1).call(function () {
                                        _this.spine.node.active = true;
                                        _this.spine1.node.active = true;
                                    }).start();
                                }
                                var complete = function () {
                                    if (_this.destroyed)
                                        return;
                                    // if (tileGameMgr.totalCount == 3) {
                                    //     HttpPost.instance.eventReport({ event: EVENT_REPORT.tileGameError, extra: { call: "completeFun" } });
                                    // }
                                    _this.destroyed = true;
                                    _this.node.destroy();
                                    tileGameMgr.totalCount--;
                                    var index = tileGameMgr.tilesDivByLayer[_this.zIdx].indexOf(_this);
                                    if (index == -1)
                                        return;
                                    tileGameMgr.tilesDivByLayer[_this.zIdx].splice(index, 1);
                                    // this.destroy();
                                    _this.node.parent = null;
                                    tileGameMgr.nowIdx--;
                                };
                                _this.scheduleOnce(function () {
                                    complete();
                                    resolve();
                                }, 0.45);
                                (0, cc_2.tween)(_this.node)
                                    .delay(0.2)
                                    .call(function () {
                                    _this.hideTile();
                                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_GetThree);
                                })
                                    .delay(0.25)
                                    .call(function () {
                                }).start();
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**设置灰并且不可点击 */
        tile_1.prototype.gray = function (flag) {
            if (flag === void 0) { flag = true; }
            this.grayscale = flag;
            if (!flag) {
                this.bg.color = new cc_2.Color(255, 255, 255);
                ViewUtil_1.ViewUtil.getChildByName("sprite", this.node).getComponent(cc_2.Sprite).color = new cc_2.Color(255, 255, 255);
                // this.node!.getComponent(Sprite)!.color = new Color(255, 255, 255);
            }
            else {
                ViewUtil_1.ViewUtil.getChildByName("sprite", this.node).getComponent(cc_2.Sprite).color = new cc_2.Color(111, 111, 111);
                // this.node!.getComponent(Sprite)!.color = new Color(136, 136, 136);
                this.bg.color = new cc_2.Color(136, 136, 136);
            }
        };
        /**节点掉落 */
        tile_1.prototype.playFallDown = function (waitTime) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            _this.scheduleOnce(resolve, waitTime / 1000);
                            _this.jumpType = tileGameMgr_1.JumpType.running;
                            _this.endY = _this.node.position.y - 1300;
                            (0, cc_2.tween)(_this.node).by(0.25, { position: (0, cc_1.v3)(0, -1330) }, { easing: cc_1.easing.quadIn }).call(function () {
                                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_MergeStar);
                            }).by(0.1, { position: (0, cc_1.v3)(0, 30) }).call(function () {
                                _this.jumpType == tileGameMgr_1.JumpType.end;
                            }).tag(100).start();
                        })];
                });
            });
        };
        /**节点掉落 */
        tile_1.prototype.notPlayFallDown = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.jumpType == tileGameMgr_1.JumpType.running) {
                        this.node.setPosition(this.node.position.x, this.endY);
                        this.jumpType = tileGameMgr_1.JumpType.end;
                    }
                    else if (this.jumpType == tileGameMgr_1.JumpType.idle) {
                        this.node.setPosition(this.node.position.x, this.node.position.y - 1300);
                        this.jumpType = tileGameMgr_1.JumpType.end;
                    }
                    return [2 /*return*/];
                });
            });
        };
        tile_1.prototype.toObject = function () {
            var _a = [this.x, this.y, this.zIdx, this.itemId, this.isChooese, this.destroyed, this.isRemoved, this.type, this.endY], x = _a[0], y = _a[1], zIdx = _a[2], itemId = _a[3], isChooese = _a[4], destroyed = _a[5], isRemoved = _a[6], type = _a[7], endY = _a[8];
            return { x: x, y: y, zIdx: zIdx, itemId: itemId, isChooese: isChooese, destroyed: destroyed, isRemoved: isRemoved, type: type, endY: endY };
        };
        return tile_1;
    }(_classSuper));
    __setFunctionName(_classThis, "tile");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _icon_decorators = [property(cc_2.Sprite)];
        _bg_decorators = [property(cc_2.Sprite)];
        _spine_decorators = [property(cc_1.sp.Skeleton)];
        _spine1_decorators = [property(cc_1.sp.Skeleton)];
        __esDecorate(null, null, _icon_decorators, { kind: "field", name: "icon", static: false, private: false, access: { has: function (obj) { return "icon" in obj; }, get: function (obj) { return obj.icon; }, set: function (obj, value) { obj.icon = value; } }, metadata: _metadata }, _icon_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bg_decorators, { kind: "field", name: "bg", static: false, private: false, access: { has: function (obj) { return "bg" in obj; }, get: function (obj) { return obj.bg; }, set: function (obj, value) { obj.bg = value; } }, metadata: _metadata }, _bg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _spine_decorators, { kind: "field", name: "spine", static: false, private: false, access: { has: function (obj) { return "spine" in obj; }, get: function (obj) { return obj.spine; }, set: function (obj, value) { obj.spine = value; } }, metadata: _metadata }, _spine_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _spine1_decorators, { kind: "field", name: "spine1", static: false, private: false, access: { has: function (obj) { return "spine1" in obj; }, get: function (obj) { return obj.spine1; }, set: function (obj, value) { obj.spine1 = value; } }, metadata: _metadata }, _spine1_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        tile = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return tile = _classThis;
}();
exports.tile = tile;
