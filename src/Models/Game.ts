///<reference path="../../output/gravity.d.ts"/>

export class Game extends Data.SimpleModel
{
    private id   : number = 0;
    private game : string = "";

    public initialize()
    {

    }

    public setId(id : number)
    {
        this.id = id;
    }

    public getId()
    {
        return this.id;
    }

    public setGame(game)
    {
        this.game = game;
    }

    public getGame()
    {
        return this.game;
    }
}
