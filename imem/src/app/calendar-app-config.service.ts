import { Injectable } from '@angular/core';

@Injectable()
export class CalendarAppConfigService {

  constructor() { }

}
export const localeConfig = {
  firstDayOfWeek: 0,
  dayNames: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
  dayNamesShort: ["Нед", "Пон", "Вів", "Сер", "Чет", "П'ят", "Суб"],
  dayNamesMin: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],
  monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
  monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
};
