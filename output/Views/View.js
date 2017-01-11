System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Body;
    return {
        setters: [],
        execute: function () {
            Body = (function (_super) {
                __extends(Body, _super);
                function Body() {
                    var _this = _super.call(this) || this;
                    var div = new Html.Div();
                    div.attr("class", "btn");
                    return _this;
                }
                return Body;
            }(View.Component));
            exports_1("Body", Body);
        }
    };
});
