import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component'
import { CustomersListComponent } from './customers-list/customers-list.component'
import { FilterTextboxComponent } from './customers-list/filter-textbox.component'

@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  imports: [
    CommonModule
  ],
  exports: [ CustomersComponent ] // whenever we import this module we also get the customers component
})
export class CustomersModule { }
