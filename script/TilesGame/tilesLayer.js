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
exports.tilesLayer = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../game/common/bundle/BundleConfig");
var GameResPath_1 = require("../game/common/config/GameResPath");
var SingletonModuleComp_1 = require("../game/common/ecs/SingletonModuleComp");
var GuideViewItem_1 = require("../game/guide/view/GuideViewItem");
var tile_1 = require("./tile");
var tileGameMgr_1 = require("./tileGameMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var tilesLayer = function () {
    var _classDecorators = [ccclass('tilesLayer')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var tilesLayer = _classThis = /** @class */ (function (_super) {
        __extends(tilesLayer_1, _super);
        function tilesLayer_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.zIdx = 0;
            // group: Array<Array<Node>> = [];
            _this.nameIdx = 0;
            return _this;
            // /** 层掉落 */
            // async fallDown() {
            //     return new Promise<void>(async (resolve) => {
            //         tween(this.node).by(0.2, { position: v3(0, -1000) }).call(() => {
            //             // if (i === children.length - 1) {
            //             // }
            //             resolve();
            //             // for (const i of this.node.children) {
            //             //     await this.playFallDown(i);
            //             // }
            //         }).start();
            //         // resolve();
            //         // const Promises: Promise<void>[] = [];
            //         // for (const i of this.node.children) {
            //         //     Promises.push(this.playFallDown(i));
            //         // }
            //         // await Promise.all(Promises)
            //     });
            // }
            // /**节点掉落 */
            // async playFallDown(node: Node) {
            //     return new Promise<void>((resolve) => {
            //         this.scheduleOnce(resolve, 0.2)
            //         node.position = v3(node.position).add(v3(0, 1000));
            //         tween(node).by(0.5, { position: v3(0, -1000) }).call(() => {
            //             // if (i === children.length - 1) {
            //             // }
            //         }).start();
            //     });
            // }
        }
        tilesLayer_1.prototype.init = function (layer, zIdx) {
            return __awaiter(this, void 0, void 0, function () {
                var layout, row1, tileNodePromises, _loop_1, j;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // this.node.active = false;
                            this.zIdx = zIdx;
                            layout = this.getComponent(cc_1.Layout);
                            row1 = layer[0];
                            layout.constraintNum = row1.length;
                            tileNodePromises = [];
                            _loop_1 = function (j) {
                                var row = layer[j];
                                var _loop_2 = function (k) {
                                    var tileType = row[k];
                                    var tileNodePromise = ViewUtil_1.ViewUtil.createPrefabNodeAsyncWithBundle(GameResPath_1.GameResPath.getTilesGameItemPrefabPath(), BundleConfig_1.default.instance.guiBundle.name)
                                        .then(function (tileNode) {
                                        tileNode.parent = _this.node;
                                        // this.group[j].push(tileNode);
                                        tileNode.name = _this.nameIdx + "";
                                        _this.nameIdx++;
                                        tileNode.layer = cc_1.Layers.Enum.UI_2D;
                                        var Tile = tileNode.getComponent(tile_1.tile);
                                        if (tileType === 0) {
                                            Tile.justPadding();
                                        }
                                        else {
                                            var num = void 0;
                                            if (tileGameMgr_1.tileGameMgr.Instance.mergeicons && !SingletonModuleComp_1.smc.account.AccountModel.isGuideOver) {
                                                num = tileGameMgr_1.tileGameMgr.Instance.mergeicons[zIdx][j][k];
                                                if (zIdx == 3) {
                                                    Oops_1.oops.logB(SingletonModuleComp_1.smc.account.AccountModel.guideStep, "步数");
                                                    Tile.addComponent(GuideViewItem_1.GuideViewItem).step.push(tileGameMgr_1.tileGameMgr.Instance.guideStepList.shift());
                                                }
                                            }
                                            else {
                                                num = tileGameMgr_1.tileGameMgr.Instance.getRandomColor();
                                            }
                                            var type = tileGameMgr_1.tileGameMgr.Instance.getRandomType();
                                            Tile.init(num, zIdx, k, j, type, tileGameMgr_1.tileGameMgr.Instance);
                                        }
                                        return tileNode;
                                    });
                                    tileNodePromises.push(tileNodePromise);
                                };
                                // this.group[j] = [];
                                for (var k = 0; k < row.length; k++) {
                                    _loop_2(k);
                                }
                            };
                            for (j = 0; j < layer.length; j++) {
                                _loop_1(j);
                            }
                            return [4 /*yield*/, Promise.all(tileNodePromises)];
                        case 1:
                            _a.sent();
                            this.getComponent(cc_1.UITransform).width = (100 * row1.length);
                            layout.updateLayout(true);
                            layout.enabled = false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        return tilesLayer_1;
    }(_classSuper));
    __setFunctionName(_classThis, "tilesLayer");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        tilesLayer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return tilesLayer = _classThis;
}();
exports.tilesLayer = tilesLayer;
