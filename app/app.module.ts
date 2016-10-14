import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import { PasswordLossComponent } from './login/password-loss.component';
import { HomeComponent} from './home/home.component'
 
import { PageNotFoundComponent } from './page-not-found.gentelella/page-not-found.component'

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';



// import { TopnavComponent } from './topnav.gentelella/topnav-g.component';
// import { SidebarComponent } from './sidebar.gentelella/sidebar-g.component'
// import { FooterComponent } from './footer.gentelella/footer-g.component';
// import { UserDetailsComponent } from './userdetails.gentelella/userdetails-g.component';
// import { StudentsComponent } from './students.component/students.component';
// import { CoursesComponent } from './courses.component/courses.component';
@NgModule({
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    PasswordLossComponent,
    PageNotFoundComponent
    // SidebarComponent,
    // TopnavComponent,
    // FooterComponent,
    // UserDetailsComponent,
    // StudentsComponent,
    // CoursesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
