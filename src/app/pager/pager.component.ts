import { Component, ChangeDetectorRef, OnInit, Input, ViewChild, Output, EventEmitter, } from '@angular/core';
import { DataService } from '../services/dataService';
import { Observable } from 'rxjs';
import { LoadsComponent } from '../loads.component';

@Component({
    providers: [DataService],
    selector: 'app-list-pager',
    styleUrls: ['./pager.component.css'],
    templateUrl: './pager.component.html'
})
export class PagerComponent implements OnInit {
    // @Input()
    // public perPage = 15;

    // @Input()
    // public index = 0;

    @Output() page = new EventEmitter<any>();

    // public totalCount: number;
    // public totalPages: number;
    // public data: Observable < any[] > ;
    // private dataSubscriber: any;

    constructor(private crd: ChangeDetectorRef, private service: DataService) {
        // this.service.getLoads();
        // this.data = this.service.records.asObservable();

        // this.service.getLoads(this.index, this.perPage);
        // this.data = this.service.records.asObservable();
    }

    public ngOnInit() {
        // this.dataSubscriber = this.service.getDataLength().subscribe((data) => {
        //     this.totalCount = data;
        //     this.totalPages = Math.ceil(data / this.perPage);
        //     // this.buttonDeselection(this.page, this.totalPages);
        // });

        // this.totalCount = this.service.getDataLength();
        // this.totalPages = Math.ceil(this.totalCount / this.perPage);
    }
    public paginate(event: any, index: number) {
        // this.loads.grid1.paginate(index);
        this.page.emit(index);
    }

    get totalPages() {
       // return Math.ceil(this.totalCount / this.perPage);
       return 5;
    }
}
