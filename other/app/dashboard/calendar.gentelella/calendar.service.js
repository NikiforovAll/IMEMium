"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FullCalendarService = (function () {
    function FullCalendarService() {
    }
    FullCalendarService.prototype.build = function (calendarModule) {
        var date = new Date(), d = date.getDate(), m = date.getMonth(), y = date.getFullYear(), started, categoryClass;
        var calendar;
        var calendarConfig = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            monthNamesShort: ['Січ.', 'Лют.', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Лист', 'Груд'],
            dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            dayNamesShort: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
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
            select: function (start, end, allDay) {
                $('#fc_create').click();
                started = start;
                var ended = end;
                $(".antosubmit").on("click", function () {
                    var title = $("#title").val();
                    if (end) {
                        ended = end;
                    }
                    categoryClass = $("#event_type").val();
                    if (title) {
                        calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: started,
                            end: end,
                            allDay: allDay
                        }, true // make the event "stick"
                        );
                    }
                    $('#title').val('');
                    calendar.fullCalendar('unselect');
                    $('.antoclose').click();
                    return false;
                });
            },
            eventClick: function (calEvent, jsEvent, view) {
                $('#fc_edit').click();
                $('#title2').val(calEvent.title);
                categoryClass = $("#event_type").val();
                $(".antosubmit2").on("click", function () {
                    calEvent.title = $("#title2").val();
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
        };
        calendar = calendarModule.fullCalendar(calendarConfig);
    };
    return FullCalendarService;
}());
FullCalendarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FullCalendarService);
exports.FullCalendarService = FullCalendarService;
//# sourceMappingURL=calendar.service.js.map