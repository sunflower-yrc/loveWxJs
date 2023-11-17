"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
/*
 * @Author: dgflash
 * @Date: 2021-11-23 15:28:39
 * @LastEditors: dgflash
 * @LastEditTime: 2022-01-26 16:42:00
 */
/** 游戏事件 */
var GameEvent;
(function (GameEvent) {
    /** 游戏服务器连接成功 */
    GameEvent["GameServerConnected"] = "GameServerConnected";
    /** 登陆成功 */
    GameEvent["LoginSuccess"] = "LoginSuccess";
    /** loading in */
    GameEvent["LoadingIn"] = "LoadingIn";
    /** loading out */
    GameEvent["LoadingOut"] = "LoadingOut";
    /** 触发引导 */
    GameEvent["EmitGuide"] = "EmitGuide";
    /** 更新任务 */
    GameEvent["UpdateTask"] = "UpdateTask";
    /** 更新每日任务 */
    GameEvent["UpdateDailyTask"] = "UpdateDailyTask";
    /** 播放货币动画 */
    GameEvent["ShowHomeCurrencyAnim"] = "ShowHomeCurrencyAnim";
    /** 播放货币动画 */
    GameEvent["ShowStoreCurrencyAnim"] = "ShowStoreCurrencyAnim";
    /** 飞金币 */
    GameEvent["CoinFly"] = "CoinFly";
    /** 货币商城 */
    GameEvent["PurchaseCurrency"] = "PurchaseCurrency";
    /** 首充 */
    GameEvent["PurchaseFirst"] = "PurchaseFirst";
    /** 显示首充入口 */
    GameEvent["ShowFirstRecharge"] = "ShowFirstRecharge";
    /** 主界面功能开启 */
    GameEvent["HomeFuncOpen"] = "HomeFuncOpen";
    /** 显示homeui */
    GameEvent["ShowHomeUI"] = "ShowHomeUI";
    /** 刷新等级 */
    GameEvent["ShowLevel"] = "ShowLevel";
    /** 显示homeui */
    GameEvent["HideHomeUI"] = "HideHomeUI";
    /** 家具排序 */
    GameEvent["SortFurniture"] = "SortFurniture";
    /** 时装排序 */
    GameEvent["SortDress"] = "SortDress";
    /** decorate红点刷新 */
    GameEvent["DecorateRefreshRedDot"] = "DecorateRefreshRedDot";
    /** 家具红点home */
    GameEvent["FurnitureRedDotHome"] = "FurnitureRedDotHome";
    /** 时装红点home */
    GameEvent["DressRedDotHome"] = "DressRedDotHome";
    /** 显示装修界面的按钮 */
    GameEvent["ShowFurnitureBtns"] = "ShowFurnitureBtns";
    /** 装修界面引导提示 */
    GameEvent["FurnitureGuideTis"] = "FurnitureGuideTis";
    /** 显示家具列表的动画 */
    GameEvent["ShowFurnitureAnimate"] = "ShowFurnitureAnimate";
    /** 家具评分更新 */
    GameEvent["UpdateFurnitureScore"] = "UpdateFurnitureScore";
    /** 装扮评分更新 */
    GameEvent["UpdateDressScore"] = "UpdateDressScore";
    /** 更新主页任务进度 */
    GameEvent["UpdateHomeTask"] = "UpdateHomeTask";
    /** 更新签到总进度 */
    GameEvent["UpdateSignTotalProgress"] = "UpdateSignTotalProgress";
    /** 更新章节红点 */
    GameEvent["UpdateChapterRedDot"] = "UpdateChapterRedDot";
    /** 更新等级礼包数据 */
    GameEvent["UpdateLevelGiftData"] = "UpdateLevelGiftData";
    /** 显示等级礼包 */
    GameEvent["ShowLevelGift"] = "ShowLevelGift";
    /** 自动打开等级礼包 */
    GameEvent["AutoOpenLevelGift"] = "AutoOpenLevelGift";
    /**检查当前车状态 */
    GameEvent["CheckCarEvent"] = "CheckCarEvent";
    GameEvent["RefreshCarIsSuper"] = "RefreshCarIsSuper";
    // /**车开进来动画 */
    // CarEnterAnimation = "CarEnterAnimation",
    // /**车开走动画 */
    // CarExitAnimation = "CarExitAnimation",
    /**减少等待车时间 */
    GameEvent["SpeedUpOpenBox"] = "SpeedUpOpenBox";
    /**刷新所有块动画 */
    GameEvent["RefreshTileTotalNum"] = "RefreshTotalNum";
    /** 章节升级 */
    GameEvent["UpUserChapter"] = "UpUserChapter";
    /** 切换时装 */
    GameEvent["ChangeDress"] = "ChangeDress";
    /** 时装被顶下去刷新 */
    GameEvent["BackToDressList"] = "BackToDressList";
    /** 刷新商店列表 */
    GameEvent["RefreshStoreList"] = "RefreshStoreList";
    /**关闭商店顶部倒计时时间显示 */
    GameEvent["RefreshStoreTopTimeState"] = "RefreshStoreTopTimeState";
    /** 刷新邮件列表 */
    GameEvent["RefreshMailList"] = "RefreshMailList";
    /**堆叠游戏胜利 */
    GameEvent["TileGameWin"] = "TileGameWin";
    /**堆叠游戏失败 */
    GameEvent["TileGameLose"] = "TileGameLose";
    /**取消节点下所有按钮 */
    GameEvent["OffBtns"] = "OffBtns";
    /**打开节点下所有按钮 */
    GameEvent["OnBtns"] = "OnBtns";
    /**重玩 */
    GameEvent["ReplayTileGame"] = "ReplayTileGame";
    /**刷新装修状态 */
    GameEvent["FreshRoleExit"] = "FreshConstructionState";
    /**刷新主界面角色 */
    GameEvent["FreshRoleDress"] = "FreshRoleDress";
    /**刷新主界面宠物 */
    GameEvent["FreshPetSkin"] = "FreshPetSkin";
    /**显示角色 */
    GameEvent["ShowRole"] = "ShowRole";
    /**下一句 */
    GameEvent["PlayNextDialogue"] = "PlayNextDialogue";
    /**触发事件 */
    GameEvent["CheckStartTrigger"] = "CheckStartTrigger";
    /**刷新外出数据 */
    GameEvent["RefreshOutsideUnlockList"] = "RefreshOutsideUnlockList";
    /**刷新事件按钮 */
    GameEvent["FreshEventBtns"] = "RegisterEvent";
    // CarEnterAnimation = "CarEnterAnimation",
    // /**车开走动画 */
    // CarExitAnimation = "CarExitAnimation",
    /**减少等待车时间 */
    /**按钮选中和反选 */
    GameEvent["ClickItem"] = "ClickItem";
    /**房屋评级刷新 */
    GameEvent["UpdateHouseGrade"] = "UpdateHouseGrade";
    /**隐藏装扮动作列表 */
    GameEvent["HideDressActionList"] = "HideDressActionList";
    /**排行榜选择列表 */
    GameEvent["RankChoseList"] = "RankChoseList";
    /**出租列表更新 */
    GameEvent["UpdateRentList"] = "UpdateRentList";
    //超级开箱
    GameEvent["SuperOpenBoxRefresh"] = "SuperOpenBoxRefresh";
    /**超值礼包更新 */
    GameEvent["UpdateValuePack"] = "UpdateValuePack";
    /**邮件内标签1红点更新 */
    GameEvent["UpdateMailTitleOneRed"] = "UpdateMailTitleOneRed";
    /**邮件内标签2红点更新 */
    GameEvent["UpdateMailTitleTwoRed"] = "UpdateMailTitleTwoRed";
    /**特权卡更新 */
    GameEvent["UpdatePrivilegeCard"] = "UpdatePrivilegeCard";
    /**特权卡红点更新 */
    GameEvent["UpdatePrivilegeCardRed"] = "UpdatePrivilegeCardRed";
    /**开服活动更新 */
    GameEvent["UpdateOpenServe"] = "UpdateOpenServe";
    GameEvent["UpdatePetMain"] = "UpdatePetMain";
    GameEvent["UpdatePetEat"] = "UpdatePetEat";
    /**挂机数据更新 */
    GameEvent["UpdateOfflineData"] = "UpdateOfflineData";
    /**挂机一元购买 */
    GameEvent["OfflineOneBuy"] = "OfflineOneBuy";
    /**切换房型选择 */
    GameEvent["ChoseRoomSelect"] = "ChoseRoomSelect";
    /**更新房子家具 */
    GameEvent["RefreshRoomFurniture"] = "RefreshRoomFurniture";
    /** 游戏主界面红点 */
    GameEvent["GameMianRed"] = "GameMianRed";
    /** 游戏主界面红点 */
    GameEvent["tileGameRed"] = "tileGameRed";
    /** 通行数据更新 */
    GameEvent["UpdateDataPass"] = "UpdateDataPass";
    /** 通行证购买数据更新 */
    GameEvent["UpdateDataBuyPass"] = "UpdateDataBuyPass";
    /** 首充购买数据更新 */
    GameEvent["FirstDataBuyPass"] = "FirstDataBuyPass";
    /** 通行证任务进度 */
    GameEvent["TaskProPass"] = "TaskProPass";
    /** 周常活动数据更新 */
    GameEvent["UpdateWeekActivity"] = "UpdateWeekActivity";
    /** 周常活动礼包购买 */
    GameEvent["WeekActivityBuy"] = "WeekActivityBuy";
    /**动态图片加载完毕 */
    GameEvent["SpriteFrameComplete"] = "SpriteFrameComplete";
    //刷新种子背包
    //更新当前的庄园精力
    GameEvent["UpdateManorPower"] = "UpdateManorPower";
    //国庆活动，每日签到数据更新
    GameEvent["UpdateGoodGift"] = "UpdateGoodGift";
    //国庆活动，每日签到选择位置
    GameEvent["UpdateGoodGiftPos"] = "UpdateGoodGiftPos";
    //隐藏npc
    GameEvent["HideNpcPos"] = "HideNpcPos";
    //显示npc
    GameEvent["ShowNpcPos"] = "ShowNpcPos";
    //国庆活动，活动订单数据更新
    GameEvent["UpdateOrderData"] = "UpdateOrderData";
    //中秋活动
    GameEvent["MoonFestival"] = "MoonFestival";
    //国庆活动，系列礼包数据更新
    GameEvent["UpdateMoonTour"] = "UpdateMoonTour";
    //国庆活动，系列礼包购买
    GameEvent["BuyMoonTour"] = "BuyMoonTour";
    //国庆活动，活动珍藏数据更新
    GameEvent["UpdateMoonCollection"] = "UpdateMoonCollection";
    //国庆活动，自跳转
    GameEvent["gotoMoon"] = "gotoMoon";
    //国庆活动，活动任务数据更新
    GameEvent["UpdateMoonTask"] = "UpdateMoonTask";
    //多选一
    GameEvent["RamdomSelect"] = "RamdomSelect";
    //中秋限时
    GameEvent["BuyMoonLimitGift"] = "BuyMoonLimitGift";
    GameEvent["UpdateManorSeedBag"] = "UpdateManorSeedBag";
    //中秋红点
    GameEvent["UpdateMoonRed"] = "UpdateMoonRed";
    /** 装扮评分更新 */
    /**网络不好 */
    GameEvent["NetWeak"] = "NET_WEAK";
    //通用活动按钮
    GameEvent["UpdateActivityBtn"] = "UpdateActivityBtn";
    //庄园返回
    GameEvent["ManorBack"] = "ManorBack";
    //跳转到庄园
    GameEvent["ManorGo"] = "ManorGo";
    //是否隐藏种植相关ui
    GameEvent["IsHideSeedPanel"] = "IsHideSeedPanel";
    //等级礼包数据更新
    GameEvent["UpdateLevelGift"] = "UpdateLevelGift";
    //米大师支付特殊处理
    GameEvent["MdsQueryOrder"] = "MdsQueryOrder";
    //外出奖励红点更新
    GameEvent["OutRewardRed"] = "OutRewardRed";
    //隐藏显示主界面按钮
    GameEvent["SetHomeBtn"] = "SetHomeBtn";
    //许愿家具
    GameEvent["WishFurniture"] = "WishFurniture";
    //每日广告次数
    GameEvent["UpdateDayAds"] = "UpdateDayAds";
    //商店内购
    GameEvent["UpdateStoreCurry"] = "UpdateStoreCurry";
    //限时礼包
    GameEvent["LimitGiftAds"] = "LimitGiftAds";
})(GameEvent || (exports.GameEvent = GameEvent = {}));
