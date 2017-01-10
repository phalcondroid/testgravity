///<reference path="../../output/gravity.d.ts"/>
System.register(["../Models/Person"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Person_1, Controller;
    return {
        setters: [
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }
        ],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            Controller = (function (_super) {
                __extends(Controller, _super);
                function Controller() {
                    return _super.apply(this, arguments) || this;
                }
                Controller.prototype.initialize = function () {
                    var em = this.getDi().get("em");
                    em.find(Person_1.Person, {
                        "name": "name three"
                    }).response(function (data) {
                        for (var key in data) {
                            console.log("name three", data[key].getName());
                        }
                    });
                    em.find(Person_1.Person, {
                        "name": "name uno"
                    }).response(function (data) {
                        for (var key in data) {
                            console.log("name uno", data[key].getName());
                        }
                    });
                    em.findOne(Person_1.Person, {
                        "name": "name seven"
                    }).response(function (myModel) {
                        console.log("seven", myModel.getName());
                    });
                };
                return Controller;
            }(Logic.Controller));
            exports_1("Controller", Controller);
        }
    };
});
