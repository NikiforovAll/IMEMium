import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'request-panel',
    templateUrl: 'request-panel.component.html'
})
export class RequestComponent implements OnInit {
    constructor() { }

    studentRequests:any[] = [
    {Name: "Alexey Nikiforov", Status: 0,  CourseName: "Course1"},
    {Name: "Egor Dobrovolskij",  Status: 0, CourseName: "Course1"},
    {Name: "Stas Bondarenko", Status: 1,  CourseName: "Course2"},
    {Name: "Yakov Yusipenko", Status: 1,  CourseName: "Course3"},
    {Name: "Mike Evgeniyev", Status: 2,  CourseName: "Course4"}
    ]

    acceptItem(index:any):void{
        this.studentRequests[index].Status = 1;
    }
    declineItem(index:any):void{
        this.studentRequests[index].Status = 2;
    }
    removeItem(index:any):void{
        if (index > -1) {
            this.studentRequests.splice(index, 1);
        }
    }

    ngOnInit() { }
}