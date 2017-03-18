import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgTableExtensionService } from '../ng-table-extension.service';
import { LectureService } from '../lecture.service';
import { Lecture } from '../../Models/Lecture';


@Component({
    selector: 'lectures-table',
    templateUrl: './lectures-table.component.html',
    styleUrls: ['./lectures-table.component.css'],
    providers: [NgTableExtensionService, LectureService]
})

export class LecturesTableComponent implements OnInit {

    public lectures: Lecture[]
    @Input() userId: string;
    @Input() generalColumns: string[];

    constructor(
        private lectureservice: LectureService,
        private tableExtensionService: NgTableExtensionService,
        private route: ActivatedRoute,
        private router: Router) {
        this.lectures = this.lectureservice.getLectures(50);
        this.data = this.lectures;
    }

    public ngOnInit(): void {
        this.processColumnSubset();
    }

    public onRowClick(event: any): any {
        this.router.navigate(['/dashboard/lectures', event.data.id]);
    }

    private processColumnSubset() {
        if (!!this.generalColumns) {
            this.columns = this.columns.filter(el => {
                return this.generalColumns.indexOf(el.name) != -1;
            });
        }
    }
    // ================== TABLE CONFIG ==================
    private data: Array<any>;
  
    public columns: Array<any> = [
        {
            title: "Назва",
            name: 'Name',
            filtering:
            {
                filter: true,
                filterString: '',
                placeholder: ''
            },
            sorting: {
                sort: true
            }

        }
    ];
}

