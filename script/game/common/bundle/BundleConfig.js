"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BundleConfig = /** @class */ (function () {
    function BundleConfig() {
        this.font = null;
        this.guideBundle = null;
        this.configBundle = null;
        this.audioBundle = null;
        this.commonBundle = null;
        this.spineBundle = null;
        this.guiBundle = null;
        this.furniture = null;
        this.scene1 = null;
        this.scene2 = null;
        this.scene4000 = null;
        this.manor = null;
        // start >>>>>>
        this.BundleName = {
            common: {
                prefab: {
                    "netloadingRes": "prefab/netloadingRes",
                },
                preloads: [
                    "netloadingRes"
                ]
            },
            game: {
                prefab: {
                    "game1": 'prefab/game1',
                    "game2": 'prefab/game2',
                },
                sound: {
                    "music1": 'sound/music1',
                    "music2": 'sound/music2',
                },
                texture: {
                    "game1": 'texture/game1',
                    "game2": 'texture/game2',
                },
            },
            home: {
                prefab: {
                    "home1": 'prefab/home1',
                    "home2": 'prefab/home2',
                },
                sound: {
                    "music1": 'sound/music1',
                    "music2": 'sound/music2',
                },
                texture: {
                    "home1": 'texture/home1',
                    "home2": 'texture/home2',
                },
            },
            gui: {
                prefab: {
                    "dialogue": "prefab/dialogue/dialogue",
                    "drop": "prefab/drop/drop",
                    "furniture": "prefab/furniture/furniture",
                    "furnitureItem": "prefab/furniture/furnitureItem",
                    "tile": "prefab/tilesGame/tile",
                    "tilesGame": "prefab/tilesGame/tilesGame",
                    "tileGameHome": "prefab/tilesGame/tileGameHome",
                },
                preloads: [
                    "tile",
                    "tilesGame",
                    "tileGameHome"
                ]
            },
            guide: {
                prefab: {
                    "guideMove": "guideMove"
                }
            },
            scene1: {
                prefab: {
                    'scene1': 'prefab/scene1',
                    'room1': 'prefab/room1',
                    'room2': 'prefab/room2'
                }
            },
            scene2: {
                prefab: {
                    'scene2': 'prefab/scene2',
                    'room1': 'prefab/room1',
                }
            }
        };
        // end >>>>>>
    }
    Object.defineProperty(BundleConfig, "instance", {
        get: function () {
            return (BundleConfig._instance ? BundleConfig._instance : (BundleConfig._instance = new BundleConfig()));
        },
        enumerable: false,
        configurable: true
    });
    BundleConfig._instance = null;
    return BundleConfig;
}());
exports.default = BundleConfig;
