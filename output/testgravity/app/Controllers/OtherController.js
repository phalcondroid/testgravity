System.register(["../Models/Person"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Person_1, OtherController;
    return {
        setters: [
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }
        ],
        execute: function () {
            OtherController = (function (_super) {
                __extends(OtherController, _super);
                function OtherController() {
                    return _super.apply(this, arguments) || this;
                }
                OtherController.prototype.initialize = function () {
                    var person = new Person_1.Person();
                    var em = this.getDi().get("em");
                    em.save(this, person)
                        .response(function (response) {
                        console.log(response);
                    });
                    em.findOne(this, Person_1.Person, {
                        "name": "name six"
                    }).response(function (person) {
                        console.log("el six", person.getGame().getGame());
                        em.save(person)
                            .response(function (response) {
                            console.log(response);
                        });
                    });
                    em.find(this, Person_1.Person, {
                        "name": "name uno"
                    }).response(function (data) {
                        for (var key in data) {
                            console.log("name uno", data[key].getName());
                        }
                    });
                    em.findOne(this, Person_1.Person, {
                        "name": "name seven"
                    }).response(function (myModel) {
                        console.log("seven", myModel.getName());
                    });
                };
                return OtherController;
            }(Logic.Controller));
            exports_1("OtherController", OtherController);
        }
    };
});
