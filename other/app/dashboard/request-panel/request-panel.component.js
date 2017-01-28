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
var RequestComponent = (function () {
    function RequestComponent() {
        this.studentRequests = [
            { Name: "Alexey Nikiforov", Status: 0, CourseName: "Course1" },
            { Name: "Egor Dobrovolskij", Status: 0, CourseName: "Course1" },
            { Name: "Stas Bondarenko", Status: 1, CourseName: "Course2" },
            { Name: "Yakov Yusipenko", Status: 1, CourseName: "Course3" },
            { Name: "Mike Evgeniyev", Status: 2, CourseName: "Course4" }
        ];
    }
    RequestComponent.prototype.acceptItem = function (index) {
        this.studentRequests[index].Status = 1;
    };
    RequestComponent.prototype.declineItem = function (index) {
        this.studentRequests[index].Status = 2;
    };
    RequestComponent.prototype.removeItem = function (index) {
        if (index > -1) {
            this.studentRequests.splice(index, 1);
        }
    };
    RequestComponent.prototype.ngOnInit = function () { };
    return RequestComponent;
}());
RequestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'request-panel',
        templateUrl: 'request-panel.component.html'
    }),
    __metadata("design:paramtypes", [])
], RequestComponent);
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=request-panel.component.js.map