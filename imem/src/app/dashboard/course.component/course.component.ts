import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Course, CourseStatusList } from '../../Models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { GentelellaService } from '../gentelella.service';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
import { AuthService } from '../../auth.service'

@Component({
    moduleId: module.id,
    selector: 'course',
    templateUrl: 'course.component.html',
    providers: [GentelellaService]
})
export class CourseComponent implements OnInit {

    id: string;
    private sub: any;
    submitted: boolean;
    modelCourse: Course;


    datepickerOption: DatePickerOptions;
    // TBD: bind to model 
    datepickerModelStartDate: DateModel;
    datepickerModelEndDate: DateModel;

    selectedCourseStatus: any;
    _courseStatusList: any[];

    constructor(
            private route: ActivatedRoute,
            private router: Router,
            private _authService: AuthService,
            private gentelellaService: GentelellaService) {
        this.submitted = true;
        this._courseStatusList = CourseStatusList;
        this.modelCourse = { id: -1, Name: 'Test Course' };
        this.datepickerOption = { locale: 'ru', firstWeekdaySunday: false, style: 'bold' };

    }

    onSubmit() {
        this.submitted = true;
        console.log('this.modelCourse ', this.modelCourse);
    }
    formReset() {
        this.submitted = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.gentelellaService.addCollapsablePanels();
    }

    private navigateToParent(): void {
        this.router.navigate(['/dashboard/courses']);
    }
    private onChangeObj(newObj) {
        console.log(newObj);
        // TBD: bind to model 
        this.selectedCourseStatus = newObj;
    }
}