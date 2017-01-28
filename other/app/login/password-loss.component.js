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
var PasswordLossComponent = (function () {
    function PasswordLossComponent() {
    }
    Object.defineProperty(PasswordLossComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordLossComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    PasswordLossComponent.prototype.ngOnInit = function () { };
    return PasswordLossComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PasswordLossComponent.prototype, "routeAnimation", null);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PasswordLossComponent.prototype, "display", null);
PasswordLossComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'password-loss',
        templateUrl: 'password-loss.component.html',
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
    __metadata("design:paramtypes", [])
], PasswordLossComponent);
exports.PasswordLossComponent = PasswordLossComponent;
//# sourceMappingURL=password-loss.component.js.map