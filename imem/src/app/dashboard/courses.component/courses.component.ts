import { Component, OnInit, Input} from '@angular/core';
import { Course } from '../../Models/Course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
// import { DataTableResource } from 'angular-2-data-table';
@Component({
    moduleId: module.id,
    selector: 'courses',
    templateUrl: 'courses.component.html',
    providers: [CourseService]
})
export class CoursesComponent{
    // courses: Course[];
    // private _courseService: CourseService;
    // itemCount = 0;
    // @Input() isMinVersion:Boolean = false;
    
    // itemResource:DataTableResource<Course>;
    // constructor(private courseService: CourseService,  private router: Router) {
    //     this._courseService = courseService;
    // }

    // ngOnInit() {
    //     this.courses = this._courseService.getCourses(20);
    //     this.itemResource = new DataTableResource(this.courses);
    //     this.itemResource.count().then(count => this.itemCount = count);
    // }
    // reloadItems(params:any) {
    //     this.itemResource.query(params).then(items => this.courses = items);
    // }


    // rowClick(rowEvent:any) {
    //     console.log('Clicked: ' + rowEvent.row.item.Name);
    // }

    // rowDoubleClick(rowEvent:any) {
    //     this.router.navigate(['dashboard/courses/' + rowEvent.row.item.id]);
    // }

    // rowTooltip(item:Course) { return item.Lecturer; }
}