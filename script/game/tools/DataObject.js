"use strict";
/**
 * 对象声明
 * 枚举
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryData = exports.TileGameVo = exports.LimitConditionData = exports.MailData = exports.ItemDetailsData = exports.StoreBuyConfirmData = exports.StoreRefreshData = exports.StoreSuitBoxData = exports.SuitItemData = exports.StoreSuitItemData = exports.StoreCurrencyPackData = exports.StoreCurrencyItemData = exports.StoreItemData = exports.TaskListData = exports.StoryCondData = exports.LevelGiftData = exports.LevelGiftListData = exports.OfflineData = exports.DropData = exports.DropInfo = exports.DecorateRedData = exports.DecorateOwnedInfo = exports.DecorateOwnedData = exports.JumpTipType = exports.Score = exports.AdsTipType = exports.RentStatus = exports.RankType = exports.ColorList = exports.LockState = exports.DetaisOrientationType = exports.BubbleType = exports.FunctionCheckType = exports.FunctionType = exports.GotoType = exports.RoleEnum = exports.EventType = exports.PetAniType = exports.RoleMale = exports.RoleAnimTypeInspectorEnum = exports.StoreBuyType = exports.RoleAnimType = exports.DropType = exports.DropFrom = exports.DecorateType = exports.IaaType = exports.PayType = exports.AdRewardType = exports.AudioType = exports.StorageType = void 0;
exports.PlotEvent = exports.PlotState = exports.PlotSpin = exports.FestivalGift = exports.NationalDay = exports.TimeLimit = exports.RankingMove = exports.MainRed = exports.HangData = exports.HouseRateData = exports.RecordEventVo = void 0;
var cc_1 = require("cc");
var Collection_1 = require("../../../../extensions/oops-plugin-framework/assets/libs/collection/Collection");
//本地存储
var StorageType;
(function (StorageType) {
    StorageType["UseQA"] = "UseQA";
    StorageType["WxInfoReject"] = "WxInfoReject";
    StorageType["NewFurniture"] = "NewFurniture";
    StorageType["NewDress"] = "NewDress";
    StorageType["HighFps"] = "HighFps";
})(StorageType || (exports.StorageType = StorageType = {}));
//音频
var AudioType;
(function (AudioType) {
    AudioType["Bgm_Menu"] = "bgm_1";
    AudioType["Bgm_Tile"] = "bgm_2";
    AudioType["Sound_Click"] = "sound_click";
    AudioType["Sound_Drop"] = "sound_drop";
    AudioType["Sound_BoxOpen"] = "sound_boxOpen";
    AudioType["Sound_CarShake"] = "sound_carShake";
    AudioType["Sound_FurnitureMove"] = "sound_furnitureMove";
    AudioType["Sound_Levelup"] = "sound_levelUp";
    AudioType["Sound_MergeFail"] = "sound_mergeFail";
    AudioType["Sound_MergeSuccess"] = "sound_mergeSuccess";
    AudioType["Sound_OfflineReward"] = "sound_offlineReward";
    AudioType["Sound_GetThree"] = "sound_getThree";
    AudioType["Sound_MergeStar"] = "sound_mergeStar";
    AudioType["Sound_Photo"] = "sound_photo";
})(AudioType || (exports.AudioType = AudioType = {}));
//广告类型
var AdRewardType;
(function (AdRewardType) {
    AdRewardType[AdRewardType["BoxSpeedup"] = 1] = "BoxSpeedup";
    AdRewardType[AdRewardType["Power"] = 2] = "Power";
    AdRewardType[AdRewardType["TileGameProp1"] = 3] = "TileGameProp1";
    AdRewardType[AdRewardType["TileGameProp2"] = 4] = "TileGameProp2";
    AdRewardType[AdRewardType["TileGameProp3"] = 5] = "TileGameProp3";
    AdRewardType[AdRewardType["LevelGift"] = 6] = "LevelGift";
    AdRewardType[AdRewardType["Offline"] = 7] = "Offline";
    AdRewardType[AdRewardType["StoreDress"] = 8] = "StoreDress";
    AdRewardType[AdRewardType["StoreFurniture"] = 9] = "StoreFurniture";
    AdRewardType[AdRewardType["StoreSuit"] = 10] = "StoreSuit";
    AdRewardType[AdRewardType["StoreCurrency"] = 11] = "StoreCurrency";
    AdRewardType[AdRewardType["Resign"] = 12] = "Resign";
    AdRewardType[AdRewardType["FurnitureBusiness"] = 13] = "FurnitureBusiness";
    AdRewardType[AdRewardType["DressBusiness"] = 14] = "DressBusiness";
    AdRewardType[AdRewardType["OutBoxSpeedup"] = 15] = "OutBoxSpeedup";
    AdRewardType[AdRewardType["StoreRefresh"] = 16] = "StoreRefresh";
    AdRewardType[AdRewardType["TileGameAddPos"] = 17] = "TileGameAddPos";
    AdRewardType[AdRewardType["Rent"] = 18] = "Rent";
    AdRewardType[AdRewardType["SuperOpenBox"] = 19] = "SuperOpenBox";
    AdRewardType[AdRewardType["ValuePack"] = 20] = "ValuePack";
    AdRewardType[AdRewardType["GoodGift"] = 21] = "GoodGift";
    AdRewardType[AdRewardType["Order"] = 22] = "Order";
    AdRewardType[AdRewardType["ManorCoin"] = 23] = "ManorCoin";
    AdRewardType[AdRewardType["ManorWater"] = 24] = "ManorWater";
    AdRewardType[AdRewardType["house_grade"] = 25] = "house_grade";
    AdRewardType[AdRewardType["OpenServer"] = 26] = "OpenServer";
    AdRewardType[AdRewardType["WeekActivity"] = 27] = "WeekActivity";
    AdRewardType[AdRewardType["LimitGift"] = 28] = "LimitGift";
})(AdRewardType || (exports.AdRewardType = AdRewardType = {}));
//充值类型
var PayType;
(function (PayType) {
    PayType[PayType["CurrencyItem"] = 1] = "CurrencyItem";
    PayType[PayType["CurrencyDailyPack"] = 2] = "CurrencyDailyPack";
    PayType[PayType["FirstRecharge"] = 3] = "FirstRecharge";
    PayType[PayType["WeekCard"] = 4] = "WeekCard";
    PayType[PayType["MonthCard"] = 5] = "MonthCard";
    PayType[PayType["MonthNoAdCard"] = 6] = "MonthNoAdCard";
    PayType[PayType["LifttimeCard"] = 7] = "LifttimeCard";
    PayType[PayType["OpenServerGift"] = 8] = "OpenServerGift";
    PayType[PayType["Offline"] = 9] = "Offline";
    PayType[PayType["petCard"] = 10] = "petCard";
    PayType[PayType["Pass"] = 11] = "Pass";
    PayType[PayType["WeekActivity"] = 12] = "WeekActivity";
    PayType[PayType["LimitGift"] = 13] = "LimitGift";
    PayType[PayType["MoonLimitGift"] = 14] = "MoonLimitGift";
    PayType[PayType["MoonTour"] = 15] = "MoonTour";
})(PayType || (exports.PayType = PayType = {}));
//iaaRewardtype
var IaaType;
(function (IaaType) {
    IaaType[IaaType["StoreCurrency"] = 1] = "StoreCurrency";
    IaaType[IaaType["FirstRecharge"] = 3] = "FirstRecharge";
    IaaType[IaaType["MonthCard"] = 5] = "MonthCard";
    IaaType[IaaType["LifttimeCard"] = 7] = "LifttimeCard";
    IaaType[IaaType["OpenServer"] = 8] = "OpenServer";
    IaaType[IaaType["petCard"] = 10] = "petCard";
    IaaType[IaaType["Pass"] = 11] = "Pass";
    IaaType[IaaType["WeekActivity"] = 12] = "WeekActivity";
    IaaType[IaaType["LimitGift"] = 13] = "LimitGift";
})(IaaType || (exports.IaaType = IaaType = {}));
//装饰入口的类型
var DecorateType;
(function (DecorateType) {
    DecorateType[DecorateType["Furniture"] = 0] = "Furniture";
    DecorateType[DecorateType["Dress"] = 100] = "Dress";
})(DecorateType || (exports.DecorateType = DecorateType = {}));
//掉落来源 主要是掉落家具和时装打点用(主) 以及 根据来源做特殊操作用(比如开箱)
var DropFrom;
(function (DropFrom) {
    DropFrom["Default"] = "else";
    DropFrom["Box"] = "common_box";
    DropFrom["TileGame"] = "tile_game";
    DropFrom["Outside"] = "outside";
    DropFrom["StoreDress"] = "store_dress";
    DropFrom["StoreFurniture"] = "store_furniture";
    DropFrom["StoreWallAndGround"] = "store_wall_ground";
    DropFrom["StoreSuit"] = "store_suit";
    DropFrom["Task"] = "task";
    DropFrom["LevelGift"] = "level_gift";
    DropFrom["GalleryReward"] = "gallery_reward";
    DropFrom["HouseGrade"] = "house_grade";
    DropFrom["Sign"] = "sign";
    DropFrom["FirstRecharge"] = "first_recharge";
    DropFrom["DressBusiness"] = "dress_business";
    DropFrom["FurnitureBusiness"] = "furniture_business";
    DropFrom["ValuePack"] = "value_pack";
    DropFrom["DiamondCard"] = "diamond_card";
    DropFrom["AdsFree"] = "ads_free";
    DropFrom["LifeCard"] = "life_card";
    DropFrom["PrivilegeCard"] = "PrivilegeCard";
    DropFrom["OpenServer"] = "OpenServer";
    DropFrom["PetGetFood"] = "PetGetFood";
    DropFrom["Exchange"] = "Exchange";
    DropFrom["StorePet"] = "StorePet";
    DropFrom["StoreCurrency"] = "StoreCurrency";
    DropFrom["petCard"] = "petCard";
    DropFrom["Pass"] = "Pass";
    DropFrom["WeekActivity"] = "WeekActivity";
    DropFrom["LimitGift"] = "LimitGift";
    DropFrom["MoonFestival"] = "MoonFestival";
    DropFrom["MoonLimitGift"] = "MoonLimitGift";
    DropFrom["Rent"] = "Rent";
    DropFrom["Chapter"] = "Chapter";
    DropFrom["Wish"] = "Wish";
})(DropFrom || (exports.DropFrom = DropFrom = {}));
//掉落物品类型
var DropType;
(function (DropType) {
    DropType[DropType["Furniture"] = 1] = "Furniture";
    DropType[DropType["Dress"] = 2] = "Dress";
    DropType[DropType["Coins"] = 3] = "Coins";
    DropType[DropType["BoxTimes"] = 4] = "BoxTimes";
    DropType[DropType["Exp"] = 5] = "Exp";
    DropType[DropType["RandomSuit"] = 6] = "RandomSuit";
    DropType[DropType["Power"] = 7] = "Power";
    DropType[DropType["Jewel"] = 8] = "Jewel";
    DropType[DropType["NoAdsTicket"] = 9] = "NoAdsTicket";
    DropType[DropType["BoxSpeedupTicket"] = 10] = "BoxSpeedupTicket";
    DropType[DropType["WatchAd"] = 11] = "WatchAd";
    DropType[DropType["Sweet"] = 12] = "Sweet";
    DropType[DropType["PetSkin"] = 13] = "PetSkin";
    DropType[DropType["CommemorativeCoins"] = 14] = "CommemorativeCoins";
    DropType[DropType["Suit"] = 15] = "Suit";
    DropType[DropType["Prompt"] = 16] = "Prompt";
    DropType[DropType["Flip"] = 17] = "Flip";
    DropType[DropType["Cancel"] = 18] = "Cancel";
    DropType[DropType["PetFood"] = 20] = "PetFood";
    DropType[DropType["PetMemorial"] = 21] = "PetMemorial";
    DropType[DropType["PetCard"] = 22] = "PetCard";
    DropType[DropType["PetActAni"] = 23] = "PetActAni";
    DropType[DropType["PetTravelTool"] = 24] = "PetTravelTool";
    DropType[DropType["PassExp"] = 25] = "PassExp";
    DropType[DropType["MoonCake1"] = 28] = "MoonCake1";
    DropType[DropType["MoonCake2"] = 29] = "MoonCake2";
    DropType[DropType["MoonCake3"] = 30] = "MoonCake3";
    DropType[DropType["MoonCake4"] = 31] = "MoonCake4";
    DropType[DropType["MoonExchange"] = 32] = "MoonExchange";
    DropType[DropType["RamdomReward"] = 33] = "RamdomReward";
    DropType[DropType["ManorCoin"] = 26] = "ManorCoin";
    DropType[DropType["ManorWater"] = 27] = "ManorWater";
    DropType[DropType["Purchase"] = 999] = "Purchase";
})(DropType || (exports.DropType = DropType = {}));
//角色动作
var RoleAnimType;
(function (RoleAnimType) {
    RoleAnimType["StandIdle"] = "Stand idle";
    RoleAnimType["IdleHot"] = "idle_hot";
    RoleAnimType["IdleLaugh"] = "idle_laugh";
    RoleAnimType["IdlePhone"] = "idle_phone";
    RoleAnimType["SitIdle"] = "sit idle";
    RoleAnimType["SleepIdle"] = "sleep idle";
    RoleAnimType["SitSing"] = "sit_sing";
    RoleAnimType["SitTired"] = "sit_tired";
    RoleAnimType["Walk"] = "walk";
    RoleAnimType["SitCola"] = "sit_cola";
    RoleAnimType["SitSweet"] = "sit_sweet";
    RoleAnimType["Active"] = "active";
    RoleAnimType["Disco"] = "disco";
    RoleAnimType["Bathe"] = "bathe";
    RoleAnimType["Drag"] = "drag";
    RoleAnimType["PetEmbrace"] = "pet_embrace";
    RoleAnimType["PetSit"] = "pet_sit";
    RoleAnimType["Pose1"] = "pose1";
    RoleAnimType["Pose2"] = "pose2";
    RoleAnimType["Pose3"] = "pose3";
    RoleAnimType["Pose4"] = "pose4";
    RoleAnimType["Pose5"] = "pose5";
    RoleAnimType["Pose6"] = "pose6";
    RoleAnimType["Soak"] = "soak";
})(RoleAnimType || (exports.RoleAnimType = RoleAnimType = {}));
//商店购买类型
var StoreBuyType;
(function (StoreBuyType) {
    StoreBuyType[StoreBuyType["Dress"] = 0] = "Dress";
    StoreBuyType[StoreBuyType["Furniture"] = 1] = "Furniture";
    StoreBuyType[StoreBuyType["WallAndGroud"] = 2] = "WallAndGroud";
    StoreBuyType[StoreBuyType["Suit"] = 3] = "Suit";
    StoreBuyType[StoreBuyType["Currency"] = 4] = "Currency";
    StoreBuyType[StoreBuyType["Pet"] = 5] = "Pet";
    StoreBuyType[StoreBuyType["Pass"] = 6] = "Pass";
})(StoreBuyType || (exports.StoreBuyType = StoreBuyType = {}));
//角色动作编辑器用的枚举
var RoleAnimTypeInspectorEnum;
(function (RoleAnimTypeInspectorEnum) {
    RoleAnimTypeInspectorEnum[RoleAnimTypeInspectorEnum["StandIdle"] = 0] = "StandIdle";
    RoleAnimTypeInspectorEnum[RoleAnimTypeInspectorEnum["SitIdle"] = 1] = "SitIdle";
    RoleAnimTypeInspectorEnum[RoleAnimTypeInspectorEnum["SleepIdle"] = 2] = "SleepIdle";
    RoleAnimTypeInspectorEnum[RoleAnimTypeInspectorEnum["Walk"] = 3] = "Walk";
})(RoleAnimTypeInspectorEnum || (exports.RoleAnimTypeInspectorEnum = RoleAnimTypeInspectorEnum = {}));
//角色动作
var RoleMale;
(function (RoleMale) {
    RoleMale[RoleMale["boy"] = 0] = "boy";
    RoleMale[RoleMale["girl"] = 1] = "girl";
})(RoleMale || (exports.RoleMale = RoleMale = {}));
var PetAniType;
(function (PetAniType) {
    PetAniType["pet_sit"] = "pet_sit";
})(PetAniType || (exports.PetAniType = PetAniType = {}));
/**
 * 事件类型
1.对话；
2.npc回收家具和衣服；
3.宠物领养；
4.外出布景
 */
var EventType;
(function (EventType) {
    EventType[EventType["normal"] = 1] = "normal";
    EventType[EventType["recycle"] = 2] = "recycle";
    EventType[EventType["getPet"] = 3] = "getPet";
    EventType[EventType["outThere"] = 4] = "outThere";
})(EventType || (exports.EventType = EventType = {}));
//角色枚举
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["girl"] = 101] = "girl";
    RoleEnum[RoleEnum["boy"] = 102] = "boy";
    // npc1 = 101,
})(RoleEnum || (exports.RoleEnum = RoleEnum = {}));
/**
 * 跳转类型
 */
var GotoType;
(function (GotoType) {
    GotoType[GotoType["DecorateFurniture"] = 1] = "DecorateFurniture";
    GotoType[GotoType["DecorateDress"] = 2] = "DecorateDress";
    GotoType[GotoType["MainBox"] = 3] = "MainBox";
    GotoType[GotoType["TileGame"] = 4] = "TileGame";
    GotoType[GotoType["Store"] = 5] = "Store";
    GotoType[GotoType["Chapter"] = 6] = "Chapter";
    GotoType[GotoType["Task"] = 7] = "Task";
    GotoType[GotoType["Outside"] = 8] = "Outside";
    GotoType[GotoType["PhotoCards"] = 9] = "PhotoCards";
    GotoType[GotoType["PhotoView"] = 10] = "PhotoView";
    GotoType[GotoType["Recycle"] = 11] = "Recycle";
    GotoType[GotoType["BusinessEventDress"] = 12] = "BusinessEventDress";
    GotoType[GotoType["BusinessEventFurniture"] = 13] = "BusinessEventFurniture";
    GotoType[GotoType["Pet"] = 14] = "Pet";
    GotoType[GotoType["Offline"] = 15] = "Offline";
    GotoType[GotoType["PrivilegeCard"] = 16] = "PrivilegeCard";
    GotoType[GotoType["Manor"] = 18] = "Manor";
})(GotoType || (exports.GotoType = GotoType = {}));
/**
 * 功能编号：1.换装；2.商店；3.拍照；4.出租；5.房屋评级；6.普通排行榜；7.宠物功能
活动编号：101.首充 102.问卷 103.月卡 104.超值礼包 105.开服活动
 */
var FunctionType;
(function (FunctionType) {
    FunctionType[FunctionType["Dress"] = 1] = "Dress";
    FunctionType[FunctionType["Store"] = 2] = "Store";
    FunctionType[FunctionType["Photo"] = 3] = "Photo";
    FunctionType[FunctionType["Rent"] = 4] = "Rent";
    FunctionType[FunctionType["RoomRating"] = 5] = "RoomRating";
    FunctionType[FunctionType["NormalRanklist"] = 6] = "NormalRanklist";
    FunctionType[FunctionType["Pet"] = 7] = "Pet";
    FunctionType[FunctionType["Wish"] = 8] = "Wish";
    FunctionType[FunctionType["ChoseRoom"] = 9] = "ChoseRoom";
    FunctionType[FunctionType["Manor"] = 10] = "Manor";
    FunctionType[FunctionType["AutoOpenBox"] = 11] = "AutoOpenBox";
    FunctionType[FunctionType["FirstRecharge"] = 101] = "FirstRecharge";
    FunctionType[FunctionType["Survey"] = 102] = "Survey";
    FunctionType[FunctionType["PrivilegeCard"] = 103] = "PrivilegeCard";
    FunctionType[FunctionType["ValuePack"] = 104] = "ValuePack";
    FunctionType[FunctionType["OpenServer"] = 105] = "OpenServer";
    FunctionType[FunctionType["Pass"] = 106] = "Pass";
    FunctionType[FunctionType["WeekActivity"] = 108] = "WeekActivity";
})(FunctionType || (exports.FunctionType = FunctionType = {}));
/**
 * 功能开启检查的类型
 */
var FunctionCheckType;
(function (FunctionCheckType) {
    FunctionCheckType[FunctionCheckType["BoxOpen"] = 0] = "BoxOpen";
    FunctionCheckType[FunctionCheckType["PlayerLevelup"] = 1] = "PlayerLevelup";
})(FunctionCheckType || (exports.FunctionCheckType = FunctionCheckType = {}));
/**
 *
 */
var BubbleType;
(function (BubbleType) {
    BubbleType[BubbleType["recycle"] = 2] = "recycle";
    BubbleType[BubbleType["outside"] = 3] = "outside";
    BubbleType[BubbleType["ellipsis"] = 4] = "ellipsis";
    BubbleType[BubbleType["adoptPet"] = 5] = "adoptPet";
    BubbleType[BubbleType["businessDress"] = 6] = "businessDress";
    BubbleType[BubbleType["businessFurniture"] = 7] = "businessFurniture";
})(BubbleType || (exports.BubbleType = BubbleType = {}));
/**
 * 明细显示的方向
 */
var DetaisOrientationType;
(function (DetaisOrientationType) {
    DetaisOrientationType[DetaisOrientationType["Default"] = 0] = "Default";
    DetaisOrientationType[DetaisOrientationType["Left"] = 1] = "Left";
    DetaisOrientationType[DetaisOrientationType["Right"] = 2] = "Right";
})(DetaisOrientationType || (exports.DetaisOrientationType = DetaisOrientationType = {}));
/**评分解锁家具状态 */
var LockState;
(function (LockState) {
    LockState[LockState["lock"] = 0] = "lock";
    LockState[LockState["unlock"] = 1] = "unlock";
})(LockState || (exports.LockState = LockState = {}));
/**颜色枚举 */
var ColorList;
(function (ColorList) {
    ColorList["normal"] = "#f6eed1";
    ColorList["green"] = "#d1f696";
    ColorList["blue"] = "#b4eeea";
    ColorList["orange"] = "#ffdd74";
})(ColorList || (exports.ColorList = ColorList = {}));
/**排行榜类型 */
var RankType;
(function (RankType) {
    RankType[RankType["DressCountRank"] = 1] = "DressCountRank";
    RankType[RankType["furnitureCountRank"] = 2] = "furnitureCountRank";
    RankType[RankType["houseGradeRank"] = 3] = "houseGradeRank";
    RankType[RankType["DressScoreRank"] = 4] = "DressScoreRank";
    RankType[RankType["furnitureScoreRank"] = 5] = "furnitureScoreRank";
})(RankType || (exports.RankType = RankType = {}));
/**出租状态 */
var RentStatus;
(function (RentStatus) {
    RentStatus[RentStatus["wait"] = 1] = "wait";
    RentStatus[RentStatus["running"] = 2] = "running";
    RentStatus[RentStatus["unlock"] = 3] = "unlock";
    RentStatus[RentStatus["timesMax"] = 4] = "timesMax";
    RentStatus[RentStatus["runningEnd"] = 5] = "runningEnd";
})(RentStatus || (exports.RentStatus = RentStatus = {}));
//广告加速类型
var AdsTipType;
(function (AdsTipType) {
    AdsTipType[AdsTipType["nothing"] = 0] = "nothing";
    AdsTipType[AdsTipType["look"] = 1] = "look";
    AdsTipType[AdsTipType["jump"] = 2] = "jump"; //加速
})(AdsTipType || (exports.AdsTipType = AdsTipType = {}));
//评分
var Score;
(function (Score) {
    Score[Score["nothing"] = 0] = "nothing";
    Score[Score["up"] = 1] = "up";
    Score[Score["down"] = 2] = "down"; //下降
})(Score || (exports.Score = Score = {}));
//弹窗跳转类型
var JumpTipType;
(function (JumpTipType) {
    JumpTipType[JumpTipType["cion"] = 1] = "cion";
    JumpTipType[JumpTipType["diamond"] = 2] = "diamond";
    JumpTipType[JumpTipType["furniture"] = 3] = "furniture";
    JumpTipType[JumpTipType["dress"] = 4] = "dress";
})(JumpTipType || (exports.JumpTipType = JumpTipType = {}));
//背包
var DecorateOwnedData = /** @class */ (function () {
    function DecorateOwnedData() {
        this.furnitureData = null;
        this.dressData = null;
        this.lineupCount = 0; //已经装扮的数量
        this.leftAmount = 0; //剩余数量
        this.isNew = 0; //1新  0非新
    }
    return DecorateOwnedData;
}());
exports.DecorateOwnedData = DecorateOwnedData;
//背包
var DecorateOwnedInfo = /** @class */ (function () {
    function DecorateOwnedInfo() {
        this.id = null; //物品idid
        this.lineupCount = 0; //已经装扮的数量
        this.leftAmount = 0; //剩余数量
    }
    return DecorateOwnedInfo;
}());
exports.DecorateOwnedInfo = DecorateOwnedInfo;
//背包红点数据
var DecorateRedData = /** @class */ (function () {
    function DecorateRedData() {
        this.amount = 0;
    }
    return DecorateRedData;
}());
exports.DecorateRedData = DecorateRedData;
//掉落结构
var DropInfo = /** @class */ (function () {
    function DropInfo() {
        this.dropData = [];
        this.UIID = [];
        this.dropFrom = DropFrom.Default;
    }
    return DropInfo;
}());
exports.DropInfo = DropInfo;
//掉落
var DropData = /** @class */ (function () {
    function DropData() {
        this.type = DropType.Coins;
        this.dropId = 0; //id
        this.dropAmount = 0; //数量
        this.name = ""; //名字
        this.iconUrl = ""; //icon路径
        this.grade = 1; //品质
        this.expAdd = 0; //经验增加
    }
    return DropData;
}());
exports.DropData = DropData;
//离线
var OfflineData = /** @class */ (function () {
    function OfflineData() {
        this.isOpen = false; //是否满足离线奖励条件
        this.coin = 0; //金币数量
        this.coinAdvanced = 0; //看广告获取金币数量
        this.leaveTime = 0; //离线时间
    }
    return OfflineData;
}());
exports.OfflineData = OfflineData;
//等级礼包
var LevelGiftListData = /** @class */ (function () {
    function LevelGiftListData() {
        this.level = 1;
        this.cost = 0; //花费
        this.giftData = [];
    }
    return LevelGiftListData;
}());
exports.LevelGiftListData = LevelGiftListData;
//等级礼包item
var LevelGiftData = /** @class */ (function () {
    function LevelGiftData() {
        this.dropData = "";
        this.unget = true; //未领取
    }
    return LevelGiftData;
}());
exports.LevelGiftData = LevelGiftData;
//章节条件
var StoryCondData = /** @class */ (function () {
    function StoryCondData() {
        this.desc = "";
        this.status = false; //是否完成
    }
    return StoryCondData;
}());
exports.StoryCondData = StoryCondData;
//任务
var TaskListData = /** @class */ (function () {
    function TaskListData() {
        this.taskId = 1; //任务id
        this.completed = 0; //完成进度
        this.isGetReward = 1; //领奖 1：未完成 2：可领取 3：已领取
    }
    return TaskListData;
}());
exports.TaskListData = TaskListData;
//商店物品
var StoreItemData = /** @class */ (function () {
    function StoreItemData() {
        this.type = DropType.Furniture;
        this.id = 0;
        this.purchaseType = 3; //金币  钻石  等
        this.purchaseAmount = 0;
        this.discount = 10; //10没折扣，小于10有折扣
        this.inTask = false;
        this.owned = false;
        this.leftLimitTimes = 0; //小于0不限购   0售罄  大于0限购
    }
    return StoreItemData;
}());
exports.StoreItemData = StoreItemData;
//内购商店物品
var StoreCurrencyItemData = /** @class */ (function () {
    function StoreCurrencyItemData() {
        this.type = DropType.Jewel;
        this.amount = 0;
        this.iconUrl = "";
        this.purchaseType = 3; //金币  钻石  rmb等
        this.purchaseAmount = 0; //价格
        this.firstPurchase = false; //首充是否双倍 0否 1是
        this.completeTimes = 0; //购买次数
        this.leftLimitTimes = 0; //限购 -1不限购   0售罄  大于0限购
        this.status = 0; //充值状态
    }
    return StoreCurrencyItemData;
}());
exports.StoreCurrencyItemData = StoreCurrencyItemData;
//内购商品礼包
var StoreCurrencyPackData = /** @class */ (function () {
    function StoreCurrencyPackData() {
        this.reward = ""; //物品
        this.leftTimes = 0; //剩余次数
        this.costId = 0; //内购商品id
    }
    return StoreCurrencyPackData;
}());
exports.StoreCurrencyPackData = StoreCurrencyPackData;
//套装商店物品
var StoreSuitItemData = /** @class */ (function () {
    function StoreSuitItemData() {
        this.id = 0; //套装id
        this.leftTime = 0; //剩余时间
        this.costs = [];
    }
    return StoreSuitItemData;
}());
exports.StoreSuitItemData = StoreSuitItemData;
//套装礼包
var SuitItemData = /** @class */ (function () {
    function SuitItemData() {
        this.price = "";
        this.owned = false;
    }
    return SuitItemData;
}());
exports.SuitItemData = SuitItemData;
//套装商店宝箱
var StoreSuitBoxData = /** @class */ (function () {
    function StoreSuitBoxData() {
        this.dropAmount = 0;
        this.freeTimes = 0; //广告
        this.cost = ""; //金币  钻石  等
    }
    return StoreSuitBoxData;
}());
exports.StoreSuitBoxData = StoreSuitBoxData;
//商店刷新
var StoreRefreshData = /** @class */ (function () {
    function StoreRefreshData() {
        this.shopType = 0;
        this.cost = "";
        this.adLeftTimes = 0;
    }
    return StoreRefreshData;
}());
exports.StoreRefreshData = StoreRefreshData;
//商店购买确认
var StoreBuyConfirmData = /** @class */ (function () {
    function StoreBuyConfirmData() {
        this.shopType = 0;
        this.toggleType = 0;
        this.itemNumber = 0;
    }
    return StoreBuyConfirmData;
}());
exports.StoreBuyConfirmData = StoreBuyConfirmData;
//物品详情
var ItemDetailsData = /** @class */ (function () {
    function ItemDetailsData() {
        this.orientationType = DetaisOrientationType.Default;
        this.dropData = null;
        this.touchPos = cc_1.Vec2.ZERO;
    }
    return ItemDetailsData;
}());
exports.ItemDetailsData = ItemDetailsData;
//邮件
var MailData = /** @class */ (function () {
    function MailData() {
        this.id = 0;
        this.title = "";
        this.content = "";
        this.reward = "";
        this.sendTime = 0;
        this.status = 0; //状态：0未读 1已读
        this.playerMailId = 0;
        this.isUseLang = false;
    }
    return MailData;
}());
exports.MailData = MailData;
//限制条件
var LimitConditionData = /** @class */ (function () {
    function LimitConditionData() {
        this.satisfied = false;
        this.unSatisfiedDesc = "";
    }
    return LimitConditionData;
}());
exports.LimitConditionData = LimitConditionData;
//上报增减数据类型
var TileGameVo = /** @class */ (function () {
    function TileGameVo(type, count) {
        this.type = 1;
        this.type = type;
        if (count && count > 0)
            this.count = count;
    }
    return TileGameVo;
}());
exports.TileGameVo = TileGameVo;
var GalleryData = /** @class */ (function () {
    function GalleryData(id, sweeits, grade, sta) {
        this.prop_id = 0;
        this.status = 0;
        this.sweets = 0;
        this.grade = 0;
        this.prop_id = id;
        this.sweets = sweeits;
        this.grade = grade;
        this.status = sta;
    }
    return GalleryData;
}());
exports.GalleryData = GalleryData;
//上报事件记录
var RecordEventVo = /** @class */ (function () {
    function RecordEventVo(triggerId, eventId, status) {
        this.triggerId = "";
        this.eventId = "";
        this.status = "";
        this.triggerId = triggerId;
        this.eventId = eventId;
        this.status = status;
    }
    return RecordEventVo;
}());
exports.RecordEventVo = RecordEventVo;
//房屋评级
var HouseRateData = /** @class */ (function () {
    function HouseRateData() {
        this.isOpen = null;
        this.houseRateConfigKey = null;
        this.taskConfigKey = null;
        this.isFull = 0;
    }
    return HouseRateData;
}());
exports.HouseRateData = HouseRateData;
//挂机数据
var HangData = /** @class */ (function () {
    function HangData() {
        this.offLineRewardAt = null;
        this.offLineLimitTime = null;
        this.multipleRewardCountMax = null;
        this.multipleRewardCount = null;
        this.isBuyAddLimitTime = null;
        this.offLineLimitAddBuffTime = null;
        this.minuteAddCoin = null;
    }
    return HangData;
}());
exports.HangData = HangData;
//主界面红点
var MainRed = /** @class */ (function () {
    function MainRed() {
        this.new7DayRedDot = 0; //开服7日活动
        this.userTaskRedDot = 0; //任务红点
        this.userSignRedDot = 0; //签到红点
        this.houseRateRedDot = 0; //房屋评级红点
        this.cardRedDot = 0; //月卡红点  特权卡
        this.codexRedDot = 0; //图鉴红点
        this.hireRedDot = 0; //出租红点
        this.mailOrNoticeRedDot = 0; //邮件公告红点
        this.petRedDot = 0; //宠物红点
        this.powerRedDot = 0; //体力红点
        this.passRedDot = 0; //通行证红点
        this.weekActivityRedDot = 0; //周常活动红点
        this.shoppingGift = 0; //购物红点
    }
    return MainRed;
}());
exports.MainRed = MainRed;
//动作
var RankingMove = /** @class */ (function () {
    function RankingMove() {
        this.boy = 0;
        this.girl = 0;
    }
    return RankingMove;
}());
exports.RankingMove = RankingMove;
//限时礼包
var TimeLimit = /** @class */ (function () {
    function TimeLimit() {
        this.id = null;
        this.endTime = 0;
        this.isTip = false;
        this.adTimes = 0;
    }
    return TimeLimit;
}());
exports.TimeLimit = TimeLimit;
//中秋国庆红点开启信息
var NationalDay = /** @class */ (function () {
    function NationalDay() {
        this.redDot = 0;
        this.isOpen = 0;
        this.endTime = 0;
    }
    return NationalDay;
}());
exports.NationalDay = NationalDay;
//中秋国庆礼包红点开启信息
var FestivalGift = /** @class */ (function () {
    function FestivalGift() {
        this.isOpen = 0;
        this.endTime = 0;
    }
    return FestivalGift;
}());
exports.FestivalGift = FestivalGift;
var PlotSpin;
(function (PlotSpin) {
    PlotSpin[PlotSpin["water"] = 0] = "water";
    PlotSpin[PlotSpin["disinsectization"] = 1] = "disinsectization";
    PlotSpin[PlotSpin["weeding"] = 2] = "weeding";
    PlotSpin[PlotSpin["DriveBirds"] = 3] = "DriveBirds";
    //展示鸟
    PlotSpin[PlotSpin["ShowBirds"] = 4] = "ShowBirds";
    //展示虫
    PlotSpin[PlotSpin["ShowInsect"] = 5] = "ShowInsect";
    //没有
    PlotSpin[PlotSpin["nothing"] = 999] = "nothing";
})(PlotSpin || (exports.PlotSpin = PlotSpin = {}));
//土地状态
var PlotState = /** @class */ (function () {
    function PlotState(id, status, seed_id, time, watering_status, watering_cd, eventList, maturetion_time) {
        this.id = 0;
        this.status = 0;
        this.seed_id = 0;
        this.updateTime = 0;
        this.watering_status = 0;
        this.watering_cd = 0;
        this.eventList = new Collection_1.Collection();
        this.maturetion_time = 0;
        this.id = id;
        this.status = status;
        this.seed_id = seed_id;
        this.updateTime = time;
        this.watering_status = watering_status;
        this.watering_cd = watering_cd;
        this.maturetion_time = maturetion_time;
        for (var i = 0; i < eventList.length; i++) {
            var plotEvent = new PlotEvent(eventList[i].event_id, eventList[i].start_time, eventList[i].status, eventList[i].end_time);
            this.eventList.set(plotEvent.event_id, plotEvent);
        }
    }
    PlotState.prototype.updateEvent = function (eventList) {
        this.eventList.clear();
        for (var i = 0; i < eventList.length; i++) {
            if (this.eventList.has(eventList[i].event_id)) {
                this.eventList.get(eventList[i].event_id).updateState(eventList[i]);
            }
            else {
                var plotEvent = new PlotEvent(eventList[i].event_id, eventList[i].start_time, eventList[i].status, eventList[i].end_time);
                this.eventList.set(plotEvent.event_id, plotEvent);
            }
        }
    };
    return PlotState;
}());
exports.PlotState = PlotState;
var PlotEvent = /** @class */ (function () {
    function PlotEvent(eventId, start_time, status, end_time) {
        this.event_id = 0;
        this.start_time = 0;
        this.status = 0;
        this.end_time = 0;
        this.event_id = eventId;
        this.start_time = start_time;
        this.status = status;
        this.end_time = end_time;
    }
    PlotEvent.prototype.updateState = function (data) {
        this.start_time = data.start_time;
        this.status = data.status;
        this.end_time = data.end_time;
    };
    return PlotEvent;
}());
exports.PlotEvent = PlotEvent;
