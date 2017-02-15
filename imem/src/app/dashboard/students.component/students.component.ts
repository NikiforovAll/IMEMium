import { Component, OnInit, Input, VERSION } from '@angular/core';
import { Student, StudentStatus } from '../../Models/Student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { NgTableExtensionService } from '../ng-table-extension.service';

// import { DataTableResource } from 'angular-2-data-table';

@Component({
    moduleId: module.id,
    selector: 'students-table',
    templateUrl: 'students.component.html',
    providers: [StudentService, NgTableExtensionService]
})
export class StudentsComponent {
    public students: Student[];
    private _studentService: StudentService;
    // @Input() minVersion:Boolean = false;
    //     itemCount = 0;
    //         itemResource:DataTableResource<Student>;
    constructor(
         private studentService: StudentService,
         private tableExtensionService: NgTableExtensionService,
         private router: Router) {
        this._studentService = studentService;
        this.students = this._studentService.getStudents(100);
        this.data = this.students;
        this.length = this.data.length;
        // this.itemResource = new DataTableResource(this.students);
        // this.itemResource.count().then(count => this.itemCount = count);
    }


    public ngOnInit(): void {
        this.onChangeTable(this.config);
    }

    private data: Array<any>;

    public page: number = 1;
    public itemsPerPage: number = 20;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public rows: Array<any> = [];
    public columns: Array<any> = [
        {
            title: 'Name',
            name: 'FirstName',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Position',
            name: 'Faculty',
            sort: false,
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


    // transforStudentStatus(status: StudentStatus){
    //     return StudentStatus[status];
    // }
    // reloadItems(params:any) {
    //     this.itemResource.query(params).then(items => this.students = items);
    // }

    // // special properties:

    // rowClick(rowEvent:any) {
    //     console.log('Clicked: ' + rowEvent.row.item.FirstName);
    // }

    // rowDoubleClick(rowEvent:any) {
    //     this.router.navigate(['dashboard/']);
    // }
    // rowTooltip(item:Student) { return item.StudentStatus; }

}