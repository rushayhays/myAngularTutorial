import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError} from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interface';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl : string = 'assets/';

  constructor(private http: HttpClient) { }

  getCustomers() : Observable<ICustomer[]> {
    //this is the basic call                                          //to catch arrors we will add a .pipe to it
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getCustomer(id: number) : Observable<ICustomer> {
    let nullCustomer: ICustomer = {
      id: 0,
      name:'Nobody',
      city:'Nowhere',
      customerSince:'1908'
    }
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe( 
        map(customers => {
          let customer = customers.filter((cust: ICustomer) => cust.id === id);
          return (customer && customer.length) ? customer[0] : nullCustomer;
        }),
        catchError(this.handleError)
      )
  }

  getOrders(id: number) : Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
      .pipe(
        map(orders => {
          let custOrders = orders.filter((order: IOrder) => order.customerId === id);
          return custOrders;
        }),
        catchError(this.handleError)
      );
  }


  private handleError(error:any){
    console.error('server error:', error);
    if(error.error instanceof Error){
      const errMessage = error.error.message;
      return throwError(() => new Error(errMessage));

    }
    return throwError(() => new Error(error || 'Node.js server error'));
  }
}
