import { Component, OnInit, Input, VERSION } from '@angular/core';
import { Student, StudentStatus } from '../../Models/Student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { NgTableExtensionService } from '../ng-table-extension.service';

// import { DataTableResource } from 'angular-2-data-table';

@Component({
    moduleId: module.id,
    selector: 'students',
    templateUrl: 'students.component.html'
})
export class StudentsComponent implements OnInit {

    constructor(){}

    public ngOnInit(): void {
    }
}