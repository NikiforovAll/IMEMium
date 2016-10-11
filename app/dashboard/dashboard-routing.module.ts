import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopnavComponent } from '../topnav.gentelella/topnav-g.component';
import { SidebarComponent } from '../sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from '../footer.gentelella/footer-g.component';
import { UserDetailsComponent } from '../userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from '../students.component/students.component';
import { CoursesComponent } from '../courses.component/courses.component';

import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        RouterModule.forChild([
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
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
