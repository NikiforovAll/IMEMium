import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomeModule } from './home/home.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

import { PageNotFoundComponent } from './page-not-found.gentelella/page-not-found.component'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



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
    HomeModule,
    LoginModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
    // HomeComponent,
    // LoginComponent,
    // SignUpComponent,
    // PasswordLossComponent,
    // PageNotFoundComponent
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
