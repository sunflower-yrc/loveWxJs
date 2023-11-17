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
 * @date 2019/12/9
 * @doc 列表Item组件.
 * 说明：
 *      1、此组件须配合List组件使用。（配套的配套的..）
 * @end
 ******************************************/
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property, disallowMultiple = cc_1._decorator.disallowMultiple, menu = cc_1._decorator.menu, executionOrder = cc_1._decorator.executionOrder;
var cc_1 = require("cc");
var ButtonPlus_1 = require("./ButtonPlus");
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
    SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
})(SelectedType || (SelectedType = {}));
var ListItem = function () {
    var _classDecorators = [ccclass, disallowMultiple(), menu('List Item'), executionOrder(-5001)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _icon_decorators;
    var _icon_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _selectedMode_decorators;
    var _selectedMode_initializers = [];
    var _selectedFlag_decorators;
    var _selectedFlag_initializers = [];
    var _selectedSpriteFrame_decorators;
    var _selectedSpriteFrame_initializers = [];
    var _adaptiveSize_decorators;
    var _adaptiveSize_initializers = [];
    var ListItem = _classThis = /** @class */ (function (_super) {
        __extends(ListItem_1, _super);
        function ListItem_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //图标
            _this.icon = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _icon_initializers, null));
            //标题
            _this.title = __runInitializers(_this, _title_initializers, null);
            //选择模式
            _this.selectedMode = __runInitializers(_this, _selectedMode_initializers, SelectedType.NONE);
            //被选标志
            _this.selectedFlag = __runInitializers(_this, _selectedFlag_initializers, null);
            //被选择的SpriteFrame
            _this.selectedSpriteFrame = __runInitializers(_this, _selectedSpriteFrame_initializers, null);
            //未被选择的SpriteFrame
            _this._unselectedSpriteFrame = null;
            //自适应尺寸
            _this.adaptiveSize = __runInitializers(_this, _adaptiveSize_initializers, false);
            //选择
            _this._selected = false;
            //依赖的List组件
            _this.list = null;
            //是否已经注册过事件
            _this._eventReg = false;
            //序列id
            _this.listId = 0;
            return _this;
        }
        Object.defineProperty(ListItem_1.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (val) {
                this._selected = val;
                cc_1.Tween;
                if (!this.selectedFlag)
                    return;
                switch (this.selectedMode) {
                    case SelectedType.TOGGLE:
                        this.selectedFlag.active = val;
                        break;
                    case SelectedType.SWITCH:
                        var sp = this.selectedFlag.getComponent(cc_1.Sprite);
                        if (sp) {
                            sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                        }
                        break;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItem_1.prototype, "btnCom", {
            get: function () {
                if (!this._btnCom) {
                    this._btnCom = this.node.getComponent(cc_1.Button);
                    if (this.node.getComponent(ButtonPlus_1.default)) {
                        this._btnCom = this.node.getComponent(ButtonPlus_1.default);
                    }
                }
                return this._btnCom;
            },
            enumerable: false,
            configurable: true
        });
        ListItem_1.prototype.onLoad = function () {
            // //没有按钮组件的话，selectedFlag无效
            // if (!this.btnCom)
            //     this.selectedMode == SelectedType.NONE;
            //有选择模式时，保存相应的东西
            if (this.selectedMode == SelectedType.SWITCH) {
                var com = this.selectedFlag.getComponent(cc_1.Sprite);
                com && (this._unselectedSpriteFrame = com.spriteFrame);
            }
        };
        ListItem_1.prototype.onDestroy = function () {
            this.node.off(cc_1.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
        };
        ListItem_1.prototype._registerEvent = function () {
            if (!this._eventReg) {
                if (this.btnCom && this.list.selectedMode > 0) {
                    this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
                }
                if (this.btnCom && this.btnCom instanceof ButtonPlus_1.default) {
                    this.btnCom.addLongClick(this.onLongPressThis.bind(this), this.onLongPressEndThis.bind(this), this);
                }
                if (this.adaptiveSize) {
                    this.node.on(cc_1.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
                }
                this._eventReg = true;
            }
        };
        ListItem_1.prototype._onSizeChange = function () {
            this.list._onItemAdaptive(this.node);
        };
        /**
         * 创建事件
         * @param {cc.Component} component 组件脚本
         * @param {string} handlerName 触发函数名称
         * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
         * @returns cc.Component.EventHandler
         */
        ListItem_1.prototype.createEvt = function (component, handlerName, node) {
            if (!component.isValid)
                return; //有些异步加载的，节点以及销毁了。
            component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
            var evt = new cc_1.EventHandler();
            evt.target = node || component.node;
            evt.component = component['comName'];
            evt.handler = handlerName;
            return evt;
        };
        ListItem_1.prototype.showAni = function (aniType, callFunc, del) {
            var t = this;
            var twe;
            var ut = t.node.getComponent(cc_1.UITransform);
            switch (aniType) {
                case 0: //向上消失
                    twe = (0, cc_1.tween)(t.node)
                        .to(.2, { scale: new cc_1.Vec3(.7, .7) })
                        .by(.3, { position: new cc_1.Vec3(0, ut.height * 2) });
                    break;
                case 1: //向右消失
                    twe = (0, cc_1.tween)(t.node)
                        .to(.2, { scale: new cc_1.Vec3(.7, .7) })
                        .by(.3, { position: new cc_1.Vec3(ut.width * 2, 0) });
                    break;
                case 2: //向下消失
                    twe = (0, cc_1.tween)(t.node)
                        .to(.2, { scale: new cc_1.Vec3(.7, .7) })
                        .by(.3, { position: new cc_1.Vec3(0, ut.height * -2) });
                    break;
                case 3: //向左消失
                    twe = (0, cc_1.tween)(t.node)
                        .to(.2, { scale: new cc_1.Vec3(.7, .7) })
                        .by(.3, { position: new cc_1.Vec3(ut.width * -2, 0) });
                    break;
                default: //默认：缩小消失
                    twe = (0, cc_1.tween)(t.node)
                        .to(.3, { scale: new cc_1.Vec3(.1, .1) });
                    break;
            }
            if (callFunc || del) {
                twe.call(function () {
                    if (del) {
                        t.list._delSingleItem(t.node);
                        for (var n = t.list.displayData.length - 1; n >= 0; n--) {
                            if (t.list.displayData[n].id == t.listId) {
                                t.list.displayData.splice(n, 1);
                                break;
                            }
                        }
                    }
                    callFunc();
                });
            }
            twe.start();
        };
        ListItem_1.prototype.onClickThis = function () {
            this.list.selectedId = this.listId;
        };
        ListItem_1.prototype.onLongPressThis = function (event) {
            this.list.disableScroll(true);
        };
        ListItem_1.prototype.onLongPressEndThis = function (event) {
            this.list.disableScroll(false);
            this.list.dragItem(this.listId, event.getUILocation());
        };
        return ListItem_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ListItem");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _icon_decorators = [property({ type: cc_1.Sprite, tooltip: '图标' })];
        _title_decorators = [property({ type: cc_1.Node, tooltip: '标题' })];
        _selectedMode_decorators = [property({
                type: (0, cc_1.Enum)(SelectedType),
                tooltip: '选择模式'
            })];
        _selectedFlag_decorators = [property({
                type: cc_1.Node, tooltip: '被选标识',
                visible: function () {
                    // @ts-ignore
                    return this.selectedMode > SelectedType.NONE;
                }
            })];
        _selectedSpriteFrame_decorators = [property({
                type: cc_1.SpriteFrame, tooltip: '被选择的SpriteFrame',
                visible: function () {
                    // @ts-ignore
                    return this.selectedMode == SelectedType.SWITCH;
                }
            })];
        _adaptiveSize_decorators = [property({
                tooltip: '自适应尺寸（宽或高）',
            })];
        __esDecorate(null, null, _icon_decorators, { kind: "field", name: "icon", static: false, private: false, access: { has: function (obj) { return "icon" in obj; }, get: function (obj) { return obj.icon; }, set: function (obj, value) { obj.icon = value; } }, metadata: _metadata }, _icon_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectedMode_decorators, { kind: "field", name: "selectedMode", static: false, private: false, access: { has: function (obj) { return "selectedMode" in obj; }, get: function (obj) { return obj.selectedMode; }, set: function (obj, value) { obj.selectedMode = value; } }, metadata: _metadata }, _selectedMode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectedFlag_decorators, { kind: "field", name: "selectedFlag", static: false, private: false, access: { has: function (obj) { return "selectedFlag" in obj; }, get: function (obj) { return obj.selectedFlag; }, set: function (obj, value) { obj.selectedFlag = value; } }, metadata: _metadata }, _selectedFlag_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _selectedSpriteFrame_decorators, { kind: "field", name: "selectedSpriteFrame", static: false, private: false, access: { has: function (obj) { return "selectedSpriteFrame" in obj; }, get: function (obj) { return obj.selectedSpriteFrame; }, set: function (obj, value) { obj.selectedSpriteFrame = value; } }, metadata: _metadata }, _selectedSpriteFrame_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _adaptiveSize_decorators, { kind: "field", name: "adaptiveSize", static: false, private: false, access: { has: function (obj) { return "adaptiveSize" in obj; }, get: function (obj) { return obj.adaptiveSize; }, set: function (obj, value) { obj.adaptiveSize = value; } }, metadata: _metadata }, _adaptiveSize_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ListItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ListItem = _classThis;
}();
exports.default = ListItem;
