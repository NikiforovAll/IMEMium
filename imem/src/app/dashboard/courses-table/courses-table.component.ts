import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../Models/Course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
@Component({
    selector: 'courses-table',
    templateUrl: './courses-table.component.html',
    styleUrls: ['./courses-table.component.css'],
    providers: [CourseService]
})
export class CoursesTableComponent implements OnInit {
    public courses: Course[];

    @Input() userId: string;
    @Input() generalColumns: string[];

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router) {
        this.courses = this.courseService.getCourses(3);
    }

    public ngOnInit(): void {
        this.processColumnSubset();
        this.data = this.courses.map(el => {
            (<any>el).StartDate = el.StartDate.toLocaleString();
            (<any>el).EndDate = el.EndDate.toLocaleString();
            return el;
        });
        // this.onChangeTable(this.config);
    }

    private processColumnSubset() {
        if (!!this.generalColumns) {
            this.columns = this.columns.filter(el => {
                return this.generalColumns.indexOf(el.name) != -1;
            });
        }
    }
    public onRowClick(event: any): any {
        this.router.navigate(['/dashboard/courses', event.data.id]);
    }
    private data: Array<Course>;

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

        },
        {
            title: 'Початок',
            name: 'StartDate',
            filtering:
            {
                filter: true,
                filterString: '',
                placeholder: ''
            },
            sorting: {
                sort: true
            }
        },
        {
            title: 'Кінець',
            name: 'EndDate',
            filtering:
            {
                filter: true,
                filterString: '',
                placeholder: ''
            },
            sorting: {
                sort: true
            }
        },
        {
            title: 'Викладач',
            name: 'Lecturer',
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
