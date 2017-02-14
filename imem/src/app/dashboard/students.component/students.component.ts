import { Component, OnInit, Input, VERSION} from '@angular/core';
import { Student, StudentStatus } from '../../Models/Student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { DataTableResource } from 'angular-2-data-table';
@Component({
    moduleId: module.id,
    selector: 'students-table',
    templateUrl: 'students.component.html',
    providers: [StudentService]
})
export class StudentsComponent {
    public students: Student[];
    private _studentService: StudentService;
// @Input() minVersion:Boolean = false;
//     itemCount = 0;
//         itemResource:DataTableResource<Student>;
    constructor(private studentService: StudentService, private router: Router) {
        this._studentService = studentService;
        this.students = this._studentService.getStudents(100);
        // this.itemResource = new DataTableResource(this.students);
        // this.itemResource.count().then(count => this.itemCount = count);
    }


    ngOnInit() {    
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