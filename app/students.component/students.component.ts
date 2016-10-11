import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Student } from '../Models/Student';
import { StudentService } from '../student.service';
@Component({
    moduleId: module.id,
    selector: 'students-table',
    templateUrl: 'students.component.html',
    providers: [StudentService]
})
export class StudentsComponent implements OnInit {
    public students: Student[];
    private _studentService: StudentService;
    constructor(private studentService: StudentService) {
        this._studentService = studentService;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.students = this._studentService.getStudents(100);
        let dataTableModule: any = $('#datatable');
        let dataTableSoruce:any = [];
        this.students.forEach(el => {
            dataTableSoruce.push(el.getData());
        });
        dataTableModule.DataTable({
            data:dataTableSoruce,
            "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false
            } ]
        });
    }
}