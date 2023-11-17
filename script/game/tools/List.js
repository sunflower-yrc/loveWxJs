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
/******************************************
 * @author kL <klk0@qq.com>
 * https://github.com/gh-kL/cocoscreator-list/
 * @date 2020/12/9
 * @doc 列表组件.
 * @end
 ******************************************/
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property, disallowMultiple = cc_1._decorator.disallowMultiple, menu = cc_1._decorator.menu, executionOrder = cc_1._decorator.executionOrder, requireComponent = cc_1._decorator.requireComponent;
var cc_1 = require("cc");
var ListItem_1 = require("./ListItem");
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 1] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
})(TemplateType || (TemplateType = {}));
var SlideType;
(function (SlideType) {
    SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
    SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
    SlideType[SlideType["PAGE"] = 3] = "PAGE";
})(SlideType || (SlideType = {}));
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
    SelectedType[SelectedType["MULT"] = 2] = "MULT";
})(SelectedType || (SelectedType = {}));
var List = function () {
    var _classDecorators = [ccclass, disallowMultiple(), menu('List'), requireComponent(cc_1.ScrollView), executionOrder(-5000)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _templateType_decorators;
    var _templateType_initializers = [];
    var _tmpNode_decorators;
    var _tmpNode_initializers = [];
    var _tmpPrefab_decorators;
    var _tmpPrefab_initializers = [];
    var __slideMode_decorators;
    var __slideMode_initializers = [];
    var _set_slideMode_decorators;
    var _pageDistance_decorators;
    var _pageDistance_initializers = [];
    var _pageChangeEvent_decorators;
    var _pageChangeEvent_initializers = [];
    var __virtual_decorators;
    var __virtual_initializers = [];
    var _set_virtual_decorators;
    var _cyclic_decorators;
    var _cyclic_initializers = [];
    var _lackCenter_decorators;
    var _lackCenter_initializers = [];
    var _lackSlide_decorators;
    var _lackSlide_initializers = [];
    var __updateRate_decorators;
    var __updateRate_initializers = [];
    var _set_updateRate_decorators;
    var _frameByFrameRenderNum_decorators;
    var _frameByFrameRenderNum_initializers = [];
    var _renderEvent_decorators;
    var _renderEvent_initializers = [];
    var _selectedMode_decorators;
    var _selectedMode_initializers = [];
    var _selectedEvent_decorators;
    var _selectedEvent_initializers = [];
    var _repeatEventSingle_decorators;
    var _repeatEventSingle_initializers = [];
    var _dragEvent_decorators;
    var _dragEvent_initializers = [];
    var __numItems_decorators;
    var __numItems_initializers = [];
    var List = _classThis = /** @class */ (function (_super) {
        __extends(List_1, _super);
        function List_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //模板类型
            _this.templateType = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _templateType_initializers, TemplateType.NODE));
            //模板Item（Node）
            _this.tmpNode = __runInitializers(_this, _tmpNode_initializers, null);
            //模板Item（Prefab）
            _this.tmpPrefab = __runInitializers(_this, _tmpPrefab_initializers, null);
            //滑动模式
            _this._slideMode = __runInitializers(_this, __slideMode_initializers, SlideType.NORMAL);
            //翻页作用距离
            _this.pageDistance = __runInitializers(_this, _pageDistance_initializers, .3);
            //页面改变事件
            _this.pageChangeEvent = __runInitializers(_this, _pageChangeEvent_initializers, new cc_1.EventHandler());
            //是否为虚拟列表（动态列表）
            _this._virtual = __runInitializers(_this, __virtual_initializers, true);
            //是否为循环列表
            _this.cyclic = __runInitializers(_this, _cyclic_initializers, false);
            //缺省居中
            _this.lackCenter = __runInitializers(_this, _lackCenter_initializers, false);
            //缺省可滑动
            _this.lackSlide = __runInitializers(_this, _lackSlide_initializers, false);
            //刷新频率
            _this._updateRate = __runInitializers(_this, __updateRate_initializers, 0);
            //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
            _this.frameByFrameRenderNum = __runInitializers(_this, _frameByFrameRenderNum_initializers, 0);
            //渲染事件（渲染器）
            _this.renderEvent = __runInitializers(_this, _renderEvent_initializers, new cc_1.EventHandler());
            //选择模式
            _this.selectedMode = __runInitializers(_this, _selectedMode_initializers, SelectedType.NONE);
            //触发选择事件
            _this.selectedEvent = __runInitializers(_this, _selectedEvent_initializers, new cc_1.EventHandler());
            _this.repeatEventSingle = __runInitializers(_this, _repeatEventSingle_initializers, false);
            //长按拖动触发事件
            _this.dragEvent = __runInitializers(_this, _dragEvent_initializers, new cc_1.EventHandler());
            //当前选择id
            _this._selectedId = -1;
            _this._lastSelectedId = -1;
            _this.multSelected = [];
            _this._forceUpdate = false;
            _this._align = 0;
            _this._horizontalDir = 0;
            _this._verticalDir = 0;
            _this._startAxis = 0;
            _this._alignCalcType = 0;
            _this.content = null;
            _this._contentUt = null;
            _this.firstListId = 0;
            _this.displayItemNum = 0;
            _this._updateDone = true;
            _this._updateCounter = 0;
            _this._actualNumItems = 0;
            _this._cyclicNum = 0;
            _this._cyclicPos1 = 0;
            _this._cyclicPos2 = 0;
            //列表数量
            _this._numItems = __runInitializers(_this, __numItems_initializers, 0);
            _this._inited = false;
            _this._scrollView = null;
            _this._layout = null;
            _this._resizeMode = 0;
            _this._topGap = 0;
            _this._rightGap = 0;
            _this._bottomGap = 0;
            _this._leftGap = 0;
            _this._columnGap = 0;
            _this._lineGap = 0;
            _this._colLineNum = 0;
            _this._lastDisplayData = null;
            _this.displayData = null;
            _this._pool = null;
            _this._itemTmpUt = null;
            _this._needUpdateWidget = false;
            _this._itemSize = null;
            _this._sizeType = false;
            _this.frameCount = 0;
            _this._aniDelRuning = false;
            _this._aniDelCB = null;
            _this._aniDelBeforePos = null;
            _this._aniDelBeforeScale = 0;
            _this.viewTop = 0;
            _this.viewRight = 0;
            _this.viewBottom = 0;
            _this.viewLeft = 0;
            _this._doneAfterUpdate = false;
            _this.elasticTop = 0;
            _this.elasticRight = 0;
            _this.elasticBottom = 0;
            _this.elasticLeft = 0;
            _this.scrollToListId = 0;
            _this.adhering = false;
            _this._adheringBarrier = false;
            _this.nearestListId = 0;
            _this.curPageNum = 0;
            _this._beganPos = 0;
            _this._scrollPos = 0;
            _this._curScrollIsTouch = false; //当前滑动是否为手动
            _this._scrollToListId = 0;
            _this._scrollToEndTime = 0;
            _this._lack = false;
            _this._allItemSize = 0;
            _this._allItemSizeNoEdge = 0;
            _this._thisNodeUt = null;
            return _this;
        }
        Object.defineProperty(List_1.prototype, "slideMode", {
            get: function () {
                return this._slideMode;
            },
            set: function (val) {
                this._slideMode = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(List_1.prototype, "virtual", {
            get: function () {
                return this._virtual;
            },
            set: function (val) {
                if (val != null)
                    this._virtual = val;
                if (this._numItems != 0) {
                    this._onScrolling();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(List_1.prototype, "updateRate", {
            get: function () {
                return this._updateRate;
            },
            set: function (val) {
                if (val >= 0 && val <= 6) {
                    this._updateRate = val;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(List_1.prototype, "selectedId", {
            get: function () {
                return this._selectedId;
            },
            set: function (val) {
                var t = this;
                var item;
                switch (t.selectedMode) {
                    case SelectedType.SINGLE: {
                        if (!t.repeatEventSingle && val == t._selectedId)
                            return;
                        item = t.getItemByListId(val);
                        // if (!item && val >= 0)
                        //     return;
                        var listItem = void 0;
                        if (t._selectedId >= 0)
                            t._lastSelectedId = t._selectedId;
                        else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                            t._lastSelectedId = null;
                        t._selectedId = val;
                        if (item) {
                            listItem = item.getComponent(ListItem_1.default);
                            listItem.selected = true;
                        }
                        if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                            var lastItem = t.getItemByListId(t._lastSelectedId);
                            if (lastItem) {
                                lastItem.getComponent(ListItem_1.default).selected = false;
                            }
                        }
                        if (t.selectedEvent) {
                            cc_1.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems));
                        }
                        break;
                    }
                    case SelectedType.MULT: {
                        item = t.getItemByListId(val);
                        if (!item)
                            return;
                        var listItem = item.getComponent(ListItem_1.default);
                        if (t._selectedId >= 0)
                            t._lastSelectedId = t._selectedId;
                        t._selectedId = val;
                        var bool = !listItem.selected;
                        listItem.selected = bool;
                        var sub = t.multSelected.indexOf(val);
                        if (bool && sub < 0) {
                            t.multSelected.push(val);
                        }
                        else if (!bool && sub >= 0) {
                            t.multSelected.splice(sub, 1);
                        }
                        if (t.selectedEvent) {
                            cc_1.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems), bool);
                        }
                        break;
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        List_1.prototype.dragItem = function (val, pos) {
            var item = this.getItemByListId(val);
            if (item && this.dragEvent) {
                cc_1.EventHandler.emitEvents([this.dragEvent], item, val % this._actualNumItems, pos);
            }
        };
        Object.defineProperty(List_1.prototype, "numItems", {
            get: function () {
                return this._actualNumItems;
            },
            set: function (val) {
                var t = this;
                if (!t.checkInited(false))
                    return;
                if (val == null || val < 0) {
                    console.error('numItems set the wrong::', val);
                    return;
                }
                t._actualNumItems = t._numItems = val;
                t._forceUpdate = true;
                if (t._virtual) {
                    t._resizeContent();
                    if (t.cyclic) {
                        t._numItems = t._cyclicNum * t._numItems;
                    }
                    t._onScrolling();
                    if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE)
                        t.curPageNum = t.nearestListId;
                }
                else {
                    if (t.cyclic) {
                        t._resizeContent();
                        t._numItems = t._cyclicNum * t._numItems;
                    }
                    var layout = t.content.getComponent(cc_1.Layout);
                    if (layout) {
                        layout.enabled = true;
                    }
                    t._delRedundantItem();
                    t.firstListId = 0;
                    if (t.frameByFrameRenderNum > 0) {
                        //先渲染几个出来
                        var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                        for (var n = 0; n < len; n++) {
                            t._createOrUpdateItem2(n);
                        }
                        if (t.frameByFrameRenderNum < t._numItems) {
                            t._updateCounter = t.frameByFrameRenderNum;
                            t._updateDone = false;
                        }
                    }
                    else {
                        for (var n = 0; n < t._numItems; n++) {
                            t._createOrUpdateItem2(n);
                        }
                        t.displayItemNum = t._numItems;
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(List_1.prototype, "scrollView", {
            get: function () {
                return this._scrollView;
            },
            enumerable: false,
            configurable: true
        });
        //----------------------------------------------------------------------------
        List_1.prototype.onLoad = function () {
            this._init();
        };
        List_1.prototype.onDestroy = function () {
            var t = this;
            if ((0, cc_1.isValid)(t._itemTmp))
                t._itemTmp.destroy();
            if ((0, cc_1.isValid)(t.tmpNode))
                t.tmpNode.destroy();
            t._pool && t._pool.clear();
        };
        List_1.prototype.onEnable = function () {
            // if (!EDITOR) 
            this._registerEvent();
            this._init();
            // 处理重新显示后，有可能上一次的动画移除还未播放完毕，导致动画卡住的问题
            if (this._aniDelRuning) {
                this._aniDelRuning = false;
                if (this._aniDelItem) {
                    if (this._aniDelBeforePos) {
                        this._aniDelItem.position = this._aniDelBeforePos;
                        delete this._aniDelBeforePos;
                    }
                    if (this._aniDelBeforeScale) {
                        this._aniDelItem.scale = this._aniDelBeforeScale;
                        delete this._aniDelBeforeScale;
                    }
                    delete this._aniDelItem;
                }
                if (this._aniDelCB) {
                    this._aniDelCB();
                    delete this._aniDelCB;
                }
            }
        };
        List_1.prototype.onDisable = function () {
            // if (!EDITOR) 
            this._unregisterEvent();
        };
        //注册事件
        List_1.prototype._registerEvent = function () {
            var t = this;
            t.node.on(cc_1.Node.EventType.TOUCH_START, t._onTouchStart, t);
            t.node.on('touch-up', t._onTouchUp, t);
            t.node.on(cc_1.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t);
            t.node.on('scroll-began', t._onScrollBegan, t);
            t.node.on('scroll-ended', t._onScrollEnded, t);
            t.node.on('scrolling', t._onScrolling, t);
            t.node.on(cc_1.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        };
        //卸载事件
        List_1.prototype._unregisterEvent = function () {
            var t = this;
            t.node.off(cc_1.Node.EventType.TOUCH_START, t._onTouchStart, t);
            t.node.off('touch-up', t._onTouchUp, t);
            t.node.off(cc_1.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t);
            t.node.off('scroll-began', t._onScrollBegan, t);
            t.node.off('scroll-ended', t._onScrollEnded, t);
            t.node.off('scrolling', t._onScrolling, t);
            t.node.off(cc_1.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
        };
        //初始化各种..
        List_1.prototype._init = function () {
            var t = this;
            if (t._inited)
                return;
            t._thisNodeUt = t.node.getComponent(cc_1.UITransform);
            t._scrollView = t.node.getComponent(cc_1.ScrollView);
            t.content = t._scrollView.content;
            t._contentUt = t.content.getComponent(cc_1.UITransform);
            if (!t.content) {
                console.error(t.node.name + "'s ScrollView unset content!");
                return;
            }
            t._layout = t.content.getComponent(cc_1.Layout);
            t._align = t._layout.type; //排列模式
            t._resizeMode = t._layout.resizeMode; //自适应模式
            t._startAxis = t._layout.startAxis;
            t._topGap = t._layout.paddingTop; //顶边距
            t._rightGap = t._layout.paddingRight; //右边距
            t._bottomGap = t._layout.paddingBottom; //底边距
            t._leftGap = t._layout.paddingLeft; //左边距
            t._columnGap = t._layout.spacingX; //列距
            t._lineGap = t._layout.spacingY; //行距
            t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;
            t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
            t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向
            t.setTemplateItem((0, cc_1.instantiate)(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
            // 特定的滑动模式处理
            if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
                t._scrollView.inertia = false;
                t._scrollView._onMouseWheel = function () {
                    return;
                };
            }
            if (!t.virtual) // lackCenter 仅支持 Virtual 模式
                t.lackCenter = false;
            t._lastDisplayData = []; //最后一次刷新的数据
            t.displayData = []; //当前数据
            t._pool = new cc_1.NodePool(); //这是个池子..
            t._forceUpdate = false; //是否强制更新
            t._updateCounter = 0; //当前分帧渲染帧数
            t._updateDone = true; //分帧渲染是否完成
            t.curPageNum = 0; //当前页数
            if (t.cyclic || 0) {
                t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
                t._scrollView._startBounceBackIfNeeded = function () {
                    return false;
                };
            }
            switch (t._align) {
                case cc_1.Layout.Type.HORIZONTAL: {
                    switch (t._horizontalDir) {
                        case cc_1.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                            t._alignCalcType = 1;
                            break;
                        case cc_1.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                            t._alignCalcType = 2;
                            break;
                    }
                    break;
                }
                case cc_1.Layout.Type.VERTICAL: {
                    switch (t._verticalDir) {
                        case cc_1.Layout.VerticalDirection.TOP_TO_BOTTOM:
                            t._alignCalcType = 3;
                            break;
                        case cc_1.Layout.VerticalDirection.BOTTOM_TO_TOP:
                            t._alignCalcType = 4;
                            break;
                    }
                    break;
                }
                case cc_1.Layout.Type.GRID: {
                    switch (t._startAxis) {
                        case cc_1.Layout.AxisDirection.HORIZONTAL:
                            switch (t._verticalDir) {
                                case cc_1.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;
                                case cc_1.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4;
                                    break;
                            }
                            break;
                        case cc_1.Layout.AxisDirection.VERTICAL:
                            switch (t._horizontalDir) {
                                case cc_1.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;
                                case cc_1.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2;
                                    break;
                            }
                            break;
                    }
                    break;
                }
            }
            // 清空 content
            // t.content.children.forEach((child: Node) => {
            //     child.removeFromParent();
            //     if (child != t.tmpNode && child.isValid)
            //         child.destroy();
            // });
            t.content.removeAllChildren();
            t._inited = true;
        };
        /**
         * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
         * @param {Number} dt
         */
        List_1.prototype._processAutoScrolling = function (dt) {
            // ------------- scroll-view 里定义的一些常量 -------------
            var OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
            var EPSILON = 1e-4;
            var ZERO = new cc_1.Vec3();
            var quintEaseOut = function (time) {
                time -= 1;
                return (time * time * time * time * time + 1);
            };
            // ------------- scroll-view 里定义的一些常量 -------------
            var sv = this._scrollView;
            var isAutoScrollBrake = sv['_isNecessaryAutoScrollBrake']();
            var brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
            sv['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
            var percentage = Math.min(1, sv['_autoScrollAccumulatedTime'] / sv['_autoScrollTotalTime']);
            if (sv['_autoScrollAttenuate']) {
                percentage = quintEaseOut(percentage);
            }
            var clonedAutoScrollTargetDelta = sv['_autoScrollTargetDelta'].clone();
            clonedAutoScrollTargetDelta.multiplyScalar(percentage);
            var clonedAutoScrollStartPosition = sv['_autoScrollStartPosition'].clone();
            clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
            var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
            var fireEvent = Math.abs(percentage - 1) <= sv['getScrollEndedEventTiming']();
            if (fireEvent && !sv['_isScrollEndedWithThresholdEventFired']) {
                sv['_dispatchEvent'](cc_1.ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD);
                sv['_isScrollEndedWithThresholdEventFired'] = true;
            }
            if (sv['elastic']) {
                var brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
                brakeOffsetPosition.subtract(sv['_autoScrollBrakingStartPosition']);
                if (isAutoScrollBrake) {
                    brakeOffsetPosition.multiplyScalar(brakingFactor);
                }
                clonedAutoScrollStartPosition.set(sv['_autoScrollBrakingStartPosition']);
                clonedAutoScrollStartPosition.add(brakeOffsetPosition);
            }
            else {
                var moveDelta = clonedAutoScrollStartPosition.clone();
                moveDelta.subtract(sv.getContentPosition());
                var outOfBoundary = sv['_getHowMuchOutOfBoundary'](moveDelta);
                if (!outOfBoundary.equals(ZERO, EPSILON)) {
                    clonedAutoScrollStartPosition.add(outOfBoundary);
                    reachedEnd = true;
                }
            }
            if (reachedEnd) {
                sv['_autoScrolling'] = false;
            }
            var deltaMove = new cc_1.Vec3(clonedAutoScrollStartPosition);
            deltaMove.subtract(sv.getContentPosition());
            sv['_clampDelta'](deltaMove);
            sv['_moveContent'](deltaMove, reachedEnd);
            sv['_dispatchEvent'](cc_1.ScrollView.EventType.SCROLLING);
            if (!sv['_autoScrolling']) {
                sv['_isBouncing'] = false;
                sv['_scrolling'] = false;
                sv['_dispatchEvent'](cc_1.ScrollView.EventType.SCROLL_ENDED);
            }
        };
        //设置模板Item
        List_1.prototype.setTemplateItem = function (item) {
            if (!item)
                return;
            var t = this;
            t._itemTmp = item;
            t._itemTmpUt = item.getComponent(cc_1.UITransform);
            if (t._resizeMode == cc_1.Layout.ResizeMode.CHILDREN)
                t._itemSize = t._layout.cellSize;
            else {
                var itemUt = item.getComponent(cc_1.UITransform);
                t._itemSize = new cc_1.Size(itemUt.width, itemUt.height);
            }
            //获取ListItem，如果没有就取消选择模式
            var com = item.getComponent(ListItem_1.default);
            var remove = false;
            if (!com)
                remove = true;
            // if (com) {
            //     if (!com._btnCom && !item.getComponent(cc.Button)) {
            //         remove = true;
            //     }
            // }
            if (remove) {
                t.selectedMode = SelectedType.NONE;
            }
            com = item.getComponent(cc_1.Widget);
            if (com && com.enabled) {
                t._needUpdateWidget = true;
            }
            if (t.selectedMode == SelectedType.MULT)
                t.multSelected = [];
            switch (t._align) {
                case cc_1.Layout.Type.HORIZONTAL:
                    t._colLineNum = 1;
                    t._sizeType = false;
                    break;
                case cc_1.Layout.Type.VERTICAL:
                    t._colLineNum = 1;
                    t._sizeType = true;
                    break;
                case cc_1.Layout.Type.GRID:
                    switch (t._startAxis) {
                        case cc_1.Layout.AxisDirection.HORIZONTAL:
                            //计算列数
                            var trimW = t._contentUt.width - t._leftGap - t._rightGap;
                            t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
                            t._sizeType = true;
                            break;
                        case cc_1.Layout.AxisDirection.VERTICAL:
                            //计算行数
                            var trimH = t._contentUt.height - t._topGap - t._bottomGap;
                            t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
                            t._sizeType = false;
                            break;
                    }
                    break;
            }
        };
        /**
         * 检查是否初始化
         * @param {Boolean} printLog 是否打印错误信息
         * @returns
         */
        List_1.prototype.checkInited = function (printLog) {
            if (printLog === void 0) { printLog = true; }
            if (!this._inited) {
                if (printLog)
                    console.error('List initialization not completed!');
                return false;
            }
            return true;
        };
        //禁用 Layout 组件，自行计算 Content Size
        List_1.prototype._resizeContent = function () {
            var t = this;
            var result = 0;
            switch (t._align) {
                case cc_1.Layout.Type.HORIZONTAL: {
                    if (t._customSize) {
                        var fixed = t._getFixedSize(null);
                        result = t._leftGap + fixed.val + (t._itemSize.width * (t._numItems - fixed.count)) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                    }
                    else {
                        result = t._leftGap + (t._itemSize.width * t._numItems) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                    }
                    break;
                }
                case cc_1.Layout.Type.VERTICAL: {
                    if (t._customSize) {
                        var fixed = t._getFixedSize(null);
                        result = t._topGap + fixed.val + (t._itemSize.height * (t._numItems - fixed.count)) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                    }
                    else {
                        result = t._topGap + (t._itemSize.height * t._numItems) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                    }
                    break;
                }
                case cc_1.Layout.Type.GRID: {
                    //网格模式不支持居中
                    if (t.lackCenter)
                        t.lackCenter = false;
                    switch (t._startAxis) {
                        case cc_1.Layout.AxisDirection.HORIZONTAL:
                            var lineNum = Math.ceil(t._numItems / t._colLineNum);
                            result = t._topGap + (t._itemSize.height * lineNum) + (t._lineGap * (lineNum - 1)) + t._bottomGap;
                            break;
                        case cc_1.Layout.AxisDirection.VERTICAL:
                            var colNum = Math.ceil(t._numItems / t._colLineNum);
                            result = t._leftGap + (t._itemSize.width * colNum) + (t._columnGap * (colNum - 1)) + t._rightGap;
                            break;
                    }
                    break;
                }
            }
            var layout = t.content.getComponent(cc_1.Layout);
            if (layout)
                layout.enabled = false;
            t._allItemSize = result;
            t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? (t._topGap + t._bottomGap) : (t._leftGap + t._rightGap));
            if (t.cyclic) {
                var totalSize = (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
                t._cyclicPos1 = 0;
                totalSize -= t._cyclicPos1;
                t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
                var spacing = t._sizeType ? t._lineGap : t._columnGap;
                t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
                t._cyclicAllItemSize = t._allItemSize + (t._allItemSizeNoEdge * (t._cyclicNum - 1)) + (spacing * (t._cyclicNum - 1));
                t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
                t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
                // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
            }
            t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
            var slideOffset = ((!t._lack || !t.lackCenter) && t.lackSlide) ? 0 : .1;
            var targetWH = t._lack ? ((t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width) - slideOffset) : (t.cyclic ? t._cyclicAllItemSize : t._allItemSize);
            if (targetWH < 0)
                targetWH = 0;
            if (t._sizeType) {
                t._contentUt.height = targetWH;
            }
            else {
                t._contentUt.width = targetWH;
            }
            // console.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);
        };
        //滚动进行时...
        List_1.prototype._onScrolling = function (ev) {
            if (this.frameCount == null)
                this.frameCount = this._updateRate;
            if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
                this.frameCount--;
                return;
            }
            else
                this.frameCount = this._updateRate;
            if (this._aniDelRuning)
                return;
            //循环列表处理
            if (this.cyclic) {
                var scrollPos = this.content.getPosition();
                scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
                var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
                var add = this._sizeType ? new cc_1.Vec3(0, addVal, 0) : new cc_1.Vec3(addVal, 0, 0);
                var contentPos = this.content.getPosition();
                switch (this._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        if (scrollPos > -this._cyclicPos1) {
                            contentPos.set(-this._cyclicPos2, contentPos.y, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                            }
                            // if (this._beganPos) {
                            //     this._beganPos += add;
                            // }
                        }
                        else if (scrollPos < -this._cyclicPos2) {
                            contentPos.set(-this._cyclicPos1, contentPos.y, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                            }
                            // if (this._beganPos) {
                            //     this._beganPos -= add;
                            // }
                        }
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        if (scrollPos < this._cyclicPos1) {
                            contentPos.set(this._cyclicPos2, contentPos.y, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                            }
                        }
                        else if (scrollPos > this._cyclicPos2) {
                            contentPos.set(this._cyclicPos1, contentPos.y, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                            }
                        }
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (scrollPos < this._cyclicPos1) {
                            contentPos.set(contentPos.x, this._cyclicPos2, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                            }
                        }
                        else if (scrollPos > this._cyclicPos2) {
                            contentPos.set(contentPos.x, this._cyclicPos1, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                            }
                        }
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (scrollPos > -this._cyclicPos1) {
                            contentPos.set(contentPos.x, -this._cyclicPos2, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].subtract(add);
                            }
                        }
                        else if (scrollPos < -this._cyclicPos2) {
                            contentPos.set(contentPos.x, -this._cyclicPos1, contentPos.z);
                            this.content.setPosition(contentPos);
                            if (this._scrollView.isAutoScrolling()) {
                                this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                            }
                        }
                        break;
                }
            }
            this._calcViewPos();
            var vTop = 0, vRight = 0, vBottom = 0, vLeft = 0;
            if (this._sizeType) {
                vTop = this.viewTop;
                vBottom = this.viewBottom;
            }
            else {
                vRight = this.viewRight;
                vLeft = this.viewLeft;
            }
            if (this._virtual) {
                this.displayData = [];
                var itemPos = void 0;
                var curId = 0;
                var endId = this._numItems - 1;
                if (this._customSize) {
                    var breakFor = false;
                    //如果该item的位置在可视区域内，就推入displayData
                    for (; curId <= endId && !breakFor; curId++) {
                        itemPos = this._calcItemPos(curId);
                        switch (this._align) {
                            case cc_1.Layout.Type.HORIZONTAL:
                                if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                    this.displayData.push(itemPos);
                                }
                                else if (curId != 0 && this.displayData.length > 0) {
                                    breakFor = true;
                                }
                                break;
                            case cc_1.Layout.Type.VERTICAL:
                                if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                    this.displayData.push(itemPos);
                                }
                                else if (curId != 0 && this.displayData.length > 0) {
                                    breakFor = true;
                                }
                                break;
                            case cc_1.Layout.Type.GRID:
                                switch (this._startAxis) {
                                    case cc_1.Layout.AxisDirection.HORIZONTAL:
                                        if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                            this.displayData.push(itemPos);
                                        }
                                        else if (curId != 0 && this.displayData.length > 0) {
                                            breakFor = true;
                                        }
                                        break;
                                    case cc_1.Layout.AxisDirection.VERTICAL:
                                        if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                            this.displayData.push(itemPos);
                                        }
                                        else if (curId != 0 && this.displayData.length > 0) {
                                            breakFor = true;
                                        }
                                        break;
                                }
                                break;
                        }
                    }
                }
                else {
                    var ww = this._itemSize.width + this._columnGap;
                    var hh = this._itemSize.height + this._lineGap;
                    switch (this._alignCalcType) {
                        case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                            curId = (vLeft - this._leftGap) / ww;
                            endId = (vRight - this._leftGap) / ww;
                            break;
                        case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                            curId = (-vRight - this._rightGap) / ww;
                            endId = (-vLeft - this._rightGap) / ww;
                            break;
                        case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                            curId = (-vTop - this._topGap) / hh;
                            endId = (-vBottom - this._topGap) / hh;
                            break;
                        case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                            curId = (vBottom - this._bottomGap) / hh;
                            endId = (vTop - this._bottomGap) / hh;
                            break;
                    }
                    curId = Math.floor(curId) * this._colLineNum;
                    endId = Math.ceil(endId) * this._colLineNum;
                    endId--;
                    if (curId < 0)
                        curId = 0;
                    if (endId >= this._numItems)
                        endId = this._numItems - 1;
                    for (; curId <= endId; curId++) {
                        this.displayData.push(this._calcItemPos(curId));
                    }
                }
                // console.log("xxx _onScrolling", this.displayData);
                this._delRedundantItem();
                if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                    this._lastDisplayData = [];
                    return;
                }
                // console.warn("xxx _onScrolling 22", this.displayData);
                this.firstListId = this.displayData[0].id;
                this.displayItemNum = this.displayData.length;
                var len = this._lastDisplayData.length;
                var haveDataChange = this.displayItemNum != len;
                if (haveDataChange) {
                    // 如果是逐帧渲染，需要排序
                    if (this.frameByFrameRenderNum > 0) {
                        this._lastDisplayData.sort(function (a, b) { return a - b; });
                    }
                    // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
                    haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
                }
                // console.warn("xxx _onScrolling 333", this.getItemByListId(0), this.getItemByListId(1));
                if (this._forceUpdate || haveDataChange) { //如果是强制更新
                    if (this.frameByFrameRenderNum > 0) {
                        // if (this._updateDone) {
                        // this._lastDisplayData = [];
                        //逐帧渲染
                        if (this._numItems > 0) {
                            if (!this._updateDone) {
                                this._doneAfterUpdate = true;
                            }
                            else {
                                this._updateCounter = 0;
                            }
                            this._updateDone = false;
                        }
                        else {
                            this._updateCounter = 0;
                            this._updateDone = true;
                        }
                        // }
                    }
                    else {
                        //直接渲染
                        this._lastDisplayData = [];
                        // console.log('List Display Data II::', this.displayData);
                        for (var c = 0; c < this.displayItemNum; c++) {
                            this._createOrUpdateItem(this.displayData[c]);
                        }
                        this._forceUpdate = false;
                    }
                }
                this._calcNearestItem();
            }
        };
        //计算可视范围
        List_1.prototype._calcViewPos = function () {
            var scrollPos = this.content.getPosition();
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                    this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                    this.viewRight = this.viewLeft + this._thisNodeUt.width;
                    this.elasticRight = this.viewRight > this._contentUt.width ? Math.abs(this.viewRight - this._contentUt.width) : 0;
                    this.viewRight += this.elasticRight;
                    // console.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                    this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                    this.viewLeft = this.viewRight - this._thisNodeUt.width;
                    this.elasticLeft = this.viewLeft < -this._contentUt.width ? Math.abs(this.viewLeft + this._contentUt.width) : 0;
                    this.viewLeft -= this.elasticLeft;
                    // console.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                    this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                    this.viewBottom = this.viewTop - this._thisNodeUt.height;
                    this.elasticBottom = this.viewBottom < -this._contentUt.height ? Math.abs(this.viewBottom + this._contentUt.height) : 0;
                    this.viewBottom += this.elasticBottom;
                    // console.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                    this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                    this.viewTop = this.viewBottom + this._thisNodeUt.height;
                    this.elasticTop = this.viewTop > this._contentUt.height ? Math.abs(this.viewTop - this._contentUt.height) : 0;
                    this.viewTop -= this.elasticTop;
                    // console.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                    break;
            }
        };
        //计算位置 根据id
        List_1.prototype._calcItemPos = function (id) {
            var width = 0, height = 0, top = 0, bottom = 0, left = 0, right = 0, itemX = 0, itemY = 0;
            switch (this._align) {
                case cc_1.Layout.Type.HORIZONTAL:
                    switch (this._horizontalDir) {
                        case cc_1.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                            if (this._customSize) {
                                var fixed = this._getFixedSize(id);
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                                var cs = this._customSize[id];
                                width = (cs > 0 ? cs : this._itemSize.width);
                            }
                            else {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                                width = this._itemSize.width;
                            }
                            if (this.lackCenter) {
                                left -= this._leftGap;
                                var offset = (this._contentUt.width / 2) - (this._allItemSizeNoEdge / 2);
                                left += offset;
                            }
                            right = left + width;
                            return {
                                id: id,
                                left: left,
                                right: right,
                                x: left + (this._itemTmpUt.anchorX * width),
                                y: this._itemTmp.y,
                            };
                        }
                        case cc_1.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                            if (this._customSize) {
                                var fixed = this._getFixedSize(id);
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                                var cs = this._customSize[id];
                                width = (cs > 0 ? cs : this._itemSize.width);
                            }
                            else {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                                width = this._itemSize.width;
                            }
                            if (this.lackCenter) {
                                right += this._rightGap;
                                var offset = (this._contentUt.width / 2) - (this._allItemSizeNoEdge / 2);
                                right -= offset;
                            }
                            left = right - width;
                            return {
                                id: id,
                                right: right,
                                left: left,
                                x: left + (this._itemTmpUt.anchorX * width),
                                y: this._itemTmp.y,
                            };
                        }
                    }
                    break;
                case cc_1.Layout.Type.VERTICAL: {
                    switch (this._verticalDir) {
                        case cc_1.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                            if (this._customSize) {
                                var fixed = this._getFixedSize(id);
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                                var cs = this._customSize[id];
                                height = (cs > 0 ? cs : this._itemSize.height);
                            }
                            else {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                                height = this._itemSize.height;
                            }
                            if (this.lackCenter) {
                                top += this._topGap;
                                var offset = (this._contentUt.height / 2) - (this._allItemSizeNoEdge / 2);
                                top -= offset;
                            }
                            bottom = top - height;
                            return {
                                id: id,
                                top: top,
                                bottom: bottom,
                                x: this._itemTmp.x,
                                y: bottom + (this._itemTmpUt.anchorY * height),
                            };
                        }
                        case cc_1.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                            if (this._customSize) {
                                var fixed = this._getFixedSize(id);
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                                var cs = this._customSize[id];
                                height = (cs > 0 ? cs : this._itemSize.height);
                            }
                            else {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                                height = this._itemSize.height;
                            }
                            if (this.lackCenter) {
                                bottom -= this._bottomGap;
                                var offset = (this._contentUt.height / 2) - (this._allItemSizeNoEdge / 2);
                                bottom += offset;
                            }
                            top = bottom + height;
                            return {
                                id: id,
                                top: top,
                                bottom: bottom,
                                x: this._itemTmp.x,
                                y: bottom + (this._itemTmpUt.anchorY * height),
                            };
                            break;
                        }
                    }
                }
                case cc_1.Layout.Type.GRID: {
                    var colLine = Math.floor(id / this._colLineNum);
                    switch (this._startAxis) {
                        case cc_1.Layout.AxisDirection.HORIZONTAL: {
                            switch (this._verticalDir) {
                                case cc_1.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                    top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                    bottom = top - this._itemSize.height;
                                    itemY = bottom + (this._itemTmpUt.anchorY * this._itemSize.height);
                                    break;
                                }
                                case cc_1.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                    bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                    top = bottom + this._itemSize.height;
                                    itemY = bottom + (this._itemTmpUt.anchorY * this._itemSize.height);
                                    break;
                                }
                            }
                            itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                            switch (this._horizontalDir) {
                                case cc_1.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                    itemX += (this._itemTmpUt.anchorX * this._itemSize.width);
                                    itemX -= (this._contentUt.anchorX * this._contentUt.width);
                                    break;
                                }
                                case cc_1.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                    itemX += ((1 - this._itemTmpUt.anchorX) * this._itemSize.width);
                                    itemX -= ((1 - this._contentUt.anchorX) * this._contentUt.width);
                                    itemX *= -1;
                                    break;
                                }
                            }
                            return {
                                id: id,
                                top: top,
                                bottom: bottom,
                                x: itemX,
                                y: itemY,
                            };
                        }
                        case cc_1.Layout.AxisDirection.VERTICAL: {
                            switch (this._horizontalDir) {
                                case cc_1.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                    left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                    right = left + this._itemSize.width;
                                    itemX = left + (this._itemTmpUt.anchorX * this._itemSize.width);
                                    itemX -= (this._contentUt.anchorX * this._contentUt.width);
                                    break;
                                }
                                case cc_1.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                    right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                    left = right - this._itemSize.width;
                                    itemX = left + (this._itemTmpUt.anchorX * this._itemSize.width);
                                    itemX += ((1 - this._contentUt.anchorX) * this._contentUt.width);
                                    break;
                                }
                            }
                            itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                            switch (this._verticalDir) {
                                case cc_1.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                    itemY -= ((1 - this._itemTmpUt.anchorY) * this._itemSize.height);
                                    itemY += ((1 - this._contentUt.anchorY) * this._contentUt.height);
                                    break;
                                }
                                case cc_1.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                    itemY -= ((this._itemTmpUt.anchorY) * this._itemSize.height);
                                    itemY += (this._contentUt.anchorY * this._contentUt.height);
                                    itemY *= -1;
                                    break;
                                }
                            }
                            return {
                                id: id,
                                left: left,
                                right: right,
                                x: itemX,
                                y: itemY,
                            };
                        }
                    }
                    break;
                }
            }
        };
        //计算已存在的Item的位置
        List_1.prototype._calcExistItemPos = function (id) {
            var item = this.getItemByListId(id);
            if (!item)
                return null;
            var ut = item.getComponent(cc_1.UITransform);
            var pos = item.getPosition();
            var data = {
                id: id,
                x: pos.x,
                y: pos.y,
            };
            if (this._sizeType) {
                data.top = pos.y + (ut.height * (1 - ut.anchorY));
                data.bottom = pos.y - (ut.height * ut.anchorY);
            }
            else {
                data.left = pos.x - (ut.width * ut.anchorX);
                data.right = pos.x + (ut.width * (1 - ut.anchorX));
            }
            return data;
        };
        //获取Item位置
        List_1.prototype.getItemPos = function (id) {
            if (this._virtual)
                return this._calcItemPos(id);
            else {
                if (this.frameByFrameRenderNum)
                    return this._calcItemPos(id);
                else
                    return this._calcExistItemPos(id);
            }
        };
        //获取固定尺寸
        List_1.prototype._getFixedSize = function (listId) {
            if (!this._customSize)
                return null;
            if (listId == null)
                listId = this._numItems;
            var fixed = 0;
            var count = 0;
            for (var id in this._customSize) {
                if (parseInt(id) < listId) {
                    fixed += this._customSize[id];
                    count++;
                }
            }
            return {
                val: fixed,
                count: count,
            };
        };
        //滚动结束时..
        List_1.prototype._onScrollBegan = function () {
            this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
        };
        //滚动结束时..
        List_1.prototype._onScrollEnded = function () {
            var t = this;
            t._curScrollIsTouch = false;
            if (t.scrollToListId != null) {
                t.scrollToListId = null;
            }
            t._onScrolling();
            if (t._slideMode == SlideType.ADHERING &&
                !t.adhering) {
                // console.log("xxxx _onScrollEnded", t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
                t.adhere();
            }
            else if (t._slideMode == SlideType.PAGE) {
                if (t._beganPos != null && t._curScrollIsTouch) {
                    this._pageAdhere();
                }
                else {
                    t.adhere();
                }
            }
        };
        // 触摸时
        List_1.prototype._onTouchStart = function (ev, captureListeners) {
            if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners))
                return;
            this._curScrollIsTouch = true;
            var isMe = ev.eventPhase === cc_1.Event.AT_TARGET && ev.target === this.node;
            if (!isMe) {
                var itemNode = ev.target;
                while (itemNode._listId == null && itemNode.parent)
                    itemNode = itemNode.parent;
                this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
            }
        };
        //触摸抬起时..
        List_1.prototype._onTouchUp = function () {
            var t = this;
            t._scrollPos = null;
            if (t._slideMode == SlideType.ADHERING) {
                if (this.adhering)
                    this._adheringBarrier = true;
                t.adhere();
            }
            else if (t._slideMode == SlideType.PAGE) {
                if (t._beganPos != null) {
                    this._pageAdhere();
                }
                else {
                    t.adhere();
                }
            }
            this._scrollItem = null;
        };
        List_1.prototype._onTouchCancelled = function (ev, captureListeners) {
            var t = this;
            if (t._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate)
                return;
            t._scrollPos = null;
            if (t._slideMode == SlideType.ADHERING) {
                if (t.adhering)
                    t._adheringBarrier = true;
                t.adhere();
            }
            else if (t._slideMode == SlideType.PAGE) {
                if (t._beganPos != null) {
                    t._pageAdhere();
                }
                else {
                    t.adhere();
                }
            }
            this._scrollItem = null;
        };
        //当尺寸改变
        List_1.prototype._onSizeChanged = function () {
            if (this.checkInited(false))
                this._onScrolling();
        };
        //当Item自适应
        List_1.prototype._onItemAdaptive = function (item) {
            var ut = item.getComponent(cc_1.UITransform);
            // if (this.checkInited(false)) {
            if ((!this._sizeType && ut.width != this._itemSize.width)
                || (this._sizeType && ut.height != this._itemSize.height)) {
                if (!this._customSize)
                    this._customSize = {};
                var val = this._sizeType ? ut.height : ut.width;
                if (this._customSize[item._listId] != val) {
                    this._customSize[item._listId] = val;
                    this._resizeContent();
                    // this.content!.children.forEach((child: Node) => {
                    //     this._updateItemPos(child);
                    // });
                    this.updateAll();
                    // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
                    if (this._scrollToListId != null) {
                        this._scrollPos = null;
                        this.unschedule(this._scrollToSo);
                        this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - ((new Date()).getTime() / 1000)));
                    }
                }
            }
            // }
        };
        //PAGE粘附
        List_1.prototype._pageAdhere = function () {
            var t = this;
            if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0))
                return;
            var curPos = t._sizeType ? t.viewTop : t.viewLeft;
            var dis = (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width) * t.pageDistance;
            var canSkip = Math.abs(t._beganPos - curPos) > dis;
            if (canSkip) {
                var timeInSecond = .5;
                switch (t._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (t._beganPos > curPos) {
                            t.prePage(timeInSecond);
                            // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                        }
                        else {
                            t.nextPage(timeInSecond);
                            // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                        }
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (t._beganPos < curPos) {
                            t.prePage(timeInSecond);
                        }
                        else {
                            t.nextPage(timeInSecond);
                        }
                        break;
                }
            }
            else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
                t.adhere();
            }
            t._beganPos = null;
        };
        //粘附
        List_1.prototype.adhere = function () {
            var t = this;
            if (!t.checkInited())
                return;
            if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
                return;
            t.adhering = true;
            t._calcNearestItem();
            var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t._thisNodeUt.height : t._thisNodeUt.width);
            var timeInSecond = .7;
            t.scrollTo(t.nearestListId, timeInSecond, offset);
        };
        //Update..
        List_1.prototype.update = function () {
            if (this.frameByFrameRenderNum <= 0 || this._updateDone)
                return;
            // console.log("xxxx update", this.displayData.length, this._updateCounter, this.displayData);
            if (this._virtual) {
                var len = (this._updateCounter + this.frameByFrameRenderNum) > this.displayItemNum ? this.displayItemNum : (this._updateCounter + this.frameByFrameRenderNum);
                for (var n = this._updateCounter; n < len; n++) {
                    var data = this.displayData[n];
                    if (data) {
                        this._createOrUpdateItem(data);
                    }
                }
                if (this._updateCounter >= this.displayItemNum - 1) { //最后一个
                    if (this._doneAfterUpdate) {
                        this._updateCounter = 0;
                        this._updateDone = false;
                        // if (!this._scrollView.isScrolling())
                        this._doneAfterUpdate = false;
                    }
                    else {
                        this._updateDone = true;
                        this._delRedundantItem();
                        this._forceUpdate = false;
                        this._calcNearestItem();
                        if (this.slideMode == SlideType.PAGE)
                            this.curPageNum = this.nearestListId;
                    }
                }
                else {
                    this._updateCounter += this.frameByFrameRenderNum;
                }
            }
            else {
                if (this._updateCounter < this._numItems) {
                    var len = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                    for (var n = this._updateCounter; n < len; n++) {
                        this._createOrUpdateItem2(n);
                    }
                    this._updateCounter += this.frameByFrameRenderNum;
                }
                else {
                    this._updateDone = true;
                    this._calcNearestItem();
                    if (this.slideMode == SlideType.PAGE)
                        this.curPageNum = this.nearestListId;
                }
            }
        };
        /**
         * 创建或更新Item（虚拟列表用）
         * @param {Object} data 数据
         */
        List_1.prototype._createOrUpdateItem = function (data) {
            var item = this.getItemByListId(data.id);
            if (!item) { //如果不存在
                var canGet = this._pool.size() > 0;
                if (canGet) {
                    item = this._pool.get();
                    // console.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
                }
                else {
                    item = (0, cc_1.instantiate)(this._itemTmp);
                    // console.log('新建::', data.id, item);
                }
                if (!canGet || !(0, cc_1.isValid)(item)) {
                    item = (0, cc_1.instantiate)(this._itemTmp);
                    canGet = false;
                }
                if (item._listId != data.id) {
                    item._listId = data.id;
                    var ut = item.getComponent(cc_1.UITransform);
                    ut.setContentSize(this._itemSize);
                }
                item.setPosition(new cc_1.Vec3(data.x, data.y, 0));
                this._resetItemSize(item);
                this.content.addChild(item);
                if (canGet && this._needUpdateWidget) {
                    var widget = item.getComponent(cc_1.Widget);
                    if (widget)
                        widget.updateAlignment();
                }
                item.setSiblingIndex(this.content.children.length - 1);
                var listItem = item.getComponent(ListItem_1.default);
                item['listItem'] = listItem;
                if (listItem) {
                    listItem.listId = data.id;
                    listItem.list = this;
                    listItem._registerEvent();
                }
                if (this.renderEvent) {
                    cc_1.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
                }
            }
            else if (this._forceUpdate && this.renderEvent) { //强制更新
                item.setPosition(new cc_1.Vec3(data.x, data.y, 0));
                this._resetItemSize(item);
                // console.log('ADD::', data.id, item);
                if (this.renderEvent) {
                    cc_1.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
                }
            }
            this._resetItemSize(item);
            this._updateListItem(item['listItem']);
            if (this._lastDisplayData.indexOf(data.id) < 0) {
                this._lastDisplayData.push(data.id);
            }
        };
        //创建或更新Item（非虚拟列表用）
        List_1.prototype._createOrUpdateItem2 = function (listId) {
            var item = this.content.children[listId];
            var listItem = null;
            if (!item) { //如果不存在
                item = (0, cc_1.instantiate)(this._itemTmp);
                item._listId = listId;
                this.content.addChild(item);
                listItem = item.getComponent(ListItem_1.default);
                item['listItem'] = listItem;
                if (listItem) {
                    listItem.listId = listId;
                    listItem.list = this;
                    listItem._registerEvent();
                }
                if (this.renderEvent) {
                    cc_1.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
                }
            }
            else if (this._forceUpdate && this.renderEvent) { //强制更新
                item._listId = listId;
                if (listItem)
                    listItem.listId = listId;
                if (this.renderEvent) {
                    cc_1.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
                }
            }
            this._updateListItem(listItem);
            if (this._lastDisplayData.indexOf(listId) < 0) {
                this._lastDisplayData.push(listId);
            }
        };
        List_1.prototype._updateListItem = function (listItem) {
            if (!listItem)
                return;
            if (this.selectedMode > SelectedType.NONE) {
                var item = listItem.node;
                switch (this.selectedMode) {
                    case SelectedType.SINGLE:
                        listItem.selected = this.selectedId == item._listId;
                        break;
                    case SelectedType.MULT:
                        listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                        break;
                }
            }
        };
        //仅虚拟列表用
        List_1.prototype._resetItemSize = function (item) {
            return;
            var size;
            var ut = item.getComponent(cc_1.UITransform);
            if (this._customSize && this._customSize[item._listId]) {
                size = this._customSize[item._listId];
            }
            else {
                if (this._colLineNum > 1)
                    ut.setContentSize(this._itemSize);
                else
                    size = this._sizeType ? this._itemSize.height : this._itemSize.width;
            }
            if (size) {
                if (this._sizeType)
                    ut.height = size;
                else
                    ut.width = size;
            }
        };
        /**
         * 更新Item位置
         * @param {Number||Node} listIdOrItem
         */
        List_1.prototype._updateItemPos = function (listIdOrItem) {
            var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
            var pos = this.getItemPos(item._listId);
            item.setPosition(pos.x, pos.y);
        };
        /**
         * 设置多选
         * @param {Array} args 可以是单个listId，也可是个listId数组
         * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
         */
        List_1.prototype.setMultSelected = function (args, bool) {
            var t = this;
            if (!t.checkInited())
                return;
            if (!Array.isArray(args)) {
                args = [args];
            }
            if (bool == null) {
                t.multSelected = args;
            }
            else {
                var listId = void 0, sub = void 0;
                if (bool) {
                    for (var n = args.length - 1; n >= 0; n--) {
                        listId = args[n];
                        sub = t.multSelected.indexOf(listId);
                        if (sub < 0) {
                            t.multSelected.push(listId);
                        }
                    }
                }
                else {
                    for (var n = args.length - 1; n >= 0; n--) {
                        listId = args[n];
                        sub = t.multSelected.indexOf(listId);
                        if (sub >= 0) {
                            t.multSelected.splice(sub, 1);
                        }
                    }
                }
            }
            t._forceUpdate = true;
            t._onScrolling();
        };
        /**
         * 获取多选数据
         * @returns
         */
        List_1.prototype.getMultSelected = function () {
            return this.multSelected;
        };
        /**
         * 多选是否有选择
         * @param {number} listId 索引
         * @returns
         */
        List_1.prototype.hasMultSelected = function (listId) {
            return this.multSelected && this.multSelected.indexOf(listId) >= 0;
        };
        /**
         * 更新指定的Item
         * @param {Array} args 单个listId，或者数组
         * @returns
         */
        List_1.prototype.updateItem = function (args) {
            if (!this.checkInited())
                return;
            if (!Array.isArray(args)) {
                args = [args];
            }
            for (var n = 0, len = args.length; n < len; n++) {
                var listId = args[n];
                var item = this.getItemByListId(listId);
                if (item)
                    cc_1.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
        };
        /**
         * 更新全部
         */
        List_1.prototype.updateAll = function () {
            if (!this.checkInited())
                return;
            this.numItems = this.numItems;
        };
        /**
         * 根据ListID获取Item
         * @param {Number} listId
         * @returns
         */
        List_1.prototype.getItemByListId = function (listId) {
            if (this.content) {
                for (var n = this.content.children.length - 1; n >= 0; n--) {
                    var item = this.content.children[n];
                    if (item._listId == listId)
                        return item;
                }
            }
            return null;
        };
        /**
         * 获取在显示区域外的Item
         * @returns
         */
        List_1.prototype._getOutsideItem = function () {
            var item;
            var result = [];
            for (var n = this.content.children.length - 1; n >= 0; n--) {
                item = this.content.children[n];
                if (!this.displayData.find(function (d) { return d.id == item._listId; })) {
                    result.push(item);
                }
            }
            return result;
        };
        //删除显示区域以外的Item
        List_1.prototype._delRedundantItem = function () {
            if (this._virtual) {
                var arr = this._getOutsideItem();
                for (var n = arr.length - 1; n >= 0; n--) {
                    var item = arr[n];
                    if (this._scrollItem && item._listId == this._scrollItem._listId)
                        continue;
                    item.isCached = true;
                    this._pool.put(item);
                    for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                        if (this._lastDisplayData[m] == item._listId) {
                            this._lastDisplayData.splice(m, 1);
                            break;
                        }
                    }
                    // console.log('存入::', item["_listId"] , '    pool.length =', this._pool.size());
                }
            }
            else {
                while (this.content.children.length > this._numItems) {
                    this._delSingleItem(this.content.children[this.content.children.length - 1]);
                }
            }
        };
        //删除单个Item
        List_1.prototype._delSingleItem = function (item) {
            // console.log('DEL::', item['_listId'], item);
            item.removeFromParent();
            if (item.destroy)
                item.destroy();
            item = null;
        };
        /**
         * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
         * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
         */
        List_1.prototype.aniDelItem = function (listId, callFunc, aniType) {
            var t = this;
            // console.log("xxx aniDelItem", listId, aniType);
            if (!t.checkInited() || t.cyclic || !t._virtual)
                return console.error('This function is not allowed to be called!');
            if (!callFunc)
                return console.error('CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!');
            if (t._aniDelRuning)
                return console.warn('Please wait for the current deletion to finish!');
            var item = t.getItemByListId(listId);
            var listItem;
            if (!item) {
                callFunc(listId);
                return;
            }
            else {
                listItem = item.getComponent(ListItem_1.default);
            }
            t._aniDelRuning = true;
            t._aniDelCB = callFunc;
            t._aniDelItem = item;
            t._aniDelBeforePos = item.position;
            t._aniDelBeforeScale = item.scale;
            var curLastId = t.displayData[t.displayData.length - 1].id;
            var resetSelectedId = listItem.selected;
            listItem.showAni(aniType, function () {
                //判断有没有下一个，如果有的话，创建粗来
                var newId = 0;
                if (curLastId < t._numItems - 2) {
                    newId = curLastId + 1;
                }
                if (newId != null) {
                    var newData = t._calcItemPos(newId);
                    t.displayData.push(newData);
                    if (t._virtual)
                        t._createOrUpdateItem(newData);
                    else
                        t._createOrUpdateItem2(newId);
                }
                else
                    t._numItems--;
                if (t.selectedMode == SelectedType.SINGLE) {
                    if (resetSelectedId) {
                        t._selectedId = -1;
                    }
                    else if (t._selectedId - 1 >= 0) {
                        t._selectedId--;
                    }
                }
                else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
                    var sub = t.multSelected.indexOf(listId);
                    if (sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                    //多选的数据，在其后的全部减一
                    for (var n = t.multSelected.length - 1; n >= 0; n--) {
                        var id = t.multSelected[n];
                        if (id >= listId)
                            t.multSelected[n]--;
                    }
                }
                if (t._customSize) {
                    if (t._customSize[listId])
                        delete t._customSize[listId];
                    var newCustomSize = {};
                    var size = void 0;
                    for (var id in t._customSize) {
                        size = t._customSize[id];
                        var idNumber = parseInt(id);
                        newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
                    }
                    t._customSize = newCustomSize;
                }
                //后面的Item向前怼的动效
                var sec = .2333;
                var twe, haveCB = false;
                for (var n = newId != null ? newId : curLastId; n >= listId + 1; n--) {
                    item = t.getItemByListId(n);
                    if (item) {
                        var posData = t._calcItemPos(n - 1);
                        twe = (0, cc_1.tween)(item)
                            .to(sec, { position: new cc_1.Vec3(posData.x, posData.y, 0) });
                        if (n <= listId + 1) {
                            haveCB = true;
                            twe.call(function () {
                                t._aniDelRuning = false;
                                callFunc(listId);
                                delete t._aniDelCB;
                            });
                        }
                        twe.start();
                    }
                }
                if (!haveCB) {
                    t._aniDelRuning = false;
                    callFunc(listId);
                    t._aniDelCB = null;
                }
            }, true);
        };
        /**
         * 滚动到..
         * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
         * @param {Number} timeInSecond 时间
         * @param {Number} offset 索引目标位置偏移，0-1
         * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
         */
        List_1.prototype.scrollTo = function (listId, timeInSecond, offset, overStress) {
            if (timeInSecond === void 0) { timeInSecond = .5; }
            if (offset === void 0) { offset = null; }
            if (overStress === void 0) { overStress = false; }
            var t = this;
            if (!t.checkInited(false))
                return;
            // t._scrollView.stopAutoScroll();
            if (timeInSecond == null) //默认0.5
                timeInSecond = .5;
            else if (timeInSecond < 0)
                timeInSecond = 0;
            if (listId < 0)
                listId = 0;
            else if (listId >= t._numItems)
                listId = t._numItems - 1;
            // 以防设置了numItems之后layout的尺寸还未更新
            if (!t._virtual && t._layout && t._layout.enabled)
                t._layout.updateLayout();
            var pos = t.getItemPos(listId);
            if (!pos) {
                return console.error('pos is null', listId);
            }
            var targetX, targetY;
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    targetX = pos.left;
                    if (offset != null)
                        targetX -= t._thisNodeUt.width * offset;
                    else
                        targetX -= t._leftGap;
                    pos = new cc_1.Vec3(targetX, 0, 0);
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    targetX = pos.right - t._thisNodeUt.width;
                    if (offset != null)
                        targetX += t._thisNodeUt.width * offset;
                    else
                        targetX += t._rightGap;
                    pos = new cc_1.Vec3(targetX + t._contentUt.width, 0, 0);
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    targetY = pos.top;
                    if (offset != null)
                        targetY += t._thisNodeUt.height * offset;
                    else
                        targetY += t._topGap;
                    pos = new cc_1.Vec3(0, -targetY, 0);
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    targetY = pos.bottom + t._thisNodeUt.height;
                    if (offset != null)
                        targetY -= t._thisNodeUt.height * offset;
                    else
                        targetY -= t._bottomGap;
                    pos = new cc_1.Vec3(0, -targetY + t._contentUt.height, 0);
                    break;
            }
            var viewPos = t.content.getPosition();
            viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
            var comparePos = t._sizeType ? pos.y : pos.x;
            var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
            // console.log(runScroll, t._scrollPos, viewPos, comparePos)
            // t._scrollView.stopAutoScroll();
            if (runScroll) {
                t._scrollView.scrollToOffset(pos, timeInSecond);
                t._scrollToListId = listId;
                t._scrollToEndTime = ((new Date()).getTime() / 1000) + timeInSecond;
                // console.log(listId, t.content!.getPosition(), pos);
                t._scrollToSo = t.scheduleOnce(function () {
                    if (!t._adheringBarrier) {
                        t.adhering = t._adheringBarrier = false;
                    }
                    t._scrollPos = 0;
                    t._scrollToListId = 0;
                    t._scrollToEndTime = 0;
                    t._scrollToSo = 0;
                }, timeInSecond + .1);
                if (timeInSecond <= 0) {
                    t._onScrolling();
                }
            }
        };
        List_1.prototype.disableScroll = function (flag) {
            this.scrollView.enabled = !flag;
        };
        /**
         * 计算当前滚动窗最近的Item
         */
        List_1.prototype._calcNearestItem = function () {
            var t = this;
            t.nearestListId = null;
            var data, center;
            if (t._virtual)
                t._calcViewPos();
            var vTop, vRight, vBottom, vLeft;
            vTop = t.viewTop;
            vRight = t.viewRight;
            vBottom = t.viewBottom;
            vLeft = t.viewLeft;
            var breakFor = false;
            for (var n = 0; n < t.content.children.length && !breakFor; n += t._colLineNum) {
                data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
                if (data) {
                    center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                    switch (t._alignCalcType) {
                        case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                            if (data.right >= vLeft) {
                                t.nearestListId = data.id;
                                if (vLeft > center)
                                    t.nearestListId += t._colLineNum;
                                breakFor = true;
                            }
                            break;
                        case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                            if (data.left <= vRight) {
                                t.nearestListId = data.id;
                                if (vRight < center)
                                    t.nearestListId += t._colLineNum;
                                breakFor = true;
                            }
                            break;
                        case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                            if (data.bottom <= vTop) {
                                t.nearestListId = data.id;
                                if (vTop < center)
                                    t.nearestListId += t._colLineNum;
                                breakFor = true;
                            }
                            break;
                        case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                            if (data.top >= vBottom) {
                                t.nearestListId = data.id;
                                if (vBottom > center)
                                    t.nearestListId += t._colLineNum;
                                breakFor = true;
                            }
                            break;
                    }
                }
            }
            //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
            data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
            if (data && data.id == t._numItems - 1) {
                center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                switch (t._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        if (vRight > center)
                            t.nearestListId = data.id;
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        if (vLeft < center)
                            t.nearestListId = data.id;
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (vBottom < center)
                            t.nearestListId = data.id;
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (vTop > center)
                            t.nearestListId = data.id;
                        break;
                }
            }
            // console.log('t.nearestListId =', t.nearestListId);
        };
        //上一页
        List_1.prototype.prePage = function (timeInSecond) {
            if (timeInSecond === void 0) { timeInSecond = .5; }
            // cc.log('👈');
            if (!this.checkInited())
                return;
            this.skipPage(this.curPageNum - 1, timeInSecond);
        };
        //下一页
        List_1.prototype.nextPage = function (timeInSecond) {
            if (timeInSecond === void 0) { timeInSecond = .5; }
            // cc.log('👉');
            if (!this.checkInited())
                return;
            this.skipPage(this.curPageNum + 1, timeInSecond);
        };
        //跳转到第几页
        List_1.prototype.skipPage = function (pageNum, timeInSecond) {
            var t = this;
            if (!t.checkInited())
                return;
            if (t._slideMode != SlideType.PAGE)
                return console.error('This function is not allowed to be called, Must SlideMode = PAGE!');
            if (pageNum < 0 || pageNum >= t._numItems)
                return;
            if (t.curPageNum == pageNum)
                return;
            // cc.log(pageNum);
            t.curPageNum = pageNum;
            if (t.pageChangeEvent) {
                cc_1.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
            }
            t.scrollTo(pageNum, timeInSecond);
        };
        //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
        List_1.prototype.calcCustomSize = function (numItems) {
            var t = this;
            if (!t.checkInited())
                return;
            if (!t._itemTmp)
                return console.error('Unset template item!');
            if (!t.renderEvent)
                return console.error('Unset Render-Event!');
            t._customSize = {};
            var temp = (0, cc_1.instantiate)(t._itemTmp);
            var ut = temp.getComponent(cc_1.UITransform);
            t.content.addChild(temp);
            for (var n = 0; n < numItems; n++) {
                cc_1.EventHandler.emitEvents([t.renderEvent], temp, n);
                if (ut.height != t._itemSize.height || ut.width != t._itemSize.width) {
                    t._customSize[n] = t._sizeType ? ut.height : ut.width;
                }
            }
            if (!Object.keys(t._customSize).length)
                t._customSize = null;
            temp.removeFromParent();
            if (temp.destroy)
                temp.destroy();
            return t._customSize;
        };
        return List_1;
    }(_classSuper));
    __setFunctionName(_classThis, "List");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _templateType_decorators = [property({ type: (0, cc_1.Enum)(TemplateType), tooltip: '模板类型', })];
        _tmpNode_decorators = [property({
                type: cc_1.Node,
                tooltip: '模板Item',
                visible: function () {
                    // @ts-ignore
                    return this.templateType == TemplateType.NODE;
                }
            })];
        _tmpPrefab_decorators = [property({
                type: cc_1.Prefab,
                tooltip: '模板Item',
                visible: function () {
                    // @ts-ignore
                    return this.templateType == TemplateType.PREFAB;
                }
            })];
        __slideMode_decorators = [property({})];
        _set_slideMode_decorators = [property({
                type: (0, cc_1.Enum)(SlideType),
                tooltip: '滑动模式'
            })];
        _pageDistance_decorators = [property({
                type: cc_1.CCFloat,
                range: [0, 1, .1],
                tooltip: '翻页作用距离',
                slide: true,
                visible: function () {
                    // @ts-ignore
                    return this._slideMode == SlideType.PAGE;
                }
            })];
        _pageChangeEvent_decorators = [property({
                type: cc_1.EventHandler,
                tooltip: '页面改变事件',
                visible: function () {
                    // @ts-ignore
                    return this._slideMode == SlideType.PAGE;
                }
            })];
        __virtual_decorators = [property({})];
        _set_virtual_decorators = [property({
                type: cc_1.CCBoolean,
                tooltip: '是否为虚拟列表（动态列表）'
            })];
        _cyclic_decorators = [property({
                tooltip: '是否为循环列表',
                visible: function () {
                    // @ts-ignore
                    var val = /*this.virtual &&*/ this.slideMode == SlideType.NORMAL;
                    if (!val)
                        // @ts-ignore
                        this.cyclic = false;
                    return val;
                }
            })];
        _lackCenter_decorators = [property({
                tooltip: 'Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）',
                visible: function () {
                    // @ts-ignore
                    return this.virtual;
                }
            })];
        _lackSlide_decorators = [property({
                tooltip: 'Item数量不足以填满Content时，是否可滑动',
                visible: function () {
                    // @ts-ignore
                    var val = this.virtual && !this.lackCenter;
                    if (!val)
                        // @ts-ignore
                        this.lackSlide = false;
                    return val;
                }
            })];
        __updateRate_decorators = [property({ type: cc_1.CCInteger })];
        _set_updateRate_decorators = [property({
                type: cc_1.CCInteger,
                range: [0, 6, 1],
                tooltip: '刷新频率（值越大刷新频率越低、性能越高）',
                slide: true,
            })];
        _frameByFrameRenderNum_decorators = [property({
                type: cc_1.CCInteger,
                range: [0, 12, 1],
                tooltip: '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
                slide: true,
            })];
        _renderEvent_decorators = [property({
                type: cc_1.EventHandler,
                tooltip: '渲染事件（渲染器）',
            })];
        _selectedMode_decorators = [property({
                type: (0, cc_1.Enum)(SelectedType),
                tooltip: '选择模式'
            })];
        _selectedEvent_decorators = [property({
                type: cc_1.EventHandler,
                tooltip: '触发选择事件',
                visible: function () {
                    // @ts-ignore
                    return this.selectedMode > SelectedType.NONE;
                }
            })];
        _repeatEventSingle_decorators = [property({
                tooltip: '是否重复响应单选事件',
                visible: function () {
                    // @ts-ignore
                    return this.selectedMode == SelectedType.SINGLE;
                }
            })];
        _dragEvent_decorators = [property({
                type: cc_1.EventHandler,
                tooltip: '长按拖动触发事件',
                visible: function () {
                    // @ts-ignore
                    return this.selectedMode > SelectedType.NONE;
                }
            })];
        __numItems_decorators = [property({
                serializable: false
            })];
        __esDecorate(_classThis, null, _set_slideMode_decorators, { kind: "setter", name: "slideMode", static: false, private: false, access: { has: function (obj) { return "slideMode" in obj; }, set: function (obj, value) { obj.slideMode = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_virtual_decorators, { kind: "setter", name: "virtual", static: false, private: false, access: { has: function (obj) { return "virtual" in obj; }, set: function (obj, value) { obj.virtual = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_updateRate_decorators, { kind: "setter", name: "updateRate", static: false, private: false, access: { has: function (obj) { return "updateRate" in obj; }, set: function (obj, value) { obj.updateRate = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _templateType_decorators, { kind: "field", name: "templateType", static: false, private: false, access: { has: function (obj) { return "templateType" in obj; }, get: function (obj) { return obj.templateType; }, set: function (obj, value) { obj.templateType = value; } }, metadata: _metadata }, _templateType_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tmpNode_decorators, { kind: "field", name: "tmpNode", static: false, private: false, access: { has: function (obj) { return "tmpNode" in obj; }, get: function (obj) { return obj.tmpNode; }, set: function (obj, value) { obj.tmpNode = value; } }, metadata: _metadata }, _tmpNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tmpPrefab_decorators, { kind: "field", name: "tmpPrefab", static: false, private: false, access: { has: function (obj) { return "tmpPrefab" in obj; }, get: function (obj) { return obj.tmpPrefab; }, set: function (obj, value) { obj.tmpPrefab = value; } }, metadata: _metadata }, _tmpPrefab_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, __slideMode_decorators, { kind: "field", name: "_slideMode", static: false, private: false, access: { has: function (obj) { return "_slideMode" in obj; }, get: function (obj) { return obj._slideMode; }, set: function (obj, value) { obj._slideMode = value; } }, metadata: _metadata }, __slideMode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pageDistance_decorators, { kind: "field", name: "pageDistance", static: false, private: false, access: { has: function (obj) { return "pageDistance" in obj; }, get: function (obj) { return obj.pageDistance; }, set: function (obj, value) { obj.pageDistance = value; } }, metadata: _metadata }, _pageDistance_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pageChangeEvent_decorators, { kind: "field", name: "pageChangeEvent", static: false, private: false, access: { has: function (obj) { return "pageChangeEvent" in obj; }, get: function (obj) { return obj.pageChangeEvent; }, set: function (obj, value) { obj.pageChangeEvent = value; } }, metadata: _metadata }, _pageChangeEvent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, __virtual_decorators, { kind: "field", name: "_virtual", static: false, private: false, access: { has: function (obj) { return "_virtual" in obj; }, get: function (obj) { return obj._virtual; }, set: function (obj, value) { obj._virtual = value; } }, metadata: _metadata }, __virtual_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cyclic_decorators, { kind: "field", name: "cyclic", static: false, private: false, access: { has: function (obj) { return "cyclic" in obj; }, get: function (obj) { return obj.cyclic; }, set: function (obj, value) { obj.cyclic = value; } }, metadata: _metadata }, _cyclic_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lackCenter_decorators, { kind: "field", name: "lackCenter", static: false, private: false, access: { has: function (obj) { return "lackCenter" in obj; }, get: function (obj) { return obj.lackCenter; }, set: function (obj, value) { obj.lackCenter = value; } }, metadata: _metadata }, _lackCenter_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lackSlide_decorators, { kind: "field", name: "lackSlide", static: false, private: false, access: { has: function (obj) { return "lackSlide" in obj; }, get: function (obj) { return obj.lackSlide; }, set: function (obj, value) { obj.lackSlide = value; } }, metadata: _metadata }, _lackSlide_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, __updateRate_decorators, { kind: "field", name: "_updateRate", static: false, private: false, access: { has: function (obj) { return "_updateRate" in obj; }, get: function (obj) { return obj._updateRate; }, set: function (obj, value) { obj._updateRate = value; } }, metadata: _metadata }, __updateRate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _frameByFrameRenderNum_decorators, { kind: "field", name: "frameByFrameRenderNum", static: false, private: false, access: { has: function (obj) { return "frameByFrameRenderNum" in obj; }, get: function (obj) { return obj.frameByFrameRenderNum; }, set: function (obj, value) { obj.frameByFrameRenderNum = value; } }, metadata: _metadata }, _frameByFrameRenderNum_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _renderEvent_decorators, { kind: "field", name: "renderEvent", static: false, private: false, access: { has: function (obj) { return "renderEvent" in obj; }, get: function (obj) { return obj.renderEvent; }, set: function (obj, value) { obj.renderEvent = value; } }, metadata: _metadata }, _renderEvent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectedMode_decorators, { kind: "field", name: "selectedMode", static: false, private: false, access: { has: function (obj) { return "selectedMode" in obj; }, get: function (obj) { return obj.selectedMode; }, set: function (obj, value) { obj.selectedMode = value; } }, metadata: _metadata }, _selectedMode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectedEvent_decorators, { kind: "field", name: "selectedEvent", static: false, private: false, access: { has: function (obj) { return "selectedEvent" in obj; }, get: function (obj) { return obj.selectedEvent; }, set: function (obj, value) { obj.selectedEvent = value; } }, metadata: _metadata }, _selectedEvent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _repeatEventSingle_decorators, { kind: "field", name: "repeatEventSingle", static: false, private: false, access: { has: function (obj) { return "repeatEventSingle" in obj; }, get: function (obj) { return obj.repeatEventSingle; }, set: function (obj, value) { obj.repeatEventSingle = value; } }, metadata: _metadata }, _repeatEventSingle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dragEvent_decorators, { kind: "field", name: "dragEvent", static: false, private: false, access: { has: function (obj) { return "dragEvent" in obj; }, get: function (obj) { return obj.dragEvent; }, set: function (obj, value) { obj.dragEvent = value; } }, metadata: _metadata }, _dragEvent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, __numItems_decorators, { kind: "field", name: "_numItems", static: false, private: false, access: { has: function (obj) { return "_numItems" in obj; }, get: function (obj) { return obj._numItems; }, set: function (obj, value) { obj._numItems = value; } }, metadata: _metadata }, __numItems_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        List = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return List = _classThis;
}();
exports.default = List;
