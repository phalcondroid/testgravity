///<reference path="../../output/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Game;
    return {
        setters: [],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            Game = (function (_super) {
                __extends(Game, _super);
                function Game() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.id = 0;
                    _this.game = "";
                    return _this;
                }
                Game.prototype.initialize = function () {
                };
                Game.prototype.setId = function (id) {
                    this.id = id;
                };
                Game.prototype.getId = function () {
                    return this.id;
                };
                Game.prototype.setGame = function (game) {
                    this.game = game;
                };
                Game.prototype.getGame = function () {
                    return this.game;
                };
                return Game;
            }(Data.SimpleModel));
            exports_1("Game", Game);
        }
    };
});
