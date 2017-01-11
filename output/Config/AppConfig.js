///<reference path="../../output/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppConfig;
    return {
        setters: [],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            AppConfig = (function () {
                function AppConfig() {
                }
                AppConfig.getConfig = function () {
                    var config = new Environment.Config();
                    config.setConfig({
                        "baseUrl": "http://localhost/testgravity/"
                    }, Environment.Scope.LOCAL);
                    config.setConfig({
                        "baseUrl": "https://development/testgravity/api/"
                    }, Environment.Scope.DEV);
                    config.setConfig({
                        "baseUrl": ""
                    }, Environment.Scope.TEST);
                    config.setConfig({
                        "baseUrl": ""
                    }, Environment.Scope.QA);
                    config.setConfig({
                        "baseUrl": ""
                    }, Environment.Scope.STAGING);
                    config.setConfig({
                        "baseUrl": ""
                    }, Environment.Scope.PRODUCTION);
                    return config;
                };
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
        }
    };
});
