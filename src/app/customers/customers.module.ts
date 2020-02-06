import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component'
import { CustomersListComponent } from './customers-list/customers-list.component'

@NgModule({
  declarations: [ CustomersComponent ],
  imports: [
    CommonModule
  ],
  exports: [ CustomersComponent ] // whenever we import this module we also get the customers component
})
export class CustomersModule { }
