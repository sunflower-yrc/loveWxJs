"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureVO = void 0;
// import FurnitureItemVo from "./FurnitureItemVo";
var FurnitureVO = /** @class */ (function () {
    function FurnitureVO(info) {
        this.isPlotPos = false;
        var id = info.id, name = info.name, direction = info.direction, type = info.type, settlePos = info.settlePos, size = info.size, offsetY = info.offsetY, land_id = info.land_id, isPlotPos = info.isPlotPos;
        this.id = id;
        this.name = name;
        this.direction = direction;
        this.furnitureType = type;
        this.settlePos = settlePos;
        this.size = size;
        this.offsetY = offsetY !== null && offsetY !== void 0 ? offsetY : 0;
        this.land_id = land_id;
        this.isPlotPos = isPlotPos;
        // this.blockType = blockType;
    }
    return FurnitureVO;
}());
exports.FurnitureVO = FurnitureVO;
