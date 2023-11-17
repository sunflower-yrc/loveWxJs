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
exports.PetEat = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var GameEvent_1 = require("../common/config/GameEvent");
var GameResPath_1 = require("../common/config/GameResPath");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var DataObject_1 = require("../tools/DataObject");
var HttpPost_1 = require("../tools/HttpPost");
var List_1 = require("../tools/List");
var Pet_1 = require("./Pet");
var PetExcelData_1 = require("./PetExcelData");
var PetFoodData_1 = require("./PetFoodData");
var DataMgr_1 = require("../mgr/DataMgr");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var PetEat = function () {
    var _classDecorators = [ccclass('PetEat')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _selectNumlabel_decorators;
    var _selectNumlabel_initializers = [];
    var _memberList_decorators;
    var _memberList_initializers = [];
    var PetEat = _classThis = /** @class */ (function (_super) {
        __extends(PetEat_1, _super);
        function PetEat_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.selectNumlabel = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _selectNumlabel_initializers, void 0));
            // @property(Node)
            // selected!: Node;
            _this.selectFood = null;
            _this.selectNum = 0;
            _this.memberList = __runInitializers(_this, _memberList_initializers, null);
            return _this;
        }
        PetEat_1.prototype.onAdded = function (data) {
            this.serverData = data[0];
            this.listData = data[0].list;
            this.petData = data[1];
            if (this.listData.length >= 1) {
                if (this.selectFood == null) {
                    this.selectFood = this.listData[0];
                    this.showFoodAttr();
                }
                else {
                    var has = false;
                    for (var i = 0; i < this.listData.length; i++) {
                        if (this.listData[i].foodsId == this.selectFood.foodsId)
                            has = true;
                    }
                    if (!has) {
                        this.selectFood = this.listData[0];
                        this.showFoodAttr();
                    }
                }
            }
            else {
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/top/powerBg/addBg", this.node, false);
                ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/top/loveBg/addBg", this.node, false);
            }
        };
        PetEat_1.prototype.onLoad = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.UpdatePetEat, this.refresh, this);
        };
        PetEat_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.UpdatePetEat, this.refresh, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.PetEat);
        };
        PetEat_1.prototype.refresh = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.petFoodsInfo(function (data) {
                _this.onAdded([data, _this.petData]);
                _this.start();
            });
        };
        PetEat_1.prototype.start = function () {
            var _this = this;
            var _a;
            var pet = PetExcelData_1.PetExcelData.getAllData().find(function (x) { return x.id == _this.petData.petId; });
            //初始化宠物信息与食物列表
            (_a = ViewUtil_1.ViewUtil.findChildByName("root/bg/pet", this.node).getComponent(Pet_1.Pet)) === null || _a === void 0 ? void 0 : _a.initSpin(this.petData.petId, this.petData.skin.useSkin, pet.hungerAm.toString());
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/top/powerBg/Label", this.node, this.petData.satiety + "/" + this.petData.satietyMax);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/top/loveBg/Label", this.node, this.petData.mood + "/" + this.petData.moodMax);
            ViewUtil_1.ViewUtil.findChildByName("root/bg/top/powerBg/pro", this.node).getComponent(cc_1.Sprite).fillRange = this.petData.satiety / this.petData.satietyMax;
            ViewUtil_1.ViewUtil.findChildByName("root/bg/top/loveBg/pro", this.node).getComponent(cc_1.Sprite).fillRange = this.petData.mood / this.petData.moodMax;
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/tips", this.node, pet.getFeedNagging());
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/getBtn/proLabel", this.node, this.serverData.getFoodsCount + "/" + this.serverData.getFoodsCountMax);
            //this.selected.active=this.listData.length>0;
            this.selectNumlabel.string = this.selectNum.toString();
            this.scheduleOnce(function () {
                _this.memberList.numItems = _this.listData.length;
            }, 0.1);
        };
        PetEat_1.prototype.onMembersListRender = function (item, idx) {
            var _this = this;
            if (item) {
                var food = PetFoodData_1.PetFoodData.getAllData().find(function (x) { return x.id == _this.listData[idx].foodsId; });
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("icon", item, GameResPath_1.GameResPath.getPetRewardIconsPath(food.foodIcon), BundleConfig_1.default.instance.guiBundle.name);
                ViewUtil_1.ViewUtil.setLabelStringByName("nameLabel", item, food.getName() + "x" + this.listData[idx].count);
            }
        };
        PetEat_1.prototype.onListSelected = function (item, selectedId, lastSelectedId, val, param) {
            if (!item)
                return;
            // this.selected.setParent(item);
            // this.selected.setPosition(Vec3.ZERO);
            this.selectFood = this.listData[selectedId];
            this.selectNum = 0;
            this.selectNumlabel.string = this.selectNum.toString();
            this.showFoodAttr();
        };
        PetEat_1.prototype.showFoodAttr = function () {
            var _this = this;
            var food = PetFoodData_1.PetFoodData.getAllData().find(function (x) { return x.id == _this.selectFood.foodsId; });
            var str = [];
            if (this.petData.petId == 1) {
                str = StringUtil_1.StringUtil.stringToArray2(food.pet1);
            }
            else if (this.petData.petId == 2) {
                str = StringUtil_1.StringUtil.stringToArray2(food.pet2);
            }
            else if (this.petData.petId == 3) {
                str = StringUtil_1.StringUtil.stringToArray2(food.pet3);
            }
            else if (this.petData.petId == 4) {
                str = StringUtil_1.StringUtil.stringToArray2(food.pet4);
            }
            else if (this.petData.petId == 5) {
                str = StringUtil_1.StringUtil.stringToArray2(food.pet5);
            }
            else if (this.petData.petId == 6) {
                str = StringUtil_1.StringUtil.stringToArray2(food.pet6);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/top/powerBg/addBg/num", this.node, "+" + str[0]);
            ViewUtil_1.ViewUtil.setLabelStringByName("root/bg/top/loveBg/addBg/num", this.node, "+" + str[1]);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/top/powerBg/addBg", this.node, true);
            ViewUtil_1.ViewUtil.setNodeActiveByName("root/bg/top/loveBg/addBg", this.node, true);
        };
        //获取食物按钮点击
        PetEat_1.prototype.btn_getFood = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            HttpPost_1.HttpPost.instance.petGetFoodsInfo(function (data) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.PetGetFood, data);
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        PetEat_1.prototype.btn_Eat = function () {
            var _this = this;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectFood == null)
                return;
            if (this.petData.satiety >= 100) {
                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("pet.BeFullTips"));
                return;
            }
            HttpPost_1.HttpPost.instance.petEatFoods(this.petData.petId, this.selectFood.foodsId, this.selectNum, function (data) {
                _this.petData.satiety = data.satiety;
                _this.petData.mood = data.mood;
                _this.onAdded([data, _this.petData]);
                _this.start();
                //更新数据
                DataMgr_1.DataMgr.updateUserData(null, null, data.taskList);
            }, function (data) {
                Oops_1.oops.gui.toast(data.msg);
            });
        };
        PetEat_1.prototype.btn_addNum = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectFood == null)
                return;
            if (this.selectNum < this.selectFood.count)
                this.selectNum += 1;
            this.selectNumlabel.string = this.selectNum.toString();
        };
        PetEat_1.prototype.btn_reduceNum = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            if (this.selectFood == null)
                return;
            if (this.selectNum > 0)
                this.selectNum -= 1;
            this.selectNumlabel.string = this.selectNum.toString();
        };
        PetEat_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PetEat);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.UpdatePetMain);
        };
        return PetEat_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PetEat");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _selectNumlabel_decorators = [property(cc_2.Label)];
        _memberList_decorators = [property({ type: List_1.default })];
        __esDecorate(null, null, _selectNumlabel_decorators, { kind: "field", name: "selectNumlabel", static: false, private: false, access: { has: function (obj) { return "selectNumlabel" in obj; }, get: function (obj) { return obj.selectNumlabel; }, set: function (obj, value) { obj.selectNumlabel = value; } }, metadata: _metadata }, _selectNumlabel_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _memberList_decorators, { kind: "field", name: "memberList", static: false, private: false, access: { has: function (obj) { return "memberList" in obj; }, get: function (obj) { return obj.memberList; }, set: function (obj, value) { obj.memberList = value; } }, metadata: _metadata }, _memberList_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PetEat = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PetEat = _classThis;
}();
exports.PetEat = PetEat;
