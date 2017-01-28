"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var home_module_1 = require("./home/home.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var login_module_1 = require("./login/login.module");
var page_not_found_component_1 = require("./page-not-found.gentelella/page-not-found.component");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var auth_guard_service_1 = require("./auth-guard.service");
var auth_service_1 = require("./auth.service");
// import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
// import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
// import { FooterComponent } from './footer.gentelella/footer-g.component';
// import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
// import { StudentsComponent } from './students.component/students.component';
// import { CoursesComponent } from './courses.component/courses.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            dashboard_module_1.DashboardModule,
            home_module_1.HomeModule,
            login_module_1.LoginModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        providers: [auth_guard_service_1.AuthGuard, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map