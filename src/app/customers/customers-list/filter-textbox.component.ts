import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-filter-textbox',
  template:`
    <!-- we want to have to update the input textbox everytime the user types -->
    <!-- We can do the data binding with [value]="filter" and hook to the input with (input)="filter=$event.target.value"-->
    <!-- this is one way to put it
      Filter: <input type="text" [value]="filter" (input)="filter=$event.target.value" /> -->
    <!-- the easier way is to use ngModel as it emulates two way data binding as it takes the value of the filter
          and it will automatically update the value of the input with the [] and the () will raise an event that will update the filter  -->
    Filter: <input type="text" [(ngModel)]="filter" />
  `
})

export class FilterTextboxComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _filter: string;
  
  @Input() get filter() {
    return this._filter;
  }

  // we want it to when the user types inside the textbox shown above for the filter
  // the set gets called and updates the filter
  set filter(val: string) {
    this._filter = val;

    // we'll pass the value to the parent
    //when the output property emmits, it's going to send the filter 
    // and send the data property inside of it
    // the event object will be passed intothe customers-list component
    // and angular will grab is and extract the data and pass it to whatever fucntion
    // we are using the filter function from customers-list into the textbox

    this.changed.emit(this.filter); // Raised changed event
  }

  // changed is a type of EventEmitter where we can send data from a child to a parent
  // typescript generic as a string
  // we are assigning this to a new instance of EventEmitter
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();


  constructor() {}

  ngOnInit() {}
}