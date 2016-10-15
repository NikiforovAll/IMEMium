import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';
import { PasswordLossComponent } from './password-loss.component';

import { LoginRoutingModule } from './login-routing.module'
@NgModule({
    imports: [LoginRoutingModule],
    exports: [],
    declarations: [
    LoginComponent,
    PasswordLossComponent,
    SignUpComponent],
    providers: [],
})
export class LoginModule { }
