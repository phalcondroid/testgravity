///<reference path="../output/gravity.d.ts"/>

import { Libs } from "./Library/Libs";
import { Controller } from "./Controllers/Controller";
import { Controller2 } from "./Controllers/Controller2";

var gravity = new Gravity.Application();
gravity.load(Libs);
gravity.setControllers([
    Controller,
    Controller2
]);
gravity.start();
