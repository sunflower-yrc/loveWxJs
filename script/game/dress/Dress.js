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
exports.Dress = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var DataManager_1 = require("../../Global/DataManager");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DataMgr_1 = require("../mgr/DataMgr");
var Decorate_1 = require("../decorate/Decorate");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var DressItem_1 = require("./DressItem");
var Role_1 = require("./Role");
var GameMgr_1 = require("../common/mgr/GameMgr");
var LimitMgr_1 = require("../mgr/LimitMgr");
// import { ActionName } from './ActionName';
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Dress = function () {
    var _classDecorators = [ccclass('Dress')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Decorate_1.Decorate;
    var _instanceExtraInitializers = [];
    var _roleGirl_decorators;
    var _roleGirl_initializers = [];
    var _roleBoy_decorators;
    var _roleBoy_initializers = [];
    var _nodeClose_decorators;
    var _nodeClose_initializers = [];
    var _light_decorators;
    var _light_initializers = [];
    var _btnRole_decorators;
    var _btnRole_initializers = [];
    var _roleNode_decorators;
    var _roleNode_initializers = [];
    var Dress = _classThis = /** @class */ (function (_super) {
        __extends(Dress_1, _super);
        function Dress_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roleGirl = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _roleGirl_initializers, null));
            _this.roleBoy = __runInitializers(_this, _roleBoy_initializers, null);
            _this.nodeClose = __runInitializers(_this, _nodeClose_initializers, null);
            _this.light = __runInitializers(_this, _light_initializers, null);
            _this.btnRole = __runInitializers(_this, _btnRole_initializers, null);
            _this.roleNode = __runInitializers(_this, _roleNode_initializers, null);
            _this.boy = [];
            _this.girl = [];
            _this.isInitArr = [];
            return _this;
        }
        Dress_1.prototype.start = function () {
            //备份数据
            DataManager_1.default.Instance.feedbackDataDressOwnedData = DataManager_1.default.Instance.backupDecorateOwnedData(SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData);
            DataMgr_1.DataMgr.currDressSex = DataObject_1.RoleMale.girl; //默认女
            this.girl = SingletonModuleComp_1.smc.account.AccountModel.dressGirl.slice(); //保存原始的
            if (SingletonModuleComp_1.smc.account.AccountModel.dressBoy.length > 0) {
                //激活了男主角
                this.boy = SingletonModuleComp_1.smc.account.AccountModel.dressBoy.slice(); //保存原始的
            }
            else {
                //未激活 隐藏男角色
                this.roleBoy.node.parent.active = false;
                //居中显示女主角
                var position = this.roleGirl.node.parent.position;
                this.roleGirl.node.parent.setPosition(new cc_1.Vec3(0, position.y, position.z));
                var pos = this.light.position;
                this.light.position = new cc_1.Vec3(0, pos.y, pos.z);
                //隐藏切换角色
                this.btnRole.active = false;
            }
            //当前穿戴的
            this.showCurrentSkin();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.ChangeDress, this.onChangeSpineSkin, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.BackToDressList, this.backToDressList, this);
        };
        Dress_1.prototype.onDestroy = function () {
            _super.prototype.onDestroy.call(this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.ChangeDress, this.onChangeSpineSkin, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.BackToDressList, this.backToDressList, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Dress);
        };
        /**
         * 当前服饰
         */
        Dress_1.prototype.showCurrentSkin = function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, ((_a = this.roleGirl.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.defaultSkin(DataObject_1.RoleMale.girl))];
                        case 1:
                            _c.sent();
                            if (!(SingletonModuleComp_1.smc.account.AccountModel.dressBoy.length > 0)) return [3 /*break*/, 3];
                            //激活了男主角
                            return [4 /*yield*/, ((_b = this.roleBoy.getComponent(Role_1.Role)) === null || _b === void 0 ? void 0 : _b.defaultSkin(DataObject_1.RoleMale.boy))];
                        case 2:
                            //激活了男主角
                            _c.sent();
                            _c.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 换皮肤
         * @param event
         * @param args
         */
        Dress_1.prototype.onChangeSpineSkin = function (event, args) {
            var _a, _b;
            var selectedData = args.data;
            var clearSkin = args.clear;
            if (DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.boy) {
                (_a = this.roleBoy.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.showSkin(selectedData, clearSkin);
            }
            else {
                (_b = this.roleGirl.getComponent(Role_1.Role)) === null || _b === void 0 ? void 0 : _b.showSkin(selectedData, clearSkin);
            }
        };
        /**
         * 切换 老的顶下去
         * @param event
         * @param args
         */
        Dress_1.prototype.backToDressList = function (event, args) {
            var _a, _b, _c, _d, _e;
            var preDressId = args; //老的id
            //当前子类的所有物品
            var dataArray = (_b = (_a = SingletonModuleComp_1.smc.account.AccountModel.dressOwnedData) === null || _a === void 0 ? void 0 : _a.get(this.currentMenu)) === null || _b === void 0 ? void 0 : _b.get(this.currSubTypeId);
            //找到对应的物品
            for (var i = 0; i < dataArray.length; i++) {
                var element = dataArray[i];
                if (element.dressData.id == preDressId) {
                    //找到了
                    element.leftAmount++;
                    element.lineupCount--;
                    //如果在当前页 就刷新界面
                    for (var j = 0; j < 8; j++) {
                        var id = (_d = (_c = this.items[j].getComponent(DressItem_1.DressItem)) === null || _c === void 0 ? void 0 : _c.decorateOwnedData) === null || _d === void 0 ? void 0 : _d.dressData.id;
                        if (preDressId == id) {
                            //找到了
                            (_e = this.items[j].getComponent(DressItem_1.DressItem)) === null || _e === void 0 ? void 0 : _e.refreshAmont();
                            break;
                        }
                    }
                    break;
                }
            }
        };
        /**
         * 切换角色
         */
        Dress_1.prototype.btn_role = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (DataMgr_1.DataMgr.currDressSex == DataObject_1.RoleMale.girl) {
                //切换到男
                DataMgr_1.DataMgr.currDressSex = DataObject_1.RoleMale.boy;
                this.roleBoy.color = cc_1.Color.WHITE;
                this.roleGirl.color = new cc_1.Color(150, 150, 150, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("boy", this.btnRole, true);
                ViewUtil_1.ViewUtil.setNodeActiveByName("girl", this.btnRole, false);
            }
            else {
                //切换到女
                DataMgr_1.DataMgr.currDressSex = DataObject_1.RoleMale.girl;
                this.roleGirl.color = cc_1.Color.WHITE;
                this.roleBoy.color = new cc_1.Color(150, 150, 150, 255);
                ViewUtil_1.ViewUtil.setNodeActiveByName("boy", this.btnRole, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("girl", this.btnRole, true);
            }
            var pos = this.light.position;
            this.light.position = new cc_1.Vec3(-pos.x, pos.y, pos.z);
        };
        /**
         * 保存并关闭
         */
        Dress_1.prototype.btn_save = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //排序
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortDress);
            HttpPost_1.HttpPost.instance.upUserDress(SingletonModuleComp_1.smc.account.AccountModel.dressBoy, SingletonModuleComp_1.smc.account.AccountModel.dressGirl, function (data) {
                _this.updateData(data);
            });
            this.isOpenValuePack();
        };
        /**
         * 更新数据
         * @param data
         */
        Dress_1.prototype.updateData = function (data) {
            //评分
            SingletonModuleComp_1.smc.account.AccountModel.vm.dressBoyScore = data.dressMarkBoy;
            SingletonModuleComp_1.smc.account.AccountModel.vm.dressGirlScore = data.dressMarkGirl;
            //刷新评分
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdateDressScore, data.dressMarkBoy + data.dressMarkGirl);
            //刷新任务
            DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
            //刷新主界面角色
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.FreshRoleDress);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Dress);
        };
        /**
        * 关闭
        */
        Dress_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            //复原数据 
            DataManager_1.default.Instance.recoveryDecorateOwnedData(DataManager_1.default.Instance.feedbackDataDressOwnedData, DataObject_1.DecorateType.Dress);
            if (SingletonModuleComp_1.smc.account.AccountModel.dressBoy.length > 0) {
                SingletonModuleComp_1.smc.account.AccountModel.dressBoy = this.boy;
            }
            SingletonModuleComp_1.smc.account.AccountModel.dressGirl = this.girl;
            //排序
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.SortDress);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Dress);
            this.isOpenValuePack();
        };
        Dress_1.prototype.openSetAction = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.RoleAction);
        };
        //特殊处理超值礼包弹的次数
        Dress_1.prototype.isOpenValuePack = function () {
            var funcOpenValuePack = LimitMgr_1.LimitMgr.functionOpen(DataObject_1.FunctionType.ValuePack).satisfied;
            if (funcOpenValuePack && !SingletonModuleComp_1.smc.account.AccountModel.videoReward) {
                var num = Oops_1.oops.storage.get("valuePack");
                if (!num) {
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ValuePack);
                }
                else if (parseInt(num) < GameMgr_1.GameMgr.Instance.valuePackShowTimes) {
                    num = (parseInt(num) + 1) + "";
                    Oops_1.oops.storage.set("valuePack", num);
                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ValuePack);
                }
            }
        };
        return Dress_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Dress");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _roleGirl_decorators = [property(cc_1.sp.Skeleton)];
        _roleBoy_decorators = [property(cc_1.sp.Skeleton)];
        _nodeClose_decorators = [property(cc_1.Node)];
        _light_decorators = [property(cc_1.Node)];
        _btnRole_decorators = [property(cc_1.Node)];
        _roleNode_decorators = [property(cc_1.Node)];
        __esDecorate(null, null, _roleGirl_decorators, { kind: "field", name: "roleGirl", static: false, private: false, access: { has: function (obj) { return "roleGirl" in obj; }, get: function (obj) { return obj.roleGirl; }, set: function (obj, value) { obj.roleGirl = value; } }, metadata: _metadata }, _roleGirl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleBoy_decorators, { kind: "field", name: "roleBoy", static: false, private: false, access: { has: function (obj) { return "roleBoy" in obj; }, get: function (obj) { return obj.roleBoy; }, set: function (obj, value) { obj.roleBoy = value; } }, metadata: _metadata }, _roleBoy_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _nodeClose_decorators, { kind: "field", name: "nodeClose", static: false, private: false, access: { has: function (obj) { return "nodeClose" in obj; }, get: function (obj) { return obj.nodeClose; }, set: function (obj, value) { obj.nodeClose = value; } }, metadata: _metadata }, _nodeClose_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _light_decorators, { kind: "field", name: "light", static: false, private: false, access: { has: function (obj) { return "light" in obj; }, get: function (obj) { return obj.light; }, set: function (obj, value) { obj.light = value; } }, metadata: _metadata }, _light_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btnRole_decorators, { kind: "field", name: "btnRole", static: false, private: false, access: { has: function (obj) { return "btnRole" in obj; }, get: function (obj) { return obj.btnRole; }, set: function (obj, value) { obj.btnRole = value; } }, metadata: _metadata }, _btnRole_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleNode_decorators, { kind: "field", name: "roleNode", static: false, private: false, access: { has: function (obj) { return "roleNode" in obj; }, get: function (obj) { return obj.roleNode; }, set: function (obj, value) { obj.roleNode = value; } }, metadata: _metadata }, _roleNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Dress = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Dress = _classThis;
}();
exports.Dress = Dress;
