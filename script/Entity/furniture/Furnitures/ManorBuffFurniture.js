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
exports.ManorBuffFurniture = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../../../game/common/bundle/BundleConfig");
var GameResPath_1 = require("../../../game/common/config/GameResPath");
var GameUIConfig_1 = require("../../../game/common/config/GameUIConfig");
var SingletonModuleComp_1 = require("../../../game/common/ecs/SingletonModuleComp");
var GameMgr_1 = require("../../../game/common/mgr/GameMgr");
var ManorFacilitiesData_1 = require("../../../game/manor/ManorFacilitiesData");
var HttpPost_1 = require("../../../game/tools/HttpPost");
var DataManager_1 = require("../../../Global/DataManager");
var FloorsMgr_1 = require("../../floor/FloorsMgr");
var FurnitureEnum_1 = require("../FurnitureEnum");
var FurnitureMgr_1 = require("../FurnitureMgr");
var ccclass = cc_5._decorator.ccclass, property = cc_5._decorator.property;
var ManorBuffFurniture = function () {
    var _classDecorators = [ccclass('ManorBuffFurniture')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = FurnitureMgr_1.FurnitureMgr;
    var _instanceExtraInitializers = [];
    var _leftNode_decorators;
    var _leftNode_initializers = [];
    var _xPos_decorators;
    var _xPos_initializers = [];
    var _yPos_decorators;
    var _yPos_initializers = [];
    var _interaction_decorators;
    var _interaction_initializers = [];
    var ManorBuffFurniture = _classThis = /** @class */ (function (_super) {
        __extends(ManorBuffFurniture_1, _super);
        function ManorBuffFurniture_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.leftNode = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _leftNode_initializers, null));
            _this.xPos = __runInitializers(_this, _xPos_initializers, 0);
            _this.yPos = __runInitializers(_this, _yPos_initializers, 0);
            _this.interaction = __runInitializers(_this, _interaction_initializers, false);
            _this.blockType = FurnitureEnum_1.BlockType.ManorBuff;
            _this.direction = FurnitureEnum_1.FurnitureDirectionEnum.Left;
            return _this;
        }
        ManorBuffFurniture_1.prototype.updatePos = function (pos, touchState) {
            if ((this.settlePos.x == pos.x && this.settlePos.y == pos.y) && touchState != FurnitureEnum_1.TouchState.TouchEnd) {
                return;
            }
            var isValid = true;
            this.settlePos = pos;
            this.updateBlocks();
            //**占地色块显示 */
            isValid = this.freshPlotFloorSprites();
            if (isValid) {
                this.updateSettlePos(pos);
                GameMgr_1.GameMgr.Instance.sceneMgr.setOpacity();
                if (touchState == FurnitureEnum_1.TouchState.TouchEnd) {
                    GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
                    GameMgr_1.GameMgr.Instance.originRotate = this.direction;
                    GameMgr_1.GameMgr.Instance.originIsPlotType = this.isPlotType;
                    this.action();
                }
                /**修正 */
                GameMgr_1.GameMgr.Instance.clickItem.updatePosToCenter();
            }
            this.offColorThis();
            this.centerPos = null;
            return isValid;
        };
        //被点击
        ManorBuffFurniture_1.prototype.clicked = function (extend) {
            if (extend === void 0) { extend = true; }
            GameMgr_1.GameMgr.Instance.clickItem.setSelectItem(this);
            /**初始位置 */
            GameMgr_1.GameMgr.Instance.originPos = this.settlePos;
            GameMgr_1.GameMgr.Instance.originRotate = this.direction;
            if (extend) {
                //取消占地
                this.setOffExtend();
                this.action();
                Oops_1.oops.logB(this.itemId, "家具id");
                GameMgr_1.GameMgr.Instance.mapManager.moveScreenToNode(this.getActiveNode(), 0);
                // GameMgr.Instance.MapClickable = false;
            }
            GameMgr_1.GameMgr.Instance.sceneMgr.shadowAllFurnitures();
            var flag = this.freshPlotFloorSprites();
            return flag;
        };
        ManorBuffFurniture_1.prototype.updateSettlePos = function (pos) {
            FloorsMgr_1.FloorsMgr.Instance.GetPlotFloorByPos(pos).settle(this.node);
            this.node.setPosition(cc_2.Vec3.ZERO);
            var tempWorldPos = this.node.worldPosition;
            this.ZIdx = this.calculateZIndex();
            GameMgr_1.GameMgr.Instance.sceneMgr.setChild(this, true);
            this.node.worldPosition = tempWorldPos;
            this.updatePlotState();
        };
        ManorBuffFurniture_1.prototype.freshPlotFloorSprites = function () {
            FloorsMgr_1.FloorsMgr.Instance.HideAllFloorSprite();
            return FloorsMgr_1.FloorsMgr.Instance.checkPlotSpritesColor(this);
        };
        //更新设施外观
        ManorBuffFurniture_1.prototype.updatePlotState = function () {
            var _this = this;
            var _a;
            this.unscheduleAllCallbacks();
            (_a = ViewUtil_1.ViewUtil.findChildByName("left", this.node)) === null || _a === void 0 ? void 0 : _a.children.forEach(function (e) {
                e.active = false;
            });
            if (this.type == FurnitureEnum_1.FurnitureTypeEnum.ManorBillboard) {
                // ViewUtil.setSingleSpriteFrame(this.leftNode, "texture/manor/buff/manor_gsp", BundleConfig.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.findChildByName("left", this.node).getComponent(cc_1.Sprite).enabled = false;
                ViewUtil_1.ViewUtil.setNodeActiveByName("left/gsp", this.node, true);
            }
            else {
                //判断是否解锁了？
                if (this.plotId == 4001) {
                    ViewUtil_1.ViewUtil.findChildByName("left", this.node).getComponent(cc_1.Sprite).enabled = false;
                    ViewUtil_1.ViewUtil.setNodeActiveByName("left/" + this.plotId, this.node, true);
                    var manorFanciData = ManorFacilitiesData_1.ManorFacilitiesData.getAllData().find(function (x) { return x.id == _this.plotId; });
                    //计算一个变身时间
                    var curAttrs = StringUtil_1.StringUtil.stringToArray5(manorFanciData.attrArray[DataManager_1.default.Instance.getManorFanciLevel(this.plotId)]);
                    //每x秒生成y个庄园币
                    var getCoinNum = Math.floor((Oops_1.oops.timer.getServerTime() - SingletonModuleComp_1.smc.account.AccountModel.manorTreeLastGetTime) / Number(curAttrs[0])) * Number(curAttrs[1]);
                    if (getCoinNum >= Number(curAttrs[2])) //变身
                        ViewUtil_1.ViewUtil.findChildByName("left/4001", this.node).getComponent(cc_1.sp.Skeleton).setAnimation(0, "reward", true);
                    else {
                        ViewUtil_1.ViewUtil.findChildByName("left/4001", this.node).getComponent(cc_1.sp.Skeleton).setAnimation(0, "idle", true);
                        this.scheduleOnce(function () {
                            ViewUtil_1.ViewUtil.findChildByName("left/4001", _this.node).getComponent(cc_1.sp.Skeleton).setAnimation(0, "reward", true);
                        }, (Number(curAttrs[2]) - getCoinNum) / Number(curAttrs[1]) * Number(curAttrs[0]));
                    }
                }
                else {
                    if (DataManager_1.default.Instance.getManorFanciLevel(this.plotId) > 0) {
                        ViewUtil_1.ViewUtil.findChildByName("left", this.node).getComponent(cc_1.Sprite).enabled = false;
                        ViewUtil_1.ViewUtil.setNodeActiveByName("left/" + this.plotId, this.node, true);
                    }
                    else {
                        ViewUtil_1.ViewUtil.setSingleSpriteFrame(this.leftNode, GameResPath_1.GameResPath.getPlotBuffSpPath(this.plotId), BundleConfig_1.default.instance.guiBundle.name);
                        ViewUtil_1.ViewUtil.findChildByName("left", this.node).getComponent(cc_1.Sprite).enabled = true;
                    }
                }
            }
        };
        //点击自己---处理选中之类的情况
        ManorBuffFurniture_1.prototype.baseClick = function () {
            var _this = this;
            if (this.type == FurnitureEnum_1.FurnitureTypeEnum.ManorBillboard) {
                HttpPost_1.HttpPost.instance.broadcast(1, function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorDealPop, data);
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.ManorFacilitiesUp, this.plotId);
            }
        };
        //关闭地块上的按钮点击
        ManorBuffFurniture_1.prototype.closeBtnClick = function () {
            this.getComponentsInChildren(cc_3.Button).forEach(function (e) {
                e.interactable = false;
            });
        };
        //恢复地块的按钮点击
        ManorBuffFurniture_1.prototype.openBtnClick = function () {
            this.getComponentsInChildren(cc_3.Button).forEach(function (e) {
                e.interactable = true;
            });
        };
        return ManorBuffFurniture_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ManorBuffFurniture");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _leftNode_decorators = [property(cc_5.Node)];
        _xPos_decorators = [property(cc_1.CCInteger)];
        _yPos_decorators = [property(cc_1.CCInteger)];
        _interaction_decorators = [property(cc_4.CCBoolean)];
        __esDecorate(null, null, _leftNode_decorators, { kind: "field", name: "leftNode", static: false, private: false, access: { has: function (obj) { return "leftNode" in obj; }, get: function (obj) { return obj.leftNode; }, set: function (obj, value) { obj.leftNode = value; } }, metadata: _metadata }, _leftNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _xPos_decorators, { kind: "field", name: "xPos", static: false, private: false, access: { has: function (obj) { return "xPos" in obj; }, get: function (obj) { return obj.xPos; }, set: function (obj, value) { obj.xPos = value; } }, metadata: _metadata }, _xPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _yPos_decorators, { kind: "field", name: "yPos", static: false, private: false, access: { has: function (obj) { return "yPos" in obj; }, get: function (obj) { return obj.yPos; }, set: function (obj, value) { obj.yPos = value; } }, metadata: _metadata }, _yPos_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _interaction_decorators, { kind: "field", name: "interaction", static: false, private: false, access: { has: function (obj) { return "interaction" in obj; }, get: function (obj) { return obj.interaction; }, set: function (obj, value) { obj.interaction = value; } }, metadata: _metadata }, _interaction_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ManorBuffFurniture = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ManorBuffFurniture = _classThis;
}();
exports.ManorBuffFurniture = ManorBuffFurniture;
