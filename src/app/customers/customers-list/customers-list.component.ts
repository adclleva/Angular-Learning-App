import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  
  filteredCustomers: any[] = []; // this will be an empty array from the start
  customersOrderTotal: number; // we'll get this dynamicall
  currencyCode: string = 'USD'; // this will be a pipe 

  constructor() { }

  ngOnInit() {

}

}
 