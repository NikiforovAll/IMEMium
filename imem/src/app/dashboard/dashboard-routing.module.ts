import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service'

import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from './footer.gentelella/footer-g.component';
import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from './students.component/students.component';
import { StudentComponent } from './student.component/student.component';
import { CoursesComponent } from './courses.component/courses.component';
import { CourseComponent } from './course.component/course.component';
import { LecturesComponent } from './lectures.component/lectures.component';
import { LectureComponent } from './lecture.component/lecture.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { DashboardComponent } from './dashboard.component';
import { CalendarComponent } from './calendar.gentelella/calendar.component';
import { RequestComponent } from './request-panel/request-panel.component';

import { ExerciseComponent } from "app/dashboard/exercise/exercise.component";
const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: UserDetailsComponent
            },
            {
                path: 'courses',
                component: CoursesComponent
            },
            {
                path: 'lectures',
                component: LecturesComponent
            },
            {
                path: 'lectures/:id',
                component: LectureComponent
            },
            {
                path: 'courses/:id',
                component: CourseComponent
            },
            {
                path: 'students',
                component: StudentsComponent
            },
            {
                path: 'students/:id',
                component: StudentComponent
            },
            {
                path: 'calendar',
                component: CalendarComponent
            },
            {
                path: 'requests',
                component: RequestComponent
            },
            {
                path: 'exercises',
                component: ExercisesComponent
            },
            {
                path: 'exercises/:id',
                component: ExerciseComponent
            },
        ],
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
