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
exports.BgMove = void 0;
var cc_1 = require("cc");
var RandomManager_1 = require("../../../extensions/oops-plugin-framework/assets/core/common/random/RandomManager");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var BgMove = function () {
    var _classDecorators = [ccclass('BgMove')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _leftBgSprite_decorators;
    var _leftBgSprite_initializers = [];
    var _rightBgSprite_decorators;
    var _rightBgSprite_initializers = [];
    var BgMove = _classThis = /** @class */ (function (_super) {
        __extends(BgMove_1, _super);
        function BgMove_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.leftBgSprite = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _leftBgSprite_initializers, null));
            _this.rightBgSprite = __runInitializers(_this, _rightBgSprite_initializers, null);
            _this.bgColors = [new cc_1.Color(178, 238, 247), new cc_1.Color(255, 208, 195), new cc_1.Color(230, 244, 167), new cc_1.Color(247, 238, 131), new cc_1.Color(151, 219, 194), new cc_1.Color(230, 244, 167)];
            _this.starColors = [new cc_1.Color(161, 232, 243), new cc_1.Color(254, 201, 187), new cc_1.Color(223, 240, 151), new cc_1.Color(247, 232, 122), new cc_1.Color(137, 212, 196), new cc_1.Color(223, 240, 151)];
            _this.speed = 1; // 背景滚动速度
            _this.width = 1065;
            _this.leftx = 0;
            _this.lefty = 0;
            _this.rightx = 0;
            _this.righty = 0;
            return _this;
        }
        BgMove_1.prototype.start = function () {
            this.leftx = this.leftBgSprite.node.position.x;
            this.lefty = this.leftBgSprite.node.position.y;
            this.rightx = this.rightBgSprite.node.position.x;
            this.righty = this.rightBgSprite.node.position.y;
        };
        BgMove_1.prototype.update = function (dt) {
            this.leftx -= this.speed * Math.cos(Math.PI / 6);
            this.lefty += this.speed * Math.sin(Math.PI / 6);
            if (this.leftx <= -this.width) {
                this.leftx = this.width;
                this.lefty = 0;
            }
            this.rightx -= this.speed * Math.cos(Math.PI / 6);
            this.righty += this.speed * Math.sin(Math.PI / 6);
            if (this.rightx <= -this.width) {
                this.rightx = this.width;
                this.righty = 0;
            }
            this.leftBgSprite.node.position = new cc_1.Vec3(this.leftx, this.lefty, 1);
            this.rightBgSprite.node.position = new cc_1.Vec3(this.rightx, this.righty, 1);
        };
        BgMove_1.prototype.changeColor = function (index) {
            if (index < 0) {
                index = RandomManager_1.RandomManager.instance.getRandomInt(0, this.bgColors.length, 1);
            }
            this.getComponent(cc_1.Sprite).color = this.bgColors[index];
            this.leftBgSprite.color = this.starColors[index];
            this.rightBgSprite.color = this.starColors[index];
            this.leftBgSprite.getComponentInChildren(cc_1.Sprite).color = this.starColors[index];
            this.rightBgSprite.getComponentInChildren(cc_1.Sprite).color = this.starColors[index];
        };
        return BgMove_1;
    }(_classSuper));
    __setFunctionName(_classThis, "BgMove");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _leftBgSprite_decorators = [property(cc_1.Sprite)];
        _rightBgSprite_decorators = [property(cc_1.Sprite)];
        __esDecorate(null, null, _leftBgSprite_decorators, { kind: "field", name: "leftBgSprite", static: false, private: false, access: { has: function (obj) { return "leftBgSprite" in obj; }, get: function (obj) { return obj.leftBgSprite; }, set: function (obj, value) { obj.leftBgSprite = value; } }, metadata: _metadata }, _leftBgSprite_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightBgSprite_decorators, { kind: "field", name: "rightBgSprite", static: false, private: false, access: { has: function (obj) { return "rightBgSprite" in obj; }, get: function (obj) { return obj.rightBgSprite; }, set: function (obj, value) { obj.rightBgSprite = value; } }, metadata: _metadata }, _rightBgSprite_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BgMove = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BgMove = _classThis;
}();
exports.BgMove = BgMove;
