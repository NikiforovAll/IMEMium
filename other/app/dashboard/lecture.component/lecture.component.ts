import { Component, OnInit} from '@angular/core';
import { ActivatedRoute }   from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'lecture',
    templateUrl: 'lecture.component.html',
    providers: []
})
export class LectureComponent implements OnInit {

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