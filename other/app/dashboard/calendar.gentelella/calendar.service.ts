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
            monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
                monthNamesShort: ['Січ.','Лют.','Бер','Квіт','Трав','Черв','Лип','Серп','Верес','Жовт','Лист','Груд'],
                dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
                dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
                buttonText: {
                    prev: "Назад",
                    next: "Вперед",
                    prevYear: "Назад",
                    nextYear: "Вперед",
                    today: "Сьогодні",
                    month: "Місяць",
                    week: "Неділя",
                    day: "День"
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
                title: 'Домашнє завдання: Матан №1',
                start: new Date(y, m, 1),
                allDay: true
            }, {
                title: 'Вихідні',
                start: new Date(y, m, d - 2),
                end: new Date(y, m, d),
                allDay: true
            }, {
                title: 'Домашнє завдання: Програмування №2',
                start: new Date(y, m, d),
                allDay: true
            }, {
                title: 'Лекція: №3',
                start: new Date(y, m, d + 14),
                end: new Date(y, m, d),
                allDay: true
            }, {
                title: 'Лекція: №4',
                start: new Date(y, m, d + 1),
                end: new Date(y, m, d + 1),
                allDay: true
            }, {
                title: 'Лекція: №5',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                allDay: true
            }]
        }
        calendar = calendarModule.fullCalendar(calendarConfig);
    }
}