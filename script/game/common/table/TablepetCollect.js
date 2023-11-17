"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablepetCollect = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var TablepetCollect = /** @class */ (function () {
    function TablepetCollect() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    TablepetCollect.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(TablepetCollect.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(TablepetCollect.prototype, "suitMark", {
        /** 达成奖励 */
        get: function () {
            return this.data.suitMark;
        },
        enumerable: false,
        configurable: true
    });
    TablepetCollect.TableName = "petCollect";
    return TablepetCollect;
}());
exports.TablepetCollect = TablepetCollect;
