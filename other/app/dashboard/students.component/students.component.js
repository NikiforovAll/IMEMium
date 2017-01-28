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
var Student_1 = require("../../Models/Student");
var router_1 = require("@angular/router");
var student_service_1 = require("../student.service");
var angular_2_data_table_1 = require("angular-2-data-table");
var StudentsComponent = (function () {
    function StudentsComponent(studentService, router) {
        var _this = this;
        this.studentService = studentService;
        this.router = router;
        this.minVersion = false;
        this.itemCount = 0;
        this._studentService = studentService;
        this.students = this._studentService.getStudents(100);
        this.itemResource = new angular_2_data_table_1.DataTableResource(this.students);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    }
    StudentsComponent.prototype.ngOnInit = function () { };
    StudentsComponent.prototype.transforStudentStatus = function (status) {
        return Student_1.StudentStatus[status];
    };
    StudentsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.students = items; });
    };
    // special properties:
    StudentsComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.FirstName);
    };
    StudentsComponent.prototype.rowDoubleClick = function (rowEvent) {
        this.router.navigate(['dashboard/']);
    };
    StudentsComponent.prototype.rowTooltip = function (item) { return item.StudentStatus; };
    return StudentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StudentsComponent.prototype, "minVersion", void 0);
StudentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'students-table',
        templateUrl: 'students.component.html',
        providers: [student_service_1.StudentService]
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService, router_1.Router])
], StudentsComponent);
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map