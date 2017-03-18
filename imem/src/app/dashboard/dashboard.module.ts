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

import { RequestComponent } from './request-panel/request-panel.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { StudentsTableComponent } from './students-table/students-table.component';
import { LecturesTableComponent } from './lectures-table/lectures-table.component';

import { CommentSectionComponent } from './comment-section/comment-section.component';
import { AppLayoutDirective } from './app-layout.directive';
import { ExercisesComponent } from './exercises/exercises.component';

import {
    DataTableModule,
    SharedModule,
    PaginatorModule,
    ConfirmationService,
    ConfirmDialogModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DashboardRoutingModule,
        DataTableModule,
        SharedModule,
        PaginatorModule,
        ConfirmDialogModule,
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
        CommentSectionComponent,
        AppLayoutDirective,
        ExercisesComponent
    ],
    providers: [
        // FullCalendarService
        { provide: RequestOptions, useClass: CustomRequestOptionsService }
    ]
})
export class DashboardModule { }