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
exports.Rank = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var DataObject_1 = require("../tools/DataObject");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var cc_3 = require("cc");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var BundleConfig_1 = require("../common/bundle/BundleConfig");
var RankItem_1 = require("./RankItem");
var cc_4 = require("cc");
var cc_5 = require("cc");
var cc_6 = require("cc");
var GameEvent_1 = require("../common/config/GameEvent");
var ChoseItem_1 = require("./ChoseItem");
var RankData_1 = require("../common/tableData/RankData");
var LangData_1 = require("../common/tableData/LangData");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var Role_1 = require("../dress/Role");
var List_1 = require("../tools/List");
var HttpPost_1 = require("../tools/HttpPost");
var houseRateData_1 = require("../common/tableData/houseRateData");
var GameResPath_1 = require("../common/config/GameResPath");
var cc_7 = require("cc");
var cc_8 = require("cc");
var cc_9 = require("cc");
var MoveData_1 = require("../common/tableData/MoveData");
var ccclass = cc_2._decorator.ccclass, property = cc_2._decorator.property;
var maxRanking = "100+";
var Rank = function () {
    var _classDecorators = [ccclass('Rank')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_2.Component;
    var _instanceExtraInitializers = [];
    var _choseList_decorators;
    var _choseList_initializers = [];
    var _choseParent_decorators;
    var _choseParent_initializers = [];
    var _choseItem_decorators;
    var _choseItem_initializers = [];
    var _myGirlRole_decorators;
    var _myGirlRole_initializers = [];
    var _myBoyRole_decorators;
    var _myBoyRole_initializers = [];
    var _list_decorators;
    var _list_initializers = [];
    var _top_decorators;
    var _top_initializers = [];
    var Rank = _classThis = /** @class */ (function (_super) {
        __extends(Rank_1, _super);
        function Rank_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.choseList = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _choseList_initializers, null));
            _this.choseParent = __runInitializers(_this, _choseParent_initializers, null);
            _this.choseItem = __runInitializers(_this, _choseItem_initializers, null);
            _this.myGirlRole = __runInitializers(_this, _myGirlRole_initializers, null);
            _this.myBoyRole = __runInitializers(_this, _myBoyRole_initializers, null);
            _this.list = __runInitializers(_this, _list_initializers, null);
            _this.top = __runInitializers(_this, _top_initializers, null);
            _this.isInit = false;
            _this.isShow = false;
            _this.showMaxHeight = 0;
            _this.curIdx = 0;
            _this.rankTypeArr = [];
            _this.rankList = [];
            return _this;
        }
        Rank_1.prototype.onLoad = function () {
            this.initRankData();
        };
        Rank_1.prototype.start = function () {
            Oops_1.oops.message.on(GameEvent_1.GameEvent.RankChoseList, this.hideChoseList, this);
            this.setRankList();
            this.initMyData();
            this.setTopData();
        };
        //初始化选择列表数据
        Rank_1.prototype.initRankData = function () {
            var rank = (new RankData_1.RankData()).rank;
            var index = 0;
            for (var key in rank) {
                var str = new LangData_1.LangData(rank[key].format).getDesc();
                this.rankTypeArr.push({ type: index, name: str, rankType: key });
                index++;
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("top/title/name", this.node, this.rankTypeArr[this.curIdx].name);
            ViewUtil_1.ViewUtil.setLabelStringByName("middle/Node/titleName", this.node, this.rankTypeArr[this.curIdx].name);
        };
        Rank_1.prototype.onAdded = function (data) {
            this.data = data;
        };
        Rank_1.prototype.updateRankData = function (data) {
            this.onAdded(data);
            this.initMyData();
            this.setTopData();
            this.setRankList();
        };
        Rank_1.prototype.onDestroy = function () {
            Oops_1.oops.message.off(GameEvent_1.GameEvent.RankChoseList, this.hideChoseList, this);
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Rank);
        };
        Rank_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Rank);
        };
        Rank_1.prototype.onRenderList = function (item, idx) {
            var _a;
            (_a = item.getComponent(RankItem_1.RankItem)) === null || _a === void 0 ? void 0 : _a.init(this.rankList[idx], this.rankTypeArr[this.curIdx].rankType);
        };
        //展示选择列表
        Rank_1.prototype.showChoseList = function () {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.choseList.active = true;
            ViewUtil_1.ViewUtil.setNodeActiveByName("top/title/jian", this.node, false);
            ViewUtil_1.ViewUtil.setNodeActiveByName("top/title/name", this.node, false);
            if (!this.isInit) {
                for (var i = 0, len = this.rankTypeArr.length; i < len; i++) {
                    var choseItem = (0, cc_5.instantiate)(this.choseItem);
                    choseItem.parent = this.choseParent;
                    (_a = choseItem.getComponent(ChoseItem_1.ChoseItem)) === null || _a === void 0 ? void 0 : _a.init(this.rankTypeArr[i]);
                }
                this.isInit = true;
            }
            this.choseParent.children[this.curIdx].getComponent(cc_6.Toggle).isChecked = true;
        };
        //隐藏选择列表
        Rank_1.prototype.hideChoseList = function (event, data) {
            this.choseList.active = false;
            ViewUtil_1.ViewUtil.setNodeActiveByName("top/title/jian", this.node, true);
            ViewUtil_1.ViewUtil.setNodeActiveByName("top/title/name", this.node, true);
            if (data.type == this.curIdx) {
                return;
            }
            this.curIdx = data.type;
            this.choseList.active = false;
            this.updateUI();
        };
        //前进切换
        Rank_1.prototype.addCurIndex = function () {
            if (this.curIdx == this.rankTypeArr.length - 1) {
                this.curIdx = 0;
            }
            else {
                this.curIdx++;
            }
            this.updateUI();
        };
        //后退切换
        Rank_1.prototype.removeCurIndex = function () {
            if (this.curIdx == 0) {
                this.curIdx = this.rankTypeArr.length - 1;
            }
            else {
                this.curIdx--;
            }
            this.updateUI();
        };
        Rank_1.prototype.updateUI = function () {
            var _this = this;
            this.choseList.active = false;
            ViewUtil_1.ViewUtil.setNodeActiveByName("top/title/jian", this.node, true);
            ViewUtil_1.ViewUtil.setNodeActiveByName("top/title/name", this.node, true);
            var data = this.rankTypeArr[this.curIdx];
            ViewUtil_1.ViewUtil.setLabelStringByName("top/title/name", this.node, data.name);
            ViewUtil_1.ViewUtil.setLabelStringByName("middle/Node/titleName", this.node, data.name);
            HttpPost_1.HttpPost.instance.getRankingDetail(this.rankTypeArr[this.curIdx].rankType, function (data) {
                _this.updateRankData(data);
            });
        };
        Rank_1.prototype.hideChoseListNode = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.hideChoseList("", this.rankTypeArr[this.curIdx]);
        };
        //设置前三名数据
        Rank_1.prototype.setTopData = function () {
            var _a, _b;
            var topData = this.data.rankingList.slice(0, 3);
            var _loop_1 = function (i) {
                var rankItem = this_1.top.getChildByName("rankItem" + i);
                if (topData[i]) {
                    rankItem.active = true;
                    ViewUtil_1.ViewUtil.setLabelStringByName("name", rankItem, topData[i].nike_name);
                    this_1.setRuaids(rankItem.getChildByName("mask").getComponent(cc_7.Mask));
                    if (this_1.rankTypeArr[this_1.curIdx].rankType == DataObject_1.RankType.houseGradeRank) {
                        var houseData = new houseRateData_1.houseRateData(topData[i].value);
                        ViewUtil_1.ViewUtil.setLabelStringByName("num", rankItem, new LangData_1.LangData(houseData.rateName).getDesc());
                    }
                    else {
                        ViewUtil_1.ViewUtil.setLabelStringByName("num", rankItem, topData[i].value);
                    }
                    if (topData[i].avatar_url != "") {
                        ViewUtil_1.ViewUtil.setHeadIcon(topData[i].avatar_url, "mask/head", rankItem);
                    }
                    else {
                        ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("mask/head", rankItem, GameResPath_1.GameResPath.getHeadImgPath(), BundleConfig_1.default.instance.guiBundle.name);
                    }
                    var girl_1 = ViewUtil_1.ViewUtil.findChildByName("role/girl_bg/girl", rankItem);
                    (_a = girl_1 === null || girl_1 === void 0 ? void 0 : girl_1.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.clearDress();
                    topData[i].rankingMove && this_1.setAction(girl_1.getComponent(cc_9.sp.Skeleton), topData[i].rankingMove.girl);
                    this_1.scheduleOnce(function () {
                        var _a;
                        (_a = girl_1 === null || girl_1 === void 0 ? void 0 : girl_1.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.showDressSKin(topData[i].dress.girl);
                    });
                    if (topData[i].dress.boy.length > 0) {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("role/body_bg", rankItem, true);
                        var body_1 = ViewUtil_1.ViewUtil.findChildByName("role/body_bg/body", rankItem);
                        (_b = body_1 === null || body_1 === void 0 ? void 0 : body_1.getComponent(Role_1.Role)) === null || _b === void 0 ? void 0 : _b.clearDress();
                        topData[i].rankingMove && this_1.setAction(body_1.getComponent(cc_9.sp.Skeleton), topData[i].rankingMove.boy);
                        this_1.scheduleOnce(function () {
                            var _a;
                            (_a = body_1 === null || body_1 === void 0 ? void 0 : body_1.getComponent(Role_1.Role)) === null || _a === void 0 ? void 0 : _a.showDressSKin(topData[i].dress.boy);
                        });
                    }
                    else {
                        ViewUtil_1.ViewUtil.setNodeActiveByName("role/body_bg", rankItem, false);
                    }
                }
                else {
                    rankItem.active = false;
                }
            };
            var this_1 = this;
            for (var i = 0; i < 3; i++) {
                _loop_1(i);
            }
        };
        Rank_1.prototype.setAction = function (spine, moveId) {
            var act = new MoveData_1.MoveData(moveId);
            spine.setAnimation(0, act.amName, true);
        };
        //设置自己得数据
        Rank_1.prototype.initMyData = function () {
            // this.myBoyRole.active = false;
            // this.myGirlRole.getComponent(Role)!.clearDress();
            // this.myGirlRole.getComponent(Role)!.defaultSkin(RoleMale.girl);
            var bottom = this.node.getChildByName("bottom");
            this.setRuaids(bottom.getChildByName("mask").getComponent(cc_7.Mask));
            if (SingletonModuleComp_1.smc.account.AccountModel.avatarUrl != "") {
                ViewUtil_1.ViewUtil.setHeadIcon(SingletonModuleComp_1.smc.account.AccountModel.avatarUrl, "mask/head", bottom);
            }
            else {
                ViewUtil_1.ViewUtil.setSingleSpriteFrameByName("mask/head", bottom, GameResPath_1.GameResPath.getHeadImgPath(), BundleConfig_1.default.instance.guiBundle.name);
            }
            // ViewUtil.setLabelStringByName("bottom/name", this.node, this.data.self.nike_name);
            if (this.rankTypeArr[this.curIdx].rankType == DataObject_1.RankType.houseGradeRank) {
                var houseData = new houseRateData_1.houseRateData(this.data.self.value);
                ViewUtil_1.ViewUtil.setLabelStringByName("bottom/count", this.node, new LangData_1.LangData(houseData.rateName).getDesc());
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("bottom/count", this.node, this.data.self.value + "");
            }
            if (!this.data.self.ranking) {
                ViewUtil_1.ViewUtil.setLabelStringByName("bottom/ranking", this.node, maxRanking);
            }
            else {
                ViewUtil_1.ViewUtil.setLabelStringByName("bottom/ranking", this.node, this.data.self.ranking);
            }
            // if (smc.account.AccountModel.dressBoy.length > 0) {
            //     this.myBoyRole.active = true;
            //     this.myBoyRole.getComponent(Role)!.clearDress();
            //     this.myBoyRole.getComponent(Role)!.defaultSkin(RoleMale.boy);
            // }
        };
        //设置排行榜列表
        Rank_1.prototype.setRankList = function () {
            if (this.data.rankingList.length > 3) {
                this.rankList = this.data.rankingList.slice(3);
            }
            else {
                this.rankList = [];
            }
            this.list.numItems = this.rankList.length;
            this.list.scrollTo(-1);
        };
        //设置圆角
        Rank_1.prototype.setRuaids = function (mask) {
            mask.type = cc_7.Mask.Type.GRAPHICS_RECT;
            var uiTransform = mask.node.getComponent(cc_1.UITransform);
            var width = uiTransform.width;
            var height = uiTransform.height;
            var anchorX = uiTransform.anchorX;
            var anchorY = uiTransform.anchorY;
            var graphics = mask.subComp;
            graphics.clear();
            var x = -width * anchorX;
            var y = -height * anchorY;
            graphics.roundRect(x, y, width, height, 20);
            graphics.fill();
        };
        Rank_1.prototype.testTween = function () {
            var node = this.node.getChildByName("test");
            console.log("pos", node === null || node === void 0 ? void 0 : node.position.x, node === null || node === void 0 ? void 0 : node.position.y);
            (0, cc_3.tween)(node).to(0.15, { position: new cc_8.Vec3(100, 300, 0) }).call(function () {
                console.log("pos", node === null || node === void 0 ? void 0 : node.position);
            }).start();
        };
        Rank_1.prototype.onBeforeRemove = function () {
            console.log("🚀 ~ file: Rank.ts:303 ~ Rank ~ onBeforeRemove ~ onBeforeRemove:");
            // let sf = this.node.getComponent(Sprite)?.spriteFrame;
            // sf && this.addAutoReleaseAsset(sf);
        };
        return Rank_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Rank");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _choseList_decorators = [property(cc_2.Node)];
        _choseParent_decorators = [property(cc_2.Node)];
        _choseItem_decorators = [property(cc_4.Prefab)];
        _myGirlRole_decorators = [property(cc_2.Node)];
        _myBoyRole_decorators = [property(cc_2.Node)];
        _list_decorators = [property(List_1.default)];
        _top_decorators = [property(cc_2.Node)];
        __esDecorate(null, null, _choseList_decorators, { kind: "field", name: "choseList", static: false, private: false, access: { has: function (obj) { return "choseList" in obj; }, get: function (obj) { return obj.choseList; }, set: function (obj, value) { obj.choseList = value; } }, metadata: _metadata }, _choseList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _choseParent_decorators, { kind: "field", name: "choseParent", static: false, private: false, access: { has: function (obj) { return "choseParent" in obj; }, get: function (obj) { return obj.choseParent; }, set: function (obj, value) { obj.choseParent = value; } }, metadata: _metadata }, _choseParent_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _choseItem_decorators, { kind: "field", name: "choseItem", static: false, private: false, access: { has: function (obj) { return "choseItem" in obj; }, get: function (obj) { return obj.choseItem; }, set: function (obj, value) { obj.choseItem = value; } }, metadata: _metadata }, _choseItem_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _myGirlRole_decorators, { kind: "field", name: "myGirlRole", static: false, private: false, access: { has: function (obj) { return "myGirlRole" in obj; }, get: function (obj) { return obj.myGirlRole; }, set: function (obj, value) { obj.myGirlRole = value; } }, metadata: _metadata }, _myGirlRole_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _myBoyRole_decorators, { kind: "field", name: "myBoyRole", static: false, private: false, access: { has: function (obj) { return "myBoyRole" in obj; }, get: function (obj) { return obj.myBoyRole; }, set: function (obj, value) { obj.myBoyRole = value; } }, metadata: _metadata }, _myBoyRole_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _list_decorators, { kind: "field", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; }, set: function (obj, value) { obj.list = value; } }, metadata: _metadata }, _list_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _top_decorators, { kind: "field", name: "top", static: false, private: false, access: { has: function (obj) { return "top" in obj; }, get: function (obj) { return obj.top; }, set: function (obj, value) { obj.top = value; } }, metadata: _metadata }, _top_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Rank = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Rank = _classThis;
}();
exports.Rank = Rank;
