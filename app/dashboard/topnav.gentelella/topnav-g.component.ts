import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'topnav-g',
    templateUrl: 'topnav-g.component.html'
})
export class TopnavComponent implements OnInit {
    constructor(
        public _authService: AuthService,
        private router: Router) {
         }
    logout() {
        this._authService.logout();
    }
    ngOnInit() { }

}