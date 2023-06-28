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
  stockApiEndPoint: string = '/stock/';
  contactApiEndPoint: string = '/contact/'


  constructor(private httpClient: HttpClient) {
  }


  // Adding the stock
  addStock(stock: any): Observable<any> {
    console.log(stock);
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
  listAllStocks(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/stock/');
  }

  deleteUserById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/stock/' + `${id}`);
  }

  //sales
  listAllSales(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/sale/');
  }

  deleteSaleById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + '/sale/' + `${id}`);
  }
}
