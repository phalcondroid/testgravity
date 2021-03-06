///<reference path="../../output/gravity.d.ts"/>

import { Person } from "../Models/Person";
import { Game } from "../Models/Game";

export class OtherController extends Logic.Controller
{
    public initialize()
    {
        var person = new Person();
        var em = this.getDi().get("em");

        em.save(this, person)
        .response(function (response) {
            console.log(response);
        });

        em.findOne(this, Person, {
            "name" : "name six"
        }).response(function (person) {
            console.log(
                "el six",
                person.getGame().getGame()
            );
            em.save(person)
            .response(function (response) {
                console.log(response);
            });
        });

        em.find(this, Person, {
            "name" : "name uno"
        }).response(function (data) {
            for (var key in data) {
                console.log(
                    "name uno",
                    data[key].getName()
                );
            }
        });

        em.findOne(this, Person, {
            "name" : "name seven"
        }).response(function (myModel) {
            console.log(
                "seven",
                myModel.getName()
            );
        });
    }
}
