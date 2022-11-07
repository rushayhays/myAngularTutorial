import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from 'src/app/shared/interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  // @Input() customers: any[];
  private _customers : ICustomer[] = [];
  
  @Input() get customers() : ICustomer[]{
    return this._customers;
  }
  set customers(value: ICustomer[]){
    if(value){
      this.filteredCustomers = this._customers = value;
      this.calculatedOrders();
    }
    this._customers
  }

  filteredCustomers: any[] = [];
  customerOrderTotal: number = 0;
  currencyCode:string = 'USD';
  
  constructor() { }

  ngOnInit(): void {
    
  }

  // ngOnChanges(changes: SimpleChanges){

  // }

  calculatedOrders(){
    this.customerOrderTotal = 0;
    
    this.filteredCustomers.forEach((cust : ICustomer) =>{
      if(cust.orderTotal){
        this.customerOrderTotal += cust.orderTotal;
      }
    })
  }

  filter(data: string){
    if(data){
      this.filteredCustomers = this.customers.filter((cust: ICustomer) =>{
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1;
          // || cust.orderTotal?.toString().indexOf(data.toString()) > -1;    This was inclusded in the tutorial but my code editor wouldn't accept it
        });
      
      }else{
        this.filteredCustomers = this.customers;
      }
    this.calculatedOrders();
  }

  sort(prop: string){
    //a sorter service will handle the sorting

  }

}
