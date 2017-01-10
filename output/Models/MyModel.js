///<reference path="../../output/gravity.d.ts"/>
System.register(["./Nested"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Nested_1, MyModel;
    return {
        setters: [
            function (Nested_1_1) {
                Nested_1 = Nested_1_1;
            }
        ],
        execute: function () {///<reference path="../../output/gravity.d.ts"/>
            MyModel = (function (_super) {
                __extends(MyModel, _super);
                function MyModel() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.id = 0;
                    _this.name = "";
                    _this.last = "";
                    _this.nested = Nested_1.Nested;
                    return _this;
                }
                MyModel.prototype.initialize = function () {
                    this.setFindUrl("http://localhost/json.php");
                };
                MyModel.prototype.setId = function (id) {
                    this.id = id;
                };
                MyModel.prototype.getId = function () {
                    return this.id;
                };
                MyModel.prototype.setName = function (name) {
                    return this.name = name;
                };
                MyModel.prototype.getName = function () {
                    return this.name;
                };
                MyModel.prototype.setLast = function (last) {
                    this.last = last;
                };
                MyModel.prototype.getLast = function () {
                    return this.last;
                };
                MyModel.prototype.setNested = function (nested) {
                    this.nested = nested;
                };
                MyModel.prototype.getNested = function () {
                    return this.nested;
                };
                return MyModel;
            }(Data.ModelAjax));
            exports_1("MyModel", MyModel);
        }
    };
});
