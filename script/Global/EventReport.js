"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_REPORT = void 0;
var EVENT_REPORT;
(function (EVENT_REPORT) {
    /**家具进入背包报错 */
    EVENT_REPORT["furniturePack"] = "furniturePack";
    /**开箱异常 */
    EVENT_REPORT["carOpenError"] = "carOpenError";
    /**UI预制体加载报错 */
    EVENT_REPORT["uiPrefabError"] = "uiPrefabError";
    /**图片加载报错 */
    EVENT_REPORT["spriteFrameError"] = "spriteFrameError";
    /**skelton加载报错 */
    EVENT_REPORT["skeletonError"] = "skeletonError";
    /**小游戏报错 */
    EVENT_REPORT["tileGameError"] = "tileGameError";
    /**网络请求错误 */
    EVENT_REPORT["netRequestError"] = "netRequestError";
})(EVENT_REPORT || (exports.EVENT_REPORT = EVENT_REPORT = {}));
