"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
var RandomManager_1 = require("../../../../extensions/oops-plugin-framework/assets/core/common/random/RandomManager");
var SingletonModuleComp_1 = require("../common/ecs/SingletonModuleComp");
var Share = /** @class */ (function () {
    function Share() {
    }
    Share.getShareId = function () {
        var rand = RandomManager_1.RandomManager.instance.getRandomInt(0, this.shareImgIds.length, 1);
        return this.shareImgIds[rand];
    };
    Share.getShareText = function () {
        var rand = RandomManager_1.RandomManager.instance.getRandomInt(0, this.shareTexts.length, 1);
        return this.shareTexts[rand];
    };
    Share.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shareId, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareId = this.getShareId();
                        text = this.getShareText();
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.shareMessage(text, shareId[0], shareId[1], "", "")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Share.onShareAppMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shareId, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareId = this.getShareId();
                        text = this.getShareText();
                        return [4 /*yield*/, SingletonModuleComp_1.smc.initialize.platform.share(text, shareId[0], shareId[1])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Share.initShare = function () {
        var shareId = this.getShareId();
        var text = this.getShareText();
        SingletonModuleComp_1.smc.initialize.platform.onShareTimeline(text, shareId[0], shareId[1]);
        SingletonModuleComp_1.smc.initialize.platform.showShareMenu();
        this.onShareAppMessage();
        console.log("初始化分享");
    };
    Share.shareImgIds = [
        ["oJbwiKXbRa6wIsA8EKfkQw==", "https://mmocgame.qpic.cn/wechatgame/TgjlgQDFkicWvPT8fSfKibgcy0udS7kmPsxN3YH6YURO1bWfW6zPiaOsT6icOaEbsbcia/0"],
        ["iJkK8veWQPWpKmZBbynOSw==", "https://mmocgame.qpic.cn/wechatgame/TgjlgQDFkicWTVSsyFV909HE5lGdHGud1XhyALvN6ORPhp3LGWYQic1bRTVlriae0DR/0"],
        ["R4/wB4qIQGKmBuBRExT4Dw==", "https://mmocgame.qpic.cn/wechatgame/TgjlgQDFkicVNjy4r7jxF3Ebqpts7CPptbM3HOvb7bfXbv5ZiaOLJLDU0PCqDzeJXN/0"],
        ["qXwnsZQ9Qd2ZKKa2kJTaeA==", "https://mmocgame.qpic.cn/wechatgame/TgjlgQDFkicVbfAib1TDAlgAcEnzGLibaf9Tez8tVcfRN4JgoHGSPhFmWLSlXS1BQBl/0"],
        ["mQTNGqMpQIyEctnTdy6arQ==", "https://mmocgame.qpic.cn/wechatgame/TgjlgQDFkicXV1DbOjyHiaSmfwPnp57PLXKnPAbmnfznEpBCMn1bx5ouJCoz68ojve/0"],
    ];
    Share.shareTexts = [
        "开局十分钟，成功入住loft！",
        "欢迎参观我的小屋~",
        "夏日限定家具来袭，快来装修吧！",
        "帮我看看，钱花在哪里比较好？",
        "欢迎参观我的小屋~",
        "叠消过关？看我的！",
        "夏日限定家具来袭，快来装修吧！",
        "一起开启浪漫小屋之旅吧~",
        "一起开启浪漫小屋之旅吧~",
        "好看裙子太多啦！穿不完，根本穿不完！",
        "夏日限定家具来袭，快来装修吧！",
        "欢迎参观我的小屋~",
        "好看裙子太多啦！穿不完，根本穿不完！",
        "欢迎参观我的小屋~",
        "这里有10086个包裹等你来拆！",
    ];
    return Share;
}());
exports.Share = Share;
