"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var userdetails_g_component_1 = require("./userdetails.gentelella/userdetails-g.component");
var students_component_1 = require("./students.component/students.component");
var student_component_1 = require("./student.component/student.component");
var courses_component_1 = require("./courses.component/courses.component");
var course_component_1 = require("./course.component/course.component");
var lectures_component_1 = require("./lectures.component/lectures.component");
var lecture_component_1 = require("./lecture.component/lecture.component");
var dashboard_component_1 = require("./dashboard.component");
var calendar_component_1 = require("./calendar.gentelella/calendar.component");
var request_panel_component_1 = require("./request-panel/request-panel.component");
var auth_guard_service_1 = require("../auth-guard.service");
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: '',
                component: userdetails_g_component_1.UserDetailsComponent
            },
            {
                path: 'courses',
                component: courses_component_1.CoursesComponent
            },
            {
                path: 'lectures',
                component: lectures_component_1.LecturesComponent
            },
            {
                path: 'lectures/:id',
                component: lecture_component_1.LectureComponent
            },
            {
                path: 'courses/:id',
                component: course_component_1.CourseComponent
            },
            {
                path: 'students',
                component: students_component_1.StudentsComponent
            },
            {
                path: 'students/:id',
                component: student_component_1.StudentComponent
            },
            {
                path: 'calendar',
                component: calendar_component_1.CalendarComponent
            },
            {
                path: 'requests',
                component: request_panel_component_1.RequestComponent
            }
        ],
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], DashboardRoutingModule);
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=dashboard-routing.module.js.map