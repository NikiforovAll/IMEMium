import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from '../topnav.gentelella/topnav-g.component';
import { SidebarComponent } from '../sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from '../footer.gentelella/footer-g.component';
import { UserDetailsComponent } from '../userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from '../students.component/students.component';
import { CoursesComponent } from '../courses.component/courses.component';

import {DashboardComponent} from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        SidebarComponent,
        TopnavComponent,
        FooterComponent,
        UserDetailsComponent,
        StudentsComponent,
        CoursesComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }