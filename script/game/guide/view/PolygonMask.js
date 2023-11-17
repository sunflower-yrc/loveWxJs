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
exports.PolygonMask = void 0;
/*
 * @Author: dgflash
 * @Date: 2022-03-23 10:31:06
 * @LastEditors: dgflash
 * @LastEditTime: 2023-05-12 15:20:45
 */
var cc = require("cc");
var cc_1 = require("cc");
var GlobalConfig_1 = require("../../tools/GlobalConfig");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property, executeInEditMode = cc_1._decorator.executeInEditMode, requireComponent = cc_1._decorator.requireComponent;
/** 多边形遮罩编辑 */
var PolygonMask = function () {
    var _classDecorators = [ccclass("PolygonMask"), executeInEditMode, requireComponent([cc.PolygonCollider2D, cc.Mask])];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var PolygonMask = _classThis = /** @class */ (function (_super) {
        __extends(PolygonMask_1, _super);
        function PolygonMask_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 遮罩组件 */
            _this.mask = null;
            /** 用于编辑器中自定义位置的拖拽操作，如果不用物理引擎时，可考虑换成一个数据结构 */
            _this.polygon = null;
            //偏移量
            _this.offset = -1;
            //缩放的速度
            _this.step = GlobalConfig_1.GlobalConfig.frameRate == 30 ? 90 : 45;
            return _this;
        }
        PolygonMask_1.prototype.onLoad = function () {
            var _this = this;
            this.mask = this.getComponent(cc.Mask);
            this.polygon = this.getComponent(cc.PolygonCollider2D);
            if (this.mask.type !== cc.Mask.Type.GRAPHICS_STENCIL) {
                cc.error("PolygonMask: mask type must be graphics_stencil");
                return;
            }
            // 监听 point 修改
            // @ts-ignore
            var old_value = this.polygon["_points"];
            Object.defineProperty(this.polygon, "_points", {
                get: function () { return old_value; },
                set: function (new_value) {
                    old_value = new_value;
                    // 更新遮罩
                    _this.draw();
                },
            });
        };
        PolygonMask_1.prototype.resetScale = function () {
            this.offset = -1;
        };
        PolygonMask_1.prototype.setScale = function () {
            if (this.offset == -1) {
                this.offset = 500;
            }
        };
        /** 绘制遮罩 */
        PolygonMask_1.prototype.draw = function () {
            if (this.mask.type !== cc.Mask.Type.GRAPHICS_STENCIL) {
                return;
            }
            // @ts-ignore
            // var g = this.mask.subComp as cc.Graphics;
            // g.clear();
            // g.moveTo(
            // 	this.polygon.points[0].x,
            // 	this.polygon.points[0].y
            // );
            // for (let k_n = 1; k_n < this.polygon.points.length; ++k_n) {
            // 	g.lineTo(
            // 		this.polygon.points[k_n].x,
            // 		this.polygon.points[k_n].y
            // 	);
            // }
            // g.close();
            // g.stroke();
            // g.fill();
            var graphics = this.mask.subComp;
            graphics.clear();
            var radius = 20;
            // 绘制圆角方形
            var left = this.polygon.points[3].x - this.offset;
            var right = this.polygon.points[1].x + this.offset;
            var top = this.polygon.points[3].y + this.offset;
            var bottom = this.polygon.points[1].y - this.offset;
            var width = Math.abs(right - left);
            var height = Math.abs(top - bottom);
            graphics.roundRect(left, bottom, width, height, radius);
            graphics.close();
            graphics.stroke();
            graphics.fill();
            this.offset -= this.step;
            if (this.offset <= 0) {
                this.offset = 0;
            }
        };
        return PolygonMask_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PolygonMask");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PolygonMask = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PolygonMask = _classThis;
}();
exports.PolygonMask = PolygonMask;
