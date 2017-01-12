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
    public static getConfig() : Object
    {
        var config = new Environment.Config();

        config.setConfig(
            {
                "baseUrl"     : "http://localhost/testgravity/",
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
                "services"    : Services
            },
            Environment.Scope.LOCAL
        );

        return config;
    }
}
