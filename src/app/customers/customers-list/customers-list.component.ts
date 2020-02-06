import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  // @Input() customers: any[]
  // this is basically a private variable that is a type ICustomer from the interface
  
  private _customers: ICustomer[] = [];
  
  // the use of getters and setters
  // customers of type ICustomer which is an array
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(Value: ICustomer[]) {
    if (value) {
      this.fileredCustomers = this._custeroms = value;
      this.calculateOrders
    }
  }

  filteredCustomers: ICustomer[] = []; // this will be an empty array from the start
  customersOrderTotal: number; // we'll get this dynamicall
  currencyCode: string = 'USD'; // this will be a pipe

  constructor() { }

  ngOnInit() {

  }

  /*ngOnChanges(changes: SimpleChanges) {

  }
  */

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;
    });
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
  }
}
