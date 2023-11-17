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
exports.Decorate = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../common/mgr/GameMgr");
var TypeGlobalData_1 = require("../common/tableData/TypeGlobalData");
var DressItem_1 = require("../dress/DressItem");
var FurnitureItem_1 = require("../furniture/FurnitureItem");
var DataObject_1 = require("../tools/DataObject");
var recycleMgr_1 = require("../recycle/recycleMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Decorate = function () {
    var _classDecorators = [ccclass('Decorate')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var _instanceExtraInitializers = [];
    var _pageNode_decorators;
    var _pageNode_initializers = [];
    var _itemNode_decorators;
    var _itemNode_initializers = [];
    var _mainToggleNode_decorators;
    var _mainToggleNode_initializers = [];
    var _subToggleNode_decorators;
    var _subToggleNode_initializers = [];
    var Decorate = _classThis = /** @class */ (function (_super) {
        __extends(Decorate_1, _super);
        function Decorate_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pageNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _pageNode_initializers, null));
            _this.itemNode = __runInitializers(_this, _itemNode_initializers, null);
            _this.mainToggleNode = __runInitializers(_this, _mainToggleNode_initializers, null);
            _this.subToggleNode = __runInitializers(_this, _subToggleNode_initializers, null);
            _this.decorateOwnedDatas = null;
            _this.currentSubOwnedDatas = [];
            _this.items = [];
            _this.mainToggles = [];
            _this.subToggles = [];
            _this.mainRedTips = [];
            _this.subRedTips = [];
            _this.decorateType = 0;
            _this.currentMenu = 1; //具体值
            _this.toggleMainType = 1; //序号
            _this.toggleSubType = 0; //序号
            _this.currSubTypeId = 0; //具体值
            _this.currentPage = 1;
            _this.totalPage = 1;
            //家具用的
            _this.arrowStatus = 1; //0收缩状态  1展开状态
            _this.animating = false;
            return _this;
        }
        Decorate_1.prototype.onAdded = function (param) {
            //背包数据
            if (param.type == DataObject_1.DecorateType.Furniture) {
                if (!GameMgr_1.GameMgr.Instance.isOutside) {
                    this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData;
                }
                else {
                    this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.outsideFurnitureOwnedData;
                }
            }
            else if (param.type == DataObject_1.DecorateType.Dress) {
                this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
            }
            this.decorateType = param.type;
            //主分类  1 - 5
            if (param.toggleMainType) {
                this.toggleMainType = param.toggleMainType;
            }
            //子分类 0 - 6
            if (param.toggleSubType) {
                this.toggleSubType = param.toggleSubType;
            }
            //当前物品默认在哪个大类 0 - 12
            this.currentMenu = this.decorateType + this.toggleMainType;
            this.items = this.itemNode.children;
            this.mainToggles = this.mainToggleNode.children;
            //红点
            this.mainRedTips = [];
            for (var i = 0; i < this.mainToggles.length; i++) {
                var element = this.mainToggles[i];
                this.mainRedTips.push(ViewUtil_1.ViewUtil.findChildByName("redDot", element));
            }
            this.subToggles = this.subToggleNode.children;
            //红点
            this.subRedTips = [];
            for (var i = 0; i < this.subToggles.length; i++) {
                var element = this.subToggles[i];
                this.subRedTips.push(ViewUtil_1.ViewUtil.findChildByName("redDot", element));
            }
        };
        Decorate_1.prototype.onLoad = function () {
            var _a;
            //切换大页签
            this.changeMainType();
            (_a = this.mainToggles[this.toggleMainType - 1].getComponent(cc_1.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
            //红点
            this.shwoMainRedTips();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.DecorateRefreshRedDot, this.refreshRedDot, this);
        };
        Decorate_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.DecorateRefreshRedDot, this.refreshRedDot, this);
        };
        Decorate_1.prototype.initUI = function () {
            //页签 只有1页时不显示切页按钮
            this.totalPage = 1;
            this.currentSubOwnedDatas = [];
            var main = this.decorateOwnedDatas.get(this.currentMenu);
            if (main && main.size > 0) {
                //主分类下有值 显示列表
                if (main.has(this.currSubTypeId)) {
                    //子分类下有值
                    this.currentSubOwnedDatas = main.get(this.currSubTypeId);
                    //总页数
                    this.totalPage = Math.ceil(this.currentSubOwnedDatas.length / 8);
                }
            }
            this.pageNode.active = this.totalPage > 1;
            //显示第1页内容
            this.changePage(0);
        };
        /**
         * 切页
         * @param added 增量  -1为上一页，1为下一页
         */
        Decorate_1.prototype.changePage = function (added) {
            this.currentPage += added;
            if (this.currentPage > this.totalPage) {
                this.currentPage = 1;
            }
            else if (this.currentPage < 1) {
                this.currentPage = this.totalPage;
            }
            var totalShow = this.totalPage == 0 ? 1 : this.totalPage;
            ViewUtil_1.ViewUtil.setLabelStringByName("decorate/book/page_num", this.node, this.currentPage + "/" + totalShow);
            this.showItems();
        };
        /**
         * 显示列表
         */
        Decorate_1.prototype.showItems = function () {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var i, data, index;
                return __generator(this, function (_d) {
                    for (i = 0; i < 8; i++) {
                        data = null;
                        index = (this.currentPage - 1) * 8 + i;
                        if (index < this.currentSubOwnedDatas.length) {
                            data = this.currentSubOwnedDatas[index];
                        }
                        if (recycleMgr_1.RecycleMgr.Instance.isRecycle) {
                            (_a = this.items[i].getComponent(FurnitureItem_1.FurnitureItem)) === null || _a === void 0 ? void 0 : _a.initData(data);
                            continue;
                        }
                        if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                            (_b = this.items[i].getComponent(FurnitureItem_1.FurnitureItem)) === null || _b === void 0 ? void 0 : _b.initData(data);
                        }
                        else if (this.decorateType == DataObject_1.DecorateType.Dress) {
                            (_c = this.items[i].getComponent(DressItem_1.DressItem)) === null || _c === void 0 ? void 0 : _c.initData(data);
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * 切换主分类
         */
        Decorate_1.prototype.changeMainType = function () {
            var _a, _b, _c, _d, _e;
            // console.log("main = " + this.currentMenu);
            //查找大类下的子分类数量
            var subclasses = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu);
            if (subclasses) {
                var length_1 = subclasses.length;
                for (var i = 0; i < this.subToggles.length; i++) {
                    var element = this.subToggles[i];
                    var active = i < length_1;
                    element.active = active;
                    if (active) {
                        //显示子分类的图标
                        var subTypeId = subclasses[i];
                        var url = "";
                        if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                            url = GameResPath_1.GameResPath.getFurnitureSubTypePath(subTypeId);
                        }
                        else if (this.decorateType == DataObject_1.DecorateType.Dress) {
                            url = GameResPath_1.GameResPath.getDressSubTypePath(subTypeId);
                        }
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("Sprite", element, url, BundleConfig_1.default.instance.guiBundle.name);
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("decorate/checkmarks/Checkmark".concat(i, "/Sprite"), this.node, url, BundleConfig_1.default.instance.guiBundle.name);
                        //选中子分类
                        if (i == this.toggleSubType) {
                            (_a = this.subToggles[this.toggleSubType].getComponent(cc_1.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
                            this.changeSubType();
                        }
                        //红点
                        if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                            this.subRedTips[i].active = ((_c = (_b = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(this.currentMenu)) === null || _b === void 0 ? void 0 : _b.get(parseInt(subTypeId))) === null || _c === void 0 ? void 0 : _c.amount) > 0 && !GameMgr_1.GameMgr.Instance.isOutside;
                        }
                        else if (this.decorateType == DataObject_1.DecorateType.Dress) {
                            this.subRedTips[i].active = ((_e = (_d = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(this.currentMenu)) === null || _d === void 0 ? void 0 : _d.get(parseInt(subTypeId))) === null || _e === void 0 ? void 0 : _e.amount) > 0;
                        }
                    }
                }
            }
        };
        /**
         * 切换子分类
         * @param index
         */
        Decorate_1.prototype.changeSubType = function () {
            // console.log("sub = " + this.currentSubMenu);
            var subIds = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu);
            if (subIds) {
                //当前选中的子分类
                this.currSubTypeId = parseInt(subIds[this.toggleSubType]);
            }
            //罗列子分类物品
            this.initUI();
        };
        /**
         * 切主标签
         * 1 2 3 4 5
         */
        Decorate_1.prototype.btn_toggle = function (event, data) {
            if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                //如果是收缩的状态，则回弹起来
                if (!this.animating && this.arrowStatus == 0) {
                    Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowFurnitureAnimate);
                }
            }
            var toggleId = parseInt(data);
            if (this.toggleMainType != toggleId) {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                this.toggleMainType = toggleId;
                var id = parseInt(data) + this.decorateType;
                this.currentMenu = id;
                this.toggleSubType = 0;
                this.changeMainType();
            }
        };
        /**
         * 切子标签
         * 0 1 2 3 4
         */
        Decorate_1.prototype.btn_sub_toggle = function (event, data) {
            var id = parseInt(data);
            if (this.toggleSubType != id) {
                Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                this.toggleSubType = id;
                this.changeSubType();
            }
        };
        /**
         * 翻页
         * @param type -1左 1右
         */
        Decorate_1.prototype.btn_turnpage = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.changePage(parseInt(data));
        };
        /**
         * 主菜单红点
         */
        Decorate_1.prototype.shwoMainRedTips = function () {
            var _a, _b, _c, _d;
            if (GameMgr_1.GameMgr.Instance.isOutside)
                return;
            for (var i = 0; i < this.mainRedTips.length; i++) {
                var element = this.mainRedTips[i];
                if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                    var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(i + 1)[0]);
                    element.active = ((_b = (_a = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(i + 1)) === null || _a === void 0 ? void 0 : _a.get(firstId)) === null || _b === void 0 ? void 0 : _b.amount) > 0 && !GameMgr_1.GameMgr.Instance.isOutside;
                }
                else if (this.decorateType == DataObject_1.DecorateType.Dress) {
                    var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(i + 1 + DataObject_1.DecorateType.Dress)[0]);
                    element.active = ((_d = (_c = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(i + 1 + DataObject_1.DecorateType.Dress)) === null || _c === void 0 ? void 0 : _c.get(firstId)) === null || _d === void 0 ? void 0 : _d.amount) > 0;
                }
            }
        };
        /**
         * 刷新当前菜单红点
         */
        Decorate_1.prototype.refreshRedDot = function (event, args) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
            if (GameMgr_1.GameMgr.Instance.isOutside)
                return;
            var selectedSubId = args;
            var firstId = parseInt(TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu)[0]);
            if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                //sub
                if (((_a = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu)) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    //总的
                    this.subRedTips[0].active = ((_c = (_b = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(this.currentMenu)) === null || _b === void 0 ? void 0 : _b.get(0)) === null || _c === void 0 ? void 0 : _c.amount) > 0;
                    if (this.toggleSubType != 0) {
                        //有多个子类  当前不在总分类上  那么需要同时刷新总分类
                        this.subRedTips[this.toggleSubType].active = ((_e = (_d = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(this.currentMenu)) === null || _d === void 0 ? void 0 : _d.get(this.currSubTypeId)) === null || _e === void 0 ? void 0 : _e.amount) > 0;
                    }
                    else {
                        //有多个子类  当前在总分类上  那么需要同时刷新物品所在的子类页签
                        var targetSubToggle = (_f = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu)) === null || _f === void 0 ? void 0 : _f.indexOf(selectedSubId.toString());
                        this.subRedTips[targetSubToggle].active = ((_h = (_g = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(this.currentMenu)) === null || _g === void 0 ? void 0 : _g.get(selectedSubId)) === null || _h === void 0 ? void 0 : _h.amount) > 0;
                    }
                }
                else {
                    this.subRedTips[this.toggleSubType].active = ((_k = (_j = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(this.currentMenu)) === null || _j === void 0 ? void 0 : _j.get(this.currSubTypeId)) === null || _k === void 0 ? void 0 : _k.amount) > 0;
                }
                //main
                this.mainRedTips[this.toggleMainType - 1].active = ((_m = (_l = SingletonModuleComp_1.smc.account.AccountModel.furnitureRedData.get(this.currentMenu)) === null || _l === void 0 ? void 0 : _l.get(firstId)) === null || _m === void 0 ? void 0 : _m.amount) > 0;
                //home
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FurnitureRedDotHome);
            }
            else if (this.decorateType == DataObject_1.DecorateType.Dress) {
                //sub
                if (((_o = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu)) === null || _o === void 0 ? void 0 : _o.length) > 0) {
                    //总的
                    this.subRedTips[0].active = ((_q = (_p = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(this.currentMenu)) === null || _p === void 0 ? void 0 : _p.get(0)) === null || _q === void 0 ? void 0 : _q.amount) > 0;
                    if (this.toggleSubType != 0) {
                        //有多个子类  当前不在总分类上  那么需要同时刷新总分类
                        this.subRedTips[this.toggleSubType].active = ((_s = (_r = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(this.currentMenu)) === null || _r === void 0 ? void 0 : _r.get(this.currSubTypeId)) === null || _s === void 0 ? void 0 : _s.amount) > 0;
                    }
                    else {
                        //有多个子类  当前在总分类上  那么需要同时刷新物品所在的子类页签
                        var targetSubToggle = (_t = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu)) === null || _t === void 0 ? void 0 : _t.indexOf(selectedSubId.toString());
                        this.subRedTips[targetSubToggle].active = ((_v = (_u = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(this.currentMenu)) === null || _u === void 0 ? void 0 : _u.get(selectedSubId)) === null || _v === void 0 ? void 0 : _v.amount) > 0;
                    }
                }
                else {
                    this.subRedTips[this.toggleSubType].active = ((_x = (_w = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(this.currentMenu)) === null || _w === void 0 ? void 0 : _w.get(this.currSubTypeId)) === null || _x === void 0 ? void 0 : _x.amount) > 0;
                }
                //main
                this.mainRedTips[this.toggleMainType - 1].active = ((_z = (_y = SingletonModuleComp_1.smc.account.AccountModel.dressRedData.get(this.currentMenu)) === null || _y === void 0 ? void 0 : _y.get(firstId)) === null || _z === void 0 ? void 0 : _z.amount) > 0;
                //home
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.DressRedDotHome);
            }
        };
        return Decorate_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Decorate");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pageNode_decorators = [property(cc_1.Node)];
        _itemNode_decorators = [property(cc_1.Node)];
        _mainToggleNode_decorators = [property(cc_1.Node)];
        _subToggleNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _pageNode_decorators, { kind: "field", name: "pageNode", static: false, private: false, access: { has: function (obj) { return "pageNode" in obj; }, get: function (obj) { return obj.pageNode; }, set: function (obj, value) { obj.pageNode = value; } }, metadata: _metadata }, _pageNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemNode_decorators, { kind: "field", name: "itemNode", static: false, private: false, access: { has: function (obj) { return "itemNode" in obj; }, get: function (obj) { return obj.itemNode; }, set: function (obj, value) { obj.itemNode = value; } }, metadata: _metadata }, _itemNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainToggleNode_decorators, { kind: "field", name: "mainToggleNode", static: false, private: false, access: { has: function (obj) { return "mainToggleNode" in obj; }, get: function (obj) { return obj.mainToggleNode; }, set: function (obj, value) { obj.mainToggleNode = value; } }, metadata: _metadata }, _mainToggleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subToggleNode_decorators, { kind: "field", name: "subToggleNode", static: false, private: false, access: { has: function (obj) { return "subToggleNode" in obj; }, get: function (obj) { return obj.subToggleNode; }, set: function (obj, value) { obj.subToggleNode = value; } }, metadata: _metadata }, _subToggleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Decorate = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Decorate = _classThis;
}();
exports.Decorate = Decorate;
