import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(): Promise<boolean> {
        // set status flag in auth service
        return this.auth.logIn()
            .then(data =>
                new Promise((resolve, reject) => {
                    resolve(data);
                })
            )
            .catch(error => {
                return new Promise((resolve, reject) => {
                    resolve(false);
                })
            }
            );
    }

    canActivateChild(): Promise<boolean> {
        return this.canActivate()

    }
}