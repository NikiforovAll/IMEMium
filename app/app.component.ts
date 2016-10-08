import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']
})
export class AppComponent implements OnInit { 
    ngOnInit(){
        var gentelellaInit = require('app/gentelella.custom.js');
        gentelellaInit.init();
    }
    ngAfterViewInit(){
        
    }
}
