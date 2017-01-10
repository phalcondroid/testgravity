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
                person.getName()
            );
            em.save(person)
            .response(function (response) {
                console.log(response);
            });
        });
    }
}
