import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleLoaderService } from '../google-loader.service';

@Component({
    selector: 'dashboard-app',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(
        private _googleLoader: GoogleLoaderService
    ) {
    }
    ngOnInit() {
        // TBD: Change
        var gentelellaInit = require('../../assets/gentelella.custom.js');
        gentelellaInit.init();
        this._googleLoader.loadPicker();

    }
    ngAfterViewInit() {
    }

    onDeactivate() {
        document.body.scrollTop = 0;
    }
}
