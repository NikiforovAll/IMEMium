import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'dashboard-app',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit { 
    ngOnInit(){
        var gentelellaInit = require('app/gentelella.custom.js');
        gentelellaInit.init();
    }
    ngAfterViewInit(){
        
    }
}
