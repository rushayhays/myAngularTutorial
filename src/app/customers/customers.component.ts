import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interface';
import { DataService } from '../core/data.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',

})
export class CustomersComponent implements OnInit {
  title:string = "";
  people: any[] = [];
  // isVisible = true;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = "Customers";
    this.dataService.getCustomers().subscribe((customers: ICustomer[] )=> this.people = customers);
    // this.people = [
    //   {id:1, name:'john', city:'Phoenix',orderTotal:9.99,customerSince: new Date(2014,7,10)},
    //   {id:2, name:'jane', city:"New Yprk", orderTotal:19.99,customerSince: new Date(2017,2,22)},
    //   {id:3, name:'michelle', city:"Nolensville", orderTotal:99.99,customerSince: new Date(2002,10,31)},
    //   {id:4, name:'jim', city:"Boston", orderTotal:500.99,customerSince: new Date(2002,10,22)}
    // ];
  }

}
