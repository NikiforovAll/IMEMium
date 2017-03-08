import { Component, OnInit} from '@angular/core';
import { Course } from '../../Models/Course';
import { ActivatedRoute, Router }   from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'course',
    templateUrl: 'course.component.html',
    providers: []
})
export class CourseComponent implements OnInit {

    id: string;
    private sub: any;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
        });
    }
    private navigateToParent(): void {
        this.router.navigate(['/dashboard/courses']);
    }
  
}