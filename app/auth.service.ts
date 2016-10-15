import { Injectable } from '@angular/core';
// import { Student } from './Models/Student';
import { tokenNotExpired } from 'angular2-jwt';

export interface IUser {
    email?: string;
    password?: string;
    role?: string;
}   
@Injectable()
export class AuthService {

    private _users: IUser[] = [
        { email: 'admin', password: 'admin', role: 'Admin' },
        { email: 'user', password: 'user', role: 'Student' },

    ]
    constructor() { }


    login(email: string, password: string): boolean {
        console.log('login');
        let filter = (user:IUser) => {return user.email === email && user.password === password};
        if (this._users.some(filter)) {
            localStorage.setItem('id_token', this._users.find(filter).role);
            return true;
        }
        return false;
    }
    logout():void{
        console.log('logout');
        localStorage.removeItem('id_token');
    }
    loggedIn():boolean{
        console.log('check ', localStorage.getItem('id_token'));
        return localStorage.getItem('id_token')!== null;//tokenNotExpired();
    }
    
}