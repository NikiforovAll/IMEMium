"use strict";
var Student = (function () {
    function Student() {
    }
    Student.prototype.getData = function () {
        return [
            String(this.id),
            this.FirstName,
            this.LastName,
            this.Faculty,
            this.Course,
            StudentStatus[this.StudentStatus],
            //   String(this.StudentStatus),
            this.Group,
            this.Department
        ];
    };
    return Student;
}());
exports.Student = Student;
var UserType;
(function (UserType) {
    UserType[UserType["Student"] = 0] = "Student";
    UserType[UserType["Lecturer"] = 1] = "Lecturer";
})(UserType = exports.UserType || (exports.UserType = {}));
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["active"] = 0] = "active";
    StudentStatus[StudentStatus["banned"] = 1] = "banned";
    StudentStatus[StudentStatus["disabled"] = 2] = "disabled";
})(StudentStatus = exports.StudentStatus || (exports.StudentStatus = {}));
//# sourceMappingURL=Student.js.map