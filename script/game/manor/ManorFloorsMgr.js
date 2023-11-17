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
exports.ManorFloorsMgr = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var FurnitureParentNode_1 = require("../../Entity/furniture/FurnitureParentNode");
var PlantItem_1 = require("./PlantItem");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var ManorFloorsMgr = function () {
    var _classDecorators = [ccclass('ManorFloorsMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _PlantMgrs_decorators;
    var _PlantMgrs_initializers = [];
    var _posParant_decorators;
    var _posParant_initializers = [];
    var _roomSize_decorators;
    var _roomSize_initializers = [];
    var _furnitureParentMgrs_decorators;
    var _furnitureParentMgrs_initializers = [];
    var ManorFloorsMgr = _classThis = /** @class */ (function (_super) {
        __extends(ManorFloorsMgr_1, _super);
        function ManorFloorsMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.PlantMgrs = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _PlantMgrs_initializers, []));
            _this.posParant = __runInitializers(_this, _posParant_initializers, []);
            _this.roomSize = __runInitializers(_this, _roomSize_initializers, []);
            _this.furnitureParentMgrs = __runInitializers(_this, _furnitureParentMgrs_initializers, []);
            return _this;
        }
        return ManorFloorsMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorFloorsMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _PlantMgrs_decorators = [property(PlantItem_1.PlantItem)];
        _posParant_decorators = [property(cc_2.Node)];
        _roomSize_decorators = [property(cc_1.Vec2)];
        _furnitureParentMgrs_decorators = [property(FurnitureParentNode_1.FurnitureParentMgr)];
        __esDecorate(null, null, _PlantMgrs_decorators, { kind: "field", name: "PlantMgrs", static: false, private: false, access: { has: function (obj) { return "PlantMgrs" in obj; }, get: function (obj) { return obj.PlantMgrs; }, set: function (obj, value) { obj.PlantMgrs = value; } }, metadata: _metadata }, _PlantMgrs_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _posParant_decorators, { kind: "field", name: "posParant", static: false, private: false, access: { has: function (obj) { return "posParant" in obj; }, get: function (obj) { return obj.posParant; }, set: function (obj, value) { obj.posParant = value; } }, metadata: _metadata }, _posParant_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roomSize_decorators, { kind: "field", name: "roomSize", static: false, private: false, access: { has: function (obj) { return "roomSize" in obj; }, get: function (obj) { return obj.roomSize; }, set: function (obj, value) { obj.roomSize = value; } }, metadata: _metadata }, _roomSize_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _furnitureParentMgrs_decorators, { kind: "field", name: "furnitureParentMgrs", static: false, private: false, access: { has: function (obj) { return "furnitureParentMgrs" in obj; }, get: function (obj) { return obj.furnitureParentMgrs; }, set: function (obj, value) { obj.furnitureParentMgrs = value; } }, metadata: _metadata }, _furnitureParentMgrs_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorFloorsMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorFloorsMgr = _classThis;
}();
exports.ManorFloorsMgr = ManorFloorsMgr;
