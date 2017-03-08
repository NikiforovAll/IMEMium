import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from './footer.gentelella/footer-g.component';
import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from './students.component/students.component';
import { StudentComponent } from './student.component/student.component';

import {LecturesComponent} from './lectures.component/lectures.component';
import {LectureComponent} from './lecture.component/lecture.component';


import { CoursesComponent } from './courses.component/courses.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { CourseComponent } from './course.component/course.component';

// import { CalendarComponent } from './calendar.gentelella/calendar.component';
// import { FullCalendarService } from './calendar.gentelella/calendar.service';

import { RequestComponent } from './request-panel/request-panel.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// import { DataTableModule } from 'angular-2-data-table';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        Ng2TableModule,
        DatePickerModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        DashboardComponent,
        SidebarComponent,
        TopnavComponent,
        FooterComponent,
        UserDetailsComponent,
        StudentsComponent,
        StudentComponent,
        RequestComponent,
        CoursesComponent,
        CourseComponent,
        LecturesComponent,
        LectureComponent,
        CoursesTableComponent
    ],
    providers: [
        // FullCalendarService
    ]
})
export class DashboardModule { }