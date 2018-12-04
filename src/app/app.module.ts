import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { IgxRippleModule, IgxListModule, IgxIconModule, IgxInputGroupModule, IgxFilterModule, IgxCheckboxModule,
  IgxButtonModule } from 'igniteui-angular';

import { LoadsComponent } from './loads.component';
import { PagerComponent } from './pager/pager.component';
import { DataService } from './services/dataService';

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    IgxRippleModule,
    IgxListModule,
    IgxCheckboxModule,
    IgxFilterModule,
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule, ],
  declarations: [LoadsComponent, PagerComponent ],
  providers: [DataService],
  bootstrap:    [ LoadsComponent ]
})
export class AppModule { }
