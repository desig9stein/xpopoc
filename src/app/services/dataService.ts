import { Injectable } from '@angular/core';
import { LOADS } from './data';
import { IFilteringArgs } from '../pager/pager.component';

@Injectable()
export class DataService {
    public data: any[];
    public dataLength: number;

    constructor() {
        this.data = [];
        this.dataLength = this.data.length;
    }

    public getLoads(args: IFilteringArgs, index?: number, perPage?: number) {
        this.data = args.value ? this.getFilteredLoads(args.field, args.value) : this.getAllLoads();

        index = index ? index : 0;
        this.dataLength = this.data.length;

        if (perPage) {
           return this.getDataForPage(index, perPage);
        }

        return this.data;
    }

    public getDataForPage(index: number, perPage: number ) {
        const dataChunk = this.data.slice(index * perPage, index * perPage + perPage);
        return dataChunk;
    }

    private getFilteredLoads(field: string, val: any): any {
        this.data = this.getAllLoads().filter(rec => rec[field].startsWith(val));
        return this.data;
    }

    private getAllLoads() {
        const allData =  LOADS[0]['items'];
        return allData;
    }

    get getDataLength(): any {
        return this.dataLength;
    }
}
