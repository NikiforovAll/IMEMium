import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';
import { PasswordLossComponent } from './password-loss.component';

import { LoginConfigService } from './login-config.service';

import { LoginRoutingModule } from './login-routing.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component'


@NgModule({
    imports: [LoginRoutingModule, FormsModule],
    exports: [],
    declarations: [
        LoginComponent,
        PasswordLossComponent,
        SignUpComponent,
        AuthCallbackComponent],
    providers: [LoginConfigService]
})
export class LoginModule { }
