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
exports.Role = void 0;
var cc_1 = require("cc");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var DressData_1 = require("../common/tableData/DressData");
var DataObject_1 = require("../tools/DataObject");
var ccclass = cc_1._decorator.ccclass, property = cc_1._decorator.property;
var Role = function () {
    var _classDecorators = [ccclass('Role')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_1.Component;
    var Role = _classThis = /** @class */ (function (_super) {
        __extends(Role_1, _super);
        function Role_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.enabledRefresh = false;
            _this.refreshSkin = "";
            return _this;
        }
        Role_1.prototype.onEnable = function () {
            if (this.enabledRefresh)
                this.showSuitSkin(this.refreshSkin);
        };
        /**
         * 当前默认着装
         * @param sex 0男  1女
         */
        Role_1.prototype.defaultSkin = function (sex) {
            var data = sex == DataObject_1.RoleMale.boy ? SingletonModuleComp_1.smc.account.AccountModel.dressBoy : SingletonModuleComp_1.smc.account.AccountModel.dressGirl;
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                if (element) {
                    //该位置有
                    var dressData = new DressData_1.DressData(element);
                    this.showSkin(dressData);
                }
            }
        };
        /**
         * 着装
         * @param data 装扮数据
         */
        Role_1.prototype.showDressSKin = function (data) {
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                if (element) {
                    //该位置有
                    var dressData = new DressData_1.DressData(element);
                    this.showSkin(dressData);
                }
            }
        };
        /**
         * 显示套装皮肤
         */
        Role_1.prototype.showSuitSkin = function (skinList) {
            return __awaiter(this, void 0, void 0, function () {
                var dressIds, i, element, dressData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dressIds = StringUtil_1.StringUtil.stringToArray2(skinList);
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < dressIds.length)) return [3 /*break*/, 4];
                            element = parseInt(dressIds[i]);
                            dressData = new DressData_1.DressData(element);
                            return [4 /*yield*/, this.showSkin(dressData)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 显示皮肤
         * @param dressData
         */
        Role_1.prototype.showSkin = function (dressData, clearSkin) {
            if (clearSkin === void 0) { clearSkin = false; }
            var skinSlots = dressData.getSlotsName();
            for (var j = 0; j < skinSlots.length; j++) {
                var slot = skinSlots[j];
                // console.log(dressData.skin, "  ++++  ",slot);
                this.changeSlot(dressData.skin, slot, slot, clearSkin);
            }
        };
        /**
        * @param skinName 要替换的部件皮肤名称
        * @param slotName 要替换的部件的插槽名称
        * @param targetAttaName  Spine中皮肤占位符的名字
         */
        Role_1.prototype.changeSlot = function (skinName, slotName, targetAttaName, clearSkin) {
            var _this = this;
            if (clearSkin === void 0) { clearSkin = false; }
            //查找局部皮肤
            var skeletonData = this.getComponent(cc_1.sp.Skeleton).skeletonData.getRuntimeData();
            var targetSkin = skeletonData.findSkin(skinName);
            //查找局部皮肤下的插槽与附件
            var targetSkinSlotIndex = skeletonData.findSlotIndex(slotName);
            var atta = targetSkin === null || targetSkin === void 0 ? void 0 : targetSkin.getAttachment(targetSkinSlotIndex, targetAttaName);
            var curSlot = this.getComponent(cc_1.sp.Skeleton).findSlot(slotName);
            //有可能获取不到curSlot，这时候走一个下一帧执行即可
            if (!curSlot) {
                this.scheduleOnce(function () {
                    //查找全身皮肤下的插槽
                    var curSlot = _this.getComponent(cc_1.sp.Skeleton).findSlot(slotName);
                    // console.log("=======" , slotName, curSlot);
                    if (clearSkin) {
                        // 创建一个空的附件对象
                        var emptyAttachment = new cc_1.sp.spine.PointAttachment('__empty');
                        curSlot && curSlot.setAttachment(emptyAttachment);
                    }
                    else {
                        //替换全身皮肤插槽的附件
                        curSlot && curSlot.setAttachment(atta);
                    }
                });
            }
            else {
                if (clearSkin) {
                    var emptyAttachment = new cc_1.sp.spine.PointAttachment('__empty');
                    curSlot.setAttachment(emptyAttachment);
                }
                else {
                    //替换全身皮肤插槽的附件
                    curSlot.setAttachment(atta);
                }
            }
            /**特殊处理胡子插槽 */
            if (slotName == "mouth") {
                var huziSkinSlotIndex = skeletonData.findSlotIndex("huzi");
                if (huziSkinSlotIndex) {
                    this.changeSlot(skinName, "huzi", "huzi");
                }
            }
        };
        /**初始化成裸模 */
        Role_1.prototype.clearDress = function () {
            this.getComponent(cc_1.sp.Skeleton).setToSetupPose();
        };
        /**
         * 切换动作
         * @param animType
         */
        Role_1.prototype.changeAnim = function (animType) {
            this.getComponent(cc_1.sp.Skeleton).animation = animType;
        };
        return Role_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Role");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Role = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Role = _classThis;
}();
exports.Role = Role;
