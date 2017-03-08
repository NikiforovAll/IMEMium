import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../Models/Course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { NgTableExtensionService } from '../ng-table-extension.service';
@Component({
    moduleId: module.id,
    selector: 'courses',
    templateUrl: 'courses.component.html',
    providers: [NgTableExtensionService]
})
export class CoursesComponent {
}
