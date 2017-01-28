"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_2_data_table_1 = require("angular-2-data-table");
var LecturesComponent = (function () {
    function LecturesComponent(router) {
        this.router = router;
        this.itemCount = 0;
        // this._courseService = courseService;
        //TBD: add interface/class lecture
        this.lectures = [{ id: 1, Name: "Lectrure#1", Date: "01/12/2016", Description: "Test" },
            { id: 2, Name: "Lectrure#2", Date: "07/12/2016", Description: "Test2" },
            { id: 3, Name: "Lectrure#3", Date: "11/12/2016", Description: "Test3" }];
    }
    LecturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.courses = this._courseService.getCourses(20);
        this.itemResource = new angular_2_data_table_1.DataTableResource(this.lectures);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    };
    LecturesComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.lectures = items; });
    };
    LecturesComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.Name);
    };
    LecturesComponent.prototype.rowDoubleClick = function (rowEvent) {
        this.router.navigate(['dashboard/lectures/' + rowEvent.row.item.id]);
    };
    LecturesComponent.prototype.rowTooltip = function (item) { return item.Name; };
    return LecturesComponent;
}());
LecturesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lectures',
        templateUrl: 'lectures.component.html',
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LecturesComponent);
exports.LecturesComponent = LecturesComponent;
//# sourceMappingURL=lectures.component.js.map