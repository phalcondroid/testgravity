System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Custom;
    return {
        setters: [],
        execute: function () {
            Custom = (function () {
                function Custom() {
                    console.log("My custom component");
                }
                return Custom;
            }());
            exports_1("Custom", Custom);
        }
    };
});
