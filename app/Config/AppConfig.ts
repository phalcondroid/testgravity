///<reference path="../../output/gravity.d.ts"/>

export class AppConfig
{
    public static getConfig() : Object
    {
        var config = new Environment.Config();

        config.setConfig(
            {
                "baseUrl" : "http://localhost/testgravity/"
            },
            Environment.Scope.LOCAL
        );

        config.setConfig(
            {
                "baseUrl" : "https://development/testgravity/api/"
            },
            Environment.Scope.DEV
        );

        config.setConfig(
            {
                "baseUrl" : ""
            },
            Environment.Scope.TEST
        );

        config.setConfig(
            {
                "baseUrl" : ""
            },
            Environment.Scope.QA
        );

        config.setConfig(
            {
                "baseUrl" : ""
            },
            Environment.Scope.STAGING
        );

        config.setConfig(
            {
                "baseUrl" : ""
            },
            Environment.Scope.PRODUCTION
        );

        return config;
    }
}
