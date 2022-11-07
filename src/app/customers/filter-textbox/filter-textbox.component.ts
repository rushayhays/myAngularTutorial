import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template:`
    Filter:<input typr="text" [(ngModel)]="filter" />
  `
  
})
export class FilterTextboxComponent implements OnInit {
  searchbar: string ="";

  private _filter:string = "";
  @Input() get filter() {
    return this._filter;
  }
  set filter(val:string){
    this._filter = val;
    this.changed.emit(this.filter);//Raise changed event
  }
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  
  }
 

}
