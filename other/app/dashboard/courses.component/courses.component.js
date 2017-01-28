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
var course_service_1 = require("../course.service");
var angular_2_data_table_1 = require("angular-2-data-table");
var CoursesComponent = (function () {
    function CoursesComponent(courseService, router) {
        this.courseService = courseService;
        this.router = router;
        this.itemCount = 0;
        this.isMinVersion = false;
        this._courseService = courseService;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courses = this._courseService.getCourses(20);
        this.itemResource = new angular_2_data_table_1.DataTableResource(this.courses);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    };
    CoursesComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.courses = items; });
    };
    CoursesComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.Name);
    };
    CoursesComponent.prototype.rowDoubleClick = function (rowEvent) {
        this.router.navigate(['dashboard/courses/' + rowEvent.row.item.id]);
    };
    CoursesComponent.prototype.rowTooltip = function (item) { return item.Lecturer; };
    return CoursesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CoursesComponent.prototype, "isMinVersion", void 0);
CoursesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'courses',
        templateUrl: 'courses.component.html',
        providers: [course_service_1.CourseService]
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService, router_1.Router])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map