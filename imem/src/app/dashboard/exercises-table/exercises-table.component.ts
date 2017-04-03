import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exercises-table',
  templateUrl: './exercises-table.component.html',
  styleUrls: ['./exercises-table.component.css']
})
export class ExercisesTableComponent implements OnInit {
    constructor(
        private router: Router) {
        this.data = [{id: 1, Name: 'Test', Status: 'Active'}];
    }

    public ngOnInit(): void {
    }

    public onRowClick(event: any): any {
        this.router.navigate(['/dashboard/exercises', event.data.id]);
    }
    // ================== TABLE CONFIG ==================
    private data: Array<any>;

    public columns: Array<any> = [
        {
            title: "Назва",
            name: 'Name',
            filtering:
            {
                filter: true,
                filterString: '',
                placeholder: ''
            },
            sorting: {
                sort: true
            }
        },
        {
            title: 'Статус',
            name: 'Status',
            filtering:
            {
                filter: true,
                filterString: '',
                placeholder: ''
            },
            sorting: {
                sort: true
            }
        }
    ];
}
