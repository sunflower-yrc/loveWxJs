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
exports.Shoot = void 0;
var cc_1 = require("cc");
var cc_2 = require("cc");
var cc_3 = require("cc");
var cc_4 = require("cc");
var cc_5 = require("cc");
var cc_6 = require("cc");
var cc_7 = require("cc");
var cc_8 = require("cc");
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var ViewUtil_1 = require("../../../../extensions/oops-plugin-framework/assets/core/utils/ViewUtil");
var GameEvent_1 = require("../common/config/GameEvent");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var HttpPost_1 = require("../tools/HttpPost");
var DataObject_1 = require("../tools/DataObject");
var GameMgr_1 = require("../common/mgr/GameMgr");
var cc_9 = require("cc");
var ccclass = cc_8._decorator.ccclass, property = cc_8._decorator.property;
var Shoot = function () {
    var _classDecorators = [ccclass('Shoot')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = cc_8.Component;
    var _instanceExtraInitializers = [];
    var _target_decorators;
    var _target_initializers = [];
    var _toggleContainer_decorators;
    var _toggleContainer_initializers = [];
    var Shoot = _classThis = /** @class */ (function (_super) {
        __extends(Shoot_1, _super);
        function Shoot_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.target = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _target_initializers, void 0));
            _this.toggleContainer = __runInitializers(_this, _toggleContainer_initializers, null);
            return _this;
        }
        Shoot_1.prototype.btn_close = function () {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Shoot);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.ShowHomeUI);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OnBtns);
            GameMgr_1.GameMgr.Instance.isTakePhoto = false;
        };
        Shoot_1.prototype.onAdded = function () {
            Shoot.shootPhotoName = 0;
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.HideHomeUI);
            Oops_1.oops.message.dispatchEvent(GameEvent_1.GameEvent.OffBtns);
            Oops_1.oops.gui.setPopUpNodeUnBlockEvent();
            GameMgr_1.GameMgr.Instance.isTakePhoto = true;
        };
        Shoot_1.prototype.onDestroy = function () {
            GameMgr_1.GameMgr.Instance.isTakePhoto = false;
            Oops_1.oops.gui.release(GameUIConfig_1.UIID.Shoot);
        };
        Shoot_1.prototype.start = function () {
            Shoot.shootRate = 300;
        };
        Shoot_1.prototype.toggle_changed = function (event, data) {
            Oops_1.oops.audio.playEffect(DataObject_1.AudioType.Sound_Click);
            var tog = this.toggleContainer.activeToggles()[0];
            if (tog.node.name == "rate1") {
                Shoot.shootRate = 150;
                ViewUtil_1.ViewUtil.setLabelStringByName("shootSquare/scale/Label", this.node, "150*150");
                ViewUtil_1.ViewUtil.findChildByName("shootSquare", this.node).getComponent(cc_1.UITransform).width = 190;
                ViewUtil_1.ViewUtil.findChildByName("shootSquare", this.node).getComponent(cc_1.UITransform).height = 190;
            }
            else if (tog.node.name == "rate2") {
                Shoot.shootRate = 300;
                ViewUtil_1.ViewUtil.setLabelStringByName("shootSquare/scale/Label", this.node, "300*300");
                ViewUtil_1.ViewUtil.findChildByName("shootSquare", this.node).getComponent(cc_1.UITransform).width = 340;
                ViewUtil_1.ViewUtil.findChildByName("shootSquare", this.node).getComponent(cc_1.UITransform).height = 340;
            }
            else if (tog.node.name == "rate3") {
                Shoot.shootRate = 600;
                ViewUtil_1.ViewUtil.setLabelStringByName("shootSquare/scale/Label", this.node, "600*600");
                ViewUtil_1.ViewUtil.findChildByName("shootSquare", this.node).getComponent(cc_1.UITransform).width = 640;
                ViewUtil_1.ViewUtil.findChildByName("shootSquare", this.node).getComponent(cc_1.UITransform).height = 640;
            }
        };
        Shoot_1.prototype.takeScreenshot = function () {
            return __awaiter(this, void 0, void 0, function () {
                var texture;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.captureFullscreen()];
                        case 1:
                            texture = _a.sent();
                            this.cropTexture(texture);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Shoot_1.prototype.captureFullscreen = function () {
            var _this = this;
            var width = Shoot.shootRate;
            var height = Shoot.shootRate;
            var worldCamera = Oops_1.oops.gui.root.getComponentInChildren(cc_7.CameraComponent);
            if (Shoot.camera == null)
                Shoot.camera = Oops_1.oops.gui.root.getChildByName("SceneCamera").getComponent(cc_1.Camera);
            Shoot.camera.orthoHeight = Shoot.shootRate / 2;
            Shoot.camera.node.worldPosition = worldCamera.node.worldPosition;
            Shoot.camera.node.active = true;
            var texture = new cc_6.RenderTexture();
            var renderWindowInfo = {
                width: width,
                height: height
            };
            return new Promise(function (resolve, reject) {
                texture.initialize(renderWindowInfo);
                Shoot.camera.targetTexture = texture;
                _this.scheduleOnce(function () {
                    Shoot.camera.targetTexture = null;
                    Shoot.camera.node.active = false;
                    resolve(texture);
                }, 0.1);
            });
        };
        Shoot_1.prototype.cropTexture = function (texture) {
            return __awaiter(this, void 0, void 0, function () {
                var sp, ca, ca;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sp = new cc_2.SpriteFrame();
                            //let texture2:RenderTexture=this.flipTexture(texture);
                            sp.texture = texture;
                            this.target.getComponent(cc_3.Sprite).spriteFrame = sp;
                            if (!cc_9.sys.isNative) return [3 /*break*/, 2];
                            return [4 /*yield*/, Shoot.nativeSave(Shoot.flipTexture(sp.texture), sp.texture.width, sp.texture.height, 1)];
                        case 1:
                            ca = _a.sent();
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ShootEnd, [Shoot.shootPhotoName, ca]);
                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Shoot);
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, Shoot.toImgUrl(sp.texture.width, sp.texture.height, Shoot.flipTexture(sp.texture), true, 1)];
                        case 3:
                            ca = _a.sent();
                            Oops_1.oops.gui.open(GameUIConfig_1.UIID.ShootEnd, [Shoot.shootPhotoName, ca.toDataURL("image/png", 0.3)]);
                            Oops_1.oops.gui.remove(GameUIConfig_1.UIID.Shoot);
                            _a.label = 4;
                        case 4:
                            HttpPost_1.HttpPost.instance.recordsTimes(function (data) {
                                console.log("记录拍照次数成功");
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        Shoot_1.nativeSave = function (data, width, height, type) {
            return __awaiter(this, void 0, void 0, function () {
                var name, key, id, num, arr, cur, num, arr, cur, filePath;
                return __generator(this, function (_a) {
                    name = "", key = "", id = 0;
                    if (type == 1) {
                        num = Oops_1.oops.storage.get("hand_photp"), arr = [], cur = void 0;
                        if (num) {
                            arr = JSON.parse(num);
                            if (arr.length > 0) {
                                cur = arr[arr.length - 1] + 1;
                            }
                            else {
                                cur = 1;
                            }
                        }
                        else {
                            cur = 1;
                        }
                        arr.push(cur);
                        key = "hand_photp_time";
                        Oops_1.oops.storage.set("hand_photp", arr);
                        name = "hand_photp_" + cur + ".png";
                        id = cur;
                    }
                    else if (type == 2) {
                        num = Oops_1.oops.storage.get("auto_photp"), arr = [], cur = void 0;
                        if (num) {
                            arr = JSON.parse(num);
                            if (arr.length > 0) {
                                cur = arr[arr.length - 1] + 1;
                            }
                            else {
                                cur = 1;
                            }
                        }
                        else {
                            cur = 1;
                        }
                        arr.push(cur);
                        key = "auto_photp_time";
                        Oops_1.oops.storage.set("auto_photp", arr);
                        name = "auto_photp_" + cur + ".png";
                        id = cur;
                    }
                    else {
                    }
                    this.setPhotoTime(key, id);
                    filePath = jsb.fileUtils.getWritablePath() + name;
                    //@ts-ignore
                    if (jsb.saveImageData && data) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                //@ts-ignore
                                jsb.saveImageData(data, width, height, filePath).then(function () {
                                    console.log("save image data success!");
                                    resolve(filePath);
                                }).catch(function () {
                                    console.log("save image data failed!");
                                });
                            })];
                    }
                    return [2 /*return*/];
                });
            });
        };
        Shoot_1.setPhotoTime = function (key, id) {
            Shoot.shootPhotoName = Oops_1.oops.timer.getServerTime();
            var time = Oops_1.oops.storage.get(key), timeObj;
            if (time) {
                timeObj = JSON.parse(time);
                timeObj[id] = Shoot.shootPhotoName;
            }
            else {
                timeObj = {};
                timeObj[id] = Shoot.shootPhotoName;
            }
            Oops_1.oops.storage.set(key, timeObj);
        };
        Shoot_1.flipTexture = function (texture) {
            var width = texture.width;
            var height = texture.height;
            var pixels = texture.readPixels();
            var temp = new Uint8ClampedArray(width * 4);
            for (var y = 0; y < height / 2; y++) {
                var offset1 = y * width * 4;
                var offset2 = (height - y - 1) * width * 4;
                for (var x = 0; x < width; x++) {
                    var index1 = offset1 + x * 4;
                    var index2 = offset2 + x * 4;
                    temp[0] = pixels[index1];
                    temp[1] = pixels[index1 + 1];
                    temp[2] = pixels[index1 + 2];
                    temp[3] = pixels[index1 + 3];
                    pixels[index1] = pixels[index2];
                    pixels[index1 + 1] = pixels[index2 + 1];
                    pixels[index1 + 2] = pixels[index2 + 2];
                    pixels[index1 + 3] = pixels[index2 + 3];
                    pixels[index2] = temp[0];
                    pixels[index2 + 1] = temp[1];
                    pixels[index2 + 2] = temp[2];
                    pixels[index2 + 3] = temp[3];
                }
            }
            return pixels;
        };
        /**
         * 屏幕捕捉，核心功能——摄像机的锚点在中心点，设置捕捉区域的属性需要注意
         * @param area 捕捉区域，同时也是摄像机的父节点，以及渲染节点
         * @param rect 需要捕捉的内部区域
         */
        Shoot_1.prototype._capture = function (area, rect) {
            var cNode = Shoot.camera.node, texture = new cc_6.RenderTexture;
            texture.reset({ width: rect.width, height: rect.height });
            cNode.setPosition(rect.x, rect.y);
            area.addChild(cNode);
            Shoot.camera.orthoHeight = rect.height / 2;
            Shoot.camera.targetTexture = texture;
            // 执行渲染，单个渲染会报错，那就直接全部渲染一次吧（单个渲染：cc.director.root.pipeline.render([camera.camera]);）
            cc_4.director.root.frameMove(0);
            Shoot.camera.targetTexture = null;
            cNode.parent = null;
            return texture;
        };
        Shoot_1.saveLocal = function (canvas, type) {
            //保存到文件中
            // 使用TextEncoder API进行Base64编码
            var base64String = canvas.toDataURL("image/png", 0.5);
            var photos;
            var wx = window["wx"];
            if (wx) {
                var fs_1 = wx.getFileSystemManager();
                fs_1.readFile({
                    filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                    encoding: 'utf8',
                    position: 0,
                    success: function (res) {
                        photos = JSON.parse(res.data);
                        if (photos && photos.items) {
                            var item = {
                                name: Oops_1.oops.timer.getServerTime(),
                                type: type,
                                code: base64String,
                            };
                            Shoot.shootPhotoName = item.name;
                            photos.items.push(item);
                        }
                        else {
                            photos.items = [];
                            var item = {
                                name: Oops_1.oops.timer.getServerTime(),
                                type: type,
                                code: base64String,
                            };
                            Shoot.shootPhotoName = item.name;
                            photos.items.push(item);
                        }
                        fs_1.writeFile({
                            filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                            data: JSON.stringify(photos),
                            encoding: 'utf8',
                            success: function (res) {
                            },
                            fail: function (res) {
                                console.error(res);
                            }
                        });
                    },
                    fail: function (res) {
                        console.error(res);
                        photos = {};
                        photos.items = [];
                        var item = {
                            name: Oops_1.oops.timer.getServerTime(),
                            type: type,
                            code: base64String,
                        };
                        Shoot.shootPhotoName = item.name;
                        photos.items.push(item);
                        fs_1.writeFile({
                            filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                            data: JSON.stringify(photos),
                            encoding: 'utf8',
                            success: function (res) {
                            },
                            fail: function (res) {
                                console.error(res);
                            }
                        });
                    }
                });
            }
            var tt = window["tt"];
            if (tt) {
                var fs_2 = tt.getFileSystemManager();
                fs_2.readFile({
                    filePath: "".concat(tt.env.USER_DATA_PATH, "/photos.txt"),
                    encoding: 'utf8',
                    success: function (res) {
                        photos = JSON.parse(res.data);
                        if (photos && photos.items) {
                            var item = {
                                name: Oops_1.oops.timer.getServerTime(),
                                type: type,
                                code: base64String,
                            };
                            Shoot.shootPhotoName = item.name;
                            photos.items.push(item);
                        }
                        else {
                            photos.items = [];
                            var item = {
                                name: Oops_1.oops.timer.getServerTime(),
                                type: type,
                                code: base64String,
                            };
                            Shoot.shootPhotoName = item.name;
                            photos.items.push(item);
                        }
                        fs_2.writeFile({
                            filePath: "".concat(tt.env.USER_DATA_PATH, "/photos.txt"),
                            data: JSON.stringify(photos),
                            encoding: 'utf8',
                            success: function (res) {
                            },
                            fail: function (res) {
                                console.error(res);
                            }
                        });
                    },
                    fail: function (res) {
                        console.error(res);
                        photos = {};
                        photos.items = [];
                        var item = {
                            name: Oops_1.oops.timer.getServerTime(),
                            type: type,
                            code: base64String,
                        };
                        Shoot.shootPhotoName = item.name;
                        photos.items.push(item);
                        fs_2.writeFile({
                            filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                            data: JSON.stringify(photos),
                            encoding: 'utf8',
                            success: function (res) {
                            },
                            fail: function (res) {
                                console.error(res);
                            }
                        });
                    }
                });
            }
            //oops.storage.set("photos", photos);
        };
        Shoot_1.toImgUrl = function (_width, _height, data, save, type) {
            if (save === void 0) { save = false; }
            if (type === void 0) { type = 1; }
            // 通用模式，只要确保能创建一个2d canvas即可
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var rowBytes = _width * 4, row = 0, width = _width, height = _height, url;
            // 调整画布成当前纹理大小
            canvas.width = _width;
            canvas.height = _height;
            // 写入canvas
            while (row < height) {
                var imageData = ctx.createImageData(width, 1), start = row * width * 4;
                for (var i = 0; i < rowBytes; i++) {
                    imageData.data[i] = data[start + i];
                }
                ctx.putImageData(imageData, 0, row++);
            }
            if (save)
                Shoot.saveLocal(canvas, type);
            Shoot.shootPhotoName = Oops_1.oops.timer.getServerTime();
            var wx = window["wx"];
            if (wx) {
                new Promise(function (resolve, reject) {
                    // @ts-ignore
                    canvas.toTempFilePath({
                        x: 0,
                        y: 0,
                        width: Shoot.shootRate,
                        height: Shoot.shootRate,
                        destWidth: 300,
                        destHeight: 300,
                        success: function (res) {
                            resolve(res.tempFilePath);
                            wx.getSetting({
                                success: function (res) {
                                    if (!res.authSetting['scope.writePhotosAlbum']) {
                                        wx.authorize({
                                            scope: 'scope.writePhotosAlbum',
                                            success: function () {
                                                saveImage();
                                            },
                                            fail: function () {
                                                console.log('用户拒绝授权保存图片到相册');
                                            }
                                        });
                                    }
                                    else {
                                        saveImage();
                                    }
                                }
                            });
                            var saveImage = function () {
                                wx.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function () {
                                        console.log('保存图片到相册成功！');
                                    },
                                    fail: function () {
                                        console.log('保存图片到相册失败！');
                                    }
                                });
                            };
                        }
                    });
                });
            }
            var tt = window["tt"];
            if (tt) {
                new Promise(function (resolve, reject) {
                    // @ts-ignore
                    canvas.toTempFilePath({
                        x: 0,
                        y: 0,
                        width: Shoot.shootRate,
                        height: Shoot.shootRate,
                        destWidth: 300,
                        destHeight: 300,
                        success: function (res) {
                            resolve(res.tempFilePath);
                            tt.getSetting({
                                success: function (res) {
                                    if (!res.authSetting['scope.album']) {
                                        tt.authorize({
                                            scope: 'scope.album',
                                            success: function () {
                                                saveImage();
                                            },
                                            fail: function () {
                                                console.log('用户拒绝授权保存图片到相册');
                                            }
                                        });
                                    }
                                    else {
                                        saveImage();
                                    }
                                }
                            });
                            var saveImage = function () {
                                tt.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function () {
                                        console.log('保存图片到相册成功！');
                                    },
                                    fail: function () {
                                        console.log('保存图片到相册失败！');
                                    }
                                });
                            };
                        }
                    });
                });
            }
            return canvas;
        };
        Shoot_1.getPhotosByName = function (name) {
            var photos;
            var wx = window["wx"];
            if (wx) {
                var fs_3 = wx.getFileSystemManager();
                return new Promise(function (resolve, reject) {
                    fs_3.readFile({
                        filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                        encoding: 'utf8',
                        position: 0,
                        success: function (res) {
                            photos = JSON.parse(res.data);
                            var result = null;
                            if (photos.items.length != 0) {
                                for (var i = 0; i < photos.items.length; i++) {
                                    if (photos.items[i].name == name)
                                        result = photos.items[i];
                                }
                            }
                            resolve(result);
                        },
                        fail: function (res) {
                            console.error(res);
                        }
                    });
                });
            }
        };
        Shoot_1.getPhotosByType = function (type) {
            return __awaiter(this, void 0, void 0, function () {
                var photos, wx, fs_4;
                return __generator(this, function (_a) {
                    wx = window["wx"];
                    if (wx) {
                        fs_4 = wx.getFileSystemManager();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                fs_4.readFile({
                                    filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                                    encoding: 'utf8',
                                    position: 0,
                                    success: function (res) {
                                        var result = [];
                                        photos = JSON.parse(res.data);
                                        if (photos == null)
                                            return result;
                                        if (photos.items.length != 0) {
                                            for (var i = 0; i < photos.items.length; i++) {
                                                if (photos.items[i].type == type)
                                                    result.push(photos.items[i]);
                                            }
                                        }
                                        resolve(result);
                                    },
                                    fail: function (res) {
                                        console.error(res);
                                    }
                                });
                            })];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
                });
            });
        };
        Shoot_1.deletPhotoByName = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var photos, wx, type, fs_5;
                return __generator(this, function (_a) {
                    wx = window["wx"];
                    type = 0;
                    if (wx) {
                        fs_5 = wx.getFileSystemManager();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                fs_5.readFile({
                                    filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                                    encoding: 'utf8',
                                    position: 0,
                                    success: function (res) {
                                        photos = JSON.parse(res.data);
                                        var result = [];
                                        var index = -1;
                                        if (photos.items.length != 0) {
                                            for (var i = 0; i < photos.items.length; i++) {
                                                if (photos.items[i].name == name) {
                                                    type = photos.items[i].type;
                                                    index = i;
                                                }
                                            }
                                            if (index != -1) {
                                                photos.items.splice(index, 1);
                                            }
                                            for (var i = 0; i < photos.items.length; i++) {
                                                if (photos.items[i].type == type) {
                                                    result.push(photos.items[i]);
                                                }
                                            }
                                            resolve(result);
                                            fs_5.writeFile({
                                                filePath: "".concat(wx.env.USER_DATA_PATH, "/photos.txt"),
                                                data: JSON.stringify(photos),
                                                encoding: 'utf8',
                                                success: function (res) {
                                                },
                                                fail: function (res) {
                                                    console.error(res);
                                                }
                                            });
                                        }
                                    },
                                    fail: function (res) {
                                        console.error(res);
                                    }
                                });
                            })];
                    }
                    else {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/];
                });
            });
        };
        Shoot_1.getPhotoNative = function (type, id) {
            var name = "";
            if (type == 1) {
                name = "hand_photp_" + id + ".png";
            }
            else if (type == 2) {
                name = "auto_photp_" + id + ".png";
            }
            var filePath = jsb.fileUtils.getWritablePath() + name;
            return filePath;
        };
        Shoot_1.deletPhotoNative = function (type, id) {
            var name = "", arr, num;
            if (type == 1) {
                name = "hand_photp_" + id + ".png";
                num = Oops_1.oops.storage.get("hand_photp");
            }
            else if (type == 2) {
                name = "auto_photp_" + id + ".png";
                num = Oops_1.oops.storage.get("auto_photp");
            }
            arr = JSON.parse(num);
            var index = arr.indexOf(id);
            arr.splice(index, 1);
            if (type == 1) {
                Oops_1.oops.storage.set("hand_photp", arr);
            }
            else if (type == 2) {
                Oops_1.oops.storage.set("auto_photp", arr);
            }
            var filePath = jsb.fileUtils.getWritablePath() + name;
            jsb.fileUtils.removeFile(filePath);
        };
        /**提供给外部调用，全自动相机，买了就是你赚了 */
        Shoot_1.takePhotoByOther = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var worldCamera, texture, renderWindowInfo;
                var _this = this;
                return __generator(this, function (_a) {
                    worldCamera = Oops_1.oops.gui.root.getComponentInChildren(cc_7.CameraComponent);
                    if (Shoot.camera == null)
                        Shoot.camera = Oops_1.oops.gui.root.getChildByName("SceneCamera").getComponent(cc_1.Camera);
                    Shoot.camera.orthoHeight = 300;
                    Shoot.camera.node.worldPosition = worldCamera.node.worldPosition;
                    Shoot.camera.node.worldRotation = worldCamera.node.worldRotation;
                    Shoot.camera.node.active = true;
                    texture = new cc_6.RenderTexture();
                    renderWindowInfo = {
                        width: 600,
                        height: 600
                    };
                    texture.initialize(renderWindowInfo);
                    Shoot.camera.targetTexture = texture;
                    Shoot.camera.scheduleOnce(function () { return __awaiter(_this, void 0, void 0, function () {
                        var ca, canvas;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    Shoot.camera.targetTexture = null;
                                    Shoot.camera.node.active = false;
                                    if (!cc_9.sys.isNative) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.nativeSave(Shoot.flipTexture(texture), texture.width, texture.height, 2)];
                                case 1:
                                    ca = _a.sent();
                                    Oops_1.oops.gui.open(GameUIConfig_1.UIID.ShootEnd, [Shoot.shootPhotoName, ca]);
                                    if (callback)
                                        callback();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, Shoot.toImgUrl(texture.width, texture.height, Shoot.flipTexture(texture), true, 2)];
                                case 3:
                                    canvas = _a.sent();
                                    if (canvas) {
                                        Oops_1.oops.gui.open(GameUIConfig_1.UIID.ShootEnd, [Shoot.shootPhotoName, canvas.toDataURL("image/png", 0.3)]);
                                        if (callback)
                                            callback();
                                    }
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }, 0.1);
                    return [2 /*return*/];
                });
            });
        };
        return Shoot_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Shoot");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _target_decorators = [property({ type: cc_8.Node })];
        _toggleContainer_decorators = [property(cc_5.ToggleContainer)];
        __esDecorate(null, null, _target_decorators, { kind: "field", name: "target", static: false, private: false, access: { has: function (obj) { return "target" in obj; }, get: function (obj) { return obj.target; }, set: function (obj, value) { obj.target = value; } }, metadata: _metadata }, _target_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _toggleContainer_decorators, { kind: "field", name: "toggleContainer", static: false, private: false, access: { has: function (obj) { return "toggleContainer" in obj; }, get: function (obj) { return obj.toggleContainer; }, set: function (obj, value) { obj.toggleContainer = value; } }, metadata: _metadata }, _toggleContainer_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Shoot = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.camera = null;
    _classThis.shootPhotoName = 0;
    _classThis.shootRate = 300;
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Shoot = _classThis;
}();
exports.Shoot = Shoot;
