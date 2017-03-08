import { Component, OnInit } from '@angular/core';
import { Student } from '../../Models/Student';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
    providers: []
})
export class StudentComponent implements OnInit {

    id: string;

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    private navigateToParent(): void {
        this.router.navigate(['/dashboard/students']);
    }
  
}