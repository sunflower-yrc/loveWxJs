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
exports.AnimalMgr = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var GlobalData_1 = require("../../game/common/tableData/GlobalData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var Animal_1 = require("./Animal");
var AnimalEnum_1 = require("./AnimalEnum");
var HttpPost_1 = require("../../game/tools/HttpPost");
var GameEvent_1 = require("../../game/common/config/GameEvent");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var AnimalMgr = function () {
    var _classDecorators = [ccclass('AnimalMgr')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _cat_decorators;
    var _cat_initializers = [];
    var _dog_decorators;
    var _dog_initializers = [];
    var _secenType_decorators;
    var _secenType_initializers = [];
    var AnimalMgr = _classThis = /** @class */ (function (_super) {
        __extends(AnimalMgr_1, _super);
        function AnimalMgr_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.cat = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _cat_initializers, null));
            _this.dog = __runInitializers(_this, _dog_initializers, null);
            //场景类型1.基础场景 2.升级后的场景
            _this.secenType = __runInitializers(_this, _secenType_initializers, 1);
            _this.time = null;
            return _this;
        }
        AnimalMgr_1.prototype.onLoad = function () {
        };
        AnimalMgr_1.prototype.start = function () {
            this.initAnimal();
            Oops_1.oops.message.on(GameEvent_1.GameEvent.OffBtns, this.offBtns, this);
            Oops_1.oops.message.on(GameEvent_1.GameEvent.OnBtns, this.onBtns, this);
        };
        AnimalMgr_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OffBtns, this.offBtns, this);
            Oops_1.oops.message.off(GameEvent_1.GameEvent.OnBtns, this.onBtns, this);
        };
        //初始化动物数据
        AnimalMgr_1.prototype.initAnimal = function () {
            AnimalEnum_1.AnimalInfo.Instance.init(this.secenType);
            // this.setTimer();注销零点刷新请求
            this.cat.active = false;
            this.dog.active = false;
            var catScript = this.cat.getComponent(Animal_1.Animal);
            var dogScript = this.dog.getComponent(Animal_1.Animal);
            catScript === null || catScript === void 0 ? void 0 : catScript.setSecenType(this.secenType, "catTime");
            dogScript === null || dogScript === void 0 ? void 0 : dogScript.setSecenType(this.secenType, "dogTime");
            var globalTable = new GlobalData_1.GlobalData(10);
            if (AnimalEnum_1.AnimalInfo.Instance.showTimes <= 0)
                return;
            //设置猫狗的位置
            if (SingletonModuleComp_1.smc.account.AccountModel.offlineData.leaveTime > parseInt(globalTable.value)) {
                if (AnimalEnum_1.AnimalInfo.Instance.showTimes > 1) {
                    catScript === null || catScript === void 0 ? void 0 : catScript.setAnimalPos();
                    dogScript === null || dogScript === void 0 ? void 0 : dogScript.setAnimalPos();
                    AnimalEnum_1.AnimalInfo.Instance.showTimes -= 2;
                }
                else {
                    Math.floor(Math.random() * 10) > 5 ? catScript === null || catScript === void 0 ? void 0 : catScript.setAnimalPos() : dogScript === null || dogScript === void 0 ? void 0 : dogScript.setAnimalPos();
                    AnimalEnum_1.AnimalInfo.Instance.showTimes--;
                }
            }
            else {
                var catTime = Oops_1.oops.storage.get("catTime");
                var dogTime = Oops_1.oops.storage.get("dogTime");
                var curTime = Oops_1.oops.timer.getServerTime();
                if (AnimalEnum_1.AnimalInfo.Instance.showTimes > 1) {
                    var catCd = parseInt(catTime) - curTime;
                    var dogCd = parseInt(dogTime) - curTime;
                    if (catCd > 0) {
                        catScript === null || catScript === void 0 ? void 0 : catScript.setTimer(catCd);
                    }
                    else {
                        catScript === null || catScript === void 0 ? void 0 : catScript.setAnimalPos();
                        AnimalEnum_1.AnimalInfo.Instance.showTimes--;
                    }
                    if (dogCd > 0) {
                        dogScript === null || dogScript === void 0 ? void 0 : dogScript.setTimer(dogCd);
                    }
                    else {
                        dogScript === null || dogScript === void 0 ? void 0 : dogScript.setAnimalPos();
                        AnimalEnum_1.AnimalInfo.Instance.showTimes--;
                    }
                }
                else {
                    if (Math.floor(Math.random() * 10) > 5) {
                        var catCd = parseInt(catTime) - curTime;
                        if (catCd > 0) {
                            catScript === null || catScript === void 0 ? void 0 : catScript.setTimer(catCd);
                        }
                        else {
                            catScript === null || catScript === void 0 ? void 0 : catScript.setAnimalPos();
                            AnimalEnum_1.AnimalInfo.Instance.showTimes--;
                        }
                    }
                    else {
                        var dogCd = parseInt(dogTime) - curTime;
                        if (dogCd > 0) {
                            dogScript === null || dogScript === void 0 ? void 0 : dogScript.setTimer(dogCd);
                        }
                        else {
                            dogScript === null || dogScript === void 0 ? void 0 : dogScript.setAnimalPos();
                            AnimalEnum_1.AnimalInfo.Instance.showTimes--;
                        }
                    }
                }
            }
        };
        /**创建计时器 */
        AnimalMgr_1.prototype.setTimer = function () {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            this.time = this.getZeroTime();
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        AnimalMgr_1.prototype.onSecond = function () {
        };
        //零点刷新(后续可优化为公共接口)
        AnimalMgr_1.prototype.onComplete = function () {
            var _this = this;
            HttpPost_1.HttpPost.instance.dayRefreshUserInfo(function (data) {
                _this.setTimer();
                SingletonModuleComp_1.smc.account.AccountModel.animalInteractCount = data.sceneInteract.animal_interact_count;
                _this.refreshData();
            });
        };
        //零点刷新状态
        AnimalMgr_1.prototype.refreshData = function () {
            var catScript = this.cat.getComponent(Animal_1.Animal);
            var dogScript = this.dog.getComponent(Animal_1.Animal);
            if ((catScript === null || catScript === void 0 ? void 0 : catScript.state) == AnimalEnum_1.AnimalState.waitting) {
                catScript.setAnimalPos();
            }
            if ((dogScript === null || dogScript === void 0 ? void 0 : dogScript.state) == AnimalEnum_1.AnimalState.waitting) {
                dogScript.setAnimalPos();
            }
        };
        //获取距离当天24点整即下一天的0点整还有多少秒
        AnimalMgr_1.prototype.getZeroTime = function () {
            var curTime = Oops_1.oops.timer.getServerTime();
            var date = new Date(curTime * 1000);
            date.setHours(0, 0, 0, 0);
            return (date.getTime() / 1000 + 24 * 60 * 60) - curTime;
        };
        /**关闭按钮 */
        AnimalMgr_1.prototype.offBtns = function () {
            this.node.active = false;
        };
        /**关闭按钮 */
        AnimalMgr_1.prototype.onBtns = function () {
            this.node.active = true;
        };
        return AnimalMgr_1;
    }(_classSuper));
    __setFunctionName(_classThis, "AnimalMgr");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _cat_decorators = [property(cc_2.Node)];
        _dog_decorators = [property(cc_2.Node)];
        _secenType_decorators = [property(cc_1.CCInteger)];
        __esDecorate(null, null, _cat_decorators, { kind: "field", name: "cat", static: false, private: false, access: { has: function (obj) { return "cat" in obj; }, get: function (obj) { return obj.cat; }, set: function (obj, value) { obj.cat = value; } }, metadata: _metadata }, _cat_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dog_decorators, { kind: "field", name: "dog", static: false, private: false, access: { has: function (obj) { return "dog" in obj; }, get: function (obj) { return obj.dog; }, set: function (obj, value) { obj.dog = value; } }, metadata: _metadata }, _dog_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _secenType_decorators, { kind: "field", name: "secenType", static: false, private: false, access: { has: function (obj) { return "secenType" in obj; }, get: function (obj) { return obj.secenType; }, set: function (obj, value) { obj.secenType = value; } }, metadata: _metadata }, _secenType_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AnimalMgr = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AnimalMgr = _classThis;
}();
exports.AnimalMgr = AnimalMgr;
