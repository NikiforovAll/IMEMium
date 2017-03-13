import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpModule, RequestOptions } from '@angular/http';
import { CustomRequestOptionsService } from '../custom-request-options.service';


import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
import { FooterComponent } from './footer.gentelella/footer-g.component';
import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
import { StudentsComponent } from './students.component/students.component';
import { StudentComponent } from './student.component/student.component';

import { LecturesComponent } from './lectures.component/lectures.component';
import { LectureComponent } from './lecture.component/lecture.component';


import { CoursesComponent } from './courses.component/courses.component';
import { CoursesTableComponent } from './courses-table/courses-table.component';
import { CourseComponent } from './course.component/course.component';

import { CalendarComponent } from './calendar.gentelella/calendar.component';
// import { FullCalendarService } from './calendar.gentelella/calendar.service';

import { RequestComponent } from './request-panel/request-panel.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// import { DataTableModule } from 'angular-2-data-table';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { DatePickerModule } from 'ng2-datepicker';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { StudentsTableComponent } from './students-table/students-table.component';
import { LecturesTableComponent } from './lectures-table/lectures-table.component';

import { ChartsModule } from 'ng2-charts';
import { CommentSectionComponent } from './comment-section/comment-section.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DashboardRoutingModule,
        Ng2TableModule,
        DatePickerModule,
        ChartsModule,
        PaginationModule.forRoot(),
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
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
        CalendarComponent,
        LectureComponent,
        CoursesTableComponent,
        StudentsTableComponent,
        LecturesTableComponent,
        CommentSectionComponent
    ],
    providers: [
        // FullCalendarService
        { provide: RequestOptions, useClass: CustomRequestOptionsService }
    ]
})
export class DashboardModule { }