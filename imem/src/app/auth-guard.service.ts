
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    this.auth.userStatusCheck()
      .then(
        data => console.log('userStatusCheck result', data))
      .catch( 
        error => error
      );
    // set status flag in auth service
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  canActivateChild() {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}