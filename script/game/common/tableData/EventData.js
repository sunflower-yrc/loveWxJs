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
exports.EventData = void 0;
var MapCache_1 = require("../../../Global/MapCache");
var Tableevent_1 = require("../table/Tableevent");
var LangData_1 = require("./LangData");
var EventData = /** @class */ (function (_super) {
    __extends(EventData, _super);
    function EventData(id, triggerID) {
        var _this = _super.call(this) || this;
        _this.outEventData = null;
        _this.hasTalk = false;
        _this.talkCb = null;
        _this._mapCache = null;
        _this.init(id);
        if (triggerID)
            _this.triggerID = triggerID;
        return _this;
    }
    Object.defineProperty(EventData.prototype, "mapCache", {
        get: function () {
            if (!this._mapCache)
                this._mapCache = new MapCache_1.MapCache(this.id + "");
            return this._mapCache;
        },
        set: function (value) {
            this._mapCache = value;
        },
        enumerable: false,
        configurable: true
    });
    EventData.prototype.initNewEvent = function (id, triggerID) {
        this.init(id);
        this.triggerID = triggerID;
    };
    EventData.prototype.getName = function () {
        var lang = new LangData_1.LangData(this.eventName);
        var result = lang.getDesc();
        return result;
    };
    EventData.prototype.getTitleName = function () {
        var lang = new LangData_1.LangData(this.eventDesc);
        var result = lang.getDesc();
        return result;
    };
    return EventData;
}(Tableevent_1.Tableevent));
exports.EventData = EventData;
