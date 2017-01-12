System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var HelperView;
    return {
        setters: [],
        execute: function () {
            HelperView = (function (_super) {
                __extends(HelperView, _super);
                function HelperView() {
                    return _super.apply(this, arguments) || this;
                }
                HelperView.prototype.initialize = function () {
                    var div = new Html.Div();
                    div.attr("class", "btn");
                };
                return HelperView;
            }(View.Component));
            exports_1("HelperView", HelperView);
        }
    };
});
