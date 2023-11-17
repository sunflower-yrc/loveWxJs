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
exports.RecycleMgr = void 0;
var Collection_1 = require("../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
var Singleton_1 = require("../common/base/Singleton");
var CostData_1 = require("../common/tableData/CostData");
var DressData_1 = require("../common/tableData/DressData");
var FurnitureData_1 = require("../common/tableData/FurnitureData");
var RecycleMgr = /** @class */ (function (_super) {
    __extends(RecycleMgr, _super);
    function RecycleMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**选择列表 */
        _this.chooseList = null;
        _this.recycle = null;
        _this.recycleFurniture = null;
        /**true显示家具，false显示装扮 */
        _this.isFurniture = true;
        /**回收状态 */
        _this.isRecycle = false;
        /**事件ID */
        _this.eventId = 0;
        return _this;
    }
    Object.defineProperty(RecycleMgr, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 重置选择列表和回收站的物品列表
     */
    RecycleMgr.prototype.reset = function () {
        this.chooseList = new Collection_1.Collection();
        this.recycle.freshItemList();
    };
    /**
     * 添加物品到选择列表中
     * @param id 物品id
     * @param item 物品数据
     */
    RecycleMgr.prototype.addItem = function (id, item) {
        var setItem = this.chooseList.get(id);
        if (!setItem) {
            this.chooseList.set(id, item);
        }
        else {
            setItem.num = (parseInt(setItem.num) + 1) + '';
            setItem.price = (parseInt(item.price) * parseInt(setItem.num)) + "";
        }
        this.recycle.freshItemList();
    };
    /**
     * 从选择列表中移除物品
     * @param id 物品id
     * @returns 是否移除成功
     */
    RecycleMgr.prototype.backItem = function (id) {
        var _a, _b;
        var removeFlag = false;
        var setItem = this.chooseList.get(id);
        if (!setItem) {
            return;
        }
        if ((parseInt(setItem.num) - 1) <= 0) {
            removeFlag = true;
            this.chooseList.delete(id);
        }
        else {
            setItem.num = (parseInt(setItem.num) - 1) + '';
            setItem.price = (CostData_1.CostData.getRecoveryGold(id) * parseInt(setItem.num)) + "";
        }
        if (this.isFurniture) {
            var data = new FurnitureData_1.FurnitureData(id);
            // 遍历回收站中的物品，找到对应的物品并增加剩余数量
            for (var _i = 0, _c = (_a = this.recycleFurniture.decorateOwnedDatas.get(data.valueType)) === null || _a === void 0 ? void 0 : _a.get(data.furnitureType); _i < _c.length; _i++) {
                var i = _c[_i];
                if (i.furnitureData.id == id) {
                    i.leftAmount++;
                }
            }
            this.recycleFurniture.showItems();
        }
        else {
            var data = new DressData_1.DressData(id);
            // 遍历回收站中的物品，找到对应的物品并增加剩余数量
            for (var _d = 0, _e = (_b = this.recycleFurniture.decorateOwnedDatas.get(data.classify)) === null || _b === void 0 ? void 0 : _b.get(data.dressType); _d < _e.length; _d++) {
                var i = _e[_d];
                if (i.dressData.id == id) {
                    i.leftAmount++;
                }
            }
            this.recycleFurniture.showItems();
        }
        this.recycle.freshItemList();
    };
    return RecycleMgr;
}(Singleton_1.default));
exports.RecycleMgr = RecycleMgr;
