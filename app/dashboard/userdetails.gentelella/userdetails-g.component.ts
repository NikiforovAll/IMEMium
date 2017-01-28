import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../../auth.service';
@Component({
    moduleId: module.id,
    selector: 'userdetails',
    templateUrl: 'userdetails-g.component.html'
})
export class UserDetailsComponent implements OnInit {
    constructor(public _authService: AuthService) { }

    ngOnInit() { }
}