import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sidebar-g',
    templateUrl: 'sidebar-g.component.html'
})
export class SidebarComponent implements OnInit {
    constructor( 
     public  _authService: AuthService,
     private router: Router) { }
    logout() {
       this._authService.logout();
    }
    ngOnInit() { }
}