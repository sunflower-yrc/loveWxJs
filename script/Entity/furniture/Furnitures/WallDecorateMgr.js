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
exports.WallDecorateMgr = void 0;
var cc_1 = require("cc");
var FurnitureMgr_1 = require("../FurnitureMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var WallDecorateMgr = function () {
    var _classDecorators = [ccclass('WallDecorateMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureMgr_1.FurnitureMgr;
    var _instanceExtraInitializers = [];
    var _leftNode_decorators;
    var _leftNode_initializers = [];
    var _rightNode_decorators;
    var _rightNode_initializers = [];
    var _xPos_decorators;
    var _xPos_initializers = [];
    var _yPos_decorators;
    var _yPos_initializers = [];
    var _turnable_decorators;
    var _turnable_initializers = [];
    var _twoFace_decorators;
    var _twoFace_initializers = [];
    var WallDecorateMgr = _classThis = /** @class */ (function (_super) {
        __extends(WallDecorateMgr_1, _super);
        function WallDecorateMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.leftNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _leftNode_initializers, null));
            _this.rightNode = __runInitializers(_this, _rightNode_initializers, null);
            _this.xPos = __runInitializers(_this, _xPos_initializers, 0);
            _this.yPos = __runInitializers(_this, _yPos_initializers, 0);
            _this.turnable = __runInitializers(_this, _turnable_initializers, true);
            _this.twoFace = __runInitializers(_this, _twoFace_initializers, true);
            return _this;
            // init(data: FurnitureVO) {
            //     super.init(data);
            //     // this.location = data.location;
            // }
            // //被点击
            // clicked(extend: boolean = true) {
            //     super.clicked(extend);
            //     this.getComponentInChildren(Sprite)!.enabled = true;
            //     if (extend) {
            //         const sp = FloorsMgr.Instance.GetFloorByPos(this.settlePos)!.floorTileSp.spriteFrame;
            //         if (sp) {
            //             this.getActiveNode()!.getComponent(Sprite)!.spriteFrame = sp;
            //             return;
            //         }
            //     }
            //     ViewUtil.setSingleSpriteFrame(this.getActiveNode()!, GameResPath.getFurniturePutIconsPath(this.itemId + ""), BundleConfig.instance.guiBundle.name);
            // }
            // /**获取polygon */
            // get polygon(): PolygonCollider2D {
            //     return this.getActiveNode()!.getComponent(PolygonCollider2D)!;
            // }
            // updateBlocks() {
            //     const { x, y } = this.settlePos;
            //     let pos: SettlePos = { x, y };
            //     if (x == 1 || y == 1)
            //         this.blockPos = [pos];
            // }
        }
        return WallDecorateMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "WallDecorateMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _leftNode_decorators = [property(cc_1.Node)];
        _rightNode_decorators = [property(cc_1.Node)];
        _xPos_decorators = [property(cc_1.CCInteger)];
        _yPos_decorators = [property(cc_1.CCInteger)];
        _turnable_decorators = [property(cc_1.CCBoolean)];
        _twoFace_decorators = [property(cc_1.CCBoolean)];
        __esDecorate(null, null, _leftNode_decorators, { kind: "field", name: "leftNode", static: false, private: false, access: { has: function (obj) { return "leftNode" in obj; }, get: function (obj) { return obj.leftNode; }, set: function (obj, value) { obj.leftNode = value; } }, metadata: _metadata }, _leftNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rightNode_decorators, { kind: "field", name: "rightNode", static: false, private: false, access: { has: function (obj) { return "rightNode" in obj; }, get: function (obj) { return obj.rightNode; }, set: function (obj, value) { obj.rightNode = value; } }, metadata: _metadata }, _rightNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _xPos_decorators, { kind: "field", name: "xPos", static: false, private: false, access: { has: function (obj) { return "xPos" in obj; }, get: function (obj) { return obj.xPos; }, set: function (obj, value) { obj.xPos = value; } }, metadata: _metadata }, _xPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _yPos_decorators, { kind: "field", name: "yPos", static: false, private: false, access: { has: function (obj) { return "yPos" in obj; }, get: function (obj) { return obj.yPos; }, set: function (obj, value) { obj.yPos = value; } }, metadata: _metadata }, _yPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _turnable_decorators, { kind: "field", name: "turnable", static: false, private: false, access: { has: function (obj) { return "turnable" in obj; }, get: function (obj) { return obj.turnable; }, set: function (obj, value) { obj.turnable = value; } }, metadata: _metadata }, _turnable_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _twoFace_decorators, { kind: "field", name: "twoFace", static: false, private: false, access: { has: function (obj) { return "twoFace" in obj; }, get: function (obj) { return obj.twoFace; }, set: function (obj, value) { obj.twoFace = value; } }, metadata: _metadata }, _twoFace_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WallDecorateMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WallDecorateMgr = _classThis;
}();
exports.WallDecorateMgr = WallDecorateMgr;
