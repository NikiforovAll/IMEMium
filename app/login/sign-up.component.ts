import {
    Component, OnInit,
    HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';
import { LoginConfigService, delay } from './login-config.service';

@Component({
    moduleId: module.id,
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
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
                animate(delay  + 'ease-in')
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
export class SignUpComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    @HostBinding('style.display') get display() {
        return 'block';
    }
    constructor() { }

    ngOnInit() { }
}