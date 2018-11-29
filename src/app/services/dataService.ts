import { Injectable } from '@angular/core';
import { LOADS } from './data';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    public records: BehaviorSubject<any[]>;

    constructor() {
        this.records = new BehaviorSubject([]);
    }

    public getLoads(index?: number, perPage?: number) {
        let data = LOADS[0]['items'];
        index = index ? index : 0;

        if (perPage) {
            data = data.slice(index, index + perPage);
        }

        return this.records.next(data);
    }

    public getData(index?: number, perPage?: number): any {
        // let qS = "";

        // if (perPage) {
        //     qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        // }

        // this.http
        //     .get(`${this.url + qS}`).pipe(
        //         map((data: any) => {
        //             return data;
        //         })
        //     ).subscribe((data) => this.remoteData.next(data));
    }

    public getDataLength(): any {
        return LOADS[0]['items'].length;
    }

    // public getData(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.http.get("https://randomuser.me/api/?inc=gender,name,picture&results=" + 200)
    //             .subscribe((data: IServiceResponse) => {
    //                 resolve(data.results);
    //             });
    //     });
    // }
}
