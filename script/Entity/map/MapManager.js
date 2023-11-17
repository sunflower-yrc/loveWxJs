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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapManager = void 0;
var cc_1 = require("cc");
// import { GameMgr } from '../../game/common/mgr/GameMgr';
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../game/common/mgr/GameMgr");
var FloorMgr_1 = require("../floor/FloorMgr");
var FloorsMgr_1 = require("../floor/FloorsMgr");
var FurnitureEnum_1 = require("../furniture/FurnitureEnum");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var moveDirection;
(function (moveDirection) {
    moveDirection[moveDirection["Left"] = 0] = "Left";
    moveDirection[moveDirection["Right"] = 1] = "Right";
    moveDirection[moveDirection["Top"] = 2] = "Top";
    moveDirection[moveDirection["Bottom"] = 3] = "Bottom";
})(moveDirection || (moveDirection = {}));
var MapManager = function () {
    var _classDecorators = [ccclass('MapManager')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _min_scale_decorators;
    var _min_scale_initializers = [];
    var _max_scale_decorators;
    var _max_scale_initializers = [];
    var _MapClickable_decorators;
    var _MapClickable_initializers = [];
    var _moveLock_decorators;
    var _moveLock_initializers = [];
    var _roleRefresh_decorators;
    var _roleRefresh_initializers = [];
    var MapManager = _classThis = /** @class */ (function (_super) {
        __extends(MapManager_1, _super);
        function MapManager_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // @property(UITransform)
            _this.canvas = (__runInitializers(_this, _instanceExtraInitializers), null);
            // @property({ displayName: "相机", tooltip: "相机", type: CameraComponent })
            _this.camera = null;
            // @property({ displayName: "目标节点", tooltip: "目标节点", type: Node })
            _this.target = null;
            // @property({ displayName: "遮挡的节点", tooltip: "遮挡的节点，目标节点的父节点", type: UITransform })
            _this.mask = null;
            _this.min_scale = __runInitializers(_this, _min_scale_initializers, 1.00);
            _this.max_scale = __runInitializers(_this, _max_scale_initializers, 2.00);
            // 缩放灵敏度
            _this.SPL = 0.5;
            // 上次缩放缩放时两个手指触点连线的长度
            _this.length = null;
            // 上次缩放的时候目标节点的位置，这个除以了缩放倍数，再次用这个值需要重新乘缩放倍数
            _this.pos = null;
            _this._ray = new cc_1.geometry.Ray();
            _this.MapClickable = __runInitializers(_this, _MapClickable_initializers, false);
            _this.moveLock = __runInitializers(_this, _moveLock_initializers, false);
            _this.roleRefresh = __runInitializers(_this, _roleRefresh_initializers, false);
            _this.moveFurnitureDir = cc_1.Vec2.ZERO;
            _this.clickOriginPos = null;
            _this.moveScreenAni = false;
            _this.scaleStep = null;
            _this.relativePos = null;
            _this.progress = 0;
            _this.targetPosition = null;
            _this.targetScale = null;
            _this.inSrict = false;
            _this.curScaleRate = 1;
            _this.padding = 100;
            /**控制移动屏幕速度 */
            _this.MoveScreenSpeedScale = 0.35;
            return _this;
        }
        MapManager_1.prototype.onLoad = function () {
            var _this = this;
            if (!this.canvas)
                this.canvas = Oops_1.oops.gui.root.getComponent(cc_1.UITransform);
            if (!this.target)
                this.target = this.node;
            if (!this.camera)
                this.camera = Oops_1.oops.gui.root.getComponentInChildren(cc_1.CameraComponent);
            if (!this.mask)
                this.mask = this.node.parent.getComponent(cc_1.UITransform);
            var self = this;
            GameMgr_1.GameMgr.Instance.mapManager = this;
            GameMgr_1.GameMgr.Instance.MapClickable = this.MapClickable;
            // 给遮挡节点绑定移动事件   负责移动目标节点
            this.mask.node.on(cc_1.Node.EventType.TOUCH_MOVE, function (event) {
                if (!GameMgr_1.GameMgr.Instance.MapClickable)
                    return;
                // 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性
                var last_pos = event.getPreviousLocation();
                // 获取触点位置
                var pos = event.getLocation();
                // 做向量减法
                var dir = last_pos.subtract(pos);
                // 获取目标节点坐标
                var node_pos = self.target.getPosition();
                // 设置目标节点坐标
                self.target.setPosition(new cc_1.Vec3(node_pos.x - dir.x, node_pos.y - dir.y));
            }, this);
            if (cc_1.sys.isBrowser) {
                if (!GameMgr_1.GameMgr.Instance.MapClickable) {
                    return;
                }
                this.canvas.node.on(cc_1.Node.EventType.MOUSE_WHEEL, function (event) {
                    if (!GameMgr_1.GameMgr.Instance.MapClickable) {
                        return;
                    }
                    var delta = event.getScrollY() / 750;
                    var scale = _this.target.scale.x + delta * _this.SPL;
                    scale = Math.min(Math.max(scale, _this.min_scale), _this.max_scale);
                    _this.target.setScale(scale, scale, scale);
                    _this.checkOverScreen();
                }, this);
            }
            // 给canvas绑定移动事件   负责两个手指缩放
            this.canvas.node.on(cc_1.Node.EventType.TOUCH_MOVE, function (event) {
                if (!GameMgr_1.GameMgr.Instance.MapClickable) {
                    return;
                }
                // 获取触点
                var touches = event.getTouches();
                // 如果有两个以上触点
                if (touches.length >= 2) {
                    // 获取第一个和第二个触点
                    var touch1 = touches[0];
                    var touch2 = touches[1];
                    // 把通过触摸得到的点转到节点坐标，先用camera转为世界坐标再转到canvas节点空间坐标系
                    var point1 = self.camera.screenToWorld(new cc_1.Vec3(touch1.getLocation().x, touch1.getLocation().y));
                    var point2 = self.camera.screenToWorld(new cc_1.Vec3(touch2.getLocation().x, touch2.getLocation().y));
                    var touchPoint1 = self.canvas.convertToNodeSpaceAR(point1);
                    var touchPoint2 = self.canvas.convertToNodeSpaceAR(point2);
                    // 最后转换成vec2
                    var tp1 = new cc_1.Vec2(touchPoint1.x, touchPoint1.y);
                    var tp2 = new cc_1.Vec2(touchPoint2.x, touchPoint2.y);
                    // 两触点之差
                    var tp_dis = tp1.subtract(tp2);
                    // 两触点连线的长度
                    var length_1 = tp_dis.length();
                    // 如果手指第一次触碰到屏幕
                    if (self.length == null) {
                        // 设置两手指触点连线距离
                        self.length = length_1;
                    }
                    else {
                        // 算出灵敏度
                        var SPL = self.SPL * 1000;
                        // 放大了   本次两触点连线长度大于上次，也就是手指正在做放大动作
                        if (length_1 > self.length) {
                            // 算出本次长度和上次长度差
                            var dis = length_1 - self.length;
                            var scale_1 = self.target.getScale();
                            self.target.setScale(scale_1.x + dis / SPL, scale_1.y + dis / SPL);
                            _this.checkOverScreen();
                        }
                        // 缩小了   本次两触点连线长度小于上次，也就是手指正在做缩小动作
                        else if (length_1 < self.length) {
                            // 算出上次长度和本次长度差
                            var dis = self.length - length_1;
                            var scale_2 = self.target.getScale();
                            self.target.setScale(scale_2.x - dis / SPL, scale_2.y - dis / SPL);
                            _this.checkOverScreen();
                        }
                    }
                    // 获取目标节点的缩放
                    var scale = self.target.getScale();
                    // 限制目标节点的缩放，目标节点缩到多小就不能缩了
                    if (scale.x <= self.min_scale || scale.y <= self.min_scale) {
                        self.target.setScale(self.min_scale, self.min_scale, 1.0);
                        _this.checkOverScreen();
                    }
                    if (scale.x >= self.max_scale || scale.y >= self.max_scale) {
                        self.target.setScale(self.max_scale, self.max_scale, 1.0);
                        _this.checkOverScreen();
                    }
                    // 更新上次触摸时两触点连线长度
                    self.length = length_1;
                    // 获取目标节点缩放
                    var sc = self.target.scale.x;
                    // 如果第一次缩放
                    if (self.pos == null) {
                        // 设置上次目标节点位置   结果为目标节点的位置除以缩放倍数
                        self.pos = new cc_1.Vec2(self.target.position.x / sc, self.target.position.y / sc);
                    }
                    else {
                        // 获取上次目标节点的位置并且乘缩放倍数
                        var pos = new cc_1.Vec3(self.pos.x * sc, self.pos.y * sc);
                        // 设置目标节点的位置
                        self.target.setPosition(pos);
                        // 设置上次目标节点的位置   结果为目标节点的位置除以缩放倍数
                        self.pos = new cc_1.Vec2(self.target.position.x / sc, self.target.position.y / sc);
                        _this.checkOverScreen();
                    }
                }
            }, this.node);
            // 给canvas绑定结束触摸事件
            this.canvas.node.on(cc_1.Node.EventType.TOUCH_END, function (event) {
                if (!GameMgr_1.GameMgr.Instance.MapClickable)
                    return;
                // 设置触点连线长为null，下次手指缩放时再次初始化，如果不写这句代码下一次手指缩放时会因为手指位置与上次距离过大而出现突然放大或缩小的问题
                self.length = null;
                // 设置目标节点位置为null，下次手指缩放时再次初始化，如果不写这句代码会导致下一次手指缩放时图片位置锁定
                self.pos = null;
            }, this);
        };
        MapManager_1.prototype.start = function () {
            this.node.parent.on(cc_1.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.parent.on(cc_1.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.node.parent.on(cc_1.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.parent.on(cc_1.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        MapManager_1.prototype.onTouchStart = function (event) {
            GameMgr_1.GameMgr.Instance.clickRayCast.isDrag = false;
            GameMgr_1.GameMgr.Instance.clickRayCast.touchMoveCount = 0;
            this.moveLock = false;
            this.roleRefresh = false;
            if (!GameMgr_1.GameMgr.Instance.ConstructionState && !GameMgr_1.GameMgr.Instance.DragRoleMode && !GameMgr_1.GameMgr.Instance.DragPetMode) {
                GameMgr_1.GameMgr.Instance.clickRayCast.clickTime = 0.01;
                var _a = event.getUILocation(), x = _a.x, y = _a.y;
                var v3_1 = new cc_1.Vec3(x, y);
                GameMgr_1.GameMgr.Instance.clickRayCast.clickPos = v3_1;
            }
            if (GameMgr_1.GameMgr.Instance.DragRoleMode || GameMgr_1.GameMgr.Instance.ConstructionState || GameMgr_1.GameMgr.Instance.DragPetMode) {
                var _b = event.getUILocation(), x = _b.x, y = _b.y;
                var v3_2 = new cc_1.Vec3(x, y);
                if (GameMgr_1.GameMgr.Instance.clickItem)
                    this.clickOriginPos = v3_2;
                GameMgr_1.GameMgr.Instance.clickRayCast.touchStart(v3_2);
            }
            if (GameMgr_1.GameMgr.Instance.manorMode) {
                GameMgr_1.GameMgr.Instance.sceneMgr.closeManorOpNode();
            }
        };
        MapManager_1.prototype.onTouchMove = function (event) {
            var _a, _b;
            GameMgr_1.GameMgr.Instance.clickRayCast.touchMoveCount++;
            if (GameMgr_1.GameMgr.Instance.clickRayCast.touchMoveCount > 3) {
                GameMgr_1.GameMgr.Instance.clickRayCast.isDrag = true;
            }
            if (GameMgr_1.GameMgr.Instance.DragRoleMode || GameMgr_1.GameMgr.Instance.ConstructionState || GameMgr_1.GameMgr.Instance.DragPetMode) {
                var _c = event.getUILocation(), x = _c.x, y = _c.y;
                var v3_3 = new cc_1.Vec3(x, y);
                // 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性
                var last_pos = event.getPreviousLocation();
                // 获取触点位置
                var pos = event.getLocation();
                // 做向量减法
                var dir = this.inSrict ? last_pos.subtract(pos).divide2f(1.8, 1.8) : last_pos.subtract(pos).multiply2f(1.7, 1.7);
                var movePos = this.moveWithLimitation(dir);
                if (((_a = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _a === void 0 ? void 0 : _a.type) == FurnitureEnum_1.FurnitureTypeEnum.Role && !this.roleRefresh) {
                    (_b = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _b === void 0 ? void 0 : _b.freshRoleDress();
                    this.roleRefresh = true;
                }
                GameMgr_1.GameMgr.Instance.clickRayCast.touchMove(movePos);
                return;
            }
        };
        /**限制光标移动在屏幕范围内 */
        MapManager_1.prototype.moveWithLimitation = function (dir) {
            var _a;
            /**光标点 */
            var node = GameMgr_1.GameMgr.Instance.clickItem.node;
            var itemNode = (_a = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem) === null || _a === void 0 ? void 0 : _a.getActiveNode();
            if (!itemNode) {
                itemNode = GameMgr_1.GameMgr.Instance.clickItem.node;
            }
            var left = this.node.parent.worldPosition.x - this.mask.width / 2
                + (this.padding - 50);
            var right = this.node.parent.worldPosition.x + this.mask.width / 2
                - (this.padding - 50);
            var top = this.node.parent.worldPosition.y + this.mask.height / 2
                - (this.padding - 50);
            var bottom = this.node.parent.worldPosition.y - this.mask.height / 2
                + (this.padding - 50);
            if (dir.x > 0) {
                if (itemNode.worldPosition.x + dir.x <= left) {
                    dir.x = 0;
                }
            }
            if (dir.x < 0) {
                if (itemNode.worldPosition.x - dir.x >= right) {
                    dir.x = 0;
                }
            }
            if (dir.y > 0) {
                if (itemNode.worldPosition.y + dir.y <= bottom) {
                    dir.y = 0;
                }
            }
            if (dir.y < 0) {
                if (itemNode.worldPosition.y - dir.y >= top) {
                    dir.y = 0;
                }
            }
            this.moveFurnitureDir = dir;
            var furnitureNode = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
            if (furnitureNode) {
                var pos1 = new cc_1.Vec3(furnitureNode.node.worldPosition.x, furnitureNode.node.worldPosition.y, furnitureNode.node.worldPosition.z);
                var checkPos = pos1.subtract(new cc_1.Vec3(dir.x / 1.05, dir.y / 1.05));
                //加限制：处于布置界面时不能超出范围
                var minPos = null;
                for (var key in GameMgr_1.GameMgr.Instance.sceneMgr.posParant) {
                    if (!GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].active) {
                        break;
                    }
                    for (var _i = 0, _b = GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _i < _b.length; _i++) {
                        var i = _b[_i];
                        var _c = i.node.getWorldPosition(), nodeX = _c.x, nodeY = _c.y;
                        var temp = Math.pow((nodeX - checkPos.x), 2);
                        if (minPos == null || minPos > temp) {
                            minPos = temp;
                        }
                    }
                }
                if (GameMgr_1.GameMgr.Instance.manorMode) {
                    for (var _d = 0, _e = GameMgr_1.GameMgr.Instance.sceneMgr.plotPosParent[0].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _d < _e.length; _d++) {
                        var i = _e[_d];
                        var _f = i.node.getWorldPosition(), nodeX = _f.x, nodeY = _f.y;
                        var temp = Math.pow((nodeX - checkPos.x), 2);
                        if (minPos == null || minPos > temp) {
                            minPos = temp;
                        }
                    }
                }
                /**如果超过判断范围 */
                if (minPos && minPos > FloorsMgr_1.maxMinPos) {
                    this.moveLock = true;
                    return furnitureNode.node.worldPosition;
                }
            }
            node.worldPosition = node.worldPosition.subtract(new cc_1.Vec3(dir.x, dir.y));
            if (furnitureNode)
                furnitureNode.node.worldPosition = furnitureNode.node.worldPosition.subtract(new cc_1.Vec3(dir.x / 1.05, dir.y / 1.05));
            return node.worldPosition;
        };
        MapManager_1.prototype.onTouchEnd = function (event) {
            var node = GameMgr_1.GameMgr.Instance.clickItem.node;
            GameMgr_1.GameMgr.Instance.clickRayCast.touchEnd(event, node.worldPosition);
            return;
        };
        MapManager_1.prototype.onTouchCancel = function (event) {
            if (!GameMgr_1.GameMgr.Instance.ConstructionState) {
                return;
            }
            this.onTouchEnd(event);
        };
        MapManager_1.prototype.update = function (dt) {
            // 获取目标节点
            var target = this.target.getComponent(cc_1.UITransform);
            // 获取缩放倍数
            var sc = this.target.scale.x;
            // 获取目标节点和mask的上下左右
            var left_tg = target.node.position.x - (target.width * sc / 2);
            var right_tg = target.node.position.x + (target.width * sc / 2);
            var top_tg = target.node.position.y + (target.height * sc / 2);
            var up_tg = target.node.position.y - (target.height * sc / 2);
            var left = -this.mask.width / 2;
            var right = this.mask.width / 2;
            var top = this.mask.height / 2;
            var up = -this.mask.height / 2;
            // 获取目标节点位置，因为位置会发生变化，下面每个if语句后面都要再获取一次位置
            var pos = this.target.getPosition();
            var flag = [];
            // 检测目标节点不超出规定范围，防止出现黑边
            if (left_tg >= left) {
                this.target.setPosition(new cc_1.Vec3(left + target.width * sc / 2, pos.y, pos.z));
                flag.push(moveDirection.Left);
            }
            pos = this.target.getPosition();
            if (right_tg <= right) {
                this.target.setPosition(new cc_1.Vec3(right - target.width * sc / 2, pos.y, pos.z));
                flag.push(moveDirection.Right);
            }
            pos = this.target.getPosition();
            if (top_tg <= top) {
                this.target.setPosition(new cc_1.Vec3(pos.x, top - target.height * sc / 2, pos.z));
                flag.push(moveDirection.Top);
            }
            pos = this.target.getPosition();
            if (up_tg >= up) {
                this.target.setPosition(new cc_1.Vec3(pos.x, up + target.height * sc / 2, pos.z));
                flag.push(moveDirection.Bottom);
            }
            this.moveScreen(flag, dt);
            this.checkOverScreen();
        };
        MapManager_1.prototype.checkOverScreen = function () {
            var target = this.target.getComponent(cc_1.UITransform);
            // 获取缩放倍数
            var sc = this.target.scale.x;
            var visibleSize = cc_1.view.getVisibleSize();
            var visibleWidth = visibleSize.width;
            var visibleHeight = visibleSize.height;
            var height = target.height * sc;
            var width = target.width * sc;
            if (height < visibleHeight) {
                this.min_scale = visibleHeight / target.height;
                target.node.setScale(new cc_1.Vec3(this.min_scale, this.min_scale, this.min_scale));
            }
            if (width < visibleWidth) {
                this.min_scale = visibleWidth / target.width;
                target.node.setScale(new cc_1.Vec3(this.min_scale, this.min_scale, this.min_scale));
            }
        };
        /**
        * 移动到场景中心
        * @param node 场景中心点
        */
        MapManager_1.prototype.setScreenToCenter = function (node, scale) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            GameMgr_1.GameMgr.Instance.mapOriginPos = new cc_1.Vec3(_this.target.worldPosition);
                            if (scale)
                                GameMgr_1.GameMgr.Instance.mapOriginScale = new cc_1.Vec3(scale, scale, scale);
                            else
                                GameMgr_1.GameMgr.Instance.mapOriginScale = new cc_1.Vec3(_this.target.scale);
                            var nodePos = new cc_1.Vec3(node.worldPosition);
                            if (GameMgr_1.GameMgr.Instance.ConstructionState && GameMgr_1.GameMgr.Instance.mapOffsetState && scale) {
                                nodePos = nodePos.add((0, cc_1.v3)(0, 300 / scale));
                            }
                            (0, cc_1.tween)(_this.target)
                                .to(0.1, { worldPosition: nodePos, scale: GameMgr_1.GameMgr.Instance.mapOriginScale }, { easing: 'sineOut' })
                                .call(function () {
                                resolve();
                            })
                                .start();
                        })];
                });
            });
        };
        /**移动到车这个位置 */
        MapManager_1.prototype.moveToCar = function () {
            this.moveScreenToNode(GameMgr_1.GameMgr.Instance.carSpine.node, 2);
        };
        /**移动到堆叠游戏这个位置 */
        MapManager_1.prototype.moveToMiniGame = function () {
            this.moveScreenToNode(GameMgr_1.GameMgr.Instance.miniGameNode, 2);
        };
        /**移动到星小满*/
        MapManager_1.prototype.moveToStarXiaoman = function () {
            this.moveScreenToNode(GameMgr_1.GameMgr.Instance.sceneMgr.roles[0].node, 2);
            //新手引导第一步
            if (!SingletonModuleComp_1.smc.account.AccountModel.isGuideOver && SingletonModuleComp_1.smc.guide && SingletonModuleComp_1.smc.guide.GuideModel.step == 0) {
                setTimeout(function () {
                    SingletonModuleComp_1.smc.guide.GuideView.next();
                }, 500);
            }
        };
        /**移动到豆豆*/
        MapManager_1.prototype.moveToDoudou = function () {
            this.moveScreenToNode(GameMgr_1.GameMgr.Instance.sceneMgr.roles[1].node, 1.5);
        };
        /**
         * 设置节点到目标节点的相对位置
         * @param node 目标节点
         */
        MapManager_1.prototype.moveScreenToNode = function (node, scale) {
            if (scale === void 0) { scale = 2; }
            if (scale == 0)
                scale = this.target.scale.x;
            GameMgr_1.GameMgr.Instance.mapOriginPos = new cc_1.Vec3(this.target.worldPosition);
            GameMgr_1.GameMgr.Instance.mapOriginScale = new cc_1.Vec3(this.target.scale);
            if (scale < this.min_scale) {
                scale = this.min_scale;
            }
            var relativePos = this.target.getComponent(cc_1.UITransform).convertToNodeSpaceAR(node.worldPosition).multiply(new cc_1.Vec3(scale, scale, scale));
            relativePos = relativePos.multiply(new cc_1.Vec3(-1, -1));
            if (GameMgr_1.GameMgr.Instance.ConstructionState && GameMgr_1.GameMgr.Instance.mapOffsetState) {
                relativePos = relativePos.add((0, cc_1.v3)(0, 200 / scale));
            }
            relativePos = this.contract(relativePos, scale);
            (0, cc_1.tween)(this.target)
                .parallel((0, cc_1.tween)(this.target).to(0.1, { position: relativePos }, { easing: 'sineOut' }), (0, cc_1.tween)(this.target).to(0.1, { scale: new cc_1.Vec3(scale, scale, scale) }, { easing: 'sineOut' }))
                .start();
        };
        /**移动屏幕时不超框,获取到最大移动目标值 */
        MapManager_1.prototype.contract = function (pos, sc) {
            // 获取目标节点
            var target = this.target.getComponent(cc_1.UITransform);
            // 获取目标节点和mask的上下左右
            var left_tg = pos.x - (target.width * sc / 2);
            var right_tg = pos.x + (target.width * sc / 2);
            var top_tg = pos.y + (target.height * sc / 2);
            var up_tg = pos.y - (target.height * sc / 2);
            var left = -this.mask.width / 2;
            var right = this.mask.width / 2;
            var top = this.mask.height / 2;
            var up = -this.mask.height / 2;
            // 检测目标节点不超出规定范围，防止出现黑边
            if (left_tg >= left) {
                pos = (new cc_1.Vec3(left + target.width * sc / 2, pos.y, pos.z));
            }
            if (right_tg <= right) {
                pos = (new cc_1.Vec3(right - target.width * sc / 2, pos.y, pos.z));
            }
            if (top_tg <= top) {
                pos = (new cc_1.Vec3(pos.x, top - target.height * sc / 2, pos.z));
            }
            if (up_tg >= up) {
                pos = (new cc_1.Vec3(pos.x, up + target.height * sc / 2, pos.z));
            }
            return pos;
        };
        /**设置节点到原点位置 */
        MapManager_1.prototype.setScreenToOriginPos = function () {
            (0, cc_1.tween)(this.target)
                .to(0.5, { worldPosition: GameMgr_1.GameMgr.Instance.mapOriginPos, scale: GameMgr_1.GameMgr.Instance.mapOriginScale }, { easing: 'sineOut' })
                .start();
        };
        /**移动屏幕 */
        MapManager_1.prototype.moveScreen = function (flag, dt) {
            dt *= 500 * this.MoveScreenSpeedScale;
            if (!GameMgr_1.GameMgr.Instance.clickItem.furnitureItem)
                return;
            var checkMove = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.getActiveNode().worldPosition.clone();
            var itemPos = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.node.worldPosition.clone();
            var left = this.node.parent.worldPosition.x - this.mask.width / 2 + this.padding;
            var right = this.node.parent.worldPosition.x + this.mask.width / 2 - this.padding;
            var top = this.node.parent.worldPosition.y + this.mask.height / 2 - this.padding;
            var bottom = this.node.parent.worldPosition.y - this.mask.height / 2 + this.padding;
            if (GameMgr_1.GameMgr.Instance.ConstructionState && GameMgr_1.GameMgr.Instance.mapOffsetState) {
                bottom += 350;
            }
            if (!this.moveLock && this.moveFurnitureDir != cc_1.Vec2.ZERO) {
                var furnitureNode = GameMgr_1.GameMgr.Instance.clickItem.furnitureItem;
                if (furnitureNode) {
                    var pos1 = new cc_1.Vec3(furnitureNode.node.worldPosition.x, furnitureNode.node.worldPosition.y, furnitureNode.node.worldPosition.z);
                    var checkPos = pos1.subtract(new cc_1.Vec3(this.moveFurnitureDir.x / 1.05, this.moveFurnitureDir.y / 1.05));
                    //加限制：处于布置界面时不能超出范围
                    var minPos = null;
                    for (var key in GameMgr_1.GameMgr.Instance.sceneMgr.posParant) {
                        if (!GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].active) {
                            break;
                        }
                        for (var _i = 0, _a = GameMgr_1.GameMgr.Instance.sceneMgr.posParant[key].getComponentsInChildren(FloorMgr_1.FloorMgr).filter(function (i) { return !i.obstacle; }); _i < _a.length; _i++) {
                            var i = _a[_i];
                            var _b = i.node.getWorldPosition(), nodeX = _b.x, nodeY = _b.y;
                            var temp = Math.pow((nodeX - checkPos.x), 2);
                            if (minPos == null || minPos > temp) {
                                minPos = temp;
                            }
                        }
                    }
                    /**如果超过判断范围 */
                    if (minPos && minPos > FloorsMgr_1.maxMinPos) {
                        this.moveLock = true;
                    }
                }
            }
            if (checkMove.x < left && !this.moveLock) {
                if (flag.indexOf(moveDirection.Left) == -1) {
                    this.target.worldPosition = this.target.worldPosition.add(new cc_1.Vec3(dt));
                    GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.node.worldPosition = itemPos;
                    GameMgr_1.GameMgr.Instance.clickItem.node.worldPosition = itemPos;
                }
            }
            if (checkMove.y < bottom) {
                if (flag.indexOf(moveDirection.Bottom) == -1) {
                    this.target.worldPosition = this.target.worldPosition.add(new cc_1.Vec3(0, dt));
                    GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.node.worldPosition = itemPos;
                    GameMgr_1.GameMgr.Instance.clickItem.node.worldPosition = itemPos;
                }
            }
            if (checkMove.x > right && !this.moveLock) {
                if (flag.indexOf(moveDirection.Right) == -1) {
                    this.target.worldPosition = this.target.worldPosition.add(new cc_1.Vec3(-dt));
                    GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.node.worldPosition = itemPos;
                    GameMgr_1.GameMgr.Instance.clickItem.node.worldPosition = itemPos;
                }
            }
            if (checkMove.y > top) {
                if (flag.indexOf(moveDirection.Top) == -1) {
                    this.target.worldPosition = this.target.worldPosition.add(new cc_1.Vec3(0, -dt));
                    GameMgr_1.GameMgr.Instance.clickItem.furnitureItem.node.worldPosition = itemPos;
                    GameMgr_1.GameMgr.Instance.clickItem.node.worldPosition = itemPos;
                }
            }
        };
        return MapManager_1;
    }(_classSuper));
    __setFunctionName(_classThis, "MapManager");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _min_scale_decorators = [property({ displayName: "最小缩放倍数", tooltip: "最小缩放倍数", type: cc_1.CCFloat })];
        _max_scale_decorators = [property({ displayName: "最大缩放倍数", tooltip: "最大缩放倍数", type: cc_1.CCFloat })];
        _MapClickable_decorators = [property(cc_1.CCBoolean)];
        _moveLock_decorators = [property(cc_1.CCBoolean)];
        _roleRefresh_decorators = [property(cc_1.CCBoolean)];
        __esDecorate(null, null, _min_scale_decorators, { kind: "field", name: "min_scale", static: false, private: false, access: { has: function (obj) { return "min_scale" in obj; }, get: function (obj) { return obj.min_scale; }, set: function (obj, value) { obj.min_scale = value; } }, metadata: _metadata }, _min_scale_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _max_scale_decorators, { kind: "field", name: "max_scale", static: false, private: false, access: { has: function (obj) { return "max_scale" in obj; }, get: function (obj) { return obj.max_scale; }, set: function (obj, value) { obj.max_scale = value; } }, metadata: _metadata }, _max_scale_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _MapClickable_decorators, { kind: "field", name: "MapClickable", static: false, private: false, access: { has: function (obj) { return "MapClickable" in obj; }, get: function (obj) { return obj.MapClickable; }, set: function (obj, value) { obj.MapClickable = value; } }, metadata: _metadata }, _MapClickable_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _moveLock_decorators, { kind: "field", name: "moveLock", static: false, private: false, access: { has: function (obj) { return "moveLock" in obj; }, get: function (obj) { return obj.moveLock; }, set: function (obj, value) { obj.moveLock = value; } }, metadata: _metadata }, _moveLock_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleRefresh_decorators, { kind: "field", name: "roleRefresh", static: false, private: false, access: { has: function (obj) { return "roleRefresh" in obj; }, get: function (obj) { return obj.roleRefresh; }, set: function (obj, value) { obj.roleRefresh = value; } }, metadata: _metadata }, _roleRefresh_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MapManager = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MapManager = _classThis;
}();
exports.MapManager = MapManager;
