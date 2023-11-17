"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hot = exports.HotOptions = void 0;
var cc_1 = require("cc");
var Oops_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/Oops");
/** 热更参数 */
var HotOptions = /** @class */ (function () {
    function HotOptions() {
        /** 获取到版本号信息 */
        this.onVersionInfo = null;
        /** 发现新版本，请更新 */
        this.onNeedToUpdate = null;
        /** 和远程版本一致，无须更新 */
        this.onNoNeedToUpdate = null;
        /** 更新失败 */
        this.onUpdateFailed = null;
        /** 更新完成 */
        this.onUpdateSucceed = null;
        /** 更新进度 */
        this.onUpdateProgress = null;
    }
    HotOptions.prototype.check = function () {
        for (var key in this) {
            if (key !== 'check') {
                if (!this[key]) {
                    (0, cc_1.log)("\u53C2\u6570HotOptions.".concat(key, "\u672A\u8BBE\u7F6E\uFF01"));
                    return false;
                }
            }
        }
        return true;
    };
    return HotOptions;
}());
exports.HotOptions = HotOptions;
/** 热更管理 */
var Hot = /** @class */ (function () {
    function Hot() {
        this.assetsMgr = null;
        this.options = null;
        this.state = Hot.State.None;
        this.storagePath = "";
        this.manifest = "";
    }
    /** 热更初始化 */
    Hot.prototype.init = function (opt) {
        var _this = this;
        if (!cc_1.sys.isNative) {
            return;
        }
        if (!opt.check()) {
            return;
        }
        this.options = opt;
        if (this.assetsMgr) {
            return;
        }
        Oops_1.oops.res.load('project', function (err, res) {
            if (err) {
                (0, cc_1.error)("【热更新界面】缺少热更新配置文件");
                return;
            }
            _this.showSearchPath();
            _this.manifest = res.nativeUrl;
            _this.storagePath = "".concat(cc_1.native.fileUtils.getWritablePath(), "/oops_framework_remote");
            _this.assetsMgr = new cc_1.native.AssetsManager(_this.manifest, _this.storagePath, function (versionA, versionB) {
                var _a;
                console.log("【热更新】客户端版本: " + versionA + ', 当前最新版本: ' + versionB);
                ((_a = _this.options) === null || _a === void 0 ? void 0 : _a.onVersionInfo) && _this.options.onVersionInfo({ local: versionA, server: versionB });
                var vA = versionA.split('.');
                var vB = versionB.split('.');
                for (var i = 0; i < vA.length; ++i) {
                    var a = parseInt(vA[i]);
                    var b = parseInt(vB[i] || '0');
                    if (a !== b) {
                        return a - b;
                    }
                }
                if (vB.length > vA.length) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            // 设置验证回调，如果验证通过，则返回true，否则返回false
            _this.assetsMgr.setVerifyCallback(function (path, asset) {
                // 压缩资源时，我们不需要检查其md5，因为zip文件已被删除
                var compressed = asset.compressed;
                // 检索正确的md5值
                var expectedMD5 = asset.md5;
                // 资源路径是相对路径，路径是绝对路径
                var relativePath = asset.path;
                // 资源文件的大小，但此值可能不存在
                var size = asset.size;
                return true;
            });
            var localManifest = _this.assetsMgr.getLocalManifest();
            console.log('【热更新】热更资源存放路径: ' + _this.storagePath);
            console.log('【热更新】本地资源配置路径: ' + _this.manifest);
            console.log('【热更新】本地包地址: ' + localManifest.getPackageUrl());
            console.log('【热更新】远程 project.manifest 地址: ' + localManifest.getManifestFileUrl());
            console.log('【热更新】远程 version.manifest 地址: ' + localManifest.getVersionFileUrl());
            _this.checkUpdate();
        });
    };
    /** 删除热更所有存储文件 */
    Hot.prototype.clearHotUpdateStorage = function () {
        cc_1.native.fileUtils.removeDirectory(this.storagePath);
    };
    // 检查更新
    Hot.prototype.checkUpdate = function () {
        if (!this.assetsMgr) {
            console.log('【热更新】请先初始化');
            return;
        }
        if (this.assetsMgr.getState() === jsb.AssetsManager.State.UNINITED) {
            (0, cc_1.error)('【热更新】未初始化');
            return;
        }
        if (!this.assetsMgr.getLocalManifest().isLoaded()) {
            console.log('【热更新】加载本地 manifest 失败 ...');
            return;
        }
        this.assetsMgr.setEventCallback(this.onHotUpdateCallBack.bind(this));
        this.state = Hot.State.Check;
        // 下载version.manifest，进行版本比对
        this.assetsMgr.checkUpdate();
    };
    /** 开始更热 */
    Hot.prototype.hotUpdate = function () {
        if (!this.assetsMgr) {
            console.log('【热更新】请先初始化');
            return;
        }
        this.assetsMgr.setEventCallback(this.onHotUpdateCallBack.bind(this));
        this.state = Hot.State.Update;
        this.assetsMgr.update();
    };
    Hot.prototype.onHotUpdateCallBack = function (event) {
        var _a, _b, _c;
        var code = event.getEventCode();
        switch (code) {
            case cc_1.native.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("【热更新】当前版本与远程版本一致且无须更新");
                ((_a = this.options) === null || _a === void 0 ? void 0 : _a.onNoNeedToUpdate) && this.options.onNoNeedToUpdate(code);
                break;
            case cc_1.native.EventAssetsManager.NEW_VERSION_FOUND:
                console.log('【热更新】发现新版本,请更新');
                ((_b = this.options) === null || _b === void 0 ? void 0 : _b.onNeedToUpdate) && this.options.onNeedToUpdate(code, this.assetsMgr.getTotalBytes());
                break;
            case cc_1.native.EventAssetsManager.ASSET_UPDATED:
                console.log('【热更新】资产更新');
                break;
            case cc_1.native.EventAssetsManager.UPDATE_PROGRESSION:
                if (this.state === Hot.State.Update) {
                    // event.getPercent();
                    // event.getPercentByFile();
                    // event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                    // event.getDownloadedBytes() + ' / ' + event.getTotalBytes();
                    console.log('【热更新】更新中...', event.getDownloadedFiles(), event.getTotalFiles(), event.getPercent());
                    ((_c = this.options) === null || _c === void 0 ? void 0 : _c.onUpdateProgress) && this.options.onUpdateProgress(event);
                }
                break;
            case cc_1.native.EventAssetsManager.UPDATE_FINISHED:
                this.onUpdateFinished();
                break;
            default:
                this.onUpdateFailed(code);
                break;
        }
    };
    Hot.prototype.onUpdateFailed = function (code) {
        var _a;
        this.assetsMgr.setEventCallback(null);
        ((_a = this.options) === null || _a === void 0 ? void 0 : _a.onUpdateFailed) && this.options.onUpdateFailed(code);
    };
    Hot.prototype.onUpdateFinished = function () {
        var _a;
        this.assetsMgr.setEventCallback(null);
        var searchPaths = cc_1.native.fileUtils.getSearchPaths();
        var newPaths = this.assetsMgr.getLocalManifest().getSearchPaths();
        Array.prototype.unshift.apply(searchPaths, newPaths);
        localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        cc_1.native.fileUtils.setSearchPaths(searchPaths);
        console.log('【热更新】更新成功');
        ((_a = this.options) === null || _a === void 0 ? void 0 : _a.onUpdateSucceed) && this.options.onUpdateSucceed();
    };
    Hot.prototype.showSearchPath = function () {
        console.log("========================搜索路径========================");
        var searchPaths = cc_1.native.fileUtils.getSearchPaths();
        for (var i = 0; i < searchPaths.length; i++) {
            console.log("[" + i + "]: " + searchPaths[i]);
        }
        console.log("======================================================");
    };
    Hot.State = {
        None: 0,
        Check: 1,
        Update: 2,
    };
    return Hot;
}());
exports.Hot = Hot;
