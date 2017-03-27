import {
    Component, OnInit,
    HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';

import { LoginConfigService, delay } from './login-config.service';

@Component({
    moduleId: module.id,
    selector: 'password-loss',
    templateUrl: 'password-loss.component.html'
})
export class PasswordLossComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    @HostBinding('style.display') get display() {
        return 'block';
    }
    constructor() { }

    ngOnInit() { }
}