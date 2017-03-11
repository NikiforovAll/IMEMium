import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import { tokenNotExpired } from 'angular2-jwt';
import { LoginComponent } from './login/login.component';
export interface IUser {
    id: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
}

@Injectable()
export class AuthService {

    public userUrl: string;
    public loginNumber: number;
    public currentUser: IUser;

    private _userStatusCheck: boolean;

    public
    constructor(private _http: Http) {
        this.loginNumber = 0;
    }

    public isAdminSession() {
        return this.getUserRole() == 'Admin';
    }

    public getUserRole(): string {
        if (!this.currentUser) {
            this.restoreUser();
        }
        return this.currentUser.role;
        // return JSON.parse(localStorage.getItem('currentUser')).role;
    }

    public getUserName(): string {
        if (!this.currentUser) {
            this.restoreUser();
        }
        return this.currentUser.username;
    }

    public getUserEmail(): string {
        if (!this.currentUser) {
            this.restoreUser();
        }
        return this.currentUser.email;
    }

    public login(email: string, password: string, role: string): boolean {
        // console.log('login');
        // let filter = (user:IUser) => {return user.email === email && user.password === password};
        // if (this._users.some(filter)) {
        //     this.sessionUser =  this._users.find(filter);
        //     localStorage.setItem('id_token', this.sessionUser.role);
        //     return true;
        // }
        // return false;
        return true;
    }

    public setUser(username: string, role: string): void {
        var user: IUser = {
            id: username,
            username: username,
            role: role
        }
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    public logout(): void {
        localStorage.removeItem("currentUser")
        // console.log('logout as ',this.sessionUser)  ;
        // this.sessionUser = null;
        // var auth2 = gapi.auth2.getAuthInstance();
        // auth2.signOut().then(function () {
        //     localStorage.removeItem('currentUser');
        //     console.log('User signed out.');
        // });
    }
    public loggedIn(): boolean {
        // GoogleAuth.isSignedIn.get()
        // var auth2 = gapi.auth2.getAuthInstance();
        // var result = auth2.isSignedIn.get();
        // console.log(result);
        this.loginNumber++;
        return localStorage.getItem('currentUser') !== null;//tokenNotExpired();
    }

    public userStatusCheck(): Promise<any>{
        return this._http.get('/auth/status')
            .toPromise()
            .then(data => data.status)
            .catch(data => this.handleError)
    }

    private restoreUser(): boolean {
        var user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUser = JSON.parse(user);
            return true;
        }
        return false;
    }


    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
    }
}