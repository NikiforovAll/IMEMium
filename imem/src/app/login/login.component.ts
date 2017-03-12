import {
    Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';
import { LoginConfigService, delay } from './login-config.service';
import { AuthService, IUser } from '../auth.service';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    // @HostBinding('@routeAnimation') get routeAnimation() {
    //     return true;
    // }
    @HostBinding('style.display') get display() {
        return 'block';
    }
    user: IUser = { id: '-1' };
    constructor(
        public _authService: AuthService,
        private router: Router,
        private loginConfig: LoginConfigService) {

    }

    isShowError = false;

    ngOnInit() { }

    ngAfterViewInit() {
        this._authService.logIn()
            .then(data => {
                this.router.navigate([data ? 'dashboard' : '']);
            })
            .catch(error => {
                this.router.navigate(['']);
            });
    }
    public login(param: number) {
        this._authService.login();
        // if(param == 2){
        //     this._authService.setUser("admin user", "Admin");
        //     this.router.navigate(['']);
        // }else if(param == 1){
        //     this._authService.setUser("student user", "User");
        //     this.router.navigate(['']);
        // }
    }

}