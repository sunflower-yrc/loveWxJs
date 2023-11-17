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
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property, disallowMultiple = cc_1._decorator.disallowMultiple, menu = cc_1._decorator.menu, executionOrder = cc_1._decorator.executionOrder;
var cc_1 = require("cc");
var ButtonPlus = function () {
    var _classDecorators = [ccclass, disallowMultiple(), menu('ButtonPlus'), executionOrder(-5002)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Button;
    var _instanceExtraInitializers = [];
    var _openContinuous_decorators;
    var _openContinuous_initializers = [];
    var _continuousTime_decorators;
    var _continuousTime_initializers = [];
    var _openLongPress_decorators;
    var _openLongPress_initializers = [];
    var _longPressTime_decorators;
    var _longPressTime_initializers = [];
    var _openMove_decorators;
    var _openMove_initializers = [];
    var _moveParent_decorators;
    var _moveParent_initializers = [];
    var ButtonPlus = _classThis = /** @class */ (function (_super) {
        __extends(ButtonPlus_1, _super);
        function ButtonPlus_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.openContinuous = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _openContinuous_initializers, true));
            _this.continuousTime = __runInitializers(_this, _continuousTime_initializers, 1);
            // false表示可以点击
            _this.continuous = false;
            // 定时器
            _this._continuousTimer = null;
            // 长按触发
            _this.openLongPress = __runInitializers(_this, _openLongPress_initializers, false);
            // 触发时间
            _this.longPressTime = __runInitializers(_this, _longPressTime_initializers, 1);
            _this.longPressFlag = false;
            // 长按移动触发
            _this.openMove = __runInitializers(_this, _openMove_initializers, false);
            _this.moveParent = __runInitializers(_this, _moveParent_initializers, null);
            _this.longPressTimer = null;
            _this._pressed = false;
            _this.moveNode = null;
            return _this;
        }
        ButtonPlus_1.prototype.onEnable = function () {
            this.continuous = false;
            _super.prototype.onEnable.call(this);
        };
        ButtonPlus_1.prototype.onDisable = function () {
            if (this._continuousTimer) {
                clearTimeout(this._continuousTimer);
                this._continuousTimer = null;
            }
            if (this.longPressTimer) {
                clearTimeout(this.longPressTimer);
                this.longPressTimer = null;
            }
            _super.prototype.onDisable.call(this);
        };
        /** 重写 */
        ButtonPlus_1.prototype._onTouchBegan = function (event) {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            if (this.openLongPress && !this.longPressFlag) { // 开启长按
                if (this.longPressTimer)
                    clearTimeout(this.longPressTimer);
                var that_1 = this;
                this.longPressTimer = setTimeout(function () {
                    // 还在触摸中 触发事件
                    if (that_1["_pressed"]) {
                        that_1.node.emit('longclickStart', event, that_1);
                        that_1.longPressFlag = true;
                        that_1.addMoveNode();
                    }
                }.bind(this), this.longPressTime * 1000);
            }
            this["_pressed"] = true;
            this["_updateState"]();
            event.propagationImmediateStopped = true;
        };
        ButtonPlus_1.prototype._onTouchEnded = function (event) {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            if (this["_pressed"] && this.longPressFlag) {
                this.removeMoveNode();
                this.node.emit('longclickEnd', event);
                this.longPressFlag = false;
            }
            else if (this["_pressed"] && !this.continuous) {
                this.continuous = this.openContinuous ? true : false;
                cc_1.EventHandler.emitEvents(this.clickEvents, event);
                this.node.emit('click', event);
                if (this.openContinuous) {
                    var that_2 = this;
                    this._continuousTimer = setTimeout(function () {
                        that_2.continuous = false;
                    }.bind(this), this.continuousTime * 1000);
                }
            }
            this["_pressed"] = false;
            this["_updateState"]();
            event.propagationImmediateStopped = true;
        };
        ButtonPlus_1.prototype._onTouchCancel = function (event) {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            if (this["_pressed"] && this.longPressFlag) {
                this.removeMoveNode();
                this.node.emit('longclickEnd', event);
                this.longPressFlag = false;
            }
            this["_pressed"] = false;
            this["_updateState"]();
        };
        ButtonPlus_1.prototype._onTouchMove = function (event) {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            if (this["_pressed"] && this.longPressFlag && this.openMove) {
                this.node.emit('move', event);
                this.onMoveNode(event);
            }
            event.propagationImmediateStopped = true;
        };
        /** 添加点击事件 */
        ButtonPlus_1.prototype.addClick = function (callback, target) {
            this.node.off('click');
            this.node.on('click', callback, target);
        };
        /** 添加一个长按事件 */
        ButtonPlus_1.prototype.addLongClick = function (startFunc, endFunc, target) {
            this.node.off('longclickStart');
            this.node.off('longclickEnd');
            this.node.on('longclickStart', startFunc, target);
            this.node.on('longclickEnd', endFunc, target);
        };
        ButtonPlus_1.prototype.addMoveNode = function () {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            if (this["_pressed"] && this.longPressFlag && this.openMove && this.moveParent) {
                this.moveNode = (0, cc_1.instantiate)(this.node);
                this.moveNode.parent = this.moveParent;
                this.moveNode.setWorldPosition(new cc_1.Vec3(this.node.worldPosition.x - 10, this.node.worldPosition.y + 10, 0));
            }
        };
        ButtonPlus_1.prototype.setMoveParent = function (p) {
            this.moveParent = p;
        };
        ButtonPlus_1.prototype.removeMoveNode = function () {
            if (this.moveNode) {
                this.moveNode.parent = null;
                this.moveNode = null;
            }
        };
        ButtonPlus_1.prototype.onMoveNode = function (event) {
            if (this.moveNode) {
                this.moveNode.setWorldPosition(new cc_1.Vec3(event.getUILocation().x, event.getUILocation().y, 0));
            }
        };
        ButtonPlus_1.prototype.addMoveClick = function (moveFunc, target) {
            this.node.off('move');
            this.node.on('move', moveFunc, target);
        };
        return ButtonPlus_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ButtonPlus");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _openContinuous_decorators = [property({ tooltip: "屏蔽连续点击" })];
        _continuousTime_decorators = [property({ tooltip: "屏蔽时间, 单位:秒" })];
        _openLongPress_decorators = [property({ tooltip: "是否开启长按事件" })];
        _longPressTime_decorators = [property({ tooltip: "长按时间" })];
        _openMove_decorators = [property({ tooltip: "是否开启长按之后移动功能" })];
        _moveParent_decorators = [property({ type: cc_1.Node, tooltip: "移动节点的父节点" })];
        __esDecorate(null, null, _openContinuous_decorators, { kind: "field", name: "openContinuous", static: false, private: false, access: { has: function (obj) { return "openContinuous" in obj; }, get: function (obj) { return obj.openContinuous; }, set: function (obj, value) { obj.openContinuous = value; } }, metadata: _metadata }, _openContinuous_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _continuousTime_decorators, { kind: "field", name: "continuousTime", static: false, private: false, access: { has: function (obj) { return "continuousTime" in obj; }, get: function (obj) { return obj.continuousTime; }, set: function (obj, value) { obj.continuousTime = value; } }, metadata: _metadata }, _continuousTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _openLongPress_decorators, { kind: "field", name: "openLongPress", static: false, private: false, access: { has: function (obj) { return "openLongPress" in obj; }, get: function (obj) { return obj.openLongPress; }, set: function (obj, value) { obj.openLongPress = value; } }, metadata: _metadata }, _openLongPress_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _longPressTime_decorators, { kind: "field", name: "longPressTime", static: false, private: false, access: { has: function (obj) { return "longPressTime" in obj; }, get: function (obj) { return obj.longPressTime; }, set: function (obj, value) { obj.longPressTime = value; } }, metadata: _metadata }, _longPressTime_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _openMove_decorators, { kind: "field", name: "openMove", static: false, private: false, access: { has: function (obj) { return "openMove" in obj; }, get: function (obj) { return obj.openMove; }, set: function (obj, value) { obj.openMove = value; } }, metadata: _metadata }, _openMove_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moveParent_decorators, { kind: "field", name: "moveParent", static: false, private: false, access: { has: function (obj) { return "moveParent" in obj; }, get: function (obj) { return obj.moveParent; }, set: function (obj, value) { obj.moveParent = value; } }, metadata: _metadata }, _moveParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ButtonPlus = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ButtonPlus = _classThis;
}();
exports.default = ButtonPlus;
