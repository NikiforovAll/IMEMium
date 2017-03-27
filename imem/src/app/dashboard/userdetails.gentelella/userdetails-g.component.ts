import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../../auth.service';
import { PortalUser, SexType } from '../../Models/User';
import { localeConfig } from '../../calendar-app-config.service'
@Component({
    moduleId: module.id,
    selector: 'userdetails',
    templateUrl: 'userdetails-g.component.html'
})
export class UserDetailsComponent implements OnInit {
    submitted: boolean;
    modelUser: PortalUser;
    sexList: boolean[];
    locale: any;

    // datepickerOption: DatePickerOptions;
    // datepickerModel: DateModel;

    courseListConfig = { columns: ['Name', 'Lecturer'] };

    constructor(public _authService: AuthService) {
        this.modelUser = {
            id: -1,
            FirstName: _authService.getUserName().given_name,
            LastName: _authService.getUserName().family_name
        };
        this.submitted = true;
        this.sexList = [false, false];
        this.locale = localeConfig;
        // this.datepickerOption = { locale: 'ru', firstWeekdaySunday: false, style: 'bold' };
    }

    ngOnInit() { }

    onSubmit() {
        this.submitted = true;
        console.log('form after submit: ', this.modelUser);
    }

    formReset() {
        this.submitted = false;
    }

    sexListToggle(index: number) {
        if (this.submitted) {
            return;
        }
        this.sexList[index] = true;
        this.sexList[1 - index] = false;
        this.modelUser.Sex = SexType[SexType[1 - index]];
    }
}