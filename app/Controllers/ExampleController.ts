///<reference path="../../output/gravity.d.ts"/>

import { Person } from "../Models/Person";
import { Game } from "../Models/Game";

export class ExampleController extends Logic.Controller
{
    public initialize()
    {
        var em = this.getDi().get("em");

        var game = new Game();
        game.setGame("nuevo game");

        var person = new Person();
        person.setName("name nuevo");
        person.setLast("last nuevo");
        person.setGame(game);

        em.save(person)
        .response(function (response) {
            console.log(response);
        });

        em.find(Person, {
            "name" : "name one"
        }).response(function (data) {
            for (var key in data) {
                console.log(
                    "Todos",
                    data[key].getName()
                );
            }
        });
    }
}
