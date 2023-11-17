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
exports.FurnitureUpDown = void 0;
var cc_1 = require("cc");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var FurnitureEnum_1 = require("./FurnitureEnum");
var cc_5 = require("cc");
var JsonUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
/**
 * 用于移动墙饰的UI
 * @date 2023-9-14
 */
var FurnitureUpDown = function () {
    var _classDecorators = [ccclass('FurnitureUpDown')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _btUp_decorators;
    var _btUp_initializers = [];
    var _btDown_decorators;
    var _btDown_initializers = [];
    var _ani_decorators;
    var _ani_initializers = [];
    var FurnitureUpDown = _classThis = /** @class */ (function (_super) {
        __extends(FurnitureUpDown_1, _super);
        function FurnitureUpDown_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.btUp = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _btUp_initializers, null));
            _this.btDown = __runInitializers(_this, _btDown_initializers, null);
            _this.ani = __runInitializers(_this, _ani_initializers, null);
            return _this;
        }
        FurnitureUpDown_1.prototype.onLoad = function () {
            FurnitureUpDown.polygonData = JsonUtil_1.JsonUtil.get("polygon");
            this.onListen();
            this.updateFace();
        };
        FurnitureUpDown_1.prototype.onEnable = function () {
            this.updateFace();
        };
        FurnitureUpDown_1.prototype.updateFace = function (direction) {
            var item = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
            if (direction == null)
                direction = item === null || item === void 0 ? void 0 : item.direction;
            if (direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                this.showBtnLeft(this.btUp);
                this.showBtnLeft(this.btDown);
            }
            else {
                this.showBtnLeft(this.btUp, false);
                this.showBtnLeft(this.btDown, false);
            }
        };
        FurnitureUpDown_1.prototype.showBtnLeft = function (btDown, arg1) {
            if (arg1 === void 0) { arg1 = true; }
            var leftNode = btDown.getChildByName('left');
            var rightNode = btDown.getChildByName('right');
            leftNode && (leftNode.active = arg1);
            rightNode && (rightNode.active = !arg1);
        };
        FurnitureUpDown_1.prototype.handlerStopAni = function (e) {
            this.ani.stop();
            e.propagationStopped = true;
        };
        FurnitureUpDown_1.prototype.handlerPlayAni = function (e) {
            this.ani.play();
            e.propagationStopped = true;
        };
        FurnitureUpDown_1.prototype.btn_up = function (e, param) {
            var item = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
            if (item) {
                item.offsetY += (+param);
                item.updateActiveNodePos();
                if (this.checkIsOutWall(item)) {
                    item.offsetY -= (+param);
                    item.updateActiveNodePos();
                }
            }
        };
        FurnitureUpDown_1.prototype.btn_down = function (e, param) {
            var item = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
            if (item) {
                item.offsetY -= (+param);
                item.updateActiveNodePos();
                if (this.checkIsOutWall(item)) {
                    item.offsetY += (+param);
                    item.updateActiveNodePos();
                }
            }
        };
        FurnitureUpDown_1.prototype.checkIsOutWall = function (item) {
            var _a, _b, _c;
            var isCollided;
            var wallNode = this.getWallNode(item);
            var wdPoints = wallNode && ((_a = wallNode.getComponent(cc_3.PolygonCollider2D)) === null || _a === void 0 ? void 0 : _a.worldPoints);
            var tmpNode = item.getActiveNode();
            if (tmpNode && wdPoints) {
                var polyComp = tmpNode.getComponent(cc_3.PolygonCollider2D);
                var spfName = (_c = (_b = tmpNode.getComponent(cc_5.Sprite)) === null || _b === void 0 ? void 0 : _b.spriteFrame) === null || _c === void 0 ? void 0 : _c.name;
                polyComp && spfName && (polyComp.points = FurnitureUpDown.polygonData[spfName]);
                var worldPoints = polyComp === null || polyComp === void 0 ? void 0 : polyComp.worldPoints;
                var vertexDown1 = (0, cc_4.v2)(wdPoints[0].x, wdPoints[0].y);
                var vertexDown2 = (0, cc_4.v2)(wdPoints[3].x, wdPoints[3].y);
                if (worldPoints)
                    isCollided = cc_2.Intersection2D.linePolygon(vertexDown1, vertexDown2, worldPoints);
                if (isCollided)
                    return isCollided;
                var vertexTop1 = (0, cc_4.v2)(wdPoints[1].x, wdPoints[1].y);
                var vertexTop2 = (0, cc_4.v2)(wdPoints[2].x, wdPoints[2].y);
                if (worldPoints)
                    isCollided = cc_2.Intersection2D.linePolygon(vertexTop1, vertexTop2, worldPoints);
                if (isCollided)
                    return isCollided;
            }
            return isCollided;
        };
        FurnitureUpDown_1.prototype.getWallNode = function (item) {
            var roomMgr = GameMgr_1.GameMgr.Instance.roomMgr;
            var direction = item.direction;
            var _a = item.settlePos, room = _a.room, x = _a.x, y = _a.y;
            var floor = roomMgr.floors[room];
            var wallLeft = floor.getChildByName('wallLeft');
            var wallRight = floor.getChildByName('wallRight');
            var resultNode;
            var FLOOR_SPACE = 8;
            if (direction == FurnitureEnum_1.FurnitureDirectionEnum.Left) {
                if (wallLeft) {
                    var col = Math.floor(x / FLOOR_SPACE);
                    resultNode = wallLeft.children[col];
                }
            }
            else {
                if (wallRight) {
                    var row = Math.floor(y / FLOOR_SPACE);
                    resultNode = wallRight.children[row];
                }
            }
            return resultNode;
        };
        FurnitureUpDown_1.prototype.cancel = function () {
            var item = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
            if (item) {
                item.offsetY = 0;
            }
            GameMgr_1.GameMgr.Instance.clickItem.isEditWallDeco = false;
        };
        FurnitureUpDown_1.prototype.confirm = function () {
            var item = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
            if (item) {
                item.originOffsetY += item.offsetY;
                item.offsetY = 0;
            }
        };
        FurnitureUpDown_1.prototype.btn_cancel = function () {
            this.cancel();
            this.node.active = false;
        };
        FurnitureUpDown_1.prototype.btn_confirm = function () {
            this.confirm();
            this.btn_cancel();
        };
        FurnitureUpDown_1.prototype.onDestroy = function () {
            this.offListen();
        };
        FurnitureUpDown_1.prototype.onListen = function () {
            this.btUp.on(cc_1.Node.EventType.TOUCH_START, this.handlerStopAni, this);
            this.btUp.on(cc_1.Node.EventType.TOUCH_END, this.handlerPlayAni, this);
            this.btDown.on(cc_1.Node.EventType.TOUCH_START, this.handlerStopAni, this);
            this.btDown.on(cc_1.Node.EventType.TOUCH_END, this.handlerPlayAni, this);
        };
        FurnitureUpDown_1.prototype.offListen = function () {
            var _a, _b, _c, _d;
            (_a = ViewUtil_1.ViewUtil.getChildByName("btn_up", this.node)) === null || _a === void 0 ? void 0 : _a.off(cc_1.Node.EventType.TOUCH_START, this.handlerStopAni, this);
            (_b = ViewUtil_1.ViewUtil.getChildByName("btn_up", this.node)) === null || _b === void 0 ? void 0 : _b.off(cc_1.Node.EventType.TOUCH_END, this.handlerPlayAni, this);
            (_c = ViewUtil_1.ViewUtil.getChildByName("btn_down", this.node)) === null || _c === void 0 ? void 0 : _c.off(cc_1.Node.EventType.TOUCH_START, this.handlerStopAni, this);
            (_d = ViewUtil_1.ViewUtil.getChildByName("btn_down", this.node)) === null || _d === void 0 ? void 0 : _d.off(cc_1.Node.EventType.TOUCH_END, this.handlerPlayAni, this);
        };
        return FurnitureUpDown_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FurnitureUpDown");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _btUp_decorators = [property(cc_1.Node)];
        _btDown_decorators = [property(cc_1.Node)];
        _ani_decorators = [property(cc_1.Animation)];
        __esDecorate(null, null, _btUp_decorators, { kind: "field", name: "btUp", static: false, private: false, access: { has: function (obj) { return "btUp" in obj; }, get: function (obj) { return obj.btUp; }, set: function (obj, value) { obj.btUp = value; } }, metadata: _metadata }, _btUp_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btDown_decorators, { kind: "field", name: "btDown", static: false, private: false, access: { has: function (obj) { return "btDown" in obj; }, get: function (obj) { return obj.btDown; }, set: function (obj, value) { obj.btDown = value; } }, metadata: _metadata }, _btDown_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _ani_decorators, { kind: "field", name: "ani", static: false, private: false, access: { has: function (obj) { return "ani" in obj; }, get: function (obj) { return obj.ani; }, set: function (obj, value) { obj.ani = value; } }, metadata: _metadata }, _ani_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FurnitureUpDown = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FurnitureUpDown = _classThis;
}();
exports.FurnitureUpDown = FurnitureUpDown;
