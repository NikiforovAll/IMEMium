import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Course, CourseStatusList } from '../../Models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { GentelellaService } from '../gentelella.service';
import { localeConfig } from '../../calendar-app-config.service';
import { AuthService } from '../../auth.service'
import { ConfirmationService } from 'primeng/primeng';
import { editorConfig } from '../../editor-config.service';

@Component({
    moduleId: module.id,
    selector: 'course',
    templateUrl: 'course.component.html',
    styleUrls: ['course.component.css'],
    providers: [GentelellaService, ConfirmationService]
})
export class CourseComponent implements OnInit {

    id: string;
    private sub: any;
    submitted: boolean;
    modelCourse: Course;
    locale: any;

    selectedCourseStatus: any;
    _courseStatusList: any[];
    editorConfig = editorConfig;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _authService: AuthService,
        private confirmationService: ConfirmationService,
        private gentelellaService: GentelellaService) {
        this.submitted = true;
        this.locale = localeConfig;
        this._courseStatusList = CourseStatusList;
        this.modelCourse = { id: -1, Name: 'Test Course' };
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

    public deleteCourseModal() {
        this.confirmationService.confirm({
            message: 'Ви впевнені?',
            header: 'Видалення курсу',
            icon: 'fa fa-trash',
            accept: () => {
                this.navigateToParent();
            }
        });
    }
    // public openModalClose() {
    //     let modal = this.modal.confirm()
    //     .size('sm')
    //     .isBlocking(true)
    //     .showClose(true)
    //     .keyboard(27)
    //     .okBtn('Так')
    //     .cancelBtn('Ні')
    //     .headerClass('alert alert-warning')
    //     .title('Видалення курсу')
    //     .body(`
    // <div class="container body">
    //     <div class="main_container">
    //         <!-- page content -->
    //             <div class="text-center text-center">                           
    //                 <h2>Ви впевнені?</h2>
    //             </div>
    //         <!-- /page content -->
    //     </div>
    // </div>`);
    //     modal.open()
    //     .then(dialog => dialog.result)
    //     .then(result => {
    //       this.navigateToParent();
    //       this.gentelellaService.fixModalHeightAfterLongQuery();
    //     })
    //     .catch(result => {
    //     });
    // }
}