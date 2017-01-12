///<reference path="../../output/gravity.d.ts"/>
System.register(["../Models/Person", "../Models/Game"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Person_1, Game_1, ExampleController;
    return {
        setters: [
            function (Person_1_1) {
                Person_1 = Person_1_1;
            },
            function (Game_1_1) {
                Game_1 = Game_1_1;
            }
        ],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            ExampleController = (function (_super) {
                __extends(ExampleController, _super);
                function ExampleController() {
                    return _super.apply(this, arguments) || this;
                }
                ExampleController.prototype.initialize = function () {
                    var em = this.getDi().get("em");
                    var game = new Game_1.Game();
                    game.setGame("nuevo game");
                    var person = new Person_1.Person();
                    person.setName("name nuevo");
                    person.setLast("last nuevo");
                    person.setGame(game);
                    em.save(person)
                        .response(function (response) {
                        console.log(response);
                    });
                    em.find(Person_1.Person, {
                        "name": "name one"
                    }).response(function (data) {
                        for (var key in data) {
                            console.log("Todos", data[key].getName());
                        }
                    });
                };
                return ExampleController;
            }(Logic.Controller));
            exports_1("ExampleController", ExampleController);
        }
    };
});
