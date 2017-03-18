import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { GentelellaService } from '../gentelella.service';

@Component({
    moduleId: module.id,
    selector: 'sidebar-g',
    templateUrl: 'sidebar-g.component.html',
    providers: [GentelellaService]

})
export class SidebarComponent implements OnInit, AfterViewInit  {
    constructor(
        public _authService: AuthService,
        private gentelellaService: GentelellaService,
        private router: Router
    ) {
    }
    logout() {
        this._authService.logout();
    }
    ngOnInit() {
     }

     ngAfterViewInit(){
        this.gentelellaService.sideBarSetUp();
     }
}