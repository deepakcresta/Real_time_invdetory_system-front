import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  error(arg: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = environment.baseUrl;
  stockApiEndPoint: string = 'stock';
  contactApiEndPoint: string = 'contact';
  orderApiEndPoint: string = 'order';
  menuApiEndPoint: string = 'menu'


  constructor(private httpClient: HttpClient) {
  }


  // Adding the stock
  addStock(stock: any): Observable<any> {
    console.log("heram ta", stock);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.stockApiEndPoint),
      stock
    );
  }

  // Adding the contact of contact form to contact data base

  addContact(contact: any): Observable<any> {
    console.log(contact);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.contactApiEndPoint),
      contact
    );
  }

  orderFood(order: any): Observable<any> {
    console.log("order heram ta", order);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.orderApiEndPoint),
      order
    );
  }

  listAllStocks(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'stock');
  }

  deleteStockById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + 'stock/' + `${id}`);
  }

  //sales
  listAllSales(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'sale');
  }

  deleteSaleById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + 'sale' + `${id}`);
  }

  listAllOrders(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'order');
  }


  //menu woks
  addMenu(menu: any): Observable<any> {
    console.log(menu);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.menuApiEndPoint),
      menu
    );
  }
  listAllMenu(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'menu');
  }

}
