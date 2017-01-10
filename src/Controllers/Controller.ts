///<reference path="../../output/gravity.d.ts"/>

import { Person } from "../Models/Person";
import { Game } from "../Models/Game";

export class Controller extends Logic.Controller
{
    public initialize()
    {
        var em = this.getDi().get("em");

        em.find(Person, {
            "name" : "name three"
        }).response(function (data) {
            for (var key in data) {
                console.log(
                    "name three",
                    data[key].getName()
                );
            }
        });

        em.find(Person, {
            "name" : "name uno"
        }).response(function (data) {
            for (var key in data) {
                console.log(
                    "name uno",
                    data[key].getName()
                );
            }
        });

        em.findOne(Person, {
            "name" : "name seven"
        }).response(function (myModel) {
            console.log(
                "seven",
                myModel.getName());
        });

    }
}
