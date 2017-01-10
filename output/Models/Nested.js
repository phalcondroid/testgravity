///<reference path="../../output/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Nested;
    return {
        setters: [],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            Nested = (function (_super) {
                __extends(Nested, _super);
                function Nested() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.id = 0;
                    _this.game = "";
                    return _this;
                }
                Nested.prototype.initialize = function () {
                };
                Nested.prototype.setId = function (id) {
                    this.id = id;
                };
                Nested.prototype.getId = function () {
                    return this.id;
                };
                Nested.prototype.setGame = function (game) {
                    this.game = game;
                };
                Nested.prototype.getGame = function () {
                    return this.game;
                };
                return Nested;
            }(Data.SimpleModel));
            exports_1("Nested", Nested);
        }
    };
});
