import { BrowserModule } from '@angular/platform-browser';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.gentelella/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    DashboardModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [AuthGuard, AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
