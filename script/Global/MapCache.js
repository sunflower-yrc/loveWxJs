"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapCache = void 0;
var Oops_1 = require("../../../extensions/oops-plugin-framework/assets/core/Oops");
// 定义 Map 缓存类
var MapCache = /** @class */ (function () {
    function MapCache(storageKey) {
        this.storageKey = storageKey;
        var storedData = Oops_1.oops.storage.getJson(this.storageKey, null);
        if (storedData) {
            this.map = new Map(storedData);
        }
        else {
            this.map = new Map();
        }
    }
    MapCache.prototype.set = function (key, value) {
        // 自定义的实现
        // oops.logB(`setting ${key} to ${value}`, `${this.storageKey}配置存档`);
        this.map.set(key, value);
        Oops_1.oops.storage.set(this.storageKey, JSON.stringify(Array.from(this.map.entries())));
    };
    MapCache.prototype.get = function (key) {
        return this.map.get(key);
    };
    MapCache.prototype.remove = function (key) {
        this.map.delete(key);
        Oops_1.oops.storage.set(this.storageKey, JSON.stringify(Array.from(this.map.entries())));
    };
    MapCache.prototype.getMap = function () {
        return this.map;
    };
    MapCache.prototype.clear = function () {
        this.map.clear();
        Oops_1.oops.storage.remove(this.storageKey);
        Oops_1.oops.storage.set(this.storageKey, JSON.stringify(Array.from(this.map.entries())));
    };
    return MapCache;
}());
exports.MapCache = MapCache;
// // 使用 Map 缓存类
// const myCache = new MapCache<string, number>("myCache");
// myCache.set("foo", 42);
// myCache.set("bar", 13);
// console.log(myCache.get("foo")); // 42
// console.log(myCache.get("bar")); // 13
// myCache.clear();
