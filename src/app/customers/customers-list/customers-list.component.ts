import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/interfaces'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: ICustomer[] = []; // this will be an empty array from the start
  customersOrderTotal: number; // we'll get this dynamicall
  currencyCode: string = 'USD'; // this will be a pipe

  constructor() { }

  ngOnInit() {

  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;
    });
  }


}
