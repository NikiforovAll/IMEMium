import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgTableExtensionService } from '../ng-table-extension.service';
import { LectureService } from '../lecture.service';
import { Lecture } from '../../Models/Lecture';


@Component({
  selector: 'lectures-table',
  templateUrl: './lectures-table.component.html',
  styleUrls: ['./lectures-table.component.css'],
  providers: [NgTableExtensionService, LectureService]
})

export class LecturesTableComponent implements OnInit {

    public lectures: Lecture[]
    @Input() userId: string;
    @Input() generalColumns: string[];

    constructor(
        private lectureservice: LectureService,
        private tableExtensionService: NgTableExtensionService,
        private route: ActivatedRoute,
        private router: Router) {
        this.lectures = this.lectureservice.getLectures(50);
        this.data = this.lectures;
        this.length = this.data.length;
    }

    public ngOnInit(): void {
        this.processColumnSubset();
        this.onChangeTable(this.config);
    }

    private processColumnSubset(){
        if (!!this.generalColumns) {
            this.columns = this.columns.filter(el => {
                return this.generalColumns.indexOf(el.name) != -1;
            });
        }
    }
    // ================== TABLE CONFIG ==================
    private data: Array<any>;
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public rows: Array<any> = [];
    public columns: Array<any> = [
        {
            title: "Назва",
            name: 'Name',
            filtering:
            {
                filterString: '',
                placeholder: ''
            }
        }
    ];
    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };

    public onCellClick(data: any): any {
        console.log(data);
        this.router.navigate(['/dashboard/lectures', data.row.id.toString()]);
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.tableExtensionService.changeFilter(this.data, this.columns, this.config);
        let sortedData = this.tableExtensionService.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.tableExtensionService.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }
    // ================== TABLE CONFIG ==================(END)
}

