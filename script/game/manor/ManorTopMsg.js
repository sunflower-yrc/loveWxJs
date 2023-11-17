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
exports.ManorTopMsg = void 0;
var cc_1 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var ManorTopMsg = function () {
    var _classDecorators = [ccclass('ManorTopMsg')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _msgLabel_decorators;
    var _msgLabel_initializers = [];
    var _moveSpeed_decorators;
    var _moveSpeed_initializers = [];
    var ManorTopMsg = _classThis = /** @class */ (function (_super) {
        __extends(ManorTopMsg_1, _super);
        function ManorTopMsg_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.msgLabel = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _msgLabel_initializers, null)); //跑马灯label
            _this.block = false; //开关
            _this.moveSpeed = __runInitializers(_this, _moveSpeed_initializers, 1.5);
            _this.lockPosX = 0;
            return _this;
        }
        ManorTopMsg_1.prototype.onEnable = function () {
            this.msgLabel.setPosition(135, this.msgLabel.position.y);
        };
        ManorTopMsg_1.prototype.init = function (str) {
            this.msgLabel.getComponent(cc_1.Label).string = str;
            this.msgLabel.getComponent(cc_1.Label).updateRenderData(true);
            this.lockPosX = -128 - this.msgLabel.getComponent(cc_1.UITransform).width;
            this.block = true;
        };
        ManorTopMsg_1.prototype.update = function () {
            if (this.block) {
                if (this.msgLabel.position.x > this.lockPosX)
                    this.msgLabel.setPosition(this.msgLabel.position.x - this.moveSpeed, this.msgLabel.position.y);
                else
                    this.msgLabel.setPosition(135, this.msgLabel.position.y);
            }
        };
        return ManorTopMsg_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorTopMsg");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _msgLabel_decorators = [property(cc_1.Node)];
        _moveSpeed_decorators = [property(Number)];
        __esDecorate(null, null, _msgLabel_decorators, { kind: "field", name: "msgLabel", static: false, private: false, access: { has: function (obj) { return "msgLabel" in obj; }, get: function (obj) { return obj.msgLabel; }, set: function (obj, value) { obj.msgLabel = value; } }, metadata: _metadata }, _msgLabel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moveSpeed_decorators, { kind: "field", name: "moveSpeed", static: false, private: false, access: { has: function (obj) { return "moveSpeed" in obj; }, get: function (obj) { return obj.moveSpeed; }, set: function (obj, value) { obj.moveSpeed = value; } }, metadata: _metadata }, _moveSpeed_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorTopMsg = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorTopMsg = _classThis;
}();
exports.ManorTopMsg = ManorTopMsg;
