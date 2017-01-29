import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
// import { DataTableResource } from 'angular-2-data-table';
@Component({
    moduleId: module.id,
    selector: 'lectures',
    templateUrl: 'lectures.component.html',
    providers: []
})
export class LecturesComponent {
    // lectures: any[];
    // itemCount = 0;
    
    // itemResource:DataTableResource<any>;

    // constructor(private router: Router) {
    //     // this._courseService = courseService;
    //     //TBD: add interface/class lecture
    //     this.lectures = [{id:1, Name: "Lectrure#1", Date: "01/12/2016", Description: "Test"},
    //      {id:2, Name: "Lectrure#2", Date: "07/12/2016", Description: "Test2"},
    //      {id:3, Name: "Lectrure#3", Date: "11/12/2016", Description: "Test3"}];
    // }

    // ngOnInit() {
    //     // this.courses = this._courseService.getCourses(20);
    //     this.itemResource = new DataTableResource(this.lectures);
    //     this.itemResource.count().then(count => this.itemCount = count);
    // }
    // reloadItems(params:any) {
    //     this.itemResource.query(params).then(items => this.lectures = items);
    // }

    // rowClick(rowEvent:any) {
    //     console.log('Clicked: ' + rowEvent.row.item.Name);
    // }

    // rowDoubleClick(rowEvent:any) {
    //     this.router.navigate(['dashboard/lectures/' + rowEvent.row.item.id]);
    // }

    // rowTooltip(item:any) { return item.Name; }
}