"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureInteractionEnum = exports.FurnitureJackpotEnum = exports.FurnitureGradeEnum = exports.TouchState = exports.FurnitureLayer = exports.FurnitureDirectionEnum = exports.BlockType = exports.DressingTypeEnum = exports.FurnitureTypeEnum = exports.FurnitureStateEnum = void 0;
//当前移动旋转状态
var FurnitureStateEnum;
(function (FurnitureStateEnum) {
    FurnitureStateEnum["None"] = "None";
    FurnitureStateEnum["MoveState"] = "MoveState";
    FurnitureStateEnum["RotateState"] = "RotateState";
})(FurnitureStateEnum || (exports.FurnitureStateEnum = FurnitureStateEnum = {}));
// // valueType 家具类型
// export enum FurnitureTypeEnum {
//     // 1.家具
//     Furniture = 1 | 2 | 3 | 4 | 10,
//     // // 2.地毯
//     Carpet = 5,
//     // 3.墙饰
//     WallDecoration = 6 | 7 | 8 | 9,
//     // 4.墙纸
//     WallPaper = 11,
//     // 5.地砖
//     FloorTile = 12,
//     // 6 人物
//     Role = 13
// }
// valueType 家具类型
var FurnitureTypeEnum;
(function (FurnitureTypeEnum) {
    /**  1.坐卧*/
    FurnitureTypeEnum[FurnitureTypeEnum["SeatAndSleep"] = 1] = "SeatAndSleep";
    /**  2.柜具*/
    FurnitureTypeEnum[FurnitureTypeEnum["Cabinets"] = 2] = "Cabinets";
    /**  3.娱乐与装饰*/
    FurnitureTypeEnum[FurnitureTypeEnum["EntertainmentAndDecoration"] = 3] = "EntertainmentAndDecoration";
    /**  4.其它家具*/
    FurnitureTypeEnum[FurnitureTypeEnum["OtherFurniture"] = 4] = "OtherFurniture";
    /**  5.地毯*/
    FurnitureTypeEnum[FurnitureTypeEnum["Carpet"] = 5] = "Carpet";
    /**  6.窗户*/
    FurnitureTypeEnum[FurnitureTypeEnum["Window"] = 6] = "Window";
    /**  7.门*/
    FurnitureTypeEnum[FurnitureTypeEnum["Door"] = 7] = "Door";
    /**  8.墙饰*/
    FurnitureTypeEnum[FurnitureTypeEnum["WallDecoration"] = 8] = "WallDecoration";
    /**  9.其它墙饰*/
    FurnitureTypeEnum[FurnitureTypeEnum["OtherWallDecorations"] = 9] = "OtherWallDecorations";
    /**  10.墙面（可摆放的家具的一种）*/
    FurnitureTypeEnum[FurnitureTypeEnum["WallFurniture"] = 10] = "WallFurniture";
    /**  11.墙纸*/
    FurnitureTypeEnum[FurnitureTypeEnum["Wallpaper"] = 11] = "Wallpaper";
    /**  12.地砖*/
    FurnitureTypeEnum[FurnitureTypeEnum["FloorTile"] = 12] = "FloorTile";
    /**  13 人物*/
    FurnitureTypeEnum[FurnitureTypeEnum["Role"] = 13] = "Role";
    /**宠物 */
    FurnitureTypeEnum[FurnitureTypeEnum["Pet"] = 14] = "Pet";
    /**种植土地 */
    FurnitureTypeEnum[FurnitureTypeEnum["Plot"] = 101] = "Plot";
    /**buff1 成熟加速*/
    FurnitureTypeEnum[FurnitureTypeEnum["ManorBuff1"] = 102] = "ManorBuff1";
    /**提高产量 */
    FurnitureTypeEnum[FurnitureTypeEnum["ManorBuff2"] = 103] = "ManorBuff2";
    /**稻草人 */
    FurnitureTypeEnum[FurnitureTypeEnum["ManorBuff3"] = 104] = "ManorBuff3";
    /**公示牌 */
    FurnitureTypeEnum[FurnitureTypeEnum["ManorBillboard"] = 105] = "ManorBillboard";
    /**摇钱树 */
    FurnitureTypeEnum[FurnitureTypeEnum["ManorBuff4"] = 106] = "ManorBuff4";
})(FurnitureTypeEnum || (exports.FurnitureTypeEnum = FurnitureTypeEnum = {}));
//添加enum dressingType	筛选功能类型
var DressingTypeEnum;
(function (DressingTypeEnum) {
    // 1.坐卧家具
    DressingTypeEnum[DressingTypeEnum["Furniture"] = 1] = "Furniture";
    // 2.桌子与柜具
    DressingTypeEnum[DressingTypeEnum["TableAndCabinet"] = 2] = "TableAndCabinet";
    // 3.娱乐与装饰
    DressingTypeEnum[DressingTypeEnum["EntertainmentAndDecoration"] = 3] = "EntertainmentAndDecoration";
    // 4.其他
    DressingTypeEnum[DressingTypeEnum["Other"] = 4] = "Other";
})(DressingTypeEnum || (exports.DressingTypeEnum = DressingTypeEnum = {}));
/**障碍物检测 */
var BlockType;
(function (BlockType) {
    /** 一般家具类检测 */
    BlockType[BlockType["NORMAL"] = 0] = "NORMAL";
    /** 墙饰类检测 */
    BlockType[BlockType["WALLDECORATE"] = 1] = "WALLDECORATE";
    /** 地毯类检测 */
    BlockType[BlockType["FLOOR"] = 2] = "FLOOR";
    /** 地砖类检测 */
    BlockType[BlockType["FLOORTILE"] = 3] = "FLOORTILE";
    /** 墙纸类检测 */
    BlockType[BlockType["WALLPAPER"] = 4] = "WALLPAPER";
    /**最高级障碍物 */
    BlockType[BlockType["All"] = 5] = "All";
    /**角色 */
    BlockType[BlockType["Role"] = 6] = "Role";
    /**宠物 */
    BlockType[BlockType["Pet"] = 7] = "Pet";
    /**不占用 */
    BlockType[BlockType["None"] = 8] = "None";
    /** */
    BlockType[BlockType["Plot"] = 9] = "Plot";
    /**庄园设施 */
    BlockType[BlockType["ManorBuff"] = 10] = "ManorBuff";
})(BlockType || (exports.BlockType = BlockType = {}));
//当前移动旋转状态
var FurnitureDirectionEnum;
(function (FurnitureDirectionEnum) {
    // Left = "Left",
    // LeftTop = "LeftTop",
    // RightTop = "RightTop",
    // Right = "Right",
    FurnitureDirectionEnum[FurnitureDirectionEnum["Left"] = 0] = "Left";
    FurnitureDirectionEnum[FurnitureDirectionEnum["LeftTop"] = 1] = "LeftTop";
    FurnitureDirectionEnum[FurnitureDirectionEnum["RightTop"] = 2] = "RightTop";
    FurnitureDirectionEnum[FurnitureDirectionEnum["Right"] = 3] = "Right";
})(FurnitureDirectionEnum || (exports.FurnitureDirectionEnum = FurnitureDirectionEnum = {}));
/**层级分类 */
var FurnitureLayer;
(function (FurnitureLayer) {
    FurnitureLayer[FurnitureLayer["Furniture"] = 0] = "Furniture";
    FurnitureLayer[FurnitureLayer["Carpet"] = -1000] = "Carpet";
    FurnitureLayer[FurnitureLayer["WallDecoration"] = -888] = "WallDecoration";
    FurnitureLayer[FurnitureLayer["WallPaper"] = -966] = "WallPaper";
    FurnitureLayer[FurnitureLayer["FloorTile"] = -9999] = "FloorTile";
})(FurnitureLayer || (exports.FurnitureLayer = FurnitureLayer = {}));
/**点击状态 */
var TouchState;
(function (TouchState) {
    TouchState[TouchState["TouchStart"] = 0] = "TouchStart";
    TouchState[TouchState["TouchMove"] = 1] = "TouchMove";
    TouchState[TouchState["TouchEnd"] = 2] = "TouchEnd";
})(TouchState || (exports.TouchState = TouchState = {}));
// 家具品质，对应播放不同颜色的特效
var FurnitureGradeEnum;
(function (FurnitureGradeEnum) {
    FurnitureGradeEnum[FurnitureGradeEnum["Green"] = 1] = "Green";
    FurnitureGradeEnum[FurnitureGradeEnum["Blue"] = 2] = "Blue";
    FurnitureGradeEnum[FurnitureGradeEnum["Orange"] = 3] = "Orange";
    FurnitureGradeEnum[FurnitureGradeEnum["Gold"] = 4] = "Gold";
})(FurnitureGradeEnum || (exports.FurnitureGradeEnum = FurnitureGradeEnum = {}));
// 是否可以进入普通奖池
var FurnitureJackpotEnum;
(function (FurnitureJackpotEnum) {
    FurnitureJackpotEnum[FurnitureJackpotEnum["No"] = 0] = "No";
    FurnitureJackpotEnum[FurnitureJackpotEnum["Yes"] = 1] = "Yes";
})(FurnitureJackpotEnum || (exports.FurnitureJackpotEnum = FurnitureJackpotEnum = {}));
// 家具是否可以互动
var FurnitureInteractionEnum;
(function (FurnitureInteractionEnum) {
    FurnitureInteractionEnum[FurnitureInteractionEnum["No"] = 0] = "No";
    FurnitureInteractionEnum[FurnitureInteractionEnum["Yes"] = 1] = "Yes";
})(FurnitureInteractionEnum || (exports.FurnitureInteractionEnum = FurnitureInteractionEnum = {}));
