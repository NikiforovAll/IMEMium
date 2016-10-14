import {
    Component, OnInit,
    HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';

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
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.5s ease-out', style({
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