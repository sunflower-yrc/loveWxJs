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
exports.ObjectPoolManager = void 0;
// import { EntityTypeEnum } from "../Common";
var Singleton_1 = require("../game/common/base/Singleton");
var ObjectPoolManager = /** @class */ (function (_super) {
    __extends(ObjectPoolManager, _super);
    function ObjectPoolManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objectPool = null;
        return _this;
        // private map: Map<EntityTypeEnum, Node[]> = new Map();
        // get(type: EntityTypeEnum) {
        //     if (!this.objectPool) {
        //         this.objectPool = new Node("ObjectPool");
        //         this.objectPool.setParent(DataManager.Instance.stage)
        //     }
        //     if (!this.map.has(type)) {
        //         this.map.set(type, [])
        //         const container = new Node(type + 'Pool');
        //         container.setParent(this.objectPool);
        //     }
        //     const nodes = this.map.get(type);
        //     if (!nodes.length) {
        //         const prefab = DataManager.Instance.prefabMap.get(type);
        //         const node = instantiate(prefab);
        //         node.name = type;
        //         node.setParent(this.objectPool.getChildByName(type + "pool"));
        //         node.active = true;
        //         return node;
        //     } else {
        //         const node = nodes.pop();
        //         node.active = true;
        //         return node;
        //     }
        // }
        // ret(node: Node) {
        //     node.active = false;
        //     this.map.get(node.name as EntityTypeEnum).push(node);
        // }
    }
    Object.defineProperty(ObjectPoolManager, "Instance", {
        get: function () {
            return _super.GetInstance.call(this);
        },
        enumerable: false,
        configurable: true
    });
    return ObjectPoolManager;
}(Singleton_1.default));
exports.ObjectPoolManager = ObjectPoolManager;
