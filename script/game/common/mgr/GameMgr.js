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
exports.GameMgr = void 0;
var cc_1 = require("cc");
var RoomConfig_1 = require("../../../Entity/room/RoomConfig");
var Singleton_1 = require("../base/Singleton");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../config/GameEvent");
var Collection_1 = require("../../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var DataObject_1 = require("../../tools/DataObject");
var GameUIConfig_1 = require("../config/GameUIConfig");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var GameMgr = function () {
    var _classDecorators = [ccclass('GameMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Singleton_1.default;
    var GameMgr = _classThis = /** @class */ (function (_super) {
        __extends(GameMgr_1, _super);
        function GameMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**点击的物品 */
            _this.clickItem = null;
            /**家具父节点 */
            _this.furnitureParantMgr = null;
            /**地图管理器 */
            _this.mapManager = null;
            //地图移动控制器
            _this.MapClickable = false;
            /**可放置家具（发绿的家具） */
            _this.greenFurniture = null;
            /**家具锁 （不能同时生成多个家具，避免异常） */
            _this.lockSpawnFurniture = false;
            /**只显示主角 */
            _this.justShowGilr = false;
            /**角色列表 */
            _this.nowActiveRole = new Collection_1.Collection();
            /**第一次遍历所有事件 */
            _this.firstCheck = true;
            /**在外 */
            _this.isOutside = true;
            /**当前外出场景Id */
            _this.outSceneID = 1;
            /**获得奖励是否要刷新车状态 */
            _this.checkCar = false;
            /**准备跳转 */
            _this.readyGoto = false;
            /**居中偏移 */
            _this.mapOffsetState = false;
            /**记录当前外出事件数据,外出才有值 */
            _this.outsideEventData = null;
            /**场景是否加载完成 */
            _this.isSceneLoaded = false;
            /**广告加速状态 */
            _this.adsTipType = DataObject_1.AdsTipType.nothing;
            /**超值礼包自动弹出最大次数 */
            _this.valuePackShowTimes = 3;
            /**装扮评分状态 */
            _this.dressScoreStatus = DataObject_1.Score.nothing;
            /**家具评分状态 */
            _this.furnitureScoreStatus = DataObject_1.Score.nothing;
            /**是否是拍照模式？ */
            _this.isTakePhoto = false;
            /**是否已同意用户协议 */
            _this.isPassUser = false;
            /**是否已加载结束 */
            _this.isLoadEnd = false;
            //种树锁
            _this.manorTreeLock = false;
            /**弹窗 */
            _this.tips = [];
            /**玩家是否进入游戏 */
            _this.isEnterGame = false;
            /**升级弹窗是否显示 */
            _this.showLevel = false;
            _this.timeLimitOrder = [];
            //摆放模式
            _this._ConstructionState = false;
            //角色摆放模式
            _this._DragRoleMode = false;
            //宠物摆放模式
            _this._DragPetMode = false;
            //是否是庄园界面
            _this.manorMode = false;
            /**当前车节点 */
            _this.carSpine = null;
            /**当前场景小游戏节点 */
            _this.miniGameNode = null;
            /**触点 */
            _this.clickRayCast = null;
            /**当前场景控制器 */
            _this.sceneMgr = null;
            /**设置位置为之前位置 */
            _this.mapOriginPos = null;
            /**设置缩放比例为之前位置 */
            _this.mapOriginScale = null;
            _this.roomMgr = null;
            //**点击原点位置 */
            _this._originPos = null;
            _this.originIsPlotType = null;
            //**点击原转向 */
            _this.originRotate = null;
            return _this;
        }
        Object.defineProperty(GameMgr_1, "Instance", {
            get: function () {
                return _super.GetInstance.call(this);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameMgr_1.prototype, "ConstructionState", {
            get: function () {
                return this._ConstructionState;
            },
            set: function (value) {
                this._ConstructionState = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameMgr_1.prototype, "DragRoleMode", {
            get: function () {
                return this._DragRoleMode;
            },
            set: function (value) {
                if (value == true) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideHomeUI);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OffBtns);
                }
                if (value == false) {
                    if (this.MapClickable) {
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OnBtns);
                    }
                }
                this._DragRoleMode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameMgr_1.prototype, "DragPetMode", {
            get: function () {
                return this._DragPetMode;
            },
            set: function (value) {
                if (value == true) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideHomeUI);
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OffBtns);
                }
                if (value == false) {
                    if (this.MapClickable) {
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
                        Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OnBtns);
                    }
                }
                this._DragPetMode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GameMgr_1.prototype, "originPos", {
            get: function () {
                return this._originPos;
            },
            set: function (value) {
                // this._nowPos = value;
                this._originPos = value;
                //console.log(value);
            },
            enumerable: false,
            configurable: true
        });
        GameMgr_1.prototype.isPositionValid = function (pos) {
            // 这里添加你的范围限制条件，例如：
            var minX = 1;
            var maxX = RoomConfig_1.RoomConifg.ROW_NUMS;
            var minY = 1;
            var maxY = RoomConfig_1.RoomConifg.ROW_COLUNMS;
            if (pos.x < minX || pos.x > maxX || pos.y < minY || pos.y > maxY) {
                return false;
            }
            return true;
        };
        GameMgr_1.prototype.changeFullView = function () {
            this.showGameAndHome(false);
        };
        GameMgr_1.prototype.showGameAndHome = function (bo) {
            this.sceneMgr && (this.sceneMgr.node.active = bo);
            if (bo) {
                !Oops_1.oops.gui.has(GameUIConfig_1.UIID.Home) && Oops_1.oops.gui.open(GameUIConfig_1.UIID.Home);
            }
            else {
                Oops_1.oops.gui.has(GameUIConfig_1.UIID.Home) && Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Home, false);
            }
        };
        GameMgr_1.prototype.backHome = function () {
            this.showGameAndHome(true);
        };
        return GameMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "GameMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GameMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GameMgr = _classThis;
}();
exports.GameMgr = GameMgr;
