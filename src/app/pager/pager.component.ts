import { Component, ChangeDetectorRef, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { DataService } from '../services/dataService';

export interface IFilteringArgs {
    field: string;
    value: any;
}

export interface IPagingArgs {
    pageIndex: number;
    totalCount: number;
}

@Component({
    providers: [DataService],
    selector: 'app-list-pager',
    styleUrls: ['./pager.component.scss'],
    templateUrl: './pager.component.html'
})

export class PagerComponent {
    @Input()
    public perPage = 6;

    @Input()
    public index = 0;

    @Output() pagingDone = new EventEmitter<IPagingArgs>();
    @Output() filteringDone = new EventEmitter<IFilteringArgs>();

    public searchText = '';
    public data: any[];
    public pagerButtons: number[];

    constructor(private crd: ChangeDetectorRef, private service: DataService) {
        this.data = this.service.getLoads(this.filteringArgs, this.index, this.perPage);
        this.pagerButtons = Array(this.totalPages).fill(null).map((x, i) => i );
    }

    public paginate(event: any, index: number) {
        this.index = index;
        this.data = this.service.getDataForPage(this.index, this.perPage);
        const args: IPagingArgs = { pageIndex: this.index, totalCount: this.totalCount };
        this.pagingDone.emit(args);
    }

    public onKeyUp(event: any, searchText) {
        this.filterData();
    }

    public clearSearch() {
        this.searchText = '';
        this.filterData();
    }

    public filterData() {
        this.index = 0;
        const args: IFilteringArgs = this.filteringArgs;
        this.data = this.service.getLoads(args, this.index, this.perPage);
        this.pagerButtons = Array(this.totalPages).fill(null).map((x, i) => i );
        this.filteringDone.emit(args);
    }

    get totalPages() {
       return Math.ceil(this.totalCount / this.perPage);
    }

    get totalCount() {
       return this.service.getDataLength;
    }

    get filteringArgs() {
        const args: IFilteringArgs = { field: 'alternateNumber', value: this.searchText };
        return args;
    }
}
