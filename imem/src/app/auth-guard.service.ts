
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
      .then(data => {
          if(!data){
              // this.router.navigate(['login']);
              return new Promise((resolve, reject) => {
                  resolve(false);
              });
          }else{
              return new Promise((resolve, reject) => {
                  resolve(true);
              });
          }
      })
      .catch(error => {
        return new Promise((resolve, reject) => {
            resolve(false);
        })}
      );
  }

  canActivateChild(): Promise<boolean>{
    return this.canActivate()

  }
}