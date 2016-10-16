import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from './footer.gentelella/footer-g.component';
import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from './students.component/students.component';
import { CoursesComponent } from './courses.component/courses.component';
import { DashboardComponent } from './dashboard.component';
import { CalendarComponent } from './calendar.gentelella/calendar.component';
import {RequestComponent} from './request-panel/request-panel.component';

import { AuthGuard } from '../auth-guard.service'
const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
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
                path: 'students',
                component: StudentsComponent
            },
            {
                path: 'calendar',
                component: CalendarComponent
            },
            {
                path: 'requests',
                component: RequestComponent
            }
        ],
        canActivate: [AuthGuard]
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
