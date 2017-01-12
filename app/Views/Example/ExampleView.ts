
export class ExampleView extends View.Component
{
    public initialize()
    {
        console.log(
            this.getVar("fromController")
        );
        var div  = new Html.Div();
        div.attr("class", "btn");
    }
}
