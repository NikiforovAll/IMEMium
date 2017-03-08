import { Injectable } from '@angular/core';
import { Course } from '../Models/Course';
@Injectable()
export class CourseService {
    getCourses(num: number): Course[] {
        let students: Course[] = [];

        for (let i = 0; i < num; i++) {
            let currCourse = new Course();
            currCourse.id = i;
            currCourse.Name = 'Name' + i;
            currCourse.StartDate = new Date(Date.now());
            currCourse.EndDate = new Date(Date.now());
            currCourse.Lecturer = 'Chief';
            currCourse.CourseStatus = 'test'// CourseStatus.active;
            students.push(currCourse);
        }
        return students;
    }
}