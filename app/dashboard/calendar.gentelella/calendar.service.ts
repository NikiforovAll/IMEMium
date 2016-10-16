import { Injectable } from '@angular/core';

@Injectable()
export class FullCalendarService {

    constructor() {
    }

    build(calendarModule: any): void {
        var date = new Date(),
            d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear(),
            started: any,
            categoryClass: any;
        let calendar: any;
        let calendarConfig = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            selectable: true,
            selectHelper: true,
            select: function (start: any, end: any, allDay: any) {
                $('#fc_create').click();
                started = start;
                let ended = end;
                ($(".antosubmit") as any).on("click", function () {
                    var title = ($("#title") as any).val();
                    if (end) {
                        ended = end;
                    }
                    categoryClass = ($("#event_type") as any).val();
                    if (title) {
                        calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: started,
                            end: end,
                            allDay: allDay
                        },
                            true // make the event "stick"
                        );
                    }
                    ($('#title') as any).val('');
                    calendar.fullCalendar('unselect');
                    $('.antoclose').click();
                    return false;
                });
            },
            eventClick: function (calEvent: any, jsEvent: any, view: any) {
                $('#fc_edit').click();
                ($('#title2') as any).val(calEvent.title);
                categoryClass = ($("#event_type") as any).val();
                ($(".antosubmit2") as any).on("click", function () {
                    calEvent.title = ($("#title2") as any).val();
                    calendar.fullCalendar('updateEvent', calEvent);
                    $('.antoclose2').click();
                });
                calendar.fullCalendar('unselect');
            },
            editable: true,
            events: [{
                title: 'homework: 1',
                start: new Date(y, m, 1),
                allDay: true
            }, {
                title: 'holidays',
                start: new Date(y, m, d - 2),
                end: new Date(y, m, d),
                allDay: true
            }, {
                title: 'homework: 2',
                start: new Date(y, m, d),
                allDay: true
            }, {
                title: 'lecture: 1',
                start: new Date(y, m, d + 14),
                end: new Date(y, m, d),
                allDay: true
            }, {
                title: 'lecture: 2',
                start: new Date(y, m, d + 1),
                end: new Date(y, m, d + 1),
                allDay: true
            }, {
                title: 'lecture: 3',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                allDay: true
            }]
        }
        calendar = calendarModule.fullCalendar(calendarConfig);
    }
}