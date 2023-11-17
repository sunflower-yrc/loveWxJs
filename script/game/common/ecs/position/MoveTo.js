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
exports.MoveToSystem = exports.MoveToComp = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-08-11 16:41:12
 * @LastEditors: dgflash
 * @LastEditTime: 2023-01-19 15:27:24
 */
var cc_1 = require("cc");
var Timer_1 = require("../../../../../../extensions/oops-plugin-framework/assets/core/common/timer/Timer");
var Vec3Util_1 = require("../../../../../../extensions/oops-plugin-framework/assets/core/utils/Vec3Util");
var ECS_1 = require("../../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS");
/** 向目标移动，移动过程中目标位置变化会自动修正移动目标点，直到未修正前移动到目标点停止 */
var MoveToComp = function () {
    var _classDecorators = [ECS_1.ecs.register('MoveTo')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Comp;
    var MoveToComp = _classThis = /** @class */ (function (_super) {
        __extends(MoveToComp_1, _super);
        function MoveToComp_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 移动节点 */
            _this.node = null;
            /** 移动方向 */
            _this.velocity = Vec3Util_1.Vec3Util.zero;
            /** 移动速度（每秒移动的像素距离） */
            _this.speed = 0;
            /** 目标实体ECS编号、目标位置 */
            _this.target = null;
            /** 坐标标（默认本地坐标） */
            _this.ns = cc_1.Node.NodeSpace.LOCAL;
            /** 偏移距离 */
            _this.offset = 0;
            /** 偏移向量 */
            _this.offsetVector = null;
            /** 移动完成回调 */
            _this.onComplete = null;
            /** 距离变化时 */
            _this.onChange = null;
            return _this;
        }
        MoveToComp_1.prototype.reset = function () {
            this.ns = cc_1.Node.NodeSpace.LOCAL;
            this.offset = 0;
            this.target = null;
            this.offsetVector = null;
            this.onComplete = null;
            this.onChange = null;
        };
        return MoveToComp_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MoveToComp");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MoveToComp = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MoveToComp = _classThis;
}();
exports.MoveToComp = MoveToComp;
var VariableMoveToComponent = function () {
    var _classDecorators = [ECS_1.ecs.register('VariableMoveTo')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = ECS_1.ecs.Comp;
    var VariableMoveToComponent = _classThis = /** @class */ (function (_super) {
        __extends(VariableMoveToComponent_1, _super);
        function VariableMoveToComponent_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 延时触发器 */
            _this.timer = new Timer_1.Timer();
            /** 终点备份 */
            _this.end = null;
            return _this;
        }
        VariableMoveToComponent_1.prototype.reset = function () {
            this.end = null;
            this.timer.reset();
        };
        return VariableMoveToComponent_1;
    }(_classSuper));
    __setFunctionName(_classThis, "VariableMoveToComponent");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        VariableMoveToComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VariableMoveToComponent = _classThis;
}();
/** 跟踪移动到目标位置 */
var MoveToSystem = /** @class */ (function (_super) {
    __extends(MoveToSystem, _super);
    function MoveToSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveToSystem.prototype.filter = function () {
        return ECS_1.ecs.allOf(MoveToComp);
    };
    MoveToSystem.prototype.entityEnter = function (e) {
        e.add(VariableMoveToComponent);
    };
    MoveToSystem.prototype.entityRemove = function (e) {
        e.remove(VariableMoveToComponent);
    };
    MoveToSystem.prototype.update = function (e) {
        var _a;
        var move = e.get(MoveToComp);
        var mtv = e.get(VariableMoveToComponent);
        var end;
        console.assert(move.speed > 0, "移动速度必须要大于零");
        if (move.target instanceof cc_1.Node) {
            end = move.ns == cc_1.Node.NodeSpace.WORLD ? move.target.worldPosition : move.target.position;
        }
        else {
            end = move.target;
        }
        // 目标移动后，重计算移动方向与移动到目标点的速度
        if (mtv.end == null || !mtv.end.strictEquals(end)) {
            var target = end.clone();
            if (move.offsetVector) {
                target = target.add(move.offsetVector); // 这里的问题
            }
            // 移动方向与移动数度
            var start = move.ns == cc_1.Node.NodeSpace.WORLD ? move.node.worldPosition : move.node.position;
            move.velocity = Vec3Util_1.Vec3Util.sub(target, start).normalize();
            // 移动时间与目标偏位置计算
            var distance = cc_1.Vec3.distance(start, target) - move.offset;
            (_a = move.onChange) === null || _a === void 0 ? void 0 : _a.call(this);
            if (distance - move.offset <= 0) {
                this.exit(e);
            }
            else {
                mtv.timer.step = distance / move.speed;
                mtv.end = end.clone();
                mtv.target = move.velocity.clone().multiplyScalar(distance).add(start);
            }
        }
        if (move.speed > 0) {
            var trans = Vec3Util_1.Vec3Util.mul(move.velocity, move.speed * this.dt);
            move.node.translate(trans, cc_1.Node.NodeSpace.LOCAL);
        }
        // 移动完成事件
        if (mtv.timer.update(this.dt)) {
            if (move.ns == cc_1.Node.NodeSpace.WORLD)
                move.node.worldPosition = mtv.target;
            else
                move.node.position = mtv.target;
            this.exit(e);
        }
    };
    MoveToSystem.prototype.exit = function (e) {
        var _a;
        var move = e.get(MoveToComp);
        (_a = move.onComplete) === null || _a === void 0 ? void 0 : _a.call(this);
        e.remove(VariableMoveToComponent);
        e.remove(MoveToComp);
    };
    return MoveToSystem;
}(ECS_1.ecs.ComblockSystem));
exports.MoveToSystem = MoveToSystem;
