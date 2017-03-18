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
import { GoogleLoaderService } from './google-loader.service';
import { CustomHttpService } from './custom-http.service'

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
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    GoogleLoaderService,
    CustomHttpService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
