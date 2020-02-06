import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' // this is so we can use the ngModule to have data go in and out
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'
import { CustomersComponent } from './customers.component'
import { CustomersListComponent } from './customers-list/customers-list.component'
import { FilterTextboxComponent } from './customers-list/filter-textbox.component'

@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [ CustomersComponent ] // whenever we import this module we also get the customers component
})
export class CustomersModule { }
