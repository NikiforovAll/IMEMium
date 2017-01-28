"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login.component");
var sign_up_component_1 = require("./sign-up.component");
var password_loss_component_1 = require("./password-loss.component");
var login_config_service_1 = require("./login-config.service");
var login_routing_module_1 = require("./login-routing.module");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [login_routing_module_1.LoginRoutingModule, forms_1.FormsModule],
        exports: [],
        declarations: [
            login_component_1.LoginComponent,
            password_loss_component_1.PasswordLossComponent,
            sign_up_component_1.SignUpComponent
        ],
        providers: [login_config_service_1.LoginConfigService]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map