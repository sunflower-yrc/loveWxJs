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
Object.defineProperty(exports, "__esModule", { value: true });
var cc_1 = require("cc");
var Singleton_1 = require("../game/common/base/Singleton");
var SDKManager = /** @class */ (function (_super) {
    __extends(SDKManager, _super);
    function SDKManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SDKManager, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    SDKManager.prototype.authorizeCamera = function (successCallback, failCallback) {
        if (cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME) {
            wx.authorize({
                scope: 'scope.camera',
                success: function (res) {
                    // 用户已授权，可以使用 wx.chooseImage() 接口拍照
                    successCallback && successCallback(res);
                },
                fail: function (res) {
                    // 用户未授权，需要提示用户授权
                    failCallback && failCallback(res);
                }
            });
        }
    };
    SDKManager.prototype.chooseImageFromCamera = function (successCallback, failCallback) {
        if (cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME) {
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['camera'],
                success: function (res) {
                    // 拍照成功，返回照片路径
                    var tempFilePaths = res.tempFilePaths;
                    // 可以将照片路径传递给其他函数或组件进行处理
                    successCallback && successCallback(tempFilePaths);
                },
                fail: function (res) {
                    // 拍照失败，可以提示用户或进行其他处理
                    failCallback && failCallback(res);
                }
            });
        }
    };
    /**
     * 拍照(截屏)
     * @param event
     */
    SDKManager.prototype.onScreenShot = function (successCallback, failCallback) {
        if (cc_1.sys.platform === cc_1.sys.Platform.WECHAT_GAME) {
            wx.canvasToTempFilePath({
                canvasId: 'canvas',
                success: function (res) {
                    var tempFilePath = res.tempFilePath;
                    // 可以将截屏后的图片路径传递给其他函数或组件进行处理
                    successCallback && successCallback(tempFilePath);
                },
                fail: function (res) {
                    // 截屏失败，可以提示用户或进行其他处理
                    failCallback && failCallback(res);
                }
            });
        }
    };
    return SDKManager;
}(Singleton_1.default));
exports.default = SDKManager;
