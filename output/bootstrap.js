///<reference path="../output/gravity.d.ts"/>
System.register(["./Library/Libs", "./Controllers/Controller", "./Controllers/Controller2"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Libs_1, Controller_1, Controller2_1, gravity;
    return {
        setters: [
            function (Libs_1_1) {
                Libs_1 = Libs_1_1;
            },
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            },
            function (Controller2_1_1) {
                Controller2_1 = Controller2_1_1;
            }
        ],
        execute: function () {///<reference path="../output/gravity.d.ts"/>
            gravity = new Gravity.Application();
            gravity.load(Libs_1.Libs);
            gravity.setControllers([
                Controller_1.Controller,
                Controller2_1.Controller2
            ]);
            gravity.start();
        }
    };
});
