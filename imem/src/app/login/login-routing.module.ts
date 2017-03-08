import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';
import { PasswordLossComponent } from './password-loss.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'authcallback',
    component: AuthCallbackComponent
  }

    // ,
    // {
    //     path: 'signup',
    //     component: SignUpComponent
    // },
    // {   
    //     path: 'restorepassword',
    //     component: PasswordLossComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
