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
exports.RecycleFurniture = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameResPath_1 = require("../common/config/GameResPath");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var TypeGlobalData_1 = require("../common/tableData/TypeGlobalData");
var Decorate_1 = require("../decorate/Decorate");
var DataObject_1 = require("../tools/DataObject");
var recycleMgr_1 = require("./recycleMgr");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var RecycleFurniture = function () {
    var _classDecorators = [ccclass('RecycleFurniture')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Decorate_1.Decorate;
    var _instanceExtraInitializers = [];
    var _dressToggleNode_decorators;
    var _dressToggleNode_initializers = [];
    var RecycleFurniture = _classThis = /** @class */ (function (_super) {
        __extends(RecycleFurniture_1, _super);
        function RecycleFurniture_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dressToggleNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _dressToggleNode_initializers, null));
            _this.items = [];
            _this.mainToggles = [];
            _this.subToggles = [];
            return _this;
        }
        RecycleFurniture_1.prototype.start = function () {
            var _a;
            // /** 缓存数据 */
            if (recycleMgr_1.RecycleMgr.Instance.isFurniture) {
                this.decorateType = 0;
                DataManager_1.default.Instance.feedbackDataFurnitureOwnedData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData);
                this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.furnitureOwnedData;
            }
            else {
                this.decorateType = 100;
                DataManager_1.default.Instance.feedbackDataDressOwnedData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData);
                this.decorateOwnedDatas = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData;
            }
            this.items = this.itemNode.children;
            if (recycleMgr_1.RecycleMgr.Instance.isFurniture) {
                this.mainToggleNode.active = true;
                this.mainToggles = this.mainToggleNode.children;
            }
            else {
                this.dressToggleNode.active = true;
                this.mainToggles = this.dressToggleNode.children;
            }
            this.subToggles = this.subToggleNode.children;
            //当前物品默认在哪个大类 0 - 12
            this.currentMenu = this.decorateType + this.toggleMainType;
            //切换大页签
            this.changeMainType();
            (_a = this.mainToggles[this.toggleMainType - 1].getComponent(cc_1.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
        };
        /**不能删，重载方法 */
        RecycleFurniture_1.prototype.onLoad = function () {
            recycleMgr_1.RecycleMgr.Instance.recycleFurniture = this;
        };
        RecycleFurniture_1.prototype.onDestroy = function () {
        };
        /**
         * 切换主分类
         */
        RecycleFurniture_1.prototype.changeMainType = function () {
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
                            (_a = this.subToggles[this.toggleSubType].getComponent(cc_1.Toggle)) === null || _a === void 0 ? void 0 : _a.setIsCheckedWithoutNotify(true);
                            this.changeSubType();
                        }
                        // //红点
                        // if (this.decorateType == DecorateType.Furniture) {
                        //     this.subRedTips[i].active = smc.account.AccountModel.furnitureRedData.get(this.currentMenu)?.get(parseInt(subTypeId))?.amount! > 0;
                        // } else if (this.decorateType == DecorateType.Dress) {
                        //     this.subRedTips[i].active = smc.account.AccountModel.dressRedData.get(this.currentMenu)?.get(parseInt(subTypeId))?.amount! > 0;
                        // }
                    }
                }
            }
        };
        return RecycleFurniture_1;
    }(_classSuper));
    __setFunctionName(_classThis, "RecycleFurniture");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _dressToggleNode_decorators = [property(cc_2.Node)];
        __esDecorate(null, null, _dressToggleNode_decorators, { kind: "field", name: "dressToggleNode", static: false, private: false, access: { has: function (obj) { return "dressToggleNode" in obj; }, get: function (obj) { return obj.dressToggleNode; }, set: function (obj, value) { obj.dressToggleNode = value; } }, metadata: _metadata }, _dressToggleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecycleFurniture = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecycleFurniture = _classThis;
}();
exports.RecycleFurniture = RecycleFurniture;
