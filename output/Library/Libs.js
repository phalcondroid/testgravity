///<reference path="../../output/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Libs;
    return {
        setters: [],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            Libs = (function () {
                function Libs() {
                }
                Libs.prototype.initialize = function (di) {
                    di.set("custom", "dependence");
                };
                return Libs;
            }());
            exports_1("Libs", Libs);
        }
    };
});
