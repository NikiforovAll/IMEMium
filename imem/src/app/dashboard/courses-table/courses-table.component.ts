import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../Models/Course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { NgTableExtensionService } from '../ng-table-extension.service';
@Component({
  selector: 'courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css'],
  providers: [NgTableExtensionService, CourseService]
})
export class CoursesTableComponent implements OnInit {
    public courses: Course[];

    @Input() userId: string;
    @Input() generalColumns: string[];
    private _coursesService: CourseService;
    // @Input() minVersion:Boolean = false;
    //     itemCount = 0;
    //         itemResource:DataTableResource<Student>;
    constructor(
        private courseService: CourseService,
        private tableExtensionService: NgTableExtensionService,
        private route: ActivatedRoute,
        private router: Router) {
        this._coursesService = courseService;
        // TBD: remove
        this.courses = this._coursesService.getCourses(2);
        this.data = this.courses.map(el => {
            (<any>el).StartDate = el.StartDate.toLocaleString();
            (<any>el).EndDate = el.EndDate.toLocaleString();
            return el;
        });
        this.length = this.data.length;
        // this.itemResource = new DataTableResource(this.students);
        // this.itemResource.count().then(count => this.itemCount = count);
    }

    public ngOnInit(): void {
        if (!!this.generalColumns) {
            this.columns = this.columns.filter(el => {
                return this.generalColumns.indexOf(el.name) != -1;
            });
        }
        this.onChangeTable(this.config);
    }
    // ================== TABLE CONFIG ==================
    private data: Array<any>;
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public rows: Array<any> = [];
    public columns: Array<any> = [
        {
            title: "Назва",
            name: 'Name',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Початок',
            name: 'StartDate',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Кінець',
            name: 'EndDate',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Викладач',
            name: 'Lecturer',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        }
    ];
    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };

    public onCellClick(data: any): any {
        console.log(data);
        // this.router.navigate([data.row.id.toString()], {relativeTo: this.route});
        this.router.navigate(['/dashboard/courses', data.row.id.toString()]);
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.tableExtensionService.changeFilter(this.data, this.columns, this.config);
        let sortedData = this.tableExtensionService.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.tableExtensionService.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }
    // ================== TABLE CONFIG ==================(END)
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
