///<reference path="../../output/gravity.d.ts"/>

import { Person } from "../Models/Person";
import { Game } from "../Models/Game";

export class Controller2 extends Logic.Controller
{
    public initialize()
    {
        var person = new Person();
        var em = this.getDi().get("em");

        em.save(person)
        .response(function (response) {
            console.log(response);
        });

        em.findOne(Person, {
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
                myModel.getName()
            );
        });
    }
}
