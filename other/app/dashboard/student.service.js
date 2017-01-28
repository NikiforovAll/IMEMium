"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Student_1 = require("../Models/Student");
var StudentService = (function () {
    function StudentService() {
    }
    StudentService.prototype.getStudents = function (num) {
        var students = [];
        for (var i = 0; i < num; i++) {
            var currStudent = new Student_1.Student();
            currStudent.id = i;
            currStudent.FirstName = 'FirstName' + i;
            currStudent.LastName = 'TeLastNamest' + i;
            currStudent.Faculty = 'Faculty' + i;
            currStudent.Course = 'Course' + i;
            currStudent.Group = 'Group' + i;
            currStudent.Department = 'Department' + i;
            currStudent.StudentStatus = Student_1.StudentStatus.active;
            students.push(currStudent);
        }
        return students;
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable()
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map