"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tableriddles = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tableriddles = /** @class */ (function () {
    function Tableriddles() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tableriddles.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tableriddles.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tableriddles.prototype, "desc", {
        /** 灯谜内容 */
        get: function () {
            return this.data.desc;
        },
        enumerable: false,
        configurable: true
    });
    Tableriddles.TableName = "riddles";
    return Tableriddles;
}());
exports.Tableriddles = Tableriddles;
