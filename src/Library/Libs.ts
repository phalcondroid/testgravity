///<reference path="../../output/gravity.d.ts"/>

export class Libs implements Loader.DiConstructorInjection
{
    public initialize(di : Service.Container)
    {
        di.set("custom", "dependence");
    }
}
