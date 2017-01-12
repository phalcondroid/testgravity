///<reference path="../../output/gravity.d.ts"/>
System.register(["./Services", "../Controllers/ExampleController", "../Controllers/OtherController", "../Views/Example/ExampleView", "../Views/Example/HelperView", "../Views/Other/OtherView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Services_1, ExampleController_1, OtherController_1, ExampleView_1, HelperView_1, OtherView_1, AppConfig;
    return {
        setters: [
            function (Services_1_1) {
                Services_1 = Services_1_1;
            },
            function (ExampleController_1_1) {
                ExampleController_1 = ExampleController_1_1;
            },
            function (OtherController_1_1) {
                OtherController_1 = OtherController_1_1;
            },
            function (ExampleView_1_1) {
                ExampleView_1 = ExampleView_1_1;
            },
            function (HelperView_1_1) {
                HelperView_1 = HelperView_1_1;
            },
            function (OtherView_1_1) {
                OtherView_1 = OtherView_1_1;
            }
        ],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            AppConfig = (function () {
                function AppConfig() {
                }
                AppConfig.getConfig = function () {
                    var config = new Environment.Config();
                    config.setConfig({
                        "urls": {
                            "baseUrl": "http://localhost/testgravity/",
                            "urlSample": "http://urls/jsjs/"
                        },
                        "controllers": [
                            {
                                "name": ExampleController_1.ExampleController,
                                "views": [
                                    ExampleView_1.ExampleView,
                                    HelperView_1.HelperView
                                ]
                            },
                            {
                                "name": OtherController_1.OtherController,
                                "views": [
                                    OtherView_1.OtherView
                                ]
                            }
                        ],
                        "services": Services_1.Services
                    }, Environment.Scope.LOCAL);
                    return config;
                };
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
        }
    };
});
