import { Component, OnInit, Input } from '@angular/core';
import { Student, StudentStatus } from '../../Models/Student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
    selector: 'students-table',
    templateUrl: './students-table.component.html',
    styleUrls: ['./students-table.component.css'],
    providers: [StudentService]
})
export class StudentsTableComponent implements OnInit {

    public students: Student[];
    private _studentService: StudentService;
    constructor(
        private studentService: StudentService,
        private router: Router) {
        this._studentService = studentService;
        this.students = this._studentService.getStudents(20);
        this.data = this.students;
    }

    public ngOnInit(): void {
    }

    public onRowClick(event: any): any {
        this.router.navigate(['/dashboard/students', event.data.id]);
    }
    // ================== TABLE CONFIG ==================
    private data: Array<Student>;

    public columns: Array<any> = [
        {
            title: "Ім\'я",
            name: 'FirstName',
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
            title: 'Прізвище',
            name: 'LastName',
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
            title: 'Факультет',
            name: 'Faculty',
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
            title: 'Курс',
            name: 'Course',
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
            title: 'Група',
            name: 'Group',
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
