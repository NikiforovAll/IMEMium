import { Injectable } from '@angular/core';
// import { Student } from './Models/Student';
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

    public userUrl: string
    public loginNumber: number
    public currentUser: IUser

    constructor() {
        this.loginNumber = 0;
    }

    public isAdminSession() {
        return this.getUserRole() == 'Admin';
    }

    public getUserRole(): string {
        if(!this.currentUser){
            this.restoreUser();
        }
        return this.currentUser.role;
        // return JSON.parse(localStorage.getItem('currentUser')).role;
    }

    public getUserName(): string{
        if(!this.currentUser){
            this.restoreUser();
        }
        return this.currentUser.username;
    }

    public getUserEmail(): string{
        if(!this.currentUser){
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
       var user:IUser = {
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
        console.log(this.loginNumber);
        return localStorage.getItem('currentUser') !== null;//tokenNotExpired();
    }
    
    private restoreUser(): boolean {
        var user = localStorage.getItem('currentUser');
        if(user){
            this.currentUser = JSON.parse(user);
            return true;
        }
        return false;
        
    }
    /*
    public userAuthToken: string;
    public userDisplayName: string;
    public auth2: any;
    private GoogleAuthManager: any;
    public googleInit(ctrl: LoginComponent) {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '142345956360-ut8b46bo0sanqu66gjfj2pnp6ked96v0.apps.googleusercontent.com',
                // cookiepolicy: 'single_host_origin',
                scope: 'profile email https://www.googleapis.com/auth/drive'
            });
            that.attachSignin(document.getElementById('googleBtn'), ctrl);
        });
    }
    public attachSignin(element, controller: LoginComponent) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {

                let profile = googleUser.getBasicProfile();
                let userDisplayName = googleUser.getBasicProfile().getName();
                let thisuserAuthToken = googleUser.getAuthResponse().id_token;
                controller._authService.setUser(thisuserAuthToken, userDisplayName);
                // localStorage.setItem('currentUser', JSON.stringify({ token: thisuserAuthToken, name: userDisplayName }));
                // console.log('Token || ' + googleUser.getAuthResponse().id_token);
                // console.log('ID: ' + profile.getId());
                // console.log('Name: ' + profile.getName());
                // console.log('Image URL: ' + profile.getImageUrl());
                // console.log('Email: ' + profile.getEmail());
                controller.login();
            }, function (error) {
                alert(JSON.stringify(error));
            });
    }
    */
}