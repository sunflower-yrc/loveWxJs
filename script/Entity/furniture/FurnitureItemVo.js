"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FurnitureItemVo = /** @class */ (function () {
    // dressingType!: DressingTypeEnum; //筛选类型
    function FurnitureItemVo(id, furnitureData) {
        this.id = id;
        this.name = furnitureData.name + "";
        this.type = furnitureData.furnitureType;
        // this.textureName = furnitureData.picture;
        this.quality = furnitureData.grade;
        this.exp = furnitureData.exp;
        this.JackpotEnum = furnitureData.jackpot;
        // this.dressingType = furnitureData.dressingType;
    }
    return FurnitureItemVo;
}());
exports.default = FurnitureItemVo;
