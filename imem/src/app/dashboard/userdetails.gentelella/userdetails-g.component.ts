import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../../auth.service';
import { PortalUser, SexType } from '../../Models/User';

import { DateModel, DatePickerOptions } from 'ng2-datepicker';
@Component({
    moduleId: module.id,
    selector: 'userdetails',
    templateUrl: 'userdetails-g.component.html'
})
export class UserDetailsComponent implements OnInit {

    submitted: boolean;
    modelUser: PortalUser;
    sexList: boolean[];

    datepickerOption: DatePickerOptions;
    datepickerModel: DateModel;



    constructor(public _authService: AuthService) {
        this.modelUser = { id: -1 };
        this.submitted = true;
        this.sexList = [false, false];
        // TBD: config does not work & readonly mode is not working
        this.datepickerOption = {locale: 'ru', firstWeekdaySunday: false, style:'bold'};
    }

    ngOnInit() { }

    onSubmit() {
        this.submitted = true;
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