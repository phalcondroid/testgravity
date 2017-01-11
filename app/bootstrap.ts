///<reference path="../output/gravity.d.ts"/>

import { Libs }        from "./Library/Libs";
import { AppConfig }   from "./Config/AppConfig";
import { Controller }  from "./Controllers/Controller";
import { Controller2 } from "./Controllers/Controller2";

var gravity = new Gravity.Application();
gravity.setScope(Environment.Scope.LOCAL);
gravity.setConfig(AppConfig.getConfig());
gravity.setLoader(Libs);
gravity.setControllers([
    Controller
]);
gravity.start();
