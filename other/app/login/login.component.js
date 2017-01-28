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
var login_config_service_1 = require("./login-config.service");
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(loginConfig, _authService, router) {
        this.loginConfig = loginConfig;
        this._authService = _authService;
        this.router = router;
        this.user = { id: '-1' };
        this.isShowError = false;
    }
    Object.defineProperty(LoginComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        this.isShowError = !this._authService.login(this.user.email, this.user.password);
        if (!this.isShowError) {
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    return LoginComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], LoginComponent.prototype, "routeAnimation", null);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], LoginComponent.prototype, "display", null);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-app',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css'],
        animations: [
            core_1.trigger('routeAnimation', [
                // state('*',
                //     style({
                //         opacity: 1,
                //         transform: 'translateX(0)'
                //     })
                // ),
                core_1.transition('void => *', [
                    core_1.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_1.animate(login_config_service_1.delay + 'ease-in')
                ]),
                core_1.transition('* => void', [
                    core_1.animate(login_config_service_1.delay + 'ease-out', core_1.style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [login_config_service_1.LoginConfigService,
        auth_service_1.AuthService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map