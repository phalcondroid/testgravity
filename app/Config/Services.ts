///<reference path="../../output/gravity.d.ts"/>
///<reference path="../Definitions/jquery.d.ts"/>

import { MyCustomComponent } from "../Library/MyCustomComponent";

export class Services implements Loader.DiConstructorInjection
{
    public initialize(di : Service.Container)
    {
        di.set(
            "custom_component",
            new MyCustomComponent()
        );
        //Simple example of dependency injection, you must paste the jquery.js in your html
        di.set("$", $);
    }
}
