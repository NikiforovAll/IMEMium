import { Component, OnInit, Input } from '@angular/core';
import { Student, StudentStatus } from '../../Models/Student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { NgTableExtensionService } from '../ng-table-extension.service';

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
  providers: [StudentService, NgTableExtensionService]
})
export class StudentsTableComponent implements OnInit {

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
        //TBD: remove
        this.students = this._studentService.getStudents(20);
        this.data = this.students;
        this.length = this.data.length;
        // this.itemResource = new DataTableResource(this.students);
        // this.itemResource.count().then(count => this.itemCount = count);
    }

    public ngOnInit(): void {
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
            title: "Ім\'я'",
            name: 'FirstName',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Прізвище',
            name: 'LastName',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Факультет',
            name: 'Faculty',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Курс',
            name: 'Course',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        },
        {
            title: 'Група',
            name: 'Group',
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
        // alert('Clicked ' + JSON.stringify(data));
        this.router.navigate(['/dashboard/students', data.row.id.toString()]);
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
}
