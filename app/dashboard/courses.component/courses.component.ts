import { Component, OnInit} from '@angular/core';
import { Course } from '../../Models/Course';
import { CourseService } from '../course.service';
@Component({
    moduleId: module.id,
    selector: 'courses',
    templateUrl: 'courses.component.html',
    providers: [CourseService]
})
export class CoursesComponent implements OnInit {
    courses: Course[];
    private _courseService: CourseService;
    constructor(private courseService: CourseService) {
        this._courseService = courseService;
    }

    ngOnInit() {
        this.courses = this._courseService.getCourses(20);
        let dataTableModule: any = $('#datatable');
        let dataTableSoruce: any = [];
        this.courses.forEach(el => {
            dataTableSoruce.push(el.getData());
        });
        dataTableModule.DataTable({
            data: dataTableSoruce,
            "columnDefs": [
                {
                    "targets": [0],
                    "visible": false
                }
            ]
        });
    }
}