System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Index;
    return {
        setters: [],
        execute: function () {
            Index = (function (_super) {
                __extends(Index, _super);
                function Index() {
                    return _super.apply(this, arguments) || this;
                }
                Index.prototype.initialize = function () {
                    var div = new Html.Div();
                    div.attr("class", "btn");
                };
                return Index;
            }(View.Component));
            exports_1("Index", Index);
        }
    };
});