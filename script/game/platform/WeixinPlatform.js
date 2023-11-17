"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeixinPlatform = void 0;
var Oops_1 = require("../../../../extensions/oops-plugin-framework/assets/core/Oops");
var GameUIConfig_1 = require("../common/config/GameUIConfig");
var cc_1 = require("cc");
var SdkPlatform_1 = require("./SdkPlatform");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var WeixinPlatform = /** @class */ (function () {
    function WeixinPlatform() {
        // xySdk: any = null;
        this.platform = null;
        this.isCreating = false;
        this.LOADING_OVER_TIME = 5;
        // this.xySdk = (window as any)["xySdk"];
        this.platform = window["platform"];
    }
    WeixinPlatform.prototype.init = function (release, ver) {
        if (this.platform) {
            return this.platform.init(release, ver);
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.getLoginCode = function () {
        if (this.platform) {
            var code = this.platform.getLoginCode();
            console.log("微信code", code);
            return this.platform.getLoginCode();
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    // getLoginCode(): Promise<any> {
    //     if (this.xySdk) {
    //         return new Promise((resolve, reject) => {
    //             this.xySdk.login().then((res: any) => {
    //             console.log("xySdk login", res);
    //                 resolve(res);
    //             }).catch((err: any) => {
    //                 console.log("xysdk login error ", err);
    //                 resolve(false);
    //             });
    //         })
    //     }
    //     return new Promise((resolve, reject) => {
    //         console.log("xysdk login failed");
    //         resolve(false);
    //     })
    // }
    WeixinPlatform.prototype.getUserInfo = function (fromLogin) {
        if (this.platform) {
            return this.platform.getUserInfo(fromLogin);
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.share = function (title, imageUrlId, imageUrl) {
        if (this.platform) {
            return this.platform.share(title, imageUrlId, imageUrl);
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.shareMessage = function (title, imageUrlId, imageUrl, gameScene, query) {
        if (this.platform) {
            return this.platform.shareMessage(title, imageUrlId, imageUrl, gameScene, query);
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.createRewardedVideoAd = function (adType) {
        var _this = this;
        if (this.platform) {
            //转圈圈
            if (!Oops_1.oops.gui.has(GameUIConfig_1.UIID.NetLoading)) {
                Oops_1.oops.gui.open(GameUIConfig_1.UIID.NetLoading, Oops_1.oops.language.getLangByID("loadingTips.ad"));
                Oops_1.oops.timer.scheduleOnce(function () {
                    Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
                }, this.LOADING_OVER_TIME);
            }
            return new Promise(function (resolve, reject) {
                var rewardAD = _this.platform.createRewardedVideoAd(0);
                try {
                    rewardAD.then(function (res) {
                        Oops_1.oops.audio.resumeAll();
                        //关闭转圈圈
                        Oops_1.oops.gui.remove(GameUIConfig_1.UIID.NetLoading);
                        if (res && res.errCode) {
                            SdkPlatform_1.SdkPlatform.ad_error(adType, res.errCode);
                            if (res.errCode == 1004) {
                                console.log('激励视频 未拉取到广告,播放失败！');
                                Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("loadingTips.noAd"));
                            }
                        }
                        resolve(res.isEnded);
                    });
                }
                catch (error) {
                    console.log("激励视频显示异常：", error);
                    Oops_1.oops.gui.toast(Oops_1.oops.language.getLangByID("loadingTips.adOutTime"));
                    SdkPlatform_1.SdkPlatform.ad_error(adType, 1);
                    resolve(false);
                }
            });
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    // createRewardedVideoAd(): Promise<any> {
    //     if (this.xySdk) {
    //         //转圈圈
    //         oops.gui.open(UIID.NetLoading, oops.language.getLangByID("loadingTips.ad"));
    //         return new Promise((resolve, reject) => {
    //             this.xySdk.showRewardedVideoAd({
    //                     adUnitId: 'adunit-77fc5b53b797fb94'
    //                 }).then((res: any) => {
    //                     console.log("xySdk showRewardedVideoAd", res);
    //                     oops.audio.resumeAll();
    //                     if (res) {
    //                         if (res.data == 1) {
    //                             //关闭转圈圈
    //                             oops.gui.remove(UIID.NetLoading);
    //                             resolve(true);
    //                         } else if (res.code == 200) {
    //                             oops.gui.toast(oops.language.getLangByID("common.ad_abort"));
    //                             //关闭转圈圈
    //                             oops.gui.remove(UIID.NetLoading);
    //                             resolve(false);
    //                         } else {
    //                             oops.gui.toast(oops.language.getLangByID("common.ad_failed"));
    //                             //关闭转圈圈
    //                             oops.gui.remove(UIID.NetLoading);
    //                             resolve(false);
    //                         }
    //                     } else {
    //                         //关闭转圈圈
    //                         oops.gui.remove(UIID.NetLoading);
    //                         resolve(false);
    //                     }
    //                 }).catch((err: any) => {
    //                     //关闭转圈圈
    //                     oops.gui.remove(UIID.NetLoading);
    //                     console.log("xysdk showRewardedVideoAd error ", err);
    //                     oops.audio.resumeAll();
    //                     resolve(false);
    //                 });
    //         })
    //     }
    //     return new Promise((resolve, reject) => {
    //         //关闭转圈圈
    //         oops.gui.remove(UIID.NetLoading);
    //         resolve(false);
    //     })
    // }
    WeixinPlatform.prototype.requestPayment = function (data) {
        var _this = this;
        console.log("sys os:".concat(cc_1.sys.os));
        if (this.platform) {
            if (cc_1.sys.os === cc_1.sys.OS.ANDROID || cc_1.sys.os === cc_1.sys.OS.WINDOWS) {
                console.log("android pay start", cc_1.sys.platform);
                return new Promise(function (resolve, reject) {
                    _this.platform.requestMidasPayment(data).then(function (res) {
                        console.log("ios pay", res);
                        resolve(res);
                    }).catch(function (err) {
                        console.log("ios pay error ", err);
                        resolve({ isSucceed: false });
                    });
                });
            }
            else if (cc_1.sys.os === cc_1.sys.OS.IOS) {
                console.log("ios pay start");
                return new Promise(function (resolve, reject) {
                    _this.platform.openCustomerService(data, null).then(function (res) {
                        console.log("ios pay", res);
                        resolve(res);
                    }).catch(function (err) {
                        console.log("ios pay error ", err);
                        resolve(false);
                    });
                });
            }
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    // requestPayment(data: any): Promise<any> {
    //     if (this.xySdk) {
    //         return new Promise((resolve, reject) => {
    //             this.xySdk.pay(data).then((res: any) => {
    //                 console.log("xySdk pay ", res);
    //                 resolve(res);
    //             }).catch((err: any) => {
    //                 console.log("xysdk pay error ", err);
    //                 resolve(false);
    //             });
    //         })
    //     }
    //     return new Promise((resolve, reject) => {
    //         resolve(false);
    //     })
    // }
    WeixinPlatform.prototype.requestMidasPayment = function (quantity) {
        if (this.platform) {
            return this.platform.requestMidasPayment(quantity);
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.getExtraInfo = function () {
        if (this.platform) {
            return this.platform.getExtraInfo();
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.getSystemInfoSync = function () {
        if (this.platform) {
            return this.platform.getSystemInfoSync();
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.onShow = function (callback) {
        if (this.platform) {
            this.platform.onShow(callback);
        }
    };
    WeixinPlatform.prototype.onHide = function (callback) {
        if (this.platform) {
            this.platform.onHide(callback);
        }
    };
    WeixinPlatform.prototype.onMemoryWarning = function () {
        if (this.platform) {
            return this.platform.onMemoryWarning();
        }
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    WeixinPlatform.prototype.triggerGC = function () {
        if (this.platform) {
            this.platform.triggerGC();
        }
    };
    WeixinPlatform.prototype.openCustomerServiceConversation = function () {
        if (this.platform) {
            this.platform.openCustomerServiceConversation();
        }
    };
    WeixinPlatform.prototype.showShareMenu = function () {
        if (this.platform) {
            this.platform.showShareMenu();
        }
    };
    WeixinPlatform.prototype.exitMiniProgram = function () {
        if (this.platform) {
            console.log("exit");
            this.platform.exitMiniProgram();
        }
    };
    WeixinPlatform.prototype.onShareTimeline = function (title, imageUrlId, imageUrl, query) {
        if (this.platform) {
            this.platform.onShareTimeline(title, imageUrlId, imageUrl, query);
        }
    };
    WeixinPlatform.prototype.reportRoleCreate = function (data) {
    };
    // reportRoleCreate(data: any): void {
    //     if (this.xySdk) {
    //             this.xySdk.submitRinfo(data).then((res: any) => {
    //                 console.log("xySdk reportRoleCreate", res);
    //             }).catch((err: any) => {
    //                 console.log("xysdk reportRoleCreate error ", err);
    //             });
    //     }
    // }
    WeixinPlatform.prototype.isShowPay = function (param) {
        if (param === void 0) { param = 1; }
        if (this.platform) {
            return new Promise(function (resolve, reject) {
                if (cc_1.sys.os === cc_1.sys.OS.IOS) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        }
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    // isShowPay(param: number = 1): Promise<boolean> {
    //     if (this.xySdk) {
    //         return new Promise((resolve, reject) => {
    //             this.xySdk.isShowPay({
    //                 role_level: param
    //                 }).then((res: any) => {
    //                     console.log("xySdk isShowPay", res);
    //                     if (res && res.data) {
    //                         resolve(res.data.show);
    //                     } else {
    //                         resolve(false);
    //                     }
    //                 }).catch((err: any) => {
    //                     console.log("xysdk isShowPay error ", err);
    //                     resolve(false);
    //                 });
    //         })
    //     }
    //     return new Promise((resolve, reject) => {
    //         resolve(false);
    //     })
    // }
    WeixinPlatform.prototype.createGameClub = function (callback) {
        if (this.platform) {
            this.platform.createGameClub(callback);
        }
    };
    WeixinPlatform.prototype.showGameClub = function (flag) {
        if (this.platform) {
            this.platform.showGameClub(flag);
        }
    };
    //事件上报
    WeixinPlatform.prototype.reportEvent = function (param) {
        if (this.wx) {
            if (param.data.uid == null)
                param.data.uid = SingletonModuleComp_1.smc.account.AccountModel.userId;
            if (this.wx.reportEvent != null) {
                this.wx.reportEvent(param.type, param.data);
            }
        }
    };
    Object.defineProperty(WeixinPlatform.prototype, "wx", {
        get: function () {
            return window['wx'];
        },
        enumerable: false,
        configurable: true
    });
    return WeixinPlatform;
}());
exports.WeixinPlatform = WeixinPlatform;
