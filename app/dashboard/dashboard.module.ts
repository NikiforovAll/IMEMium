import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from './footer.gentelella/footer-g.component';
import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from './students.component/students.component';
import { CoursesComponent } from './courses.component/courses.component';
import { CalendarComponent } from './calendar.gentelella/calendar.component';
import { FullCalendarService } from './calendar.gentelella/calendar.service'
import { RequestComponent } from './request-panel/request-panel.component';
import { DashboardComponent } from './dashboard.component';
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
        CalendarComponent,
        RequestComponent,
        CoursesComponent
    ],
    providers: [
        FullCalendarService
    ]
})
export class DashboardModule { }