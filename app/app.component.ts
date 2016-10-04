import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']
})
export class AppComponent implements OnInit { 
    ngOnInit(){
        var drawGauge = require('app/gentelella.custom.js');
        drawGauge.init();
    }
}
