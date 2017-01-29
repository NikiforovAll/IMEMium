import { Injectable } from '@angular/core';
// import { Student } from './Models/Student';
// import { tokenNotExpired } from 'angular2-jwt';

export interface IUser {
    id: string;
    email?: string;
    password?: string;
    role?: string;
}   
@Injectable()
export class AuthService {

    private _users: IUser[] = [
        { id: '1', email: 'admin', password: 'admin', role: 'Admin' },
        { id: '1', email: 'user', password: 'user', role: 'Student' },
    ];

    public sessionUser:IUser = {id: '-1'};
    constructor() { }

    isAdminSession(){
        return this.sessionUser && this.sessionUser.role == 'Admin'; 
    }

    login(email: string, password: string): boolean {
        console.log('login');
        let filter = (user:IUser) => {return user.email === email && user.password === password};
        if (this._users.some(filter)) {
            this.sessionUser =  this._users.find(filter);
            localStorage.setItem('id_token', this.sessionUser.role);
            return true;
        }
        return false;
    }
    logout():void{
        console.log('logout as ',this.sessionUser)  ;
        this.sessionUser = null;
        localStorage.removeItem('id_token');
    }
    loggedIn():boolean{
        console.log('check ', this.sessionUser);
        return localStorage.getItem('id_token')!== null;//tokenNotExpired();
    }
    
}