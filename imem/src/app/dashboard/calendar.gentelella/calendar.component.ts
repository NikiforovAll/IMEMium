import { Component, OnInit } from '@angular/core';
// import { FullCalendarService } from './calendar.service'

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        // let fullCalendarModule: any = $('#calendar');
        // this.fullCalendarService.build(fullCalendarModule);
    }
}