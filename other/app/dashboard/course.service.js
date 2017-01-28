"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Course_1 = require("../Models/Course");
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function (num) {
        var students = [];
        for (var i = 0; i < num; i++) {
            var currCourse = new Course_1.Course();
            currCourse.id = i;
            currCourse.Name = 'Name' + i;
            currCourse.StartDate = new Date(Date.now());
            currCourse.EndDate = new Date(Date.now());
            currCourse.Lecturer = 'Chief';
            currCourse.CourseStatus = 'test'; // CourseStatus.active;
            students.push(currCourse);
        }
        return students;
    };
    return CourseService;
}());
CourseService = __decorate([
    core_1.Injectable()
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map