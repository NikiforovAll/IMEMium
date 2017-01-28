"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var topnav_g_component_1 = require("./topnav.gentelella/topnav-g.component");
var sidebar_g_component_1 = require("./sidebar.gentelella/sidebar-g.component");
var footer_g_component_1 = require("./footer.gentelella/footer-g.component");
var userdetails_g_component_1 = require("./userdetails.gentelella/userdetails-g.component");
var students_component_1 = require("./students.component/students.component");
var student_component_1 = require("./student.component/student.component");
var lectures_component_1 = require("./lectures.component/lectures.component");
var lecture_component_1 = require("./lecture.component/lecture.component");
var courses_component_1 = require("./courses.component/courses.component");
var course_component_1 = require("./course.component/course.component");
var calendar_component_1 = require("./calendar.gentelella/calendar.component");
var calendar_service_1 = require("./calendar.gentelella/calendar.service");
var request_panel_component_1 = require("./request-panel/request-panel.component");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var angular_2_data_table_1 = require("angular-2-data-table");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dashboard_routing_module_1.DashboardRoutingModule,
            angular_2_data_table_1.DataTableModule
        ],
        declarations: [
            dashboard_component_1.DashboardComponent,
            sidebar_g_component_1.SidebarComponent,
            topnav_g_component_1.TopnavComponent,
            footer_g_component_1.FooterComponent,
            userdetails_g_component_1.UserDetailsComponent,
            students_component_1.StudentsComponent,
            student_component_1.StudentComponent,
            calendar_component_1.CalendarComponent,
            request_panel_component_1.RequestComponent,
            courses_component_1.CoursesComponent,
            course_component_1.CourseComponent,
            lectures_component_1.LecturesComponent,
            lecture_component_1.LectureComponent
        ],
        providers: [
            calendar_service_1.FullCalendarService
        ]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map