import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
@Component({
    moduleId: module.id,
    selector: 'request-panel',
    templateUrl: 'request-panel.component.html'
})
export class RequestComponent implements OnInit {

    private portalData: Array<any>;
    private courseRequestData: Array<any>;
    msgs: Message[] = [];
    constructor() {
        this.portalData = [
            { Name: "Alexey Nikiforov", StudentId: '1', Status: 0, CourseName: "Course1", Date: new Date() },
            { Name: "Egor Dobrovolskij", StudentId: '1', Status: 0, CourseName: "Course1", Date: new Date() },
            { Name: "Stas Bondarenko", StudentId: '1', Status: 1, CourseName: "Course2", Date: new Date() },
            { Name: "Yakov Yusipenko", StudentId: '1', Status: 1, CourseName: "Course3", Date: new Date() },
            { Name: "Mike Evgeniyev", StudentId: '1', Status: 2, CourseName: "Course4", Date: new Date() }
        ]
        this.courseRequestData = [
            { Name: "Alexey Nikiforov", StudentId: '1', Status: 0, CourseName: "Course1", Date: new Date() },
            { Name: "Egor Dobrovolskij", StudentId: '1', Status: 0, CourseName: "Course1", Date: new Date() },
            { Name: "Stas Bondarenko", StudentId: '1', Status: 1, CourseName: "Course2", Date: new Date() },
            { Name: "Yakov Yusipenko", StudentId: '1', Status: 1, CourseName: "Course3", Date: new Date() },
            { Name: "Mike Evgeniyev", StudentId: '1', Status: 2, CourseName: "Course4", Date: new Date() }
        ];
    }

    //TBD: change to string literal (impact filtering)
    acceptItem(data: any): void {
        if (data.Status !=1){
            data.Status = 1;
            this.msgs.push({ severity: 'info', summary: 'Обробка заявки', detail: `Заявка ${data.Name} прийнята` });
        }
    }
    declineItem(data: any): void {
        if (data.Status != 2) {
            data.Status = 2;
            this.msgs.push({ severity: 'info', summary: 'Обробка заявки', detail: `Заявка ${data.Name} відхилена` });
        }
    }

    ngOnInit() { }

}