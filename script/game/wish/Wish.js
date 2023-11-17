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
exports.Wish = void 0;
var cc_1 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var cc_2 = require("cc");
var TypeGlobalData_1 = require("../common/tableData/TypeGlobalData");
var GameResPath_1 = require("../common/config/GameResPath");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var WishFurnitureItem_1 = require("./WishFurnitureItem");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var HttpPost_1 = require("../tools/HttpPost");
var GlobalData_1 = require("../common/tableData/GlobalData");
var DropMgr_1 = require("../mgr/DropMgr");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Wish = function () {
    var _classDecorators = [ccclass('Wish')];
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
    var _copyFurniture_decorators;
    var _copyFurniture_initializers = [];
    var Wish = _classThis = /** @class */ (function (_super) {
        __extends(Wish_1, _super);
        function Wish_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pageNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _pageNode_initializers, null));
            _this.itemNode = __runInitializers(_this, _itemNode_initializers, null);
            _this.mainToggleNode = __runInitializers(_this, _mainToggleNode_initializers, null);
            _this.subToggleNode = __runInitializers(_this, _subToggleNode_initializers, null);
            _this.copyFurniture = __runInitializers(_this, _copyFurniture_initializers, null);
            _this.decorateOwnedDatas = null;
            _this.currentSubOwnedDatas = [];
            _this.items = [];
            _this.mainToggles = [];
            _this.subToggles = [];
            _this.mainRedTips = [];
            _this.subRedTips = [];
            _this.decorateOwnedData = null;
            _this.decorateType = 0;
            _this.currentMenu = 1; //具体值
            _this.toggleMainType = 1; //序号
            _this.toggleSubType = 0; //序号
            _this.currSubTypeId = 0; //具体值
            _this.currentPage = 1;
            _this.totalPage = 1;
            _this.time = null;
            return _this;
        }
        Wish_1.prototype.onAdded = function (param) {
            if (param.type == DataObject_1.DecorateType.Furniture) {
                this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData;
            }
            else if (param.type == DataObject_1.DecorateType.Dress) {
                this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
            }
            this.decorateType = param.type;
            this.wishData = param.data;
            //当前物品默认在哪个大类 0 - 12
            this.currentMenu = this.decorateType + this.toggleMainType;
            this.items = this.itemNode.children;
            this.mainToggles = this.mainToggleNode.children;
            this.subToggles = this.subToggleNode.children;
        };
        Wish_1.prototype.onLoad = function () {
            var _a;
            //切换大页签
            this.changeMainType();
            (_a = this.mainToggles[this.toggleMainType - 1].getComponent(cc_2.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
        };
        Wish_1.prototype.start = function () {
            var platform = window["platform"];
            this.updateCopyFurniture();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.WishFurniture, this.changeFurniture, this);
        };
        Wish_1.prototype.updateCopyFurniture = function () {
            if (this.wishData.id) {
                this.decorateOwnedData = new FurnitureData_1.FurnitureData(this.wishData.id);
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/tipBg/tip", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/decorate", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/menu_bottom", this.node, false);
                this.setSpeed();
                this.setTimer();
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/timeNode", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/decorate", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/menu_bottom", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/speedBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/tipBg/tip", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/getBtn", this.node, false);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("main/times", this.node, Oops_1.oops.language.getLangByID("wish.times", this.wishData.totalTimes));
            this.setCopyFurniture();
        };
        Wish_1.prototype.setSpeed = function () {
            var curTime = Oops_1.oops.timer.getServerTime();
            if (this.wishData.endTime > curTime) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/tipBg", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/speedBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/getBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/timeNode", this.node, true);
                var globalTable = new GlobalData_1.GlobalData(50);
                var text = this.formatTime(parseFloat(globalTable.value) * this.decorateOwnedData.copyTimes);
                var num = new GlobalData_1.GlobalData(51).value;
                ViewUtil_1.ViewUtil.setLabelStringByName("bottom/speedBtn/time", this.node, "-" + text);
                ViewUtil_1.ViewUtil.setLabelStringByName("bottom/speedBtn/num", this.node, "x" + num);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/speedBtn", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("bottom/getBtn", this.node, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/timeNode", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("main/tipBg", this.node, false);
            }
        };
        Wish_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.WishFurniture, this.changeFurniture, this);
            Oops_1.oops.timer.unRegister(this.timeId);
        };
        Wish_1.prototype.changeFurniture = function (ev, data) {
            this.decorateOwnedData = data.furnitureData;
            ViewUtil_1.ViewUtil.setNodeActiveByName("main/timeNode", this.node, true);
            ViewUtil_1.ViewUtil.setNodeActiveByName("main/tipBg/tip", this.node, false);
            ViewUtil_1.ViewUtil.setLabelStringByName("main/timeNode/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.decorateOwnedData.copyTimes));
            this.setCopyFurniture();
        };
        Wish_1.prototype.setCopyFurniture = function () {
            if (this.decorateOwnedData) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("icon", this.copyFurniture, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.copyFurniture, false);
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", this.copyFurniture, GameResPath_1.GameResPath.getFurnitureListIconsPath(this.decorateOwnedData.id.toString()), BundleConfig_1.default.instance.guiBundle.name);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("icon", this.copyFurniture, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("addBtn", this.copyFurniture, true);
            }
        };
        /**
         * 切换主分类
         */
        Wish_1.prototype.changeMainType = function () {
            var _a;
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
                            (_a = this.subToggles[this.toggleSubType].getComponent(cc_2.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
                            this.changeSubType();
                        }
                    }
                }
            }
        };
        /**
        * 切换子分类
        * @param index
        */
        Wish_1.prototype.changeSubType = function () {
            // console.log("sub = " + this.currentSubMenu);
            var subIds = TypeGlobalData_1.TypeGlobalData.allData.get(this.currentMenu);
            if (subIds) {
                //当前选中的子分类
                this.currSubTypeId = parseInt(subIds[this.toggleSubType]);
            }
            //罗列子分类物品
            this.initUI();
        };
        Wish_1.prototype.initUI = function () {
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
        Wish_1.prototype.changePage = function (added) {
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
        Wish_1.prototype.showItems = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var i, data, index;
                return __generator(this, function (_b) {
                    for (i = 0; i < 8; i++) {
                        data = null;
                        index = (this.currentPage - 1) * 8 + i;
                        if (index < this.currentSubOwnedDatas.length) {
                            data = this.currentSubOwnedDatas[index];
                        }
                        if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                            (_a = this.items[i].getComponent(WishFurnitureItem_1.WishFurnitureItem)) === null || _a === void 0 ? void 0 : _a.initData(data);
                        }
                        else if (this.decorateType == DataObject_1.DecorateType.Dress) {
                            // this.items[i].getComponent(DressItem)?.initData(data);
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
     * 切主标签
     * 1 2 3 4 5
     */
        Wish_1.prototype.btn_toggle = function (event, data) {
            if (this.decorateType == DataObject_1.DecorateType.Furniture) {
                //如果是收缩的状态，则回弹起来
                // if (!this.animating && this.arrowStatus == 0) {
                //     oops.message.dispatchEvent(GameEvent.ShowFurnitureAnimate);
                // }
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
        Wish_1.prototype.btn_sub_toggle = function (event, data) {
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
        Wish_1.prototype.btn_turnpage = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.changePage(parseInt(data));
        };
        Wish_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Wish);
        };
        /**创建计时器 */
        Wish_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            var curTime = Oops_1.oops.timer.getServerTime();
            this.time = (this.wishData.endTime - curTime);
            this.onSecond();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        Wish_1.prototype.onSecond = function () {
            var time;
            ViewUtil_1.ViewUtil.setLabelStringByName("main/timeNode/time", this.node, StringUtil_1.StringUtil.formatActivityTimeWithSec(this.time));
        };
        Wish_1.prototype.onComplete = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.promiseInit(function (data) {
                _this.wishData = data;
                _this.updateCopyFurniture();
            });
        };
        Wish_1.prototype.copyFueniture = function () {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (!this.decorateOwnedData) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("wish.selectItem"));
                return;
            }
            if (this.wishData.times >= this.wishData.totalTimes) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("offline.useEnd"));
                return;
            }
            HttpPost_1.HttpPost.instance.wish((_a = this.decorateOwnedData) === null || _a === void 0 ? void 0 : _a.id, function (data) {
                _this.wishData = data;
                _this.updateCopyFurniture();
            });
        };
        Wish_1.prototype.btn_speed = function () {
            var _this = this;
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var num = new GlobalData_1.GlobalData(51).value;
            if (SingletonModuleComp_1.smc.account.AccountModel.vm.jewel < parseInt(num)) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.JumpTip, { closeView: GameUIConfig_1.UIID.Wish, type: DataObject_1.JumpTipType.diamond });
                return;
            }
            HttpPost_1.HttpPost.instance.promiseUpLevelSpeed((_a = this.decorateOwnedData) === null || _a === void 0 ? void 0 : _a.id, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.vm.jewel = data.diamond;
                _this.wishData = data;
                _this.updateCopyFurniture();
            });
        };
        /**格式化时间 */
        Wish_1.prototype.formatTime = function (remainingSeconds) {
            var hours = Math.floor(remainingSeconds / 3600);
            var minutes = Math.floor((remainingSeconds - (hours * 3600)) / 60);
            var seconds = remainingSeconds % 60;
            var hoursStr = hours.toString().padStart(2, '0');
            var minutesStr = minutes.toString().padStart(2, '0');
            var secondsStr = seconds.toString().padStart(2, '0');
            return hours > 0 ? "".concat(hoursStr, ":").concat(minutesStr, ":").concat(secondsStr) : "".concat(minutesStr, ":").concat(secondsStr);
        };
        Wish_1.prototype.getReward = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.promiseGift(function (data) {
                //显示掉落
                var dropDatas = DropMgr_1.DropMgr.getDropData(data.reward);
                var dropInfo = new DataObject_1.DropInfo();
                dropInfo.dropData = dropDatas;
                dropInfo.dropFrom = DataObject_1.DropFrom.Wish;
                dropInfo.UIID = [GameUIConfig_1.UIID.Wish];
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.Drop, dropInfo);
                _this.wishData = data;
                _this.decorateOwnedData = null;
                _this.updateCopyFurniture();
                _this.changeMainType();
            });
        };
        return Wish_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Wish");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _pageNode_decorators = [property(cc_1.Node)];
        _itemNode_decorators = [property(cc_1.Node)];
        _mainToggleNode_decorators = [property(cc_1.Node)];
        _subToggleNode_decorators = [property(cc_1.Node)];
        _copyFurniture_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _pageNode_decorators, { kind: "field", name: "pageNode", static: false, private: false, access: { has: function (obj) { return "pageNode" in obj; }, get: function (obj) { return obj.pageNode; }, set: function (obj, value) { obj.pageNode = value; } }, metadata: _metadata }, _pageNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemNode_decorators, { kind: "field", name: "itemNode", static: false, private: false, access: { has: function (obj) { return "itemNode" in obj; }, get: function (obj) { return obj.itemNode; }, set: function (obj, value) { obj.itemNode = value; } }, metadata: _metadata }, _itemNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mainToggleNode_decorators, { kind: "field", name: "mainToggleNode", static: false, private: false, access: { has: function (obj) { return "mainToggleNode" in obj; }, get: function (obj) { return obj.mainToggleNode; }, set: function (obj, value) { obj.mainToggleNode = value; } }, metadata: _metadata }, _mainToggleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subToggleNode_decorators, { kind: "field", name: "subToggleNode", static: false, private: false, access: { has: function (obj) { return "subToggleNode" in obj; }, get: function (obj) { return obj.subToggleNode; }, set: function (obj, value) { obj.subToggleNode = value; } }, metadata: _metadata }, _subToggleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _copyFurniture_decorators, { kind: "field", name: "copyFurniture", static: false, private: false, access: { has: function (obj) { return "copyFurniture" in obj; }, get: function (obj) { return obj.copyFurniture; }, set: function (obj, value) { obj.copyFurniture = value; } }, metadata: _metadata }, _copyFurniture_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Wish = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Wish = _classThis;
}();
exports.Wish = Wish;
