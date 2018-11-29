import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  QueryList,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { PagerComponent } from './pager/pager.component';
import { IgxListComponent, IgxFilterOptions } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { DataService } from './services/dataService';

@Component({
  providers: [DataService],
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.scss']
})
export class LoadsComponent implements OnInit, OnDestroy {

  @ViewChild('loadsList', { read: IgxListComponent })
  public loadsList: IgxListComponent;

  @ViewChild('pager', { read: PagerComponent })
  public pager: PagerComponent;

  public data: any[] ;
  public searchText = '';
  public intlFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
  public isLoading = true;
  public totalCount: number;
  public totalPages: number;
  public perPage = 6;

  private subscription: any;

  constructor(private crd: ChangeDetectorRef, private service: DataService) {

  }

  public ngOnInit() {
    this.service.getLoads();
    const self = this;
    this.subscription = this.service.records.asObservable().subscribe((data) => {
      self.data = data;
      self.isLoading = false;
    });
  }

  get filterLoads() {
    const fo = new IgxFilterOptions();
    fo.key = 'alternateNumber';
    fo.inputValue = this.searchText;
    return fo;
  }


  public clearSearch() {
    // this.searchText = '';
    // this.grid1.clearSearch();
  }

  public formatValue(val: any): string {
    return val.toLocaleString('en-us', { maximumFractionDigits: 2 });
  }

  public formatDate(val: string) {
    const date = new Date(val);
    return new Intl.DateTimeFormat('en-US', this.intlFormatOptions).format(date);
  }

  public formatCurrency(value: number) {
    return '$' + value.toFixed(2);
  }

  public getValueFromField(row: any, field: string) {
    // val = row.rowData[field] ? row.rowData[field] : row.rowData['Details'][0][field];
    return row.rowData[field];
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // get dataLength() {
  //   return this.loadsList.data.length;
  // }

  // public paginate(index: number) {
  //   this.grid1.paginate(index);
  // }
}

