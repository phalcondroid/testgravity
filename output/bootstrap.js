///<reference path="../output/gravity.d.ts"/>
System.register(["./Library/Libs", "./Config/AppConfig", "./Controllers/Controller"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Libs_1, AppConfig_1, Controller_1, gravity;
    return {
        setters: [
            function (Libs_1_1) {
                Libs_1 = Libs_1_1;
            },
            function (AppConfig_1_1) {
                AppConfig_1 = AppConfig_1_1;
            },
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            }
        ],
        execute: function () {///<reference path="../output/gravity.d.ts"/>
            gravity = new Gravity.Application();
            gravity.setScope(Environment.Scope.LOCAL);
            gravity.setConfig(AppConfig_1.AppConfig.getConfig());
            gravity.setLoader(Libs_1.Libs);
            gravity.setControllers([
                Controller_1.Controller
            ]);
            gravity.start();
        }
    };
});
