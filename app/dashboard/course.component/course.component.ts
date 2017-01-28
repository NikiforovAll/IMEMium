import { Component, OnInit} from '@angular/core';
import { Course } from '../../Models/Course';
import { ActivatedRoute }   from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'course',
    templateUrl: 'course.component.html',
    providers: []
})
export class CourseComponent implements OnInit {

    id: string;
    private sub: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
        });
    }
  
}