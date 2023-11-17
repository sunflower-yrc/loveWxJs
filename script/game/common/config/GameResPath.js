"use strict";
/*
 * @Author: dgflash
 * @Date: 2022-08-05 17:05:23
 * @LastEditors: dgflash
 * @LastEditTime: 2022-08-05 17:05:52
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResPath = void 0;
var DataObject_1 = require("../../tools/DataObject");
var Tablestory_1 = require("../table/Tablestory");
var TriggerData_1 = require("../tableData/TriggerData");
/** 游戏资源路径 */
var GameResPath = /** @class */ (function () {
    function GameResPath() {
    }
    /** 游戏配置路径 */
    GameResPath.getConfigPath = function (relative_path) {
        return "config/game/" + relative_path;
    };
    /** 金币prefab */
    GameResPath.getCoinPrefabPath = function () {
        return "prefab/home/coin";
    };
    /** 庄园币prefab */
    GameResPath.getManorCoinPrefabPath = function () {
        return "prefab/home/manorCoin";
    };
    /** 家具布置的资源路径 */
    GameResPath.getFurniturePutIconsPath = function (name) {
        return "texture/putFurnitureIcons/part_".concat(name);
    };
    /** 家具列表的资源路径 */
    GameResPath.getFurnitureListIconsPath = function (name) {
        return "texture/icons/listFurnitureIcons/icon_".concat(name);
    };
    /** 装扮列表的资源路径 */
    GameResPath.getDressListIconsPath = function (name) {
        return "texture/icons/listDressIcons/".concat(name);
    };
    /** 家具子分类的资源路径 */
    GameResPath.getFurnitureSubTypePath = function (name) {
        if (name == "9") {
            //其他类型
            name = "4";
        }
        return "texture/furniture/fu_small_icon_".concat(name);
    };
    /** 装扮子分类的资源路径 */
    GameResPath.getDressSubTypePath = function (name) {
        return "texture/dress/du_small_icon_".concat(name);
    };
    /** 品质底图的资源路径 */
    GameResPath.getQualityBgPath = function (name) {
        return "texture/rank/bg_rank".concat(name);
    };
    /** 装扮item prefab的资源路径 */
    GameResPath.getDecorateItemPrefabPath = function () {
        return "prefab/decorate/decorateItem";
    };
    /** 角色 prefab的资源路径 */
    GameResPath.getRolePrefabPath = function () {
        return "prefab/dress/role";
    };
    /** 获取角色 RoleOnFurniturePrefab的资源路径 */
    GameResPath.getRoleOnFurniturePrefabPath = function () {
        return "prefab/roleOnFuniture";
    };
    /** TilesGameItem prefab的资源路径 */
    GameResPath.getTilesGameItemPrefabPath = function () {
        return "prefab/tilesGame/tile";
    };
    /** TilesGamePaddingNode prefab的资源路径 */
    GameResPath.getTilesGamePaddingNodePrefabPath = function () {
        return "prefab/tilesGame/paddingNode";
    };
    /** TilesGameRemoveAnim prefab的资源路径 */
    GameResPath.getTilesGameRemoveAnimPrefabPath = function () {
        return "prefab/tilesGame/mergeAnim";
    };
    /** TilesGamefly prefab的资源路径 */
    GameResPath.getTilesGameFlyPrefabPath = function () {
        return "prefab/tilesGame/food";
    };
    /** TilesGameLayer prefab的资源路径 */
    GameResPath.getTilesGameLayerPrefabPath = function () {
        return "prefab/tilesGame/layer";
    };
    /** common item prefab的资源路径 */
    GameResPath.getCommonItemPrefabPath = function () {
        return "prefab/drop/commonItem";
    };
    GameResPath.getPetSpinPath = function (petType) {
        return 'pet/' + petType.toString();
    };
    /** 掉落物品的资源路径 */
    GameResPath.getDropIconsPath = function (dropType) {
        return "texture/icons/dropIcons/ty_icon_".concat(dropType);
    };
    /** 多选一的资源路径 */
    GameResPath.getDropRamdomIconsPath = function (name) {
        return "texture/icons/dropIcons/".concat(name);
    };
    /** 宠物reward的资源路径 */
    GameResPath.getPetRewardIconsPath = function (name) {
        return "texture/pet/rewardIcons/".concat(name);
    };
    /** 宠物家具的资源路径 */
    GameResPath.getPetDecorateIconsPath = function (name) {
        return "texture/pet/decorate/".concat(name);
    };
    /** 宠物家具的资源路径 */
    GameResPath.getPetDecorateTagOnIconsPath = function (id) {
        return "texture/pet/decorate/cwzb_tap_".concat(id, "_on");
    };
    /** 宠物家具的资源路径 */
    GameResPath.getPetDecorateTagOffIconsPath = function (id) {
        return "texture/pet/decorate/cwzb_tap_".concat(id, "_off");
    };
    /** 天气图标 */
    GameResPath.getWeatherIconsPath = function (name) {
        return "texture/home/".concat(name);
    };
    /** 商店物品品质 */
    GameResPath.getStoreItemRankPath = function (name) {
        return "texture/store/sd_item_bg_".concat(name);
    };
    /** 套装宝箱图标 */
    GameResPath.getStoreSuitBoxPath = function (name) {
        return "texture/store/sd_icon_mh".concat(name);
    };
    /** 货币商城图标 */
    GameResPath.getStoreCurrencyIconPath = function (name) {
        return "texture/store/".concat(name);
    };
    /** 套装预览 */
    GameResPath.getSuitPreviewPath = function (name) {
        return "texture/icons/suitPreview/".concat(name);
    };
    /** 跳转背景 */
    GameResPath.getJumpBgPath = function (name) {
        return "texture/jumpTip/suitPreview/".concat(name);
    };
    /** 房屋类型 */
    GameResPath.getRoomBgPath = function (name) {
        return "texture/icons/roomType/".concat(name);
    };
    /** 周常礼包 */
    GameResPath.getWeekBgPath = function (name) {
        return "texture/weekActivity/".concat(name);
    };
    /** 种子的资源路径 */
    GameResPath.getSeedSpPath = function (id, stage) {
        return "texture/manor/seed/plant_".concat(id, "_").concat(stage);
    };
    /** 种子的资源路径 */
    GameResPath.getPlantIcSpPath = function (id) {
        return "texture/manor/plantIc/plantGetIcon_".concat(id);
    };
    /** 土地的资源路径 */
    GameResPath.getPlotStateSpPath = function (state) {
        return "texture/manor/plot/manor_massif_".concat(state);
    };
    /** 土地bubble的资源路径 */
    GameResPath.getPlotBubbleStateSpPath = function (state) {
        return "texture/manor/bubble/manor_crops_bubble_".concat(state);
    };
    /** 土地事件的资源路径 */
    GameResPath.getPlotEventStateSpPath = function (state) {
        return "texture/manor/event/manor_illustration_".concat(state);
    };
    /** 土地事件的资源路径 */
    GameResPath.getPlotBuffSpPath = function (id) {
        return "texture/manor/buff/manor_jxw_".concat(id);
    };
    /** 中秋限时礼包 */
    GameResPath.getMoonLimitGiftPath = function (name) {
        return "texture/moonLimitGift/".concat(name);
    };
    /** 邮件状态图标 */
    GameResPath.getMailStatusIconPath = function (type, status) {
        if (type == 0) {
            //邮件
            if (status == 0) {
                //未读
                return "texture/mail/yj_icon_xf_1";
            }
            else {
                //已读
                return "texture/mail/yj_icon_xf_2";
            }
        }
        else {
            //公告
            return "texture/mail/yj_icon_lb";
        }
    };
    /** 邮件状态背景 */
    GameResPath.getMailStatusBgPath = function (status) {
        if (status == 0) {
            //未读
            return "texture/mail/yj_bg_1";
        }
        else {
            //已读
            return "texture/mail/yj_bg_2";
        }
    };
    /** 场景资源路径 */
    GameResPath.getScenePathByName = function (name) {
        var bundle;
        var room;
        if (name >= 4000 && name < 5000) {
            bundle = "scene4000";
            room = "1";
        }
        else if (name == "manorFurniture") {
            bundle = "scene4000";
            room = "2";
        }
        else {
            var story = new Tablestory_1.Tablestory();
            story.init(+name);
            bundle = story.scene;
            room = story.sceneValue;
        }
        var roomUrl = room ? "prefab/room".concat(room) : undefined;
        return { url: "prefab/".concat(bundle), room: roomUrl, bundle: bundle };
    };
    GameResPath.getManorPath = function () {
        return { url: "prefab/manor" };
    };
    /** 道具资源路径 */
    GameResPath.getToolTypeSpfPath = function (id) {
        // return `texture/common/main_coin`;
        var path = "texture/tilesGame/tileGameHome/st_yxj_item_" + id;
        return path;
    };
    /** 对话气泡路径 */
    GameResPath.getBubblePath = function (id) {
        var path = "";
        switch (id) {
            case DataObject_1.BubbleType.recycle:
                path = "texture/home/main_icon_hsjj";
                break;
            case DataObject_1.BubbleType.outside:
                path = "texture/home/main_icon_wcbj";
                break;
            case DataObject_1.BubbleType.ellipsis:
                path = "texture/home/main_button_bubble_4";
                break;
            case DataObject_1.BubbleType.adoptPet:
                break;
            case DataObject_1.BubbleType.businessDress:
                path = "texture/home/main_icon_mfzb";
                break;
            case DataObject_1.BubbleType.businessFurniture:
                path = "texture/home/main_icon_mfjj";
                break;
            default:
                break;
        }
        return path;
    };
    /** 外出物品item的Prefab路径 */
    GameResPath.getOutUnlockItemPath = function () {
        var path = "prefab/home/outUnlockItem";
        return path;
    };
    /** 外出物品item的Prefab路径 */
    GameResPath.getOutEventItemPath = function () {
        var path = "prefab/home/eventItem";
        return path;
    };
    /** 获得recycleItem路径 */
    GameResPath.getRecycleItemPath = function () {
        var path = "prefab/recycle/recycleItem";
        return path;
    };
    /** 获得通行证shop路径 */
    GameResPath.getPassShopPath = function () {
        var path = "prefab/pass/shop";
        return path;
    };
    /** 获得中秋活动路径 */
    GameResPath.getMoonActivityPath = function (name) {
        return "prefab/moonFestival/".concat(name);
    };
    /** 获得微信默认头像路径 */
    GameResPath.getHeadImgPath = function () {
        var path = "texture/common/set_head_1";
        return path;
    };
    /** 获得EventItemSprite路径 */
    GameResPath.getEventItemSpritePath = function (eventType) {
        var path = "";
        switch (eventType) {
            case TriggerData_1.EventTypeEnum.recoverItems:
                path = "texture/home/main_icon_hsjj";
                break;
            case TriggerData_1.EventTypeEnum.outside:
                path = "texture/home/main_icon_wcbj";
                break;
            case TriggerData_1.EventTypeEnum.adotPet:
                path = "todo";
                break;
            case TriggerData_1.EventTypeEnum.conversation:
                path = "todo";
                break;
            case TriggerData_1.EventTypeEnum.businessEventDress:
                path = "texture/home/main_icon_mfzb";
                break;
            case TriggerData_1.EventTypeEnum.businessEventFurniture:
                path = "texture/home/main_icon_mfjj";
                break;
            default:
                break;
        }
        return path;
    };
    return GameResPath;
}());
exports.GameResPath = GameResPath;
