import { Component, OnInit} from '@angular/core';
import { Student } from '../../Models/Student';
import { ActivatedRoute }   from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
    providers: []
})
export class StudentComponent implements OnInit {

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