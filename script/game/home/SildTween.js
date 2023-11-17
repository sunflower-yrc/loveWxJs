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
exports.SildTween = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var cc_6 = require("cc");
var cc_7 = require("cc");
var ccclass = cc_7._decorator.ccclass, property = cc_7._decorator.property;
var SildTween = function () {
    var _classDecorators = [ccclass('SildTween')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_7.Component;
    var _instanceExtraInitializers = [];
    var _sildType_decorators;
    var _sildType_initializers = [];
    var _leftPosx_decorators;
    var _leftPosx_initializers = [];
    var _layW_decorators;
    var _layW_initializers = [];
    var _rightPosx_decorators;
    var _rightPosx_initializers = [];
    var _allW_decorators;
    var _allW_initializers = [];
    var _showBg_decorators;
    var _showBg_initializers = [];
    var _isLeft_decorators;
    var _isLeft_initializers = [];
    var _lay_decorators;
    var _lay_initializers = [];
    var SildTween = _classThis = /** @class */ (function (_super) {
        __extends(SildTween_1, _super);
        function SildTween_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sildType = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _sildType_initializers, 1));
            _this.leftPosx = __runInitializers(_this, _leftPosx_initializers, 0);
            _this.layW = __runInitializers(_this, _layW_initializers, 0);
            _this.rightPosx = __runInitializers(_this, _rightPosx_initializers, 0);
            _this.allW = __runInitializers(_this, _allW_initializers, 0);
            _this.showBg = __runInitializers(_this, _showBg_initializers, null);
            _this.isLeft = __runInitializers(_this, _isLeft_initializers, false);
            _this.lay = __runInitializers(_this, _lay_initializers, null);
            _this.leftX = null;
            _this.rightX = null;
            return _this;
        }
        SildTween_1.prototype.sildTween = function () {
            var _this = this;
            this.setX();
            if (this.sildType == 1) {
                this.sildType = 2;
                if (this.isLeft) {
                    this.showBg.active = false;
                    this.node.getComponent(cc_4.Sprite).enabled = true;
                }
                (0, cc_1.tween)(this.node).to(0.2, { position: new cc_5.Vec3(this.rightX, 0, 0) }).call(function () {
                    if (!_this.isLeft) {
                        _this.showBg.active = true;
                        _this.node.getComponent(cc_4.Sprite).enabled = false;
                    }
                }).start();
            }
            else {
                this.sildType = 1;
                if (!this.isLeft) {
                    this.showBg.active = false;
                    this.node.getComponent(cc_4.Sprite).enabled = true;
                }
                (0, cc_1.tween)(this.node).to(0.2, { position: new cc_5.Vec3(this.leftX, 0, 0) }).call(function () {
                    if (_this.isLeft) {
                        _this.showBg.active = true;
                        _this.node.getComponent(cc_4.Sprite).enabled = false;
                    }
                }).start();
            }
        };
        SildTween_1.prototype.setX = function () {
            if (this.isLeft) {
                this.leftX = this.leftPosx;
                if (this.lay.height > this.layW) {
                    this.rightX = this.leftPosx + this.allW * 2;
                    // this.lay.getComponent(Layout)!.verticalDirection = 0;
                }
                else {
                    this.rightX = this.leftPosx + this.allW + 10;
                    // this.lay.getComponent(Layout)!.verticalDirection = 1;
                }
            }
            else {
                this.rightX = this.rightPosx;
                if (this.lay.height > this.layW) {
                    this.leftX = this.rightPosx - this.allW * 2;
                    // this.lay.getComponent(Layout)!.verticalDirection = 0;
                }
                else {
                    this.leftX = this.rightPosx - this.allW - 10;
                    // this.lay.getComponent(Layout)!.verticalDirection = 1;
                }
            }
        };
        return SildTween_1;
    }(_classSuper));
    __setFunctionName(_classThis, "SildTween");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _sildType_decorators = [property(cc_6.CCInteger)];
        _leftPosx_decorators = [property(cc_6.CCInteger)];
        _layW_decorators = [property(cc_6.CCInteger)];
        _rightPosx_decorators = [property(cc_6.CCInteger)];
        _allW_decorators = [property(cc_6.CCInteger)];
        _showBg_decorators = [property(cc_7.Node)];
        _isLeft_decorators = [property(cc_2.CCBoolean)];
        _lay_decorators = [property(cc_3.UITransform)];
        __esDecorate(null, null, _sildType_decorators, { kind: "field", name: "sildType", static: false, private: false, access: { has: function (obj) { return "sildType" in obj; }, get: function (obj) { return obj.sildType; }, set: function (obj, value) { obj.sildType = value; } }, metadata: _metadata }, _sildType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftPosx_decorators, { kind: "field", name: "leftPosx", static: false, private: false, access: { has: function (obj) { return "leftPosx" in obj; }, get: function (obj) { return obj.leftPosx; }, set: function (obj, value) { obj.leftPosx = value; } }, metadata: _metadata }, _leftPosx_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _layW_decorators, { kind: "field", name: "layW", static: false, private: false, access: { has: function (obj) { return "layW" in obj; }, get: function (obj) { return obj.layW; }, set: function (obj, value) { obj.layW = value; } }, metadata: _metadata }, _layW_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightPosx_decorators, { kind: "field", name: "rightPosx", static: false, private: false, access: { has: function (obj) { return "rightPosx" in obj; }, get: function (obj) { return obj.rightPosx; }, set: function (obj, value) { obj.rightPosx = value; } }, metadata: _metadata }, _rightPosx_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _allW_decorators, { kind: "field", name: "allW", static: false, private: false, access: { has: function (obj) { return "allW" in obj; }, get: function (obj) { return obj.allW; }, set: function (obj, value) { obj.allW = value; } }, metadata: _metadata }, _allW_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _showBg_decorators, { kind: "field", name: "showBg", static: false, private: false, access: { has: function (obj) { return "showBg" in obj; }, get: function (obj) { return obj.showBg; }, set: function (obj, value) { obj.showBg = value; } }, metadata: _metadata }, _showBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isLeft_decorators, { kind: "field", name: "isLeft", static: false, private: false, access: { has: function (obj) { return "isLeft" in obj; }, get: function (obj) { return obj.isLeft; }, set: function (obj, value) { obj.isLeft = value; } }, metadata: _metadata }, _isLeft_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lay_decorators, { kind: "field", name: "lay", static: false, private: false, access: { has: function (obj) { return "lay" in obj; }, get: function (obj) { return obj.lay; }, set: function (obj, value) { obj.lay = value; } }, metadata: _metadata }, _lay_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SildTween = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SildTween = _classThis;
}();
exports.SildTween = SildTween;
