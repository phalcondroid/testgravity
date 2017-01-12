///<reference path="../../output/gravity.d.ts"/>

import { Services }          from "./Services";

//Controllers
import { ExampleController } from "../Controllers/ExampleController";
import { OtherController }   from "../Controllers/OtherController";

//Views
import { ExampleView } from "../Views/Example/ExampleView";
import { HelperView  } from "../Views/Example/HelperView";
import { OtherView  }  from "../Views/Other/OtherView";

export class AppConfig
{
    public static getConfig() : Environment.Config
    {
        var config = new Environment.Config();

        config.setConfig(
            {
                "urls" : {
                    "baseUrl"   : "http://localhost/testgravity/",
                    "urlSample" : "http://urls/jsjs/"
                },
                "controllers" : [
                    {
                        "name"  : ExampleController,
                        "views" : [
                            ExampleView,
                            HelperView
                        ]
                    },
                    {
                        "name"  : OtherController,
                        "views" : [
                            OtherView
                        ]
                    }
                ],
                "services" : Services
            },
            Environment.Scope.LOCAL
        );

        return config;
    }
}
