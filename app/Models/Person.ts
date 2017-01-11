///<reference path="../../output/gravity.d.ts"/>

import { Game } from "./Game";

export class Person extends Data.ModelAjax
{
    private id      : number = 0;
    private name    : string = "";
    private last    : string = "";
    private game    : any = Game;

    public initialize()
    {
        this.setFindUrl("http://localhost/json.php");
        this.setInsertUrl("http://localhost/insert.php");
        this.setUpdateUrl("http://localhost/update.php");
    }

    public setId(id : number)
    {
        this.id = id;
    }

    public getId()
    {
        return this.id;
    }

    public setName(name : string)
    {
        return this.name = name;
    }

    public getName()
    {
        return this.name;
    }

    public setLast(last : string)
    {
        this.last = last;
    }

    public getLast()
    {
        return this.last;
    }

    public setGame(game : any)
    {
        this.game = game;
    }

    public getGame()
    {
        return this.game;
    }
}
