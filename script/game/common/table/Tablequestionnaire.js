"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablequestionnaire = void 0;
var JsonUtil_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil");
var Tablequestionnaire = /** @class */ (function () {
    function Tablequestionnaire() {
        /** 编号【KEY】 */
        this.id = 0;
    }
    Tablequestionnaire.prototype.init = function (id) {
        var table = JsonUtil_1.JsonUtil.get(Tablequestionnaire.TableName);
        this.data = table[id];
        this.id = id;
    };
    Object.defineProperty(Tablequestionnaire.prototype, "questionType", {
        /** 问题类型
    1.单选
    2.多选（三个） */
        get: function () {
            return this.data.questionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "question", {
        /** 问题 */
        get: function () {
            return this.data.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "answer1", {
        /** 选项1 */
        get: function () {
            return this.data.answer1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "answer2", {
        /** 选项2 */
        get: function () {
            return this.data.answer2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "answer3", {
        /** 选项3 */
        get: function () {
            return this.data.answer3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "answer4", {
        /** 选项4 */
        get: function () {
            return this.data.answer4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "answer5", {
        /** 选项5 */
        get: function () {
            return this.data.answer5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablequestionnaire.prototype, "answer6", {
        /** 选项6 */
        get: function () {
            return this.data.answer6;
        },
        enumerable: false,
        configurable: true
    });
    Tablequestionnaire.TableName = "questionnaire";
    return Tablequestionnaire;
}());
exports.Tablequestionnaire = Tablequestionnaire;
