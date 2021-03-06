import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CustomHttpService } from './custom-http.service'
import 'rxjs/add/operator/toPromise';
import { LoginComponent } from './login/login.component';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

export interface IUser {
    id: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
}

export interface PortalUser {
    id: number;
    google_id: string;
    email: string;
    type: string;
    status: string;
    given_name: string;
    family_name: string;
    picture: string;
}

@Injectable()
export class AuthService {

    public userUrl: string;
    public loginNumber: number;
    public currentUser: PortalUser;

    private _userStatusCheck: boolean = false;
    private _userLoggedIn: boolean;

    constructor(private _customHttp: CustomHttpService,
        private _http: Http) {
        this.loginNumber = 0;
    }

    public isAdminSession() {
        return this.getUserRole() == 'admin';
    }

    public getUserRole(): string {
        if (!this.currentUser) {
            return '';
        }
        if(this.currentUser.type && this.currentUser.status == 'pending'){
            return 'student_pending';
        }
        return this.currentUser.type;
    }

    public getUserRoleLocal(locale: string): string {
        return {
            student: 'Студент',
            admin: 'Адміністратор',
            student_pending: 'Студент'
        }[this.getUserRole()];
    }

    public getUserName(): any {
        if (!this.currentUser) {
            return '';
        }
        return { given_name: this.currentUser.given_name, family_name: this.currentUser.family_name };
    }

    public getUserEmail(): string {
        if (!this.currentUser) {
            return '';
        }
        return this.currentUser.email;
    }

    public getUserPicture(): string {
        if (!this.currentUser) {
            return '';
        }
        return this.currentUser.picture;
    }

    public login() {
        window.location.href = '/auth/login';
    }

    public logout(): void {
        window.location.href = '/auth/logout';
    }

    public logIn(): Promise<boolean> {
        // return new Promise((resolve, reject) => {
        //         resolve(true);
        //     });
        this.loginNumber++;
        if (!environment.production && environment.authMock) {
            this.currentUser = {
                id: -1,
                google_id: '-1',
                email: 'mock@email.com',
                type: 'student',
                status: 'pending',
                given_name: 'Mock',
                family_name: 'Mock',
                picture: ''
            }
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        }
        if (this._userStatusCheck) {
            return new Promise((resolve, reject) => {
                resolve(this.currentUser != undefined && this.currentUser !== null);
            });
        } else {
            return this.restoreUser();
        }

    }

    public LogInMock() {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }

    public userStatusCheck(): Promise<any> {
        return this._customHttp.makeRequest('GET', '/auth/status');
    }

    public restoreUser(): Promise<boolean> {
        return this.userStatusCheck()
            .then(
            data => {
                this.currentUser = data;
                this._userStatusCheck = true;
                return new Promise((resolve, reject) => {
                    resolve(true);
                });
            })
            .catch(
            error => {
                throw error;
            });
    }
}