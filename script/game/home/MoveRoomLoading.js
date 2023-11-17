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
exports.MoveRoomLoading = void 0;
var cc_1 = require("cc");
var BgMove_1 = require("../../comm/BgMove");
var cc_2 = require("cc");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var MoveRoomLoading = function () {
    var _classDecorators = [ccclass('MoveRoomLoading')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _moveSpine_decorators;
    var _moveSpine_initializers = [];
    var _moveBg_decorators;
    var _moveBg_initializers = [];
    var MoveRoomLoading = _classThis = /** @class */ (function (_super) {
        __extends(MoveRoomLoading_1, _super);
        function MoveRoomLoading_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //搬家动画
            _this.moveSpine = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _moveSpine_initializers, null));
            _this.moveBg = __runInitializers(_this, _moveBg_initializers, null);
            _this.time = 0;
            _this.isIdele = false;
            _this.isComplete = false;
            return _this;
        }
        MoveRoomLoading_1.prototype.start = function () {
        };
        MoveRoomLoading_1.prototype.update = function (deltaTime) {
            if (this.isIdele) {
                this.time += deltaTime;
                if (this.isComplete) {
                    this.hideMoveSpine();
                }
            }
        };
        MoveRoomLoading_1.prototype.showMoveSpine = function () {
            this.time = 0;
            // this.node.active = true;
            this.isIdele = true;
            this.moveBg.changeColor(-1);
            var spine = this.moveSpine;
            spine === null || spine === void 0 ? void 0 : spine.setAnimation(0, "idel", true);
        };
        MoveRoomLoading_1.prototype.onLoadEnd = function () {
            this.isComplete = true;
        };
        MoveRoomLoading_1.prototype.hideMoveSpine = function () {
            var _this = this;
            if (this.time < 1) {
                return;
            }
            this.isIdele = false;
            this.isComplete = false;
            var spine = this.moveSpine;
            spine === null || spine === void 0 ? void 0 : spine.setAnimation(0, "complete", false);
            spine === null || spine === void 0 ? void 0 : spine.setCompleteListener(function () {
                _this.node.active = false;
                spine === null || spine === void 0 ? void 0 : spine.setCompleteListener(function () {
                });
            });
        };
        return MoveRoomLoading_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoveRoomLoading");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _moveSpine_decorators = [property(cc_2.sp.Skeleton)];
        _moveBg_decorators = [property(BgMove_1.BgMove)];
        __esDecorate(null, null, _moveSpine_decorators, { kind: "field", name: "moveSpine", static: false, private: false, access: { has: function (obj) { return "moveSpine" in obj; }, get: function (obj) { return obj.moveSpine; }, set: function (obj, value) { obj.moveSpine = value; } }, metadata: _metadata }, _moveSpine_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moveBg_decorators, { kind: "field", name: "moveBg", static: false, private: false, access: { has: function (obj) { return "moveBg" in obj; }, get: function (obj) { return obj.moveBg; }, set: function (obj, value) { obj.moveBg = value; } }, metadata: _metadata }, _moveBg_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoveRoomLoading = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoveRoomLoading = _classThis;
}();
exports.MoveRoomLoading = MoveRoomLoading;
