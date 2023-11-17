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
exports.PhotoRecord = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var cc_6 = require("cc");
var cc_7 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var List_1 = require("../tools/List");
var ListItem_1 = require("../tools/ListItem");
var Shoot_1 = require("./Shoot");
var DataObject_1 = require("../tools/DataObject");
var ShootData_1 = require("./ShootData");
var cc_8 = require("cc");
var cc_9 = require("cc");
var ccclass = cc_7._decorator.ccclass, property = cc_7._decorator.property;
var PhotoRecord = function () {
    var _classDecorators = [ccclass('PhotoRecord')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_7.Component;
    var _instanceExtraInitializers = [];
    var _applyList_decorators;
    var _applyList_initializers = [];
    var _shareInfoNode_decorators;
    var _shareInfoNode_initializers = [];
    var _deleteInfoNode_decorators;
    var _deleteInfoNode_initializers = [];
    var PhotoRecord = _classThis = /** @class */ (function (_super) {
        __extends(PhotoRecord_1, _super);
        function PhotoRecord_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.applyList = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _applyList_initializers, null));
            _this.data = [];
            _this.shareInfoNode = __runInitializers(_this, _shareInfoNode_initializers, void 0);
            _this.deleteInfoNode = __runInitializers(_this, _deleteInfoNode_initializers, void 0);
            _this.curPhotoName = 0;
            _this.type = 1;
            return _this;
        }
        PhotoRecord_1.prototype.onAdded = function (type) {
            return __awaiter(this, void 0, void 0, function () {
                var result, photo, time, photo, time, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.type = type;
                            if (!cc_8.sys.isNative) return [3 /*break*/, 1];
                            result = void 0;
                            if (type == 1) {
                                photo = Oops_1.oops.storage.get("hand_photp");
                                time = Oops_1.oops.storage.get("hand_photp_time");
                                if (time) {
                                    this.timeObj = JSON.parse(time);
                                }
                                if (photo) {
                                    result = JSON.parse(photo);
                                }
                                else {
                                    result = [];
                                }
                            }
                            else {
                                photo = Oops_1.oops.storage.get("auto_photp");
                                time = Oops_1.oops.storage.get("hand_photp_time");
                                if (time) {
                                    this.timeObj = JSON.parse(time);
                                }
                                if (photo) {
                                    result = JSON.parse(photo);
                                }
                                else {
                                    result = [];
                                }
                            }
                            this.data = result;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, Shoot_1.Shoot.getPhotosByType(type)];
                        case 2:
                            result = _a.sent();
                            this.data = result;
                            this.applyList.numItems = this.data.length;
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PhotoRecord_1.prototype.start = function () {
            if (this.type == 1) {
                ViewUtil_1.ViewUtil.setLabelStringByName("title", this.node, Oops_1.oops.language.getLangByID("photo.photoRecordTitle"));
            }
            else if (this.type == 2) {
                ViewUtil_1.ViewUtil.setLabelStringByName("title", this.node, Oops_1.oops.language.getLangByID("photo.photoRecordTitle2"));
            }
            else if (this.type == 3) {
            }
            if (cc_8.sys.isNative) {
                this.applyList.numItems = this.data.length;
            }
        };
        PhotoRecord_1.prototype.btn_close = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PhotoRecord);
        };
        PhotoRecord_1.prototype.btn_shoot = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.open(GameUIConfig_1.UIID.Shoot);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.PhotoRecord);
        };
        PhotoRecord_1.prototype.onMembersListRender = function (item, idx) {
            if (item) {
                var showSp_1 = ViewUtil_1.ViewUtil.findChildByName("mask/showSp", item);
                if (cc_8.sys.isNative) {
                    var filePath = Shoot_1.Shoot.getPhotoNative(this.type, this.data[idx]);
                    console.log("展示图片filePath", filePath);
                    cc_9.assetManager.loadRemote(filePath, function (err, imageAsset) {
                        if (err) {
                            console.log("show image error");
                        }
                        else {
                            var spriteFrame = new cc_2.SpriteFrame();
                            var texture = new cc_4.Texture2D();
                            texture.image = imageAsset;
                            spriteFrame.texture = texture;
                            showSp_1.getComponent(cc_5.Sprite).spriteFrame = spriteFrame;
                            spriteFrame.packable = false;
                            spriteFrame.flipUVY = true;
                            if (cc_8.sys.isNative && (cc_8.sys.os === cc_8.sys.OS.IOS || cc_8.sys.os === cc_8.sys.OS.OSX)) {
                                spriteFrame.flipUVY = false;
                            }
                        }
                    });
                }
                else {
                    var name_1 = this.data[idx].name;
                    if (ShootData_1.ShootData.getSF(this.data[idx].name)) {
                        showSp_1.getComponent(cc_5.Sprite).spriteFrame = ShootData_1.ShootData.getSF(this.data[idx].name);
                    }
                    else {
                        var filePath = this.data[idx].code;
                        var image_1 = new Image();
                        image_1.onload = function () {
                            var texture = new cc_4.Texture2D();
                            var img = new cc_1.ImageAsset(image_1);
                            texture.image = img;
                            var spriteFrame = new cc_2.SpriteFrame();
                            spriteFrame.texture = texture;
                            showSp_1.getComponent(cc_5.Sprite).spriteFrame = spriteFrame;
                            ShootData_1.ShootData.addSF(name_1, spriteFrame);
                        };
                        image_1.src = filePath;
                    }
                }
                ViewUtil_1.ViewUtil.setNodeActiveByName("deletBtn", item, this.type != 2);
                ViewUtil_1.ViewUtil.findChildByName("shareBtn", item).off(cc_6.Button.EventType.CLICK);
                ViewUtil_1.ViewUtil.findChildByName("deletBtn", item).off(cc_6.Button.EventType.CLICK);
                // ViewUtil.findChildByName("mask/showSp", item)!.off(Button.EventType.CLICK);
                ViewUtil_1.ViewUtil.findChildByName("shareBtn", item).on(cc_6.Button.EventType.CLICK, this.btn_showInfo, this);
                ViewUtil_1.ViewUtil.findChildByName("deletBtn", item).on(cc_6.Button.EventType.CLICK, this.btn_delete, this);
                // ViewUtil.findChildByName("mask/showSp", item)!.on(Button.EventType.CLICK, this.btn_showInfo, this);
                if (cc_8.sys.isNative) {
                    ViewUtil_1.ViewUtil.setLabelStringByName("timeLabel", item, StringUtil_1.StringUtil.format(new Date(this.timeObj[this.data[idx]] * 1000), "yyyy-MM-dd"));
                }
                else {
                    ViewUtil_1.ViewUtil.setLabelStringByName("timeLabel", item, StringUtil_1.StringUtil.format(new Date(this.data[idx].name * 1000), "yyyy-MM-dd"));
                }
            }
        };
        //分享照片
        PhotoRecord_1.prototype.btn_share = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wx;
                var _this = this;
                return __generator(this, function (_a) {
                    Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                    wx = window["wx"];
                    if (wx) {
                        canvas.toTempFilePath({
                            x: cc_3.game.canvas.width / 2 - 150,
                            y: cc_3.game.canvas.height / 2 - 150,
                            width: 400,
                            height: 400,
                            destWidth: 300,
                            destHeight: 300,
                            success: function (res) {
                                wx.shareAppMessage({ title: Oops_1.oops.language.getLangByID("photo.shareTips"), imageUrl: res.tempFilePath });
                                _this.scheduleOnce(function () { _this.shareInfoNode.active = false; }, 3);
                            }
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        //删除按钮点击
        PhotoRecord_1.prototype.btn_delete = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            this.deleteInfoNode.active = true;
            var showSp = ViewUtil_1.ViewUtil.findChildByName("bigPhotoBg/photoBg/mask/showImg", this.deleteInfoNode);
            if (cc_8.sys.isNative) {
                var filePath = Shoot_1.Shoot.getPhotoNative(this.type, this.data[idx]);
                this.curPhotoName = this.data[idx];
                cc_9.assetManager.loadRemote(filePath, function (err, imageAsset) {
                    if (err) {
                        console.log("show image error");
                    }
                    else {
                        var spriteFrame = new cc_2.SpriteFrame();
                        var texture = new cc_4.Texture2D();
                        texture.image = imageAsset;
                        spriteFrame.texture = texture;
                        showSp.getComponent(cc_5.Sprite).spriteFrame = spriteFrame;
                        spriteFrame.packable = false;
                        spriteFrame.flipUVY = true;
                        if (cc_8.sys.isNative && (cc_8.sys.os === cc_8.sys.OS.IOS || cc_8.sys.os === cc_8.sys.OS.OSX)) {
                            spriteFrame.flipUVY = false;
                        }
                    }
                });
                ViewUtil_1.ViewUtil.setLabelStringByName("bigPhotoBg/timeLabel", this.deleteInfoNode, StringUtil_1.StringUtil.format(new Date(this.timeObj[this.data[idx]] * 1000), "yyyy-MM-dd"));
            }
            else {
                this.curPhotoName = this.data[idx].name;
                //渲染图片
                var filePath = this.data[idx].code;
                var image_2 = new Image();
                image_2.onload = function () {
                    var texture = new cc_4.Texture2D();
                    var img = new cc_1.ImageAsset(image_2);
                    texture.image = img;
                    var spriteFrame = new cc_2.SpriteFrame();
                    spriteFrame.texture = texture;
                    showSp.getComponent(cc_5.Sprite).spriteFrame = spriteFrame;
                };
                image_2.src = filePath;
                ViewUtil_1.ViewUtil.setLabelStringByName("bigPhotoBg/timeLabel", this.deleteInfoNode, StringUtil_1.StringUtil.format(new Date(this.data[idx].name * 1000), "yyyy-MM-dd"));
            }
        };
        PhotoRecord_1.prototype.btn_delete_yes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var d;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!cc_8.sys.isNative) return [3 /*break*/, 1];
                            Shoot_1.Shoot.deletPhotoNative(this.type, this.curPhotoName);
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            this.deleteInfoNode.active = false;
                            this.onAdded(this.type);
                            this.applyList.numItems = this.data.length;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, Shoot_1.Shoot.deletPhotoByName(this.curPhotoName)];
                        case 2:
                            d = _a.sent();
                            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
                            this.deleteInfoNode.active = false;
                            this.data = d;
                            this.applyList.numItems = this.data.length;
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PhotoRecord_1.prototype.btn_delete_no = function () {
            this.btn_closeDeleteInfoPanel();
        };
        //展示详情页面
        PhotoRecord_1.prototype.btn_showInfo = function (button) {
            var _a;
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = (_a = button.node.parent) === null || _a === void 0 ? void 0 : _a.getComponent(ListItem_1.default).listId;
            this.shareInfoNode.active = true;
            var showSp = ViewUtil_1.ViewUtil.findChildByName("bigPhotoBg/photoBg/mask/showImg", this.shareInfoNode);
            if (cc_8.sys.isNative) {
                var filePath = Shoot_1.Shoot.getPhotoNative(this.type, this.data[idx]);
                cc_9.assetManager.loadRemote(filePath, function (err, imageAsset) {
                    if (err) {
                        console.log("show image error");
                    }
                    else {
                        var spriteFrame = new cc_2.SpriteFrame();
                        var texture = new cc_4.Texture2D();
                        texture.image = imageAsset;
                        spriteFrame.texture = texture;
                        showSp.getComponent(cc_5.Sprite).spriteFrame = spriteFrame;
                        spriteFrame.packable = false;
                        spriteFrame.flipUVY = true;
                        if (cc_8.sys.isNative && (cc_8.sys.os === cc_8.sys.OS.IOS || cc_8.sys.os === cc_8.sys.OS.OSX)) {
                            spriteFrame.flipUVY = false;
                        }
                    }
                });
                ViewUtil_1.ViewUtil.setLabelStringByName("bigPhotoBg/timeLabel", this.deleteInfoNode, StringUtil_1.StringUtil.format(new Date(this.timeObj[this.data[idx]] * 1000), "yyyy-MM-dd"));
            }
            else {
                //渲染图片
                var filePath = this.data[idx].code;
                showSp.getComponent(cc_5.Sprite).spriteFrame = ShootData_1.ShootData.getSF(this.data[idx].name);
                ViewUtil_1.ViewUtil.setLabelStringByName("bigPhotoBg/timeLabel", this.shareInfoNode, StringUtil_1.StringUtil.format(new Date(this.data[idx].name * 1000), "yyyy-MM-dd"));
            }
        };
        PhotoRecord_1.prototype.btn_showInfo2 = function (button) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var idx = button.node.parent.parent.getComponent(ListItem_1.default).listId;
            //渲染图片
            var filePath = this.data[idx].code;
            var showSp = ViewUtil_1.ViewUtil.findChildByName("bigPhotoBg/photoBg/mask/showImg", this.shareInfoNode);
            showSp.getComponent(cc_5.Sprite).spriteFrame = ShootData_1.ShootData.getSF(this.data[idx].name);
            this.shareInfoNode.active = true;
            ViewUtil_1.ViewUtil.setLabelStringByName("bigPhotoBg/timeLabel", this.shareInfoNode, StringUtil_1.StringUtil.format(new Date(this.data[idx].name * 1000), "yyyy-MM-dd"));
        };
        PhotoRecord_1.prototype.btn_closeShareInfoPanel = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.shareInfoNode.active = false;
        };
        PhotoRecord_1.prototype.btn_closeDeleteInfoPanel = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            this.deleteInfoNode.active = false;
        };
        return PhotoRecord_1;
    }(_classSuper));
    __setFunctionName(_classThis, "PhotoRecord");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _applyList_decorators = [property({ type: List_1.default })];
        _shareInfoNode_decorators = [property(cc_7.Node)];
        _deleteInfoNode_decorators = [property(cc_7.Node)];
        __esDecorate(null, null, _applyList_decorators, { kind: "field", name: "applyList", static: false, private: false, access: { has: function (obj) { return "applyList" in obj; }, get: function (obj) { return obj.applyList; }, set: function (obj, value) { obj.applyList = value; } }, metadata: _metadata }, _applyList_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _shareInfoNode_decorators, { kind: "field", name: "shareInfoNode", static: false, private: false, access: { has: function (obj) { return "shareInfoNode" in obj; }, get: function (obj) { return obj.shareInfoNode; }, set: function (obj, value) { obj.shareInfoNode = value; } }, metadata: _metadata }, _shareInfoNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _deleteInfoNode_decorators, { kind: "field", name: "deleteInfoNode", static: false, private: false, access: { has: function (obj) { return "deleteInfoNode" in obj; }, get: function (obj) { return obj.deleteInfoNode; }, set: function (obj, value) { obj.deleteInfoNode = value; } }, metadata: _metadata }, _deleteInfoNode_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PhotoRecord = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.spData = [];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PhotoRecord = _classThis;
}();
exports.PhotoRecord = PhotoRecord;
