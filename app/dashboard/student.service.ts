import { Injectable } from '@angular/core';
import { Student, UserType, StudentStatus } from '../Models/Student';
@Injectable()
export class StudentService {
    getStudents(num: number): Student[] {
        let students: Student[] = [];

        for (let i = 0; i < num; i++) {
            let currStudent = new Student();
            currStudent.id = i;
            currStudent.FirstName = 'FirstName' + i;
            currStudent.LastName = 'TeLastNamest' + i;
            currStudent.Faculty = 'Faculty' + i;
            currStudent.Course = 'Course' + i;
            currStudent.Group = 'Group' + i;
            currStudent.Department = 'Department' + i;
            currStudent.StudentStatus = StudentStatus.active;
            students.push(currStudent);
        }
        return students;
    }
}