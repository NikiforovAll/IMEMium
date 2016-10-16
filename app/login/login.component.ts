import {
    Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';
import { LoginConfigService, delay } from './login-config.service';
import { AuthService, IUser } from '../auth.service'
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    animations: [
        trigger('routeAnimation', [
            // state('*',
            //     style({
            //         opacity: 1,
            //         transform: 'translateX(0)'
            //     })
            // ),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate(delay + 'ease-in')
            ]),
            transition('* => void', [
                animate(delay + 'ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class LoginComponent implements OnInit {

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    @HostBinding('style.display') get display() {
        return 'block';
    }
    user: IUser = { id: '-1' };
    constructor(
        private loginConfig: LoginConfigService,
        private _authService: AuthService,
        private router: Router) { }

    isShowError = false;
    
    login() {
        this.isShowError = !this._authService.login(this.user.email, this.user.password);
        if (!this.isShowError) {
            // this.router.navigate(['']);
        }
    }


    ngOnInit() { }
}