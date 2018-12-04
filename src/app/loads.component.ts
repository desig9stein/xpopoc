import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { PagerComponent } from './pager/pager.component';
import { IgxListComponent } from 'igniteui-angular';
import { DataService } from './services/dataService';

@Component({
  providers: [DataService],
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.scss']
})
export class LoadsComponent implements OnInit {

  @ViewChild('loadsList', { read: IgxListComponent })
  public loadsList: IgxListComponent;

  @ViewChild('pager', { read: PagerComponent })
  public pager: PagerComponent;

  public data: any[] ;
  public intlFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
  public isLoading = true;
  public totalCount: number;
  public totalPages: number;
  public perPage = 6;

  constructor(private crd: ChangeDetectorRef, private service: DataService) {

  }

  public ngOnInit() {
    this.data = this.pager.data;
    this.isLoading = false;
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


  public refreshData(event: any) {
    this.data = this.pager.data;
  }
}

