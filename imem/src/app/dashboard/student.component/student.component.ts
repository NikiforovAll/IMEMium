import { Component, OnInit } from '@angular/core';
import { Student } from '../../Models/Student';
import { AuthService, IUser } from '../../auth.service';
import { PortalUser, SexType } from '../../Models/User';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { GentelellaService } from '../gentelella.service';

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
    providers: [GentelellaService]
})
export class StudentComponent implements OnInit {

      // Doughnut
    public doughnutChartLabels:string[] = ['Зупинено', 'У процесі', 'Закінчено'];
    public doughnutChartData:number[] = [1, 2, 1];
    public doughnutChartType:string = 'doughnut';
    public backgroundColor:any[] = [
            { // grey
                    backgroundColor: [
                        '#b21c1e', 
                        '#4678af',
                        '#2d962e'],
                    borderColor: 'rgba(148,159,177,1)'
            }
            ];

    id: string;
    submitted: boolean;
    modelUser: PortalUser;
    sexList: boolean[];
    datepickerOption: DatePickerOptions;
    datepickerModel: DateModel;

    courseListConfig = { columns: ['Name', 'Lecturer'] };
    constructor(
            private route: ActivatedRoute,
            private gentelellaService: GentelellaService,
            private router: Router) {
        this.datepickerOption = { locale: 'ru', firstWeekdaySunday: false, style: 'bold' };
        this.modelUser = { id: -1 };
        this.submitted = true;
        this.sexList = [false, false];

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.gentelellaService.addCollapsablePanels();
    }
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
    private navigateToParent(): void {
        this.router.navigate(['/dashboard/students']);
    }
  
}