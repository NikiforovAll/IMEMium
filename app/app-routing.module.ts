import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up.component';
import {PasswordLossComponent} from './login/password-loss.component'

import { PageNotFoundComponent } from './page-not-found.gentelella/page-not-found.component'
const routes: Routes = [
    // default path is handeled by dashboard module
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {   
        path: 'restorepassword',
        component: PasswordLossComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
