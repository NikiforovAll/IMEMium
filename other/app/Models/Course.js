"use strict";
var Course = (function () {
    function Course() {
    }
    Course.prototype.getData = function () {
        return [
            String(this.id),
            this.Name,
            this.StartDate.toDateString(),
            this.EndDate.toDateString(),
            this.CourseStatus,
            this.Lecturer
        ];
    };
    return Course;
}());
exports.Course = Course;
// export enum CourseStatus {
//     active,
//     finished,
//     stopped
// } 
//# sourceMappingURL=Course.js.map