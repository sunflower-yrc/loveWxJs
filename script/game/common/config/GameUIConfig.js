"use strict";
/*
 * @Date: 2021-08-12 09:33:37
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-11 17:41:53
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIConfigData = exports.UIID = void 0;
var LayerManager_1 = require("../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager");
/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
var UIID;
(function (UIID) {
    /** 资源加载界面 */
    UIID[UIID["Loading"] = 1] = "Loading";
    /** 加载与延时提示界面 */
    UIID[UIID["Netinstable"] = 2] = "Netinstable";
    UIID[UIID["NetLoading"] = 3] = "NetLoading";
    UIID[UIID["NetLoadingRes"] = 4] = "NetLoadingRes";
    UIID[UIID["MainTenance"] = 5] = "MainTenance";
    UIID[UIID["Timeout"] = 6] = "Timeout";
    UIID[UIID["GuideMove"] = 7] = "GuideMove";
    UIID[UIID["Home"] = 8] = "Home";
    UIID[UIID["Scene"] = 9] = "Scene";
    UIID[UIID["Furniture"] = 10] = "Furniture";
    UIID[UIID["Dress"] = 11] = "Dress";
    UIID[UIID["OpenSpeedup"] = 12] = "OpenSpeedup";
    UIID[UIID["Drop"] = 13] = "Drop";
    UIID[UIID["Chapter"] = 14] = "Chapter";
    UIID[UIID["ChapterLevelup"] = 15] = "ChapterLevelup";
    UIID[UIID["LevelGift"] = 16] = "LevelGift";
    UIID[UIID["Offline"] = 17] = "Offline";
    UIID[UIID["CurrencyFly"] = 18] = "CurrencyFly";
    UIID[UIID["CurrencyManorFly"] = 19] = "CurrencyManorFly";
    UIID[UIID["Task"] = 20] = "Task";
    UIID[UIID["Sign"] = 21] = "Sign";
    UIID[UIID["Store"] = 22] = "Store";
    UIID[UIID["StoreRefresh"] = 23] = "StoreRefresh";
    UIID[UIID["StoreBuyConfirm"] = 24] = "StoreBuyConfirm";
    UIID[UIID["StoreBoxConfirm"] = 25] = "StoreBoxConfirm";
    UIID[UIID["StoreCurrencyConfirm"] = 26] = "StoreCurrencyConfirm";
    UIID[UIID["StoreSuit"] = 27] = "StoreSuit";
    UIID[UIID["ItemDetailsCurrency"] = 28] = "ItemDetailsCurrency";
    UIID[UIID["ItemDetailsDecorate"] = 29] = "ItemDetailsDecorate";
    UIID[UIID["ItemDetailsSuit"] = 30] = "ItemDetailsSuit";
    UIID[UIID["Mail"] = 31] = "Mail";
    UIID[UIID["MailDetail"] = 32] = "MailDetail";
    UIID[UIID["ConfirmWindow"] = 33] = "ConfirmWindow";
    UIID[UIID["Settings"] = 34] = "Settings";
    UIID[UIID["Privacy"] = 35] = "Privacy";
    UIID[UIID["FirstRecharge"] = 36] = "FirstRecharge";
    UIID[UIID["TileGame"] = 37] = "TileGame";
    UIID[UIID["LoadAnim"] = 38] = "LoadAnim";
    UIID[UIID["TileGameHome"] = 39] = "TileGameHome";
    UIID[UIID["Dialogue"] = 40] = "Dialogue";
    //拍照
    UIID[UIID["Album"] = 41] = "Album";
    UIID[UIID["Shoot"] = 42] = "Shoot";
    UIID[UIID["ShootEnd"] = 43] = "ShootEnd";
    UIID[UIID["PhotoRecord"] = 44] = "PhotoRecord";
    //图鉴
    UIID[UIID["Gallery"] = 45] = "Gallery";
    UIID[UIID["Recycle"] = 46] = "Recycle";
    //房屋评级
    UIID[UIID["HouseGrade"] = 47] = "HouseGrade";
    //排行榜
    UIID[UIID["Rank"] = 48] = "Rank";
    //家具、装扮商人
    UIID[UIID["BusinessEvent"] = 49] = "BusinessEvent";
    //出租
    UIID[UIID["Rent"] = 50] = "Rent";
    //公众号
    UIID[UIID["GongzhonghaoPop"] = 51] = "GongzhonghaoPop";
    //游戏圈
    UIID[UIID["GameClubPop"] = 52] = "GameClubPop";
    //问卷
    UIID[UIID["SurveyPop"] = 53] = "SurveyPop";
    //广告加速弹窗
    UIID[UIID["Advert"] = 54] = "Advert";
    //宠物
    UIID[UIID["PetMain"] = 55] = "PetMain";
    //宠物藏馆
    UIID[UIID["PetLibrary"] = 56] = "PetLibrary";
    //宠物皮肤选择
    UIID[UIID["PetSelectSkin"] = 57] = "PetSelectSkin";
    //宠物装饰
    UIID[UIID["PetHome"] = 58] = "PetHome";
    //宠物二选一
    UIID[UIID["PetChoose"] = 59] = "PetChoose";
    //宠物喂食界面
    UIID[UIID["PetEat"] = 60] = "PetEat";
    //宠物改名界面
    UIID[UIID["PetChangeName"] = 61] = "PetChangeName";
    //宠物获取食物界面
    UIID[UIID["PetGetFood"] = 62] = "PetGetFood";
    //宠物提升心情值
    UIID[UIID["PetUpMoodConfirm"] = 63] = "PetUpMoodConfirm";
    //宠物出行道具选择
    UIID[UIID["PetTravelTool"] = 64] = "PetTravelTool";
    //宠物照片详情
    UIID[UIID["PetImgShare"] = 65] = "PetImgShare";
    //宠物旅行奖励发放
    UIID[UIID["PetTravelReward"] = 66] = "PetTravelReward";
    //超值礼包（夏日清凉）
    UIID[UIID["ValuePack"] = 67] = "ValuePack";
    //超级开箱
    UIID[UIID["SuperOpenBox"] = 68] = "SuperOpenBox";
    //特权卡
    UIID[UIID["PrivilegeCard"] = 69] = "PrivilegeCard";
    //开服活动
    UIID[UIID["OpenServer"] = 70] = "OpenServer";
    //更多
    UIID[UIID["More"] = 71] = "More";
    //通用跳转
    UIID[UIID["JumpTip"] = 72] = "JumpTip";
    //通用兑换码E
    UIID[UIID["Exchange"] = 73] = "Exchange";
    //切换住所
    UIID[UIID["ChoseRoom"] = 74] = "ChoseRoom";
    //用户协议
    UIID[UIID["UserAgreement"] = 75] = "UserAgreement";
    //拒绝提示
    UIID[UIID["UserAgreementTip"] = 76] = "UserAgreementTip";
    //通行证
    UIID[UIID["Pass"] = 77] = "Pass";
    //形象设R置
    UIID[UIID["RoleAction"] = 78] = "RoleAction";
    //调试动态图集
    UIID[UIID["Test"] = 79] = "Test";
    //周常活动
    UIID[UIID["WeekActivity"] = 80] = "WeekActivity";
    //限时礼包
    UIID[UIID["LimitGift"] = 81] = "LimitGift";
    //中秋活动
    UIID[UIID["MoonFestival"] = 82] = "MoonFestival";
    //客服
    UIID[UIID["Service"] = 83] = "Service";
    //小红书
    UIID[UIID["XiaoHongShuPop"] = 84] = "XiaoHongShuPop";
    UIID[UIID["ManorSeed"] = 85] = "ManorSeed";
    //种子商店
    UIID[UIID["ManorSeedShop"] = 86] = "ManorSeedShop";
    //庄园设施操作界面
    UIID[UIID["ManorFacilitiesUp"] = 87] = "ManorFacilitiesUp";
    //庄园详情
    UIID[UIID["ManorLevel"] = 88] = "ManorLevel";
    //多选一
    UIID[UIID["SelectItem"] = 89] = "SelectItem";
    //预览
    UIID[UIID["Preview"] = 90] = "Preview";
    //中秋限时
    UIID[UIID["MoonLimitGift"] = 91] = "MoonLimitGift";
    //庄园土地操作弹窗
    UIID[UIID["ManorEventPop"] = 92] = "ManorEventPop";
    //庄园贸易公告弹框
    UIID[UIID["ManorDealPop"] = 93] = "ManorDealPop";
    //通用获取货币道具的弹框，目前只用于获取庄园币和水滴
    UIID[UIID["ComBuyPanel"] = 94] = "ComBuyPanel";
    //自动开箱
    UIID[UIID["AutoOpenBox"] = 95] = "AutoOpenBox";
    UIID[UIID["AutoOpenBoxDrop"] = 96] = "AutoOpenBoxDrop";
    //许愿
    UIID[UIID["Wish"] = 97] = "Wish";
})(UIID || (exports.UIID = UIID = {}));
/** 打开界面方式的配置数据 */
exports.UIConfigData = (_a = {},
    _a[UIID.Loading] = { layer: LayerManager_1.LayerType.UI, prefab: "loading/prefab/loading", bundle: "resources" },
    _a[UIID.Netinstable] = { layer: LayerManager_1.LayerType.System, prefab: "prefab/netinstable", bundle: "common" },
    _a[UIID.NetLoading] = { layer: LayerManager_1.LayerType.System, prefab: "prefab/netloading", bundle: "common" },
    _a[UIID.NetLoadingRes] = { layer: LayerManager_1.LayerType.Loading, prefab: "prefab/netloadingRes", bundle: "common" },
    _a[UIID.MainTenance] = { layer: LayerManager_1.LayerType.System, prefab: "gui/comm/maintenance", bundle: "resources" },
    _a[UIID.Timeout] = { layer: LayerManager_1.LayerType.System, prefab: "gui/comm/timeout", bundle: "resources" },
    _a[UIID.UserAgreement] = { layer: LayerManager_1.LayerType.System, prefab: "gui/comm/userAgreement", bundle: "resources" },
    _a[UIID.UserAgreementTip] = { layer: LayerManager_1.LayerType.System, prefab: "gui/comm/userAgreementTip", bundle: "resources" },
    _a[UIID.GuideMove] = { layer: LayerManager_1.LayerType.View, prefab: "guideMove", bundle: "guide" },
    _a[UIID.Home] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/home/home", bundle: "gui" },
    _a[UIID.Scene] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/scene/scene", bundle: "gui" },
    _a[UIID.Furniture] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/furniture/furniture", bundle: "gui" },
    _a[UIID.Dress] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/dress/dress", bundle: "gui" },
    _a[UIID.OpenSpeedup] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/home/openSpeedup", bundle: "gui" },
    _a[UIID.Drop] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/drop/drop", bundle: "gui" },
    _a[UIID.Chapter] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/chapter/chapter", bundle: "gui" },
    _a[UIID.ChapterLevelup] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/chapter/chapterLevelup", bundle: "gui" },
    _a[UIID.LevelGift] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/chapter/levelGift", bundle: "gui" },
    _a[UIID.Offline] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/offline/offline", bundle: "gui" },
    _a[UIID.CurrencyFly] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/home/currencyFly", bundle: "gui" },
    _a[UIID.CurrencyManorFly] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/home/currencyManorCoinFly", bundle: "gui" },
    _a[UIID.Task] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/task/task", bundle: "gui" },
    _a[UIID.Sign] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/sign/sign", bundle: "gui" },
    _a[UIID.Store] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/store/store", bundle: "gui" },
    _a[UIID.StoreRefresh] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/store/storeRefresh", bundle: "gui" },
    _a[UIID.StoreBuyConfirm] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/store/storeBuyConfirm", bundle: "gui" },
    _a[UIID.StoreBoxConfirm] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/store/storeBoxConfirm", bundle: "gui" },
    _a[UIID.StoreCurrencyConfirm] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/store/storeCurrencyConfirm", bundle: "gui" },
    _a[UIID.StoreSuit] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/store/storeSuit", bundle: "gui" },
    _a[UIID.ItemDetailsCurrency] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/itemDetails/itemDetailsCurrency", bundle: "gui" },
    _a[UIID.ItemDetailsDecorate] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/itemDetails/itemDetailsDecorate", bundle: "gui" },
    _a[UIID.ItemDetailsSuit] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/itemDetails/itemDetailsSuit", bundle: "gui" },
    _a[UIID.Mail] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/mail/mail", bundle: "gui" },
    _a[UIID.MailDetail] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/mail/mailDetail", bundle: "gui" },
    _a[UIID.ConfirmWindow] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/comm/confirmWindow", bundle: "gui" },
    _a[UIID.Settings] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/settings/settings", bundle: "gui" },
    _a[UIID.Privacy] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/settings/privacy", bundle: "gui" },
    _a[UIID.FirstRecharge] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/purchase/firstRecharge", bundle: "gui" },
    _a[UIID.TileGame] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/tilesGame/tilesGame", bundle: "gui" },
    _a[UIID.LoadAnim] = { layer: LayerManager_1.LayerType.Loading, prefab: "prefab/loadAnim/loadAnim", bundle: "gui" },
    _a[UIID.TileGameHome] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/tilesGame/tileGameHome", bundle: "gui" },
    _a[UIID.Dialogue] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/dialogue/dialogue", bundle: "gui" },
    _a[UIID.Album] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/photo/album", bundle: "gui" },
    _a[UIID.Shoot] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/photo/shoot", bundle: "gui" },
    _a[UIID.ShootEnd] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/photo/shootEnd", bundle: "gui" },
    _a[UIID.PhotoRecord] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/photo/photoRecord", bundle: "gui" },
    _a[UIID.Gallery] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/gallery/gallery", bundle: "gui" },
    _a[UIID.Recycle] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/recycle/recycle", bundle: "gui" },
    _a[UIID.Rank] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/rank/rank", bundle: "gui" },
    _a[UIID.HouseGrade] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/houseGrade/houseGrade", bundle: "gui" },
    _a[UIID.BusinessEvent] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/businessEvent/businessEvent", bundle: "gui" },
    _a[UIID.Rent] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/rent/rent", bundle: "gui" },
    _a[UIID.GongzhonghaoPop] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/wx/GongzhonghaoPop", bundle: "gui" },
    _a[UIID.GameClubPop] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/wx/GameClubPop", bundle: "gui" },
    _a[UIID.SurveyPop] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/survey/surveyPop", bundle: "gui" },
    _a[UIID.Advert] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/advert/advert", bundle: "gui" },
    _a[UIID.PetMain] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/pet/petMain", bundle: "gui" },
    _a[UIID.PetSelectSkin] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petSelectSkin", bundle: "gui" },
    _a[UIID.PetLibrary] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/pet/petLibrary", bundle: "gui" },
    _a[UIID.PetChoose] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/pet/petChoose", bundle: "gui" },
    _a[UIID.PetHome] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petHome", bundle: "gui" },
    _a[UIID.PetEat] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petEat", bundle: "gui" },
    _a[UIID.PetGetFood] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petGetFood", bundle: "gui" },
    _a[UIID.PetTravelTool] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petTravelTool", bundle: "gui" },
    _a[UIID.PetUpMoodConfirm] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petUpMoodConfirm", bundle: "gui" },
    _a[UIID.PetImgShare] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petImgShare", bundle: "gui" },
    _a[UIID.PetTravelReward] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petTravelReward", bundle: "gui" },
    _a[UIID.PetChangeName] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/pet/petChangeName", bundle: "gui" },
    _a[UIID.ValuePack] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/valuePack/valuePack", bundle: "gui" },
    _a[UIID.SuperOpenBox] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/home/superOpenBox", bundle: "gui" },
    _a[UIID.PrivilegeCard] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/privilegeCard/privilegeCard", bundle: "gui" },
    _a[UIID.OpenServer] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/openServer/openServer", bundle: "gui" },
    _a[UIID.More] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/home/more", bundle: "gui" },
    _a[UIID.JumpTip] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/jumpTip/jumpTip", bundle: "gui" },
    _a[UIID.Exchange] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/settings/exchange", bundle: "gui" },
    _a[UIID.ChoseRoom] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/choseRoom/choseRoom", bundle: "gui" },
    _a[UIID.Test] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/test/test", bundle: "gui" },
    _a[UIID.Pass] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/pass/pass", bundle: "gui" },
    _a[UIID.RoleAction] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/dress/roleAction", bundle: "gui" },
    _a[UIID.WeekActivity] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/weekActivity/weekActivity", bundle: "gui" },
    _a[UIID.LimitGift] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/limitGift/limitGift", bundle: "gui" },
    _a[UIID.MoonFestival] = { layer: LayerManager_1.LayerType.View, prefab: "prefab/moonFestival/moonFestival", bundle: "gui" },
    _a[UIID.Service] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/settings/service", bundle: "gui" },
    _a[UIID.XiaoHongShuPop] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/wx/XiaoHongShuPop", bundle: "gui" },
    _a[UIID.ManorSeed] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/manor/manorSeed", bundle: "gui" },
    _a[UIID.ManorSeedShop] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/manor/manorSeedShop", bundle: "gui" },
    _a[UIID.ManorFacilitiesUp] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/manor/manorFacilitiesUp", bundle: "gui" },
    _a[UIID.ManorLevel] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/manor/manorLevel", bundle: "gui" },
    _a[UIID.SelectItem] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/moonFestival/selectItem", bundle: "gui" },
    _a[UIID.Preview] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/moonFestival/preview", bundle: "gui" },
    _a[UIID.MoonLimitGift] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/moonLimitGift/moonLimitGift", bundle: "gui" },
    _a[UIID.ManorEventPop] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/manor/manorEventPop", bundle: "gui" },
    _a[UIID.ManorDealPop] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/manor/manorDealPop", bundle: "gui" },
    _a[UIID.ComBuyPanel] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/comm/comBuyPanel", bundle: "gui" },
    _a[UIID.AutoOpenBox] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/home/autoOpenBox", bundle: "gui" },
    _a[UIID.AutoOpenBoxDrop] = { layer: LayerManager_1.LayerType.UI, prefab: "prefab/home/autoOpenBoxDrop", bundle: "gui" },
    _a[UIID.Wish] = { layer: LayerManager_1.LayerType.PopUp, prefab: "prefab/wish/wish", bundle: "gui" },
    _a);
