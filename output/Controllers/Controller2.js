///<reference path="../../output/gravity.d.ts"/>
System.register(["../Models/Person"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Person_1, Controller2;
    return {
        setters: [
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }
        ],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            Controller2 = (function (_super) {
                __extends(Controller2, _super);
                function Controller2() {
                    return _super.apply(this, arguments) || this;
                }
                Controller2.prototype.initialize = function () {
                    var person = new Person_1.Person();
                    var em = this.getDi().get("em");
                    em.save(person)
                        .response(function (response) {
                        console.log(response);
                    });
                    em.findOne(Person_1.Person, {
                        "name": "name six"
                    }).response(function (person) {
                        console.log("el six", person.getName());
                        em.save(person)
                            .response(function (response) {
                            console.log(response);
                        });
                    });
                };
                return Controller2;
            }(Logic.Controller));
            exports_1("Controller2", Controller2);
        }
    };
});
