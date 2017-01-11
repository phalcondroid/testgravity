System.register(["./Game"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Game_1, Person;
    return {
        setters: [
            function (Game_1_1) {
                Game_1 = Game_1_1;
            }
        ],
        execute: function () {
            Person = (function (_super) {
                __extends(Person, _super);
                function Person() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.id = 0;
                    _this.name = "";
                    _this.last = "";
                    _this.game = Game_1.Game;
                    return _this;
                }
                Person.prototype.initialize = function () {
                    this.setFindUrl("http://localhost/json.php");
                    this.setInsertUrl("http://localhost/insert.php");
                    this.setUpdateUrl("http://localhost/update.php");
                };
                Person.prototype.setId = function (id) {
                    this.id = id;
                };
                Person.prototype.getId = function () {
                    return this.id;
                };
                Person.prototype.setName = function (name) {
                    return this.name = name;
                };
                Person.prototype.getName = function () {
                    return this.name;
                };
                Person.prototype.setLast = function (last) {
                    this.last = last;
                };
                Person.prototype.getLast = function () {
                    return this.last;
                };
                Person.prototype.setGame = function (game) {
                    this.game = game;
                };
                Person.prototype.getGame = function () {
                    return this.game;
                };
                return Person;
            }(Data.ModelAjax));
            exports_1("Person", Person);
        }
    };
});
