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
exports.RoleAction = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var MoveData_1 = require("../common/tableData/MoveData");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var cc_4 = require("cc");
var ActionName_1 = require("./ActionName");
var cc_5 = require("cc");
var Role_1 = require("./Role");
var LangData_1 = require("../common/tableData/LangData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var ccclass = cc_3._decorator.ccclass, property = cc_3._decorator.property;
var RoleAction = function () {
    var _classDecorators = [ccclass('RoleAction')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_3.Component;
    var _instanceExtraInitializers = [];
    var _roleGirl_decorators;
    var _roleGirl_initializers = [];
    var _roleBoy_decorators;
    var _roleBoy_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _actName_decorators;
    var _actName_initializers = [];
    var _slideGirlNode_decorators;
    var _slideGirlNode_initializers = [];
    var _girlList_decorators;
    var _girlList_initializers = [];
    var _slideBoyNode_decorators;
    var _slideBoyNode_initializers = [];
    var _boyList_decorators;
    var _boyList_initializers = [];
    var RoleAction = _classThis = /** @class */ (function (_super) {
        __extends(RoleAction_1, _super);
        function RoleAction_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roleGirl = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _roleGirl_initializers, null));
            _this.roleBoy = __runInitializers(_this, _roleBoy_initializers, null);
            _this.role = __runInitializers(_this, _role_initializers, null);
            _this.actName = __runInitializers(_this, _actName_initializers, null);
            _this.slideGirlNode = __runInitializers(_this, _slideGirlNode_initializers, null);
            _this.girlList = __runInitializers(_this, _girlList_initializers, null);
            _this.slideBoyNode = __runInitializers(_this, _slideBoyNode_initializers, null);
            _this.boyList = __runInitializers(_this, _boyList_initializers, null);
            _this.boy = [];
            _this.girl = [];
            _this.girlMoveId = 0;
            _this.boyMoveId = 0;
            _this.isInitArr = [];
            return _this;
        }
        RoleAction_1.prototype.start = function () {
            this.setAction();
            this.initActName();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.HideDressActionList, this.hideGrilActList, this);
        };
        RoleAction_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.HideDressActionList, this.hideGrilActList, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.RoleAction);
        };
        RoleAction_1.prototype.setAction = function () {
            var _this = this;
            //当前穿戴的
            var girlAct = new MoveData_1.MoveData(SingletonModuleComp_1.smc.account.AccountModel.rankingMove.girl);
            var boyAct = new MoveData_1.MoveData(SingletonModuleComp_1.smc.account.AccountModel.rankingMove.boy);
            this.roleGirl.setAnimation(0, girlAct.amName, true);
            if (SingletonModuleComp_1.smc.account.AccountModel.dressBoy.length > 0) {
                ViewUtil_1.ViewUtil.setNodeActiveByName("boy_bg", this.role, true);
                this.roleBoy.setAnimation(0, boyAct.amName, true);
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("boy_bg", this.role, false);
            }
            this.scheduleOnce(function () {
                _this.showCurrentSkin();
            });
        };
        RoleAction_1.prototype.saveAction = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.upRankingMove(this.boyMoveId, this.girlMoveId, function () {
                SingletonModuleComp_1.smc.account.AccountModel.rankingMove.girl = _this.girlMoveId;
                SingletonModuleComp_1.smc.account.AccountModel.rankingMove.boy = _this.boyMoveId;
                Oops_1.oops.gui.remove(GameUIConfig_1.UIID.RoleAction);
            });
        };
        RoleAction_1.prototype.showGrilActList = function (ev, type) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var sex = type == "1" ? DataObject_1.RoleMale.girl : DataObject_1.RoleMale.boy;
            var actNameList = SingletonModuleComp_1.smc.account.AccountModel.rankingMoveIds;
            var parent = type == "1" ? this.slideGirlNode : this.slideBoyNode;
            var listTile = type == "1" ? this.girlList : this.boyList;
            listTile.active = true;
            if (this.isInitArr.indexOf(sex) == -1) {
                var checkId = 0, curId = type == "1" ? this.girlMoveId : this.boyMoveId;
                for (var i = 0, len = actNameList.length; i < len; i++) {
                    var actItem = (0, cc_4.instantiate)(this.actName);
                    actItem.parent = parent;
                    actItem.getComponent(ActionName_1.ActionName).init(actNameList[i], sex);
                    if (curId == actNameList[i]) {
                        checkId = i;
                    }
                }
                this.isInitArr.push(sex);
                parent.children[checkId].getComponent(cc_5.Toggle).isChecked = true;
            }
        };
        RoleAction_1.prototype.hideGrilActList = function (event, args) {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (args.sex == DataObject_1.RoleMale.girl) {
                this.girlList.active = false;
                this.roleGirl.setAnimation(0, args.data.amName, true);
                this.girlMoveId = args.data.id;
                ViewUtil_1.ViewUtil.setLabelStringByName("girl_bg/slide/du_list_bg/girlActName", this.role, new LangData_1.LangData(args.data.name).getDesc());
            }
            else {
                this.boyList.active = false;
                this.boyMoveId = args.data.id;
                this.roleBoy.setAnimation(0, args.data.amName, true);
                ViewUtil_1.ViewUtil.setLabelStringByName("boy_bg/slide/du_list_bg/bodyActName", this.role, new LangData_1.LangData(args.data.name).getDesc());
            }
            this.scheduleOnce(function () {
                _this.showCurrentSkin();
            });
        };
        RoleAction_1.prototype.initActName = function () {
            this.girlMoveId = SingletonModuleComp_1.smc.account.AccountModel.rankingMove.girl;
            this.boyMoveId = SingletonModuleComp_1.smc.account.AccountModel.rankingMove.boy;
            var girlAct = new MoveData_1.MoveData(SingletonModuleComp_1.smc.account.AccountModel.rankingMove.girl);
            var boyAct = new MoveData_1.MoveData(SingletonModuleComp_1.smc.account.AccountModel.rankingMove.boy);
            ViewUtil_1.ViewUtil.setLabelStringByName("girl_bg/slide/du_list_bg/girlActName", this.role, new LangData_1.LangData(girlAct.name).getDesc());
            ViewUtil_1.ViewUtil.setLabelStringByName("boy_bg/slide/du_list_bg/bodyActName", this.role, new LangData_1.LangData(boyAct.name).getDesc());
        };
        RoleAction_1.prototype.hideActList = function (event, sex) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (parseInt(sex) == DataObject_1.RoleMale.girl) {
                this.girlList.active = false;
            }
            else {
                this.boyList.active = false;
            }
        };
        /**
         * 当前服饰
         */
        RoleAction_1.prototype.showCurrentSkin = function () {
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
        RoleAction_1.prototype.closeView = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.RoleAction);
        };
        return RoleAction_1;
    }(_classSuper));
    __setFunctionName(_classThis, "RoleAction");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _roleGirl_decorators = [property(cc_2.sp.Skeleton)];
        _roleBoy_decorators = [property(cc_2.sp.Skeleton)];
        _role_decorators = [property(cc_3.Node)];
        _actName_decorators = [property(cc_1.Prefab)];
        _slideGirlNode_decorators = [property(cc_3.Node)];
        _girlList_decorators = [property(cc_3.Node)];
        _slideBoyNode_decorators = [property(cc_3.Node)];
        _boyList_decorators = [property(cc_3.Node)];
        __esDecorate(null, null, _roleGirl_decorators, { kind: "field", name: "roleGirl", static: false, private: false, access: { has: function (obj) { return "roleGirl" in obj; }, get: function (obj) { return obj.roleGirl; }, set: function (obj, value) { obj.roleGirl = value; } }, metadata: _metadata }, _roleGirl_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _roleBoy_decorators, { kind: "field", name: "roleBoy", static: false, private: false, access: { has: function (obj) { return "roleBoy" in obj; }, get: function (obj) { return obj.roleBoy; }, set: function (obj, value) { obj.roleBoy = value; } }, metadata: _metadata }, _roleBoy_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _actName_decorators, { kind: "field", name: "actName", static: false, private: false, access: { has: function (obj) { return "actName" in obj; }, get: function (obj) { return obj.actName; }, set: function (obj, value) { obj.actName = value; } }, metadata: _metadata }, _actName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _slideGirlNode_decorators, { kind: "field", name: "slideGirlNode", static: false, private: false, access: { has: function (obj) { return "slideGirlNode" in obj; }, get: function (obj) { return obj.slideGirlNode; }, set: function (obj, value) { obj.slideGirlNode = value; } }, metadata: _metadata }, _slideGirlNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _girlList_decorators, { kind: "field", name: "girlList", static: false, private: false, access: { has: function (obj) { return "girlList" in obj; }, get: function (obj) { return obj.girlList; }, set: function (obj, value) { obj.girlList = value; } }, metadata: _metadata }, _girlList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _slideBoyNode_decorators, { kind: "field", name: "slideBoyNode", static: false, private: false, access: { has: function (obj) { return "slideBoyNode" in obj; }, get: function (obj) { return obj.slideBoyNode; }, set: function (obj, value) { obj.slideBoyNode = value; } }, metadata: _metadata }, _slideBoyNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _boyList_decorators, { kind: "field", name: "boyList", static: false, private: false, access: { has: function (obj) { return "boyList" in obj; }, get: function (obj) { return obj.boyList; }, set: function (obj, value) { obj.boyList = value; } }, metadata: _metadata }, _boyList_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RoleAction = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RoleAction = _classThis;
}();
exports.RoleAction = RoleAction;
