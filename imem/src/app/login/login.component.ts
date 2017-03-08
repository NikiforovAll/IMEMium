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
    // ,
    // animations: [
    //     trigger('routeAnimation', [
    //         // state('*',
    //         //     style({
    //         //         opacity: 1,
    //         //         transform: 'translateX(0)'
    //         //     })
    //         // ),
    //         transition('void => *', [
    //             style({
    //                 opacity: 0,
    //                 transform: 'translateX(-100%)'
    //             }),
    //             animate(delay + 'ease-in')
    //         ]),
    //         transition('* => void', [
    //             animate(delay + 'ease-out', style({
    //                 opacity: 0,
    //                 transform: 'translateX(100%)'
    //             }))
    //         ])
    //     ])
    // ]
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
        private loginConfig: LoginConfigService,
        private router: Router) { }

    isShowError = false;
    
    // login() {
    //     this.isShowError = !this._authService.login(this.user.email, this.user.password);
    //     if (!this.isShowError) {
    //         // this.router.navigate(['']);
    //     }
    // }


    ngOnInit() { }

    ngAfterViewInit(){
        // this._authService.googleInit(this);
    }
    // TBD: remove 
    public login(param: number){
        if(param == 2){
            this._authService.setUser("admin user", "Admin");
            this.router.navigate(['']);
        }else if(param == 1){
            this._authService.setUser("admin user", "User");
            this.router.navigate(['']);
        }
    }

}