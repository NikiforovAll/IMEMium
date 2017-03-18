import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHttpService } from '../../custom-http.service'
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css'],
  providers: []
})

export class AuthCallbackComponent implements OnInit {

  constructor(
    private vcRef: ViewContainerRef,
    private authService: AuthService,
    private customHttp: CustomHttpService,
    public router: Router) {
    this.authService.restoreUser()
      .then(
      data => {
        this.router.navigate(['dashboard'])
      })
      .catch(
      error => {
        this.router.navigate(['login'])
      });
  }
  ngOnInit() {

  }

  public openModal() {
   
  }
}
