///<reference path="../../output/gravity.d.ts"/>
///<reference path="../Definitions/jquery.d.ts"/>
System.register(["../Library/MyCustomComponent"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyCustomComponent_1, Services;
    return {
        setters: [
            function (MyCustomComponent_1_1) {
                MyCustomComponent_1 = MyCustomComponent_1_1;
            }
        ],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            ///<reference path="../Definitions/jquery.d.ts"/>
            Services = (function () {
                function Services() {
                }
                Services.prototype.initialize = function (di) {
                    di.set("custom_component", new MyCustomComponent_1.MyCustomComponent());
                    //Simple example of dependency injection, you must paste the jquery.js in your html
                    di.set("$", $);
                };
                return Services;
            }());
            exports_1("Services", Services);
        }
    };
});
