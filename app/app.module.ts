import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule }   from '@angular/router';

import {TopnavComponent} from './topnav.gentelella/topnav-g.component';
import {SidebarComponent} from './sidebar.gentelella/sidebar-g.component'
import {FooterComponent} from './footer.gentelella/footer-g.component';
import {UserDetailsComponent} from './userdetails.gentelella/userdetails-g.component';
import {StudentsComponent} from './students.component/students.component';
import {CoursesComponent} from './courses.component/courses.component';

@NgModule({
  imports: [ BrowserModule,
  RouterModule.forRoot([
      {
        path: 'UserProfile',
        component: UserDetailsComponent,
      },
      {
        path: 'Courses',
        component: CoursesComponent,
      },
      {
        path: 'Students',
        component: StudentsComponent,
      },
      { path: '', component: UserDetailsComponent },
      { path: '**', component: UserDetailsComponent }
    ]) ],
  declarations: [
     AppComponent,
     SidebarComponent,
     TopnavComponent,
     FooterComponent,
     UserDetailsComponent,
     StudentsComponent,
     CoursesComponent
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
