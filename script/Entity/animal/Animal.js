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
exports.Animal = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var GlobalData_1 = require("../../game/common/tableData/GlobalData");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameEvent_1 = require("../../game/common/config/GameEvent");
var SingletonModuleComp_1 = require("../../game/common/ecs/SingletonModuleComp");
var AnimalEnum_1 = require("./AnimalEnum");
var HttpPost_1 = require("../../game/tools/HttpPost");
var cc_3 = require("cc");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var Animal = function () {
    var _classDecorators = [ccclass('Animal')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _spine_decorators;
    var _spine_initializers = [];
    var _btn_decorators;
    var _btn_initializers = [];
    var Animal = _classThis = /** @class */ (function (_super) {
        __extends(Animal_1, _super);
        function Animal_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.spine = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _spine_initializers, null));
            _this.btn = __runInitializers(_this, _btn_initializers, null);
            _this.index = null;
            _this.time = null;
            _this.cd = null;
            _this.animalName = null;
            _this.secenType = null;
            //冷却结束
            _this.endCdName = null;
            _this.state = AnimalEnum_1.AnimalState.waitting;
            //是否时间是从本地取得
            _this.isLocalTime = false;
            return _this;
        }
        Animal_1.prototype.onLoad = function () {
            var globalTable = new GlobalData_1.GlobalData(8);
            this.cd = parseInt(globalTable.value);
            // this.cd = 8;
        };
        Animal_1.prototype.onDestroy = function () {
            Oops_1.oops.timer.unRegister(this.timeId);
            //场景被销毁时还未领取增加出现次数
            if (this.state == AnimalEnum_1.AnimalState.sleep) {
                AnimalEnum_1.AnimalInfo.Instance.showTimes++;
            }
        };
        Animal_1.prototype.setSecenType = function (secenType, endCdName) {
            this.secenType = secenType;
            this.endCdName = endCdName;
        };
        /**创建计时器 */
        Animal_1.prototype.setTimer = function (time) {
            if (this.timeId) {
                Oops_1.oops.timer.unRegister(this.timeId);
            }
            this.time = time ? time : this.cd;
            this.isLocalTime = Boolean(time);
            this.timeId = Oops_1.oops.timer.register(this, "time", this.onSecond, this.onComplete);
        };
        Animal_1.prototype.onComplete = function () {
            this.node.active = true;
            if (this.endCdName == "catTime") {
                this.setAction("105");
            }
            else {
                this.setAction("205");
            }
            Oops_1.oops.timer.unRegister(this.timeId);
            this.setAnimalPos();
            if (this.isLocalTime) {
                AnimalEnum_1.AnimalInfo.Instance.showTimes--;
            }
        };
        Animal_1.prototype.onSecond = function () {
            if (this.isLocalTime)
                return;
            //动物播放一半cd时间后消失
            if (this.time == this.cd / 2) {
                this.node.active = false;
                AnimalEnum_1.AnimalInfo.Instance.showTimes--;
                AnimalEnum_1.AnimalInfo.Instance.indexs.push(this.index);
                if (AnimalEnum_1.AnimalInfo.Instance.showTimes <= 0) {
                    Oops_1.oops.timer.unRegister(this.timeId);
                    this.state = AnimalEnum_1.AnimalState.waitting;
                }
            }
        };
        //获取挂机奖励
        Animal_1.prototype.getCion = function () {
            var _this = this;
            this.btn.interactable = false;
            HttpPost_1.HttpPost.instance.interactEntry(1, function (data) {
                SingletonModuleComp_1.smc.account.AccountModel.vm.coin += data.coin_add;
                SingletonModuleComp_1.smc.account.AccountModel.animalInteractCount = data.animal_interact_count;
                Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.CoinFly, true);
                _this.setTimer();
                // let acName = (Math.random() * 10) > 5?"play":"run";
                var acName = _this.getRandomAction();
                _this.setAction(acName);
                //获取当前时间戳
                var curTime = Oops_1.oops.timer.getServerTime();
                Oops_1.oops.storage.set(_this.endCdName, curTime + _this.cd);
                // oops.storage.set("dogTime",this.dog.getComponent(Animal)?.time);
            });
        };
        Animal_1.prototype.getRandomAction = function () {
            var acArr;
            if (this.endCdName == "catTime") {
                acArr = ["104", "109", "110"];
            }
            else {
                acArr = ["204", "209"];
            }
            var idx = Math.floor(Math.random() * acArr.length);
            return acArr[idx];
        };
        //设置动作
        Animal_1.prototype.setAction = function (name) {
            this.spine.setAnimation(0, name, true);
        };
        //随机设置节点位置
        Animal_1.prototype.setAnimalPos = function () {
            var index = Math.floor(Math.random() * AnimalEnum_1.AnimalInfo.Instance.indexs.length);
            index = index == AnimalEnum_1.AnimalInfo.Instance.indexs.length ? index - 1 : index;
            var val = AnimalEnum_1.AnimalInfo.Instance.indexs[index];
            var pos = AnimalEnum_1.AnimalInfo.Instance.secenPos;
            this.node.active = true;
            this.index = val;
            this.node.setPosition(pos[val][0], pos[val][1]);
            var globalTable = new GlobalData_1.GlobalData(28);
            var skins = globalTable.value.split("-");
            if (this.endCdName == "catTime") {
                this.spine.setSkin(skins[0]);
                this.setAction("105");
            }
            else {
                this.spine.setSkin(skins[1]);
                this.setAction("205");
            }
            this.state = AnimalEnum_1.AnimalState.sleep;
            this.btn.interactable = true;
            AnimalEnum_1.AnimalInfo.Instance.indexs.splice(index, 1);
        };
        return Animal_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Animal");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _spine_decorators = [property(cc_1.sp.Skeleton)];
        _btn_decorators = [property(cc_3.Button)];
        __esDecorate(null, null, _spine_decorators, { kind: "field", name: "spine", static: false, private: false, access: { has: function (obj) { return "spine" in obj; }, get: function (obj) { return obj.spine; }, set: function (obj, value) { obj.spine = value; } }, metadata: _metadata }, _spine_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _btn_decorators, { kind: "field", name: "btn", static: false, private: false, access: { has: function (obj) { return "btn" in obj; }, get: function (obj) { return obj.btn; }, set: function (obj, value) { obj.btn = value; } }, metadata: _metadata }, _btn_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Animal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Animal = _classThis;
}();
exports.Animal = Animal;
