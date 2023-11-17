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
exports.ShootEnd = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var StringUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var cc_6 = require("cc");
var ShootData_1 = require("./ShootData");
var cc_7 = require("cc");
var ccclass = cc_5._decorator.ccclass, property = cc_5._decorator.property;
var ShootEnd = function () {
    var _classDecorators = [ccclass('ShootEnd')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_5.Component;
    var ShootEnd = _classThis = /** @class */ (function (_super) {
        __extends(ShootEnd_1, _super);
        function ShootEnd_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShootEnd_1.prototype.onAdded = function (data) {
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OnBtns);
            ShootEnd.showSp = ViewUtil_1.ViewUtil.findChildByName("panel/bigPhotoBg/photoBg/mask/showImg", this.node);
            if (cc_6.sys.isNative) {
                var filePath = data[1];
                ShootEnd.pName = data[0];
                cc_7.assetManager.loadRemote(filePath, function (err, imageAsset) {
                    if (err) {
                        console.log("show image error");
                    }
                    else {
                        var spriteFrame = new cc_2.SpriteFrame();
                        var texture = new cc_3.Texture2D();
                        texture.image = imageAsset;
                        spriteFrame.texture = texture;
                        ShootEnd.showSp.getComponent(cc_1.Sprite).spriteFrame = spriteFrame;
                        spriteFrame.packable = false;
                        spriteFrame.flipUVY = true;
                        if (cc_6.sys.isNative && (cc_6.sys.os === cc_6.sys.OS.IOS || cc_6.sys.os === cc_6.sys.OS.OSX)) {
                            spriteFrame.flipUVY = false;
                        }
                    }
                });
            }
            else {
                ShootEnd.pName = data[0];
                var filePath = data[1];
                var image_1 = new Image();
                image_1.onload = function () {
                    // 将 base64 编码的字符串转换成 ArrayBuffer
                    var texture = new cc_3.Texture2D();
                    var img = new cc_4.ImageAsset(image_1);
                    texture.image = img;
                    var spriteFrame = new cc_2.SpriteFrame();
                    spriteFrame.texture = texture;
                    ShootEnd.showSp.getComponent(cc_1.Sprite).spriteFrame = spriteFrame;
                    ShootEnd.useTexture = spriteFrame;
                    ShootData_1.ShootData.addSF(ShootEnd.pName, spriteFrame);
                };
                image_1.src = filePath;
                console.log(ShootEnd.pName);
            }
            ViewUtil_1.ViewUtil.setLabelStringByName("panel/bigPhotoBg/timeLabel", this.node, StringUtil_1.StringUtil.format(new Date(ShootEnd.pName * 1000), "yyyy-MM-dd"));
        };
        ShootEnd_1.prototype.btn_close = function () {
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.ShootEnd);
        };
        ShootEnd_1.prototype.btn_share = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wx_1, tt_1;
                return __generator(this, function (_a) {
                    if (cc_6.sys.platform === cc_6.sys.Platform.WECHAT_GAME) {
                        wx_1 = window["wx"];
                        // @ts-ignore
                        canvas.toTempFilePath({
                            x: cc_1.game.canvas.width / 2 - 250,
                            y: cc_1.game.canvas.height / 2 - 250,
                            width: 500,
                            height: 600,
                            destWidth: 500,
                            destHeight: 600,
                            success: function (res) {
                                wx_1.shareAppMessage({ title: Oops_1.oops.language.getLangByID("photo.shareTips"), imageUrl: res.tempFilePath });
                            }
                        });
                    }
                    else if (cc_6.sys.platform === cc_6.sys.Platform.BYTEDANCE_MINI_GAME) {
                        tt_1 = window["tt"];
                        // @ts-ignore
                        canvas.toTempFilePath({
                            x: cc_1.game.canvas.width / 2 - 250,
                            y: cc_1.game.canvas.height / 2 - 250,
                            width: 500,
                            height: 600,
                            destWidth: 500,
                            destHeight: 600,
                            success: function (res) {
                                tt_1.shareAppMessage({ title: Oops_1.oops.language.getLangByID("photo.shareTips"), imageUrl: res.tempFilePath });
                            }
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        ShootEnd_1.prototype.onDestroy = function () {
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.ShootEnd);
        };
        return ShootEnd_1;
    }(_classSuper));
    __setFunctionName(_classThis, "ShootEnd");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ShootEnd = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.pName = 0;
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ShootEnd = _classThis;
}();
exports.ShootEnd = ShootEnd;
