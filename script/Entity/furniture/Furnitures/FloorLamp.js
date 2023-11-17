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
exports.FloorLamp = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../../../game/tools/DataObject");
var FurnitureMgr_1 = require("../FurnitureMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var FloorLamp = function () {
    var _classDecorators = [ccclass('FloorLamp')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureMgr_1.FurnitureMgr;
    var _instanceExtraInitializers = [];
    var _leftNode_decorators;
    var _leftNode_initializers = [];
    var _rightNode_decorators;
    var _rightNode_initializers = [];
    var _leftTNode_decorators;
    var _leftTNode_initializers = [];
    var _rightTNode_decorators;
    var _rightTNode_initializers = [];
    var _xPos_decorators;
    var _xPos_initializers = [];
    var _yPos_decorators;
    var _yPos_initializers = [];
    var _turnable_decorators;
    var _turnable_initializers = [];
    var _interaction_decorators;
    var _interaction_initializers = [];
    var _roleAnimType_decorators;
    var _roleAnimType_initializers = [];
    var FloorLamp = _classThis = /** @class */ (function (_super) {
        __extends(FloorLamp_1, _super);
        function FloorLamp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.leftNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _leftNode_initializers, null));
            _this.rightNode = __runInitializers(_this, _rightNode_initializers, null);
            _this.leftTNode = __runInitializers(_this, _leftTNode_initializers, null);
            _this.rightTNode = __runInitializers(_this, _rightTNode_initializers, null);
            _this.xPos = __runInitializers(_this, _xPos_initializers, 0);
            _this.yPos = __runInitializers(_this, _yPos_initializers, 0);
            _this.turnable = __runInitializers(_this, _turnable_initializers, true);
            _this.interaction = __runInitializers(_this, _interaction_initializers, false);
            // @property()
            // onLoad() {
            //     let pos: SettlePos = { x: this.xPos, y: this.yPos }
            //     const vo = new FurnitureVO(0, "0", this.direction, FurnitureTypeEnum.Furniture, pos, BlockType.NORMAL);
            //     this.init(vo);
            // }
            // init(data: FurnitureVO) {
            //     super.init(data);
            // }
            // get roleExtend(){
            //     this.
            // }
            _this.roleAnimType = __runInitializers(_this, _roleAnimType_initializers, DataObject_1.RoleAnimTypeInspectorEnum.SitIdle);
            return _this;
        }
        // setRoleOnThis(roleOnFurniture: RoleOnFurniture) {
        //     const Nums = this.getComponentsInChildren(RoleOnFurniture)!.length;
        //     roleOnFurniture.node.parent = this.getActiveNode()!.getComponentsInChildren(FurnitureExtend)[Nums].node;
        //     roleOnFurniture.freshRoleState(this.RoleAnim!);
        // }
        /**更新占地面积 */
        FloorLamp_1.prototype.updateBlocks = function () {
            this.blockPos = [this.settlePos];
        };
        return FloorLamp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "FloorLamp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _leftNode_decorators = [property(cc_1.Node)];
        _rightNode_decorators = [property(cc_1.Node)];
        _leftTNode_decorators = [property(cc_1.Node)];
        _rightTNode_decorators = [property(cc_1.Node)];
        _xPos_decorators = [property(cc_1.CCInteger)];
        _yPos_decorators = [property(cc_1.CCInteger)];
        _turnable_decorators = [property(cc_1.CCBoolean)];
        _interaction_decorators = [property(cc_1.CCBoolean)];
        _roleAnimType_decorators = [property({
                type: (0, cc_1.Enum)(DataObject_1.RoleAnimTypeInspectorEnum),
                tooltip: 'Choose the direction of the furniture'
            })];
        __esDecorate(null, null, _leftNode_decorators, { kind: "field", name: "leftNode", static: false, private: false, access: { has: function (obj) { return "leftNode" in obj; }, get: function (obj) { return obj.leftNode; }, set: function (obj, value) { obj.leftNode = value; } }, metadata: _metadata }, _leftNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightNode_decorators, { kind: "field", name: "rightNode", static: false, private: false, access: { has: function (obj) { return "rightNode" in obj; }, get: function (obj) { return obj.rightNode; }, set: function (obj, value) { obj.rightNode = value; } }, metadata: _metadata }, _rightNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _leftTNode_decorators, { kind: "field", name: "leftTNode", static: false, private: false, access: { has: function (obj) { return "leftTNode" in obj; }, get: function (obj) { return obj.leftTNode; }, set: function (obj, value) { obj.leftTNode = value; } }, metadata: _metadata }, _leftTNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightTNode_decorators, { kind: "field", name: "rightTNode", static: false, private: false, access: { has: function (obj) { return "rightTNode" in obj; }, get: function (obj) { return obj.rightTNode; }, set: function (obj, value) { obj.rightTNode = value; } }, metadata: _metadata }, _rightTNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _xPos_decorators, { kind: "field", name: "xPos", static: false, private: false, access: { has: function (obj) { return "xPos" in obj; }, get: function (obj) { return obj.xPos; }, set: function (obj, value) { obj.xPos = value; } }, metadata: _metadata }, _xPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _yPos_decorators, { kind: "field", name: "yPos", static: false, private: false, access: { has: function (obj) { return "yPos" in obj; }, get: function (obj) { return obj.yPos; }, set: function (obj, value) { obj.yPos = value; } }, metadata: _metadata }, _yPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _turnable_decorators, { kind: "field", name: "turnable", static: false, private: false, access: { has: function (obj) { return "turnable" in obj; }, get: function (obj) { return obj.turnable; }, set: function (obj, value) { obj.turnable = value; } }, metadata: _metadata }, _turnable_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _interaction_decorators, { kind: "field", name: "interaction", static: false, private: false, access: { has: function (obj) { return "interaction" in obj; }, get: function (obj) { return obj.interaction; }, set: function (obj, value) { obj.interaction = value; } }, metadata: _metadata }, _interaction_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleAnimType_decorators, { kind: "field", name: "roleAnimType", static: false, private: false, access: { has: function (obj) { return "roleAnimType" in obj; }, get: function (obj) { return obj.roleAnimType; }, set: function (obj, value) { obj.roleAnimType = value; } }, metadata: _metadata }, _roleAnimType_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FloorLamp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FloorLamp = _classThis;
}();
exports.FloorLamp = FloorLamp;
