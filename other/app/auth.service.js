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
var AuthService = (function () {
    function AuthService() {
        this._users = [
            { id: '1', email: 'admin', password: 'admin', role: 'Admin' },
            { id: '1', email: 'user', password: 'user', role: 'Student' },
        ];
        this.sessionUser = { id: '-1' };
    }
    AuthService.prototype.isAdminSession = function () {
        return this.sessionUser && this.sessionUser.role == 'Admin';
    };
    AuthService.prototype.login = function (email, password) {
        console.log('login');
        var filter = function (user) { return user.email === email && user.password === password; };
        if (this._users.some(filter)) {
            this.sessionUser = this._users.find(filter);
            localStorage.setItem('id_token', this.sessionUser.role);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        console.log('logout as ', this.sessionUser);
        this.sessionUser = null;
        localStorage.removeItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        console.log('check ', this.sessionUser);
        return localStorage.getItem('id_token') !== null; //tokenNotExpired();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map